import {
  FieldType,
  FunctionExp,
  GroupByClause,
  HavingClause,
  OrderByClause,
  Query,
  WhereClause,
  WithDataCategoryClause,
  FieldTypeOf,
  Subquery,
  FieldFunctionExpression,
} from '../api/api-models';
import * as utils from '../utils';
import { FieldData, Formatter, FormatOptions } from '../formatter/formatter';
import { parseQuery } from '../parser/visitor';

export interface SoqlComposeConfig {
  logging: boolean; // default=false
  format: boolean; // default=false
  formatOptions?: FormatOptions;
  autoCompose: boolean; // default=true
}
/**
 * Formats query - This will compose and then parse a query with the provided format options
 * or the defaults if omitted
 * @param soql
 * @param [formatOptions]
 * @returns
 */
export function formatQuery(soql: string, formatOptions?: FormatOptions) {
  return composeQuery(parseQuery(soql), { format: true, formatOptions });
}

/**
 * Composes a parsed query back to a SOQL query
 * The parsing methods are public in case there is a need to parse just a part of a query,
 * but the common case is to call the "start()" method
 * @param soql
 * @param [config]
 * @returns query
 */
export function composeQuery(soql: Query, config: Partial<SoqlComposeConfig> = {}): string {
  config.format = config.format ? true : false;
  if (config.logging) {
    console.time('composer');
    console.log('Composing Query:', soql);
    console.log('Format output:', config.format);
  }

  const query = new Compose(soql, config).query;

  if (config.logging) {
    console.timeEnd('composer');
  }

  return query;
}

/**
 * Compose
 * This class handles all the logic for turning a Query into a SOQL query
 * This depends on the Format class for parts of the processing
 */
export class Compose {
  public logging: boolean = false;
  public format: boolean = false;
  public query: string;
  public formatter: Formatter;

  constructor(private soql: Query, config: Partial<SoqlComposeConfig> = {}) {
    config = { autoCompose: true, ...config };
    const { logging } = config;
    this.logging = logging;
    this.format = config.format;
    this.query = '';

    this.formatter = new Formatter(this.format, {
      logging: this.logging,
      ...config.formatOptions,
    });
    if (config.autoCompose) {
      this.start();
    }
  }

  /**
   * Starts compose
   */
  public start(): void {
    this.query = this.parseQuery(this.soql);
  }

  /**
   * If logging is enabled, print the query to the console
   * @param soql
   */
  private log(soql: string) {
    if (this.logging) {
      console.log('Current SOQL:', soql);
    }
  }

  /**
   * Parses query
   * Base entry point for the query
   * this may be called multiple times recursively for subqueries and WHERE queries
   * @param query
   * @returns query
   */
  public parseQuery(query: Query | Subquery): string {
    const fieldData: FieldData = {
      fields: this.parseFields(query.fields).map(field => ({
        text: field,
        isSubquery: field.startsWith('('),
        prefix: '',
        suffix: '',
      })),
      isSubquery: utils.isSubquery(query),
      lineBreaks: [],
    };

    let output = `SELECT `;

    // Format fields based on configuration
    this.formatter.formatFields(fieldData);

    fieldData.fields.forEach(field => {
      output += `${field.prefix}${field.text}${field.suffix}`;
    });

    output += this.formatter.formatClause('FROM');

    if (utils.isSubquery(query)) {
      const sObjectPrefix = query.sObjectPrefix || [];
      sObjectPrefix.push(query.relationshipName);
      output += ` ${sObjectPrefix.join('.')}${utils.get(query.sObjectAlias, '', ' ')}`;
    } else {
      output += ` ${query.sObject}${utils.get(query.sObjectAlias, '', ' ')}`;
    }
    this.log(output);

    if (query.where) {
      output += this.formatter.formatClause('WHERE');
      output += ` ${this.parseWhereClause(query.where)}`;
      this.log(output);
    }

    if (query.groupBy) {
      output += this.formatter.formatClause('GROUP BY');
      output += ` ${this.parseGroupByClause(query.groupBy)}`;
      this.log(output);
      if (query.groupBy.having) {
        output += this.formatter.formatClause('HAVING');
        output += ` ${this.parseHavingClause(query.groupBy.having)}`;
        this.log(output);
      }
    }

    if (query.orderBy) {
      output += this.formatter.formatClause('ORDER BY');
      output += ` ${this.parseOrderBy(query.orderBy)}`;
      this.log(output);
    }

    if (utils.isNumber(query.limit)) {
      output += this.formatter.formatClause('LIMIT');
      output += ` ${query.limit}`;
      this.log(output);
    }

    if (utils.isNumber(query.offset)) {
      output += this.formatter.formatClause('OFFSET');
      output += ` ${query.offset}`;
      this.log(output);
    }

    if (query.withDataCategory) {
      output += this.formatter.formatClause('WITH DATA CATEGORY');
      output += ` ${this.parseWithDataCategory(query.withDataCategory)}`;
      this.log(output);
    }

    if (query.withSecurityEnforced) {
      output += this.formatter.formatClause('WITH SECURITY_ENFORCED');
      this.log(output);
    }

    if (query.for) {
      output += this.formatter.formatClause('FOR');
      output += ` ${query.for}`;
      this.log(output);
    }

    if (query.update) {
      output += this.formatter.formatClause('UPDATE');
      output += ` ${query.update}`;
      this.log(output);
    }

    return output;
  }

  /**
   * Parses fields
   * e.x.: SELECT amount, FORMAT(amount) Amt, (SELECT Id, Name FROM Contacts)
   * @param fields
   * @returns fields
   */
  public parseFields(fields: FieldType[]): string[] {
    return fields.map(field => {
      const objPrefix = (field as any).objectPrefix ? `${(field as any).objectPrefix}.` : '';
      switch (field.type) {
        case 'Field': {
          return `${objPrefix}${field.field}`;
        }
        case 'FieldFunctionExpression': {
          let params = '';
          if (field.parameters) {
            if (utils.isString(field.parameters[0])) {
              params = field.parameters.join(',');
            } else {
              params = this.parseFields(field.parameters as FieldFunctionExpression[]).join(',');
            }
          }
          return `${field.functionName}(${params})${field.alias ? ` ${field.alias}` : ''}`;
        }
        case 'FieldRelationship': {
          return `${objPrefix}${field.relationships.join('.')}.${field.field}`;
        }
        case 'FieldSubquery': {
          return this.formatter.formatSubquery(this.parseQuery(field.subquery));
        }
        case 'FieldTypeof': {
          return this.parseTypeOfField(field);
        }
        default:
          break;
      }
    });
  }

  /**
   * Parses type of Field
   * e.x.: TYPEOF What WHEN Account THEN Phone, NumberOfEmployees WHEN Opportunity THEN Amount, CloseDate ELSE Name
   * @param typeOfField
   * @returns type of field
   */
  public parseTypeOfField(typeOfField: FieldTypeOf): string {
    let output = `TYPEOF ${typeOfField.field} `;
    output += typeOfField.conditions
      .map(cond => {
        return `${cond.type} ${utils.get(cond.objectType, ' THEN ')}${cond.fieldList.join(', ')}`;
      })
      .join(' ');
    output += ` END`;
    return output;
  }

  /**
   * Parses fn from a WHERE clause
   * @param fn
   * @returns fn
   */
  private parseFn(fn: FunctionExp): string {
    return `${fn.rawValue || ''} ${fn.alias || ''}`.trim();
  }

  /**
   * Parses where clause
   * e.x.: WHERE LoginTime > 2010-09-20T22:16:30.000Z AND LoginTime < 2010-09-21T22:16:30.000Z
   * WHERE Id IN (SELECT AccountId FROM Contact WHERE LastName LIKE 'apple%') AND Id IN (SELECT AccountId FROM Opportunity WHERE isClosed = false)
   * @param where
   * @returns where clause
   */
  public parseWhereClause(where: WhereClause): string {
    let output = '';
    if (where.left) {
      output += utils.isNumber(where.left.openParen) && where.left.openParen > 0 ? new Array(where.left.openParen).fill('(').join('') : '';
      output += `${utils.get(where.left.logicalPrefix, ' ')}`;
      output += where.left.fn ? this.parseFn(where.left.fn) : where.left.field;
      output += ` ${where.left.operator} `;
      output += where.left.valueQuery
        ? this.formatter.formatSubquery(this.parseQuery(where.left.valueQuery), 1, true)
        : utils.getAsArrayStr(utils.getWhereValue(where.left.value, where.left.literalType));
      output +=
        utils.isNumber(where.left.closeParen) && where.left.closeParen > 0 ? new Array(where.left.closeParen).fill(')').join('') : '';
    }
    if (where.right) {
      const formattedData = this.formatter.formatWhereClauseOperators(utils.get(where.operator), this.parseWhereClause(where.right));
      return `${output}${formattedData}`.trim();
    } else {
      return output.trim();
    }
  }

  /**
   * Parses group by clause
   * e.x.: GROUP BY CampaignId
   * @param groupBy
   * @returns group by clause
   */
  public parseGroupByClause(groupBy: GroupByClause): string {
    if (groupBy.fn) {
      return `${groupBy.fn.functionName}(${groupBy.fn.parameters.join(', ')})`;
    } else {
      return (Array.isArray(groupBy.field) ? groupBy.field : [groupBy.field]).join(', ');
    }
  }

  /**
   * Parses having clause
   * e.x.: HAVING COUNT(Name) > 100 and LeadSource > 'Phone'
   * @param having
   * @returns having clause
   */
  public parseHavingClause(having: HavingClause): string {
    let output = '';
    if (having.left) {
      output += new Array(having.left.openParen || 0).fill('(').join('');
      output += having.left.fn ? this.parseFn(having.left.fn) : having.left.field;
      output += ` ${having.left.operator} ${having.left.value}`;
      output += new Array(having.left.closeParen || 0).fill(')').join('');
    }
    if (having.right) {
      return `${output} ${utils.get(having.operator)} ${this.parseHavingClause(having.right)}`;
    } else {
      return output.trim();
    }
  }

  /**
   * Parses order by
   * e.x.: ORDER BY BillingPostalCode ASC NULLS LAST
   * @param orderBy
   * @returns order by
   */
  public parseOrderBy(orderBy: OrderByClause | OrderByClause[]): string {
    if (Array.isArray(orderBy)) {
      return this.formatter.formatOrderByArray(orderBy.map(ob => this.parseOrderBy(ob)));
    } else {
      let output = `${utils.get(orderBy.field, ' ')}`;
      output += orderBy.fn ? this.parseFn(orderBy.fn) : '';
      output += `${utils.get(orderBy.order, ' ')}${utils.get(orderBy.nulls, '', 'NULLS ')}`;
      return output.trim();
    }
  }

  /**
   * Parses with data category
   * e.x.: WITH DATA CATEGORY Geography__c AT (usa__c, uk__c)
   * @param withDataCategory
   * @returns with data category
   */
  public parseWithDataCategory(withDataCategory: WithDataCategoryClause): string {
    return withDataCategory.conditions
      .map(condition => {
        const params = condition.parameters.length > 1 ? `(${condition.parameters.join(', ')})` : `${condition.parameters.join(', ')}`;
        return `${condition.groupName} ${condition.selector} ${params}`;
      })
      .join(' AND ');
  }
}