!function(e){function t(t){for(var r,n,i=t[0],l=t[1],c=t[2],d=0,E=[];d<i.length;d++)n=i[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&E.push(s[n][0]),s[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(t);E.length;)E.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,i=1;i<a.length;i++){var l=a[i];0!==s[l]&&(r=!1)}r&&(o.splice(t--,1),e=n(n.s=a[0]))}return e}var r={},s={1:0},o=[];function n(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=r,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/soql-parser-js";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;o.push([30,0,2]),a()}({29:function(e){e.exports=JSON.parse('["SELECT Id, Name, BillingCity FROM Account","SELECT Id FROM Contact WHERE Name LIKE \'A%\' AND MailingCity = \'California\'","SELECT Name FROM Account ORDER BY Name DESC NULLS LAST","SELECT Name FROM Account WHERE Industry = \'media\' LIMIT 125","SELECT Name FROM Account WHERE Industry = \'media\' ORDER BY BillingPostalCode ASC NULLS LAST LIMIT 125","SELECT COUNT() FROM Contact","SELECT LeadSource, COUNT(Name) FROM Lead GROUP BY LeadSource","SELECT Name, COUNT(Id) FROM Account GROUP BY Name HAVING COUNT(Id) > 1","SELECT Name, Id FROM Merchandise__c ORDER BY Name OFFSET 100","SELECT Name, Id FROM Merchandise__c ORDER BY Name LIMIT 20 OFFSET 100","SELECT Contact.FirstName, Contact.Account.Name FROM Contact","SELECT Id, Name, Account.Name FROM Contact WHERE Account.Industry = \'media\'","SELECT Name, (SELECT LastName FROM Contacts) FROM Account","SELECT Account.Name, (SELECT Contact.LastName FROM Account.Contacts) FROM Account","SELECT Name, (SELECT LastName FROM Contacts WHERE CreatedBy.Alias=\'x\') FROM Account WHERE Industry=\'media\'","SELECT Id, FirstName__c, Mother_of_Child__r.FirstName__c FROM Daughter__c WHERE Mother_of_Child__r.LastName__c LIKE \'C%\'","SELECT Name, (SELECT Name FROM Line_Items__r) FROM Merchandise__c WHERE Name LIKE \'Acme%\'","SELECT Id, Owner.Name FROM Task WHERE Owner.FirstName LIKE \'B%\'","SELECT Id, Who.FirstName, Who.LastName FROM Task WHERE Owner.FirstName LIKE \'B%\'","SELECT Id, What.Name FROM Event","SELECT TYPEOF What WHEN Account THEN Phone, NumberOfEmployees WHEN Opportunity THEN Amount, CloseDate ELSE Name, Email END FROM Event","SELECT Name, (SELECT CreatedBy.Name FROM Notes) FROM Account","SELECT Amount, Id, Name, (SELECT Quantity, ListPrice, PricebookEntry.UnitPrice, PricebookEntry.Name FROM OpportunityLineItems) FROM Opportunity","SELECT UserId, LoginTime FROM LoginHistory","SELECT UserId, COUNT(Id) FROM LoginHistory WHERE LoginTime > 2010-09-20T22:16:30.000Z AND LoginTime < 2010-09-21 GROUP BY UserId","SELECT Id, Name, IsActive, SobjectType, DeveloperName, Description FROM RecordType","SELECT CampaignId, AVG(Amount) avg FROM Opportunity GROUP BY CampaignId HAVING COUNT(Id, Name) > 1","SELECT LeadSource, COUNT(Name) cnt FROM Lead GROUP BY ROLLUP(LeadSource)","SELECT Status, LeadSource, COUNT(Name) cnt FROM Lead GROUP BY ROLLUP(Status, LeadSource)","SELECT Type, BillingCountry, GROUPING(Type)grpType, GROUPING(BillingCountry) grpCty, COUNT(id) accts FROM Account GROUP BY CUBE(Type,BillingCountry) ORDER BY GROUPING(Type), GROUPING(Id,BillingCountry), Name DESC NULLS FIRST, Id ASC NULLS LAST","SELECT c.Name, c.Account.Name FROM Contact c","SELECT Id FROM Account WHERE (Id IN (\'1\', \'2\', \'3\') OR (NOT Id = \'2\') OR (Name LIKE \'%FOO%\' OR (Name LIKE \'%ARM%\' AND FOO = \'bar\')))","SELECT LeadSource, COUNT(Name) FROM Lead GROUP BY LeadSource HAVING COUNT(Name) > 100 AND LeadSource > \'Phone\'","SELECT a.Id, a.Name, (SELECT a2.Id FROM ChildAccounts a2), (SELECT a1.Id FROM ChildAccounts1 a1) FROM Account a","SELECT Title FROM KnowledgeArticleVersion WHERE PublishStatus = \'online\' WITH DATA CATEGORY Geography__c ABOVE usa__c","SELECT Title FROM Question WHERE LastReplyDate > 2005-10-08T01:02:03Z WITH DATA CATEGORY Geography__c AT (usa__c, uk__c)","SELECT UrlName FROM KnowledgeArticleVersion WHERE PublishStatus = \'draft\' WITH DATA CATEGORY Geography__c AT usa__c AND Product__c ABOVE_OR_BELOW mobile_phones__c","SELECT Id FROM Contact FOR VIEW","SELECT Id FROM Contact FOR REFERENCE","SELECT Id FROM Contact FOR UPDATE","SELECT Id FROM FAQ__kav FOR UPDATE","SELECT Id FROM FAQ__kav FOR VIEW UPDATE TRACKING","SELECT Id FROM FAQ__kav UPDATE VIEWSTAT","SELECT amount, FORMAT(amount) Amt, convertCurrency(amount) editDate, FORMAT(convertCurrency(amount)) convertedCurrency FROM Opportunity WHERE id = \'12345\'","SELECT FORMAT(MIN(closedate)) Amt FROM Opportunity","SELECT Company, toLabel(Status) FROM Lead WHERE toLabel(Status) = \'le Draft\'","SELECT Id, Name FROM Account WHERE Id IN (SELECT AccountId FROM Opportunity WHERE StageName = \'Closed Lost\')","SELECT Id FROM Account WHERE Id NOT IN (SELECT AccountId FROM Opportunity WHERE IsClosed = TRUE)","SELECT Id, Name FROM Account WHERE Id IN (SELECT AccountId FROM Contact WHERE LastName LIKE \'apple%\') AND Id IN (SELECT AccountId FROM Opportunity WHERE isClosed = FALSE)","SELECT Account.Name, (SELECT Contact.LastName FROM Account.Contact.Foo.Bars) FROM Account","SELECT LeadSource, COUNT(Name)cnt FROM Lead","SELECT Id, Name FROM Account WHERE Name != \'foo\'","SELECT Id FROM Account WHERE Foo IN (\'1\', \'2\', \'3\') OR Bar IN (1, 2, 3) OR Baz IN (101.00, 102.50) OR Bam IN (\'FOO\', null)","SELECT Id, Name FROM Account WHERE CreatedDate > LAST_N_YEARS:1 AND LastModifiedDate > LAST_MONTH","SELECT Id, CreatedById, CreatedDate, DefType, IsDeleted, Format, LastModifiedById, LastModifiedDate, AuraDefinitionBundleId, ManageableState, Source, SystemModstamp FROM AuraDefinition","SELECT Id, Name, BillingCity FROM Account WITH SECURITY_ENFORCED","SELECT Title FROM KnowledgeArticleVersion WHERE PublishStatus = \'online\' WITH DATA CATEGORY Geography__c ABOVE usa__c WITH SECURITY_ENFORCED","SELECT Id FROM Account WHERE (((Name = \'1\' OR Name = \'2\') AND Name = \'3\')) AND (((Description = \'123\') OR (Id = \'1\' AND Id = \'2\'))) AND Id = \'1\'","SELECT TYPEOF What WHEN Account THEN Phone, NumberOfEmployees WHEN Opportunity THEN Amount, CloseDate END FROM Event","SELECT Name FROM Account WHERE CreatedById IN (SELECT TYPEOF Owner WHEN User THEN Id WHEN Group THEN CreatedById END FROM CASE)","SELECT Name FROM Account OFFSET 1","SELECT Name FROM Account WHERE Id = :foo","SELECT Name FROM Account WHERE Industry IN (\'media\', null, 1, \'media\', 2) LIMIT 125","SELECT Name FROM Account WHERE Foo = NULL","SELECT Name FROM Account WHERE Foo = TODAY","SELECT Name FROM Account WHERE Foo = LAST_N_YEARS:1","SELECT Name FROM Account WHERE Foo = 2010-09-20T22:16:30.000Z","SELECT Name FROM Account WHERE Foo = 1","SELECT Name FROM Account WHERE Foo = TRUE AND bar = FALSE","SELECT CALENDAR_YEAR(CreatedDate) calYear, SUM(Amount) mySum FROM Opportunity GROUP BY CALENDAR_YEAR(CreatedDate)","SELECT CALENDAR_YEAR(convertTimezone(CreatedDate)) calYear, SUM(Amount) mySum FROM Opportunity GROUP BY CALENDAR_YEAR(convertTimezone(CreatedDate))","SELECT COUNT_DISTINCT(Company) distinct FROM Lead","SELECT Name, toLabel(Recordtype.Name) FROM Account","SELECT Id, MSP1__c FROM CustObj__c WHERE MSP1__c INCLUDES (\'AAA;BBB\', \'CCC\')","SELECT Id FROM Account WHERE CreatedDate > LAST_N_FISCAL_QUARTERS:6","SELECT Id FROM Opportunity WHERE CloseDate < NEXT_N_FISCAL_YEARS:3","SELECT Id FROM Opportunity WHERE CloseDate > LAST_N_FISCAL_YEARS:3","SELECT Id, Title FROM Dashboard USING SCOPE allPrivate WHERE Type != \'SpecifiedUser\'","SELECT LeadSource, Rating, GROUPING(LeadSource) grpLS, GROUPING(Rating) grpRating, COUNT(Name) cnt FROM Lead GROUP BY ROLLUP(LeadSource, Rating)","SELECT Type, BillingCountry, GROUPING(Type) grpType, GROUPING(BillingCountry) grpCty, COUNT(id) accts FROM Account GROUP BY CUBE(Type, BillingCountry) ORDER BY GROUPING(Type), GROUPING(BillingCountry)","SELECT HOUR_IN_DAY(convertTimezone(CreatedDate)), SUM(Amount) FROM Opportunity GROUP BY HOUR_IN_DAY(convertTimezone(CreatedDate))","SELECT Id FROM Opportunity WHERE Amount > USD5000","SELECT Id FROM Opportunity WHERE Amount > USD5000.01","SELECT Id, Amount FROM Opportunity WHERE Amount IN (usd500.01, usd600)","SELECT Name, COUNT(Id) FROM Account GROUP BY Name HAVING COUNT(Id) > 0 AND (Name LIKE \'%testing%\' OR Name LIKE \'%123%\')","SELECT Name, COUNT(Id) FROM Account GROUP BY Name HAVING COUNT(Id) > 0 AND (Name IN (\'4/30 testing account\', \'amendment quote doc testing\', null))","SELECT Name, COUNT(Id) FROM Account GROUP BY Name HAVING COUNT(Id) > 0 AND (NOT Name IN (\'4/30 testing account\', \'amendment quote doc testing\'))","SELECT Name, Location__c FROM Warehouse__c WHERE DISTANCE(Location__c, GEOLOCATION(37.775, -122.418), \'mi\') < 20","SELECT Name, StreetAddress__c FROM Warehouse__c WHERE DISTANCE(Location__c, GEOLOCATION(37.775, -122.418), \'mi\') < 20 ORDER BY DISTANCE(Location__c, GEOLOCATION(37.775, -122.418), \'mi\') DESC LIMIT 10","SELECT Id, Name, Location, DISTANCE(Location, GEOLOCATION(10, 10), \'mi\') FROM CONTACT","SELECT BillingState, BillingStreet, COUNT(Id) FROM Account GROUP BY BillingState, BillingStreet","SELECT Id, Name, Location__c, DISTANCE(Location__c, GEOLOCATION(-10.775, -10.775), \'MI\') FROM CONTACT","SELECT Id FROM Account WHERE CreatedDate IN (TODAY)","SELECT Id FROM Account WHERE CreatedDate IN (TODAY)","SELECT Id FROM Account WHERE CreatedDate IN (TODAY, LAST_N_DAYS:4)","SELECT Id FROM Account WHERE CreatedDate IN (LAST_N_DAYS:2)","SELECT Id FROM Account WHERE CreatedDate IN (LAST_N_DAYS:4, LAST_N_DAYS:7)","SELECT SBQQ__Product__r.Name foo, SBQQ__Quote__c foo1 FROM SBQQ__Quoteline__c GROUP BY SBQQ__Quote__c, SBQQ__Product__r.Name","SELECT Id, convertCurrency(Amount) FROM Opportunity WHERE Amount > 0 AND CALENDAR_YEAR(CloseDate) = 2020","SELECT Id FROM LoginHistory WHERE LoginTime > 2020-04-23T09:00:00.00000000000000000000000000000000+00:00 AND LoginTime < 2020-04-15T02:40:03.000+0000","SELECT ProductCode FROM Product2 GROUP BY ProductCode HAVING COUNT(Id) > 1 ORDER BY COUNT(Id) DESC","SELECT AnnualRevenue FROM Account WHERE NOT (AnnualRevenue > 0 AND AnnualRevenue < 200000)","SELECT AnnualRevenue FROM Account WHERE ((NOT AnnualRevenue > 0) AND AnnualRevenue < 200000)","SELECT Id FROM Account WHERE NOT Id = \'2\'","SELECT WEEK_IN_YEAR(CloseDate), SUM(amount) FROM Opportunity GROUP BY WEEK_IN_YEAR(CloseDate) ORDER BY WEEK_IN_YEAR(CloseDate)","SELECT WEEK_IN_YEAR(CloseDate), SUM(amount) FROM Opportunity GROUP BY WEEK_IN_YEAR(CloseDate) ORDER BY WEEK_IN_YEAR(CloseDate) DESC NULLS FIRST","SELECT WEEK_IN_YEAR(CloseDate), SUM(amount) FROM Opportunity GROUP BY WEEK_IN_YEAR(CloseDate) ORDER BY WEEK_IN_YEAR(CloseDate) DESC NULLS LAST, SUM(amount) ASC NULLS LAST","SELECT FIELDS(ALL) FROM Account","SELECT FIELDS(CUSTOM), FIELDS(STANDARD) FROM Account","SELECT Id, (SELECT FIELDS(ALL) FROM Contacts) FROM Account","SELECT UserId, CALENDAR_MONTH(LoginTime) month FROM LoginHistory WHERE NetworkId != NULL GROUP BY UserId, CALENDAR_MONTH(LoginTime)","SELECT Id, (SELECT Id FROM Contacts WHERE Id IN :contactMap.keySet()) FROM Account WHERE Id IN :accountMap.keySet()"]')},30:function(e,t,a){e.exports=a(53)},53:function(e,t,a){"use strict";a.r(t);a(31);var r=a(1),s=[],o=a(3),n=a.n(o);var i=[function(e,t,a){return".github-corner:hover"+t+" .octo-arm"+t+"{animation:octocat-wave .56s ease-in-out}@keyframes octocat-wave{0%,to{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover"+t+" .octo-arm"+t+"{animation:none}.github-corner"+t+" .octo-arm"+t+"{animation:octocat-wave .56s ease-in-out}}"}];function l(e,t,a,r){const{h:s}=e;return[s("a",{classMap:{"github-corner":!0},attrs:{href:"https://github.com/paustint/soql-parser-js",target:"_blank","aria-label":"View source on GitHub"},key:4},[s("svg",{classMap:{"z-10":!0},styleMap:{fill:"#fff",color:"#F26739",position:"absolute",top:"0",border:"0",right:"0"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"},key:3},[s("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"},key:0},[]),s("path",{classMap:{"octo-arm":!0},styleMap:{transformOrigin:"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"},key:1},[]),s("path",{classMap:{"octo-body":!0},attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"},key:2},[])])])]}var c=Object(r.registerTemplate)(l);l.stylesheets=[],i&&l.stylesheets.push.apply(l.stylesheets,i),l.stylesheetTokens={hostAttribute:"ui-ghicon-_ghicon-host",shadowAttribute:"ui-ghicon-_ghicon"};class u extends r.LightningElement{}var d=Object(r.registerComponent)(u,{tmpl:c});function E(e,t,a,r){const{h:s}=e;return[s("svg",{classMap:{"h-6":!0,"w-6":!0,"text-white":!0},attrs:{stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},key:1},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},key:0},[])])]}var p=Object(r.registerTemplate)(E);E.stylesheets=[],n.a&&E.stylesheets.push.apply(E.stylesheets,n.a),E.stylesheetTokens={hostAttribute:"ui-iconClose-_iconClose-host",shadowAttribute:"ui-iconClose-_iconClose"};class y extends r.LightningElement{}var h=Object(r.registerComponent)(y,{tmpl:p});var m=[function(e,t,a){return".logo"+t+"{height:50px}"}];function O(e,t,a,r){const{h:s}=e;return[s("img",{classMap:{logo:!0,"z-20":!0},attrs:{src:"./resources/soql-parser-js-logo.svg",alt:"logo"},key:0},[])]}var C=Object(r.registerTemplate)(O);O.stylesheets=[],m&&O.stylesheets.push.apply(O.stylesheets,m),O.stylesheetTokens={hostAttribute:"ui-logo-_logo-host",shadowAttribute:"ui-logo-_logo"};class L extends r.LightningElement{}var g=Object(r.registerComponent)(L,{tmpl:C});function R(e,t,a,r){const{h:s}=e;return[s("svg",{classMap:{"h-6":!0,"w-6":!0},attrs:{stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},key:1},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},key:0},[])])]}var T=Object(r.registerTemplate)(R);R.stylesheets=[],n.a&&R.stylesheets.push.apply(R.stylesheets,n.a),R.stylesheetTokens={hostAttribute:"ui-iconHamburger-_iconHamburger-host",shadowAttribute:"ui-iconHamburger-_iconHamburger"};class b extends r.LightningElement{}var S=Object(r.registerComponent)(b,{tmpl:T});function A(e,t,a,r){const{c:s,h:o,b:n,s:i}=e,{_m0:l,_m1:c,_m2:u,_m3:E}=r;return[s("ui-ghicon",d,{key:0},[]),o("div",{classMap:{"h-screen":!0,flex:!0,"overflow-hidden":!0,"bg-white":!0},key:31,on:{keydown:E||(r._m3=n(t.handleKeydown))}},[t.sidebarOpen?o("div",{classMap:{"md:hidden":!0},key:14},[o("div",{classMap:{fixed:!0,"inset-0":!0,"z-30":!0,"transition-opacity":!0,"ease-linear":!0,"duration-300":!0},key:2,on:{click:l||(r._m0=n(t.closeSidebar))}},[o("div",{classMap:{absolute:!0,"inset-0":!0,"bg-gray-600":!0,"opacity-75":!0},key:1},[])]),o("div",{classMap:{fixed:!0,"inset-0":!0,flex:!0,"z-40":!0},key:13},[o("div",{classMap:{"flex-1":!0,flex:!0,"flex-col":!0,"max-w-xs":!0,"w-full":!0,"bg-gray-800":!0,transform:!0,"ease-in-out":!0,"duration-300":!0},key:11},[o("div",{classMap:{absolute:!0,"top-0":!0,"right-0":!0,"-mr-14":!0,"p-1":!0},key:5},[o("button",{classMap:{flex:!0,"items-center":!0,"justify-center":!0,"h-12":!0,"w-12":!0,"rounded-full":!0,"focus:outline-none":!0,"focus:bg-gray-600":!0},key:4,on:{click:c||(r._m1=n(t.closeSidebar))}},[s("ui-icon-close",h,{key:3},[])])]),o("div",{classMap:{"flex-1":!0,"h-0":!0,"pt-5":!0,"pb-4":!0,"overflow-y-auto":!0},key:10},[o("div",{classMap:{"flex-shrink-0":!0,flex:!0,"items-center":!0,"px-1":!0},key:7},[s("ui-logo",g,{key:6},[])]),o("nav",{classMap:{"mt-5":!0,"px-2":!0},key:9},[i("queryList",{attrs:{name:"queryList"},key:8},[],a)])])]),o("div",{classMap:{"flex-shrink-0":!0,"w-14":!0},key:12},[])])]):null,o("div",{classMap:{hidden:!0,"md:flex":!0,"md:flex-shrink-0":!0},key:21},[o("div",{classMap:{flex:!0,"flex-col":!0,"w-80":!0,"lg:w-120":!0,"xl:w-160":!0,"border-r":!0,"border-gray-200":!0,"bg-gray-800":!0},key:20},[o("div",{classMap:{"h-0":!0,"flex-1":!0,flex:!0,"flex-col":!0,"pt-5":!0,"pb-4":!0,"overflow-y-auto":!0},key:19},[o("div",{classMap:{flex:!0,"justify-center":!0,"flex-shrink-0":!0,"px-1":!0},key:16},[s("ui-logo",g,{key:15},[])]),o("nav",{classMap:{"mt-5":!0,"flex-1":!0,"px-2":!0},key:18},[i("queryList",{attrs:{name:"queryList"},key:17},[],a)])])])]),o("div",{classMap:{flex:!0,"flex-col":!0,"w-0":!0,"flex-1":!0,"overflow-hidden":!0},key:30},[o("div",{classMap:{"md:hidden":!0,"pt-1":!0,"sm:pt-3":!0,"bg-gray-800":!0},key:26},[o("button",{classMap:{"-ml-0.5":!0,"-mt-0.5":!0,"h-12":!0,"w-12":!0,"inline-flex":!0,"items-center":!0,"justify-center":!0,"rounded-md":!0,"text-gray-500":!0,"hover:text-gray-900":!0,"focus:outline-none":!0,"focus:bg-gray-200":!0,transition:!0,"ease-in-out":!0,"duration-150":!0},key:23,on:{click:u||(r._m2=n(t.openSidebar))}},[s("ui-icon-hamburger",S,{key:22},[])]),o("div",{classMap:{"flex-shrink-0":!0,flex:!0,"justify-center":!0},key:25},[s("ui-logo",g,{key:24},[])])]),o("main",{classMap:{"flex-1":!0,relative:!0,"z-0":!0,"overflow-y-auto":!0,"pt-2":!0,"pb-6":!0,"focus:outline-none":!0,"md:py-6":!0,"bg-gray-800":!0},attrs:{tabindex:"0"},key:29},[o("div",{classMap:{"max-w-7xl":!0,"mx-auto":!0,"px-4":!0,"sm:px-6":!0,"lg:px-8":!0},key:28},[i("",{key:27},[],a)])])])])]}var f=Object(r.registerTemplate)(A);A.slots=["queryList",""],A.stylesheets=[],n.a&&A.stylesheets.push.apply(A.stylesheets,n.a),A.stylesheetTokens={hostAttribute:"my-layout-_layout-host",shadowAttribute:"my-layout-_layout"};class N extends r.LightningElement{constructor(...e){super(...e),this.sidebarOpen=!1}connectedCallback(){window.addEventListener("keydown",this.handleKeydown)}disconnectedCallback(){window.removeEventListener("keydown",this.handleKeydown)}openSidebar(){this.sidebarOpen=!0}closeSidebar(){this.sidebarOpen=!1}handleKeydown(e){(this.sidebarOpen&&""===e.code||27===e.keyCode)&&(this.sidebarOpen=!1)}}Object(r.registerDecorators)(N,{track:{sidebarOpen:1}});var M=Object(r.registerComponent)(N,{tmpl:f});function _(e,t,a,r){const{d:s,h:o,k:n,b:i}=e,{_m0:l}=r;return[o("li",{className:t.className,key:n(3,t.item.key),on:{click:l||(r._m0=i(t.handleClick))}},[o("div",{classMap:{flex:!0},key:2},[o("div",{classMap:{"mr-3":!0},key:0},[s(t.item.key)]),o("div",{key:1},[s(t.item.query)])])])]}var v=Object(r.registerTemplate)(_);_.stylesheets=[],_.stylesheetTokens={hostAttribute:"my-queryListItem-_queryListItem-host",shadowAttribute:"my-queryListItem-_queryListItem"};class k extends r.LightningElement{constructor(...e){super(...e),this.item=void 0}get className(){let e="border-t border-gray-700 p-1 cursor-pointer";return e+=this.item.active?" bg-gray-700":" hover:bg-gray-700",e}handleClick(){this.dispatchEvent(new CustomEvent("select",{detail:this.item.key}))}}Object(r.registerDecorators)(k,{publicProps:{item:{config:0}}});var I=Object(r.registerComponent)(k,{tmpl:v});function F(e,t,a,r){const{t:s,h:o,k:n,b:i,c:l,i:c,f:u}=e,{_m0:d}=r;return[o("ul",{classMap:{"text-gray-400":!0,"bg-gray-800":!0,"font-mono":!0,"break-word":!0},key:5},u([o("li",{classMap:{"p-1":!0,"text-gray-100":!0},key:3},[o("div",{classMap:{flex:!0},key:2},[o("div",{classMap:{"mr-3":!0},key:0},[s("#")]),o("div",{key:1},[s("Example Query")])])]),c(t.exampleQueries,(function(e){return l("my-query-list-item",I,{props:{item:e},key:n(4,e.key),on:{select:d||(r._m0=i(t.handleSelect))}},[])}))]))]}var x=Object(r.registerTemplate)(F);F.stylesheets=[],F.stylesheetTokens={hostAttribute:"my-queryList-_queryList-host",shadowAttribute:"my-queryList-_queryList"};var w=a(29);function D(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class P extends r.LightningElement{constructor(...e){super(...e),this.selectedQuery=void 0,this.exampleQueries=w.map((e,t)=>({key:`${t+1}`,active:0===t,query:e}))}connectedCallback(){this.selectedQuery||this.dispatchEvent(new CustomEvent("select",{detail:this.exampleQueries[0].query}))}handleSelect(e){this.exampleQueries=this.exampleQueries.map(t=>(t.key===e.detail&&this.dispatchEvent(new CustomEvent("select",{detail:t.query})),function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){D(e,t,a[t])}))}return e}({},t,{active:t.key===e.detail})))}}Object(r.registerDecorators)(P,{publicProps:{selectedQuery:{config:0}},track:{exampleQueries:1}});var U=Object(r.registerComponent)(P,{tmpl:x});function H(e,t,a,r){const{t:s,gid:o,h:n,b:i}=e,{_m0:l}=r;return[n("label",{classMap:{block:!0,"text-md":!0,"font-bold":!0,"leading-5":!0,"text-gray-100":!0},attrs:{for:`${o("query")}`},key:0},[s("SOQL QUERY")]),n("div",{classMap:{"mt-1":!0,relative:!0,"rounded-md":!0,"shadow-sm":!0},key:2},[n("textarea",{className:t.className,attrs:{id:o("query"),value:t.value,rows:"4"},key:1,on:{input:l||(r._m0=i(t.handleChange))}},[])])]}var Q=Object(r.registerTemplate)(H);H.stylesheets=[],n.a&&H.stylesheets.push.apply(H.stylesheets,n.a),H.stylesheetTokens={hostAttribute:"my-soqlQueryTextarea-_soqlQueryTextarea-host",shadowAttribute:"my-soqlQueryTextarea-_soqlQueryTextarea"};class B extends r.LightningElement{constructor(...e){super(...e),this.value="",this.hasQueryError=!1}set query(e){this._query=e,e&&(this.value=e,this.setValue(e))}get query(){return this._query}get className(){let e="form-input block font-mono border-4 w-full sm:text-sm sm:leading-5 focus:border-transparent";return this.hasQueryError?e+=" border-red-300 text-red-900 placeholder-red-300 focus:border-red-300":e+=" border-transparent",e}handleChange(e){this.value=e.target.value,this.emitValueChanged()}setValue(e){this.template.querySelector("textarea").value=e,this.emitValueChanged()}emitValueChanged(){this.dispatchEvent(new CustomEvent("changed",{detail:this.value}))}}Object(r.registerDecorators)(B,{publicProps:{query:{config:3},hasQueryError:{config:0}},track:{value:1}});var q=Object(r.registerComponent)(B,{tmpl:Q});var W=[function(e,t,a){return".parsed-code"+t+"{max-height:35vh}"}];var Y=[function(e,t,a){return".copy-to-clipboard"+t+"{position:absolute;left:-9999px;top:-9999px}"}];function j(e,t,a,r){const{h:s,d:o,b:n}=e,{_m0:i}=r;return[s("textarea",{classMap:{"copy-to-clipboard":!0},key:0},[]),s("button",{classMap:{"inline-flex":!0,"items-center":!0,"px-2.5":!0,"py-1.5":!0,border:!0,"border-transparent":!0,rounded:!0,"text-sm":!0,"leading-4":!0,"font-medium":!0,"rounded-md":!0,"text-white":!0,"hover:bg-gray-500":!0,"focus:outline-none":!0,"focus:border-gray-700":!0,"focus:shadow-outline-gray":!0,"active:bg-gray-700":!0,transition:!0,"ease-in-out":!0,"duration-150":!0},attrs:{type:"button"},key:5,on:{click:i||(r._m0=n(t.handleCopy))}},[s("svg",{classMap:{"-ml-0.5":!0,"mr-2":!0,"h-4":!0,"w-4":!0},attrs:{fill:"currentColor",viewBox:"0 0 20 20"},key:4},[s("path",{attrs:{d:"M8 2C7.44772 2 7 2.44772 7 3C7 3.55228 7.44772 4 8 4H10C10.5523 4 11 3.55228 11 3C11 2.44772 10.5523 2 10 2H8Z"},key:1},[]),s("path",{attrs:{d:"M3 5C3 3.89543 3.89543 3 5 3C5 4.65685 6.34315 6 8 6H10C11.6569 6 13 4.65685 13 3C14.1046 3 15 3.89543 15 5V11H10.4142L11.7071 9.70711C12.0976 9.31658 12.0976 8.68342 11.7071 8.29289C11.3166 7.90237 10.6834 7.90237 10.2929 8.29289L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071L10.2929 15.7071C10.6834 16.0976 11.3166 16.0976 11.7071 15.7071C12.0976 15.3166 12.0976 14.6834 11.7071 14.2929L10.4142 13H15V16C15 17.1046 14.1046 18 13 18H5C3.89543 18 3 17.1046 3 16V5Z"},key:2},[]),s("path",{attrs:{d:"M15 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H15V11Z"},key:3},[])]),o(t.label)])]}var G=Object(r.registerTemplate)(j);j.stylesheets=[],Y&&j.stylesheets.push.apply(j.stylesheets,Y),j.stylesheetTokens={hostAttribute:"ui-copyToClipboard-_copyToClipboard-host",shadowAttribute:"ui-copyToClipboard-_copyToClipboard"};class K extends r.LightningElement{constructor(...e){super(...e),this.value=void 0,this.label="COPY"}handleCopy(){if(this.value){const e=this.template.querySelector("textarea");e&&(e.value=this.value,e.select(),e.setSelectionRange(0,this.value.length),document.execCommand("copy"),this.label="COPIED",setTimeout(()=>{this.label="COPY"},1500))}}}Object(r.registerDecorators)(K,{publicProps:{value:{config:0}},track:{label:1}});var V=Object(r.registerComponent)(K,{tmpl:G});function J(e,t,a,r){const{gid:s,b:o,h:n,d:i,s:l}=e,{_m0:c}=r;return[n("div",{classMap:{flex:!0,"items-center":!0,"justify-between":!0},key:4},[n("div",{classMap:{flex:!0,"items-center":!0},key:3},[n("input",{classMap:{"form-checkbox":!0,"h-4":!0,"w-4":!0,"text-red-600":!0,transition:!0,"duration-150":!0,"ease-in-out":!0,"disabled:opacity-75":!0},attrs:{id:s("toggle"),type:"checkbox"},props:{checked:t.value,disabled:t.disabled},key:0,on:{change:c||(r._m0=o(t.handleToggle))}},[]),n("label",{classMap:{"ml-2":!0,block:!0,"text-sm":!0,"leading-5":!0,"font-medium":!0,"text-gray-100":!0,"disabled:opacity-75":!0},attrs:{for:`${s("toggle")}`},key:2},[i(t.label),l("",{key:1},[],a)])])])]}var z=Object(r.registerTemplate)(J);J.slots=[""],J.stylesheets=[],n.a&&J.stylesheets.push.apply(J.stylesheets,n.a),J.stylesheetTokens={hostAttribute:"ui-checkbox-_checkbox-host",shadowAttribute:"ui-checkbox-_checkbox"};class $ extends r.LightningElement{constructor(...e){super(...e),this._value=!1,this.name=void 0,this.label=void 0,this.disabled=!1}set value(e){this._value=e;try{this.template.querySelector("input").value=e}catch(e){}}get value(){return this._value}handleToggle(){this._value=!this.value,this.dispatchEvent(new CustomEvent("change",{detail:{name:this.name,value:this.value}}))}}Object(r.registerDecorators)($,{publicProps:{name:{config:0},label:{config:0},disabled:{config:0},value:{config:3}},fields:["_value"]});var Z=Object(r.registerComponent)($,{tmpl:z});var X=[function(e,t,a){return"pre"+t+",textarea"+t+"{-moz-tab-size:2;-o-tab-size:2;tab-size:2}"}];function ee(e,t,a,r){const{d:s,s:o,gid:n,h:i,b:l}=e,{_m0:c}=r;return[i("div",{key:4},[i("label",{classMap:{block:!0,"text-sm":!0,"font-medium":!0,"leading-5":!0,"text-gray-100":!0},attrs:{for:`${n("input")}`},key:1},[s(t.label),o("",{key:0},[],a)]),i("div",{classMap:{"mt-1":!0,"rounded-md":!0,"shadow-sm":!0},key:3},[i("input",{className:t.className,attrs:{id:n("input"),type:t.type},props:{value:t.value,disabled:t.disabled},key:2,on:{keyup:c||(r._m0=l(t.handleChange))}},[])])])]}var te=Object(r.registerTemplate)(ee);ee.slots=[""],ee.stylesheets=[],n.a&&ee.stylesheets.push.apply(ee.stylesheets,n.a),ee.stylesheetTokens={hostAttribute:"ui-input-_input-host",shadowAttribute:"ui-input-_input"};class ae extends r.LightningElement{constructor(...e){super(...e),this._value="",this.name=void 0,this.label=void 0,this.type="text",this.disabled=!1,this.transformFn=void 0}set value(e){this._value=e;const t=this.template.querySelector("input");t&&(t.value=e)}get value(){return this._value}get className(){let e="form-input font-mono block w-full sm:text-sm sm:leading-5 disabled:opacity-75";return this.disabled&&(e+=" bg-gray-200"),e}handleChange(e){let t=e.target.value;this.transformFn&&(t=this.transformFn(t)),t!==e.target.value&&(this.template.querySelector("input").value=t),this._value=t,this._value&&this.dispatchEvent(new CustomEvent("change",{detail:{name:this.name,value:this.value}}))}}Object(r.registerDecorators)(ae,{publicProps:{name:{config:0},label:{config:0},type:{config:0},disabled:{config:0},value:{config:3},transformFn:{config:0}},fields:["_value"]});var re=Object(r.registerComponent)(ae,{tmpl:te});function se(e,t,a,r){const{b:s,c:o,h:n,t:i}=e,{_m0:l,_m1:c,_m2:u,_m3:d}=r;return[n("div",{key:9},[n("div",{classMap:{"ml-2":!0},key:1},[o("ui-checkbox",Z,{props:{name:"formatOutput",value:t.formatOutput,label:"Format Output"},key:0,on:{change:l||(r._m0=s(t.handleChange))}},[])]),n("div",{classMap:{"ml-2":!0,"p-2":!0,border:!0},key:8},[o("ui-checkbox",Z,{props:{name:"fieldSubqueryParensOnOwnLine",value:t.fieldSubqueryParensOnOwnLine,disabled:t.formDisabled},key:3,on:{change:c||(r._m1=s(t.handleChange))}},[i("Subquery parenthesis on own line - "),n("code",{classMap:{"font-semibold":!0},key:2},[i("fieldSubqueryParensOnOwnLine")])]),o("ui-checkbox",Z,{props:{name:"newLineAfterKeywords",value:t.newLineAfterKeywords,disabled:t.formDisabled},key:5,on:{change:u||(r._m2=s(t.handleChange))}},[i("Add newline and indent after keywords - "),n("code",{classMap:{"font-semibold":!0},key:4},[i("newLineAfterKeywords")])]),o("ui-input",re,{props:{name:"fieldMaxLineLength",transformFn:t.fieldMaxLineLengthTransformFn,value:t.fieldMaxLineLength,disabled:t.formDisabled},key:7,on:{change:d||(r._m3=s(t.handleChange))}},[i("Number of characters before fields wrap - "),n("code",{classMap:{"font-semibold":!0},key:6},[i("fieldMaxLineLength")])])])]),n("div",{classMap:{"mb-1":!0},key:12},[n("pre",{key:11},[n("code",{classMap:{javascript:!0},context:{lwc:{dom:"manual"}},key:10},[])])]),n("h4",{classMap:{flex:!0,"justify-between":!0,"text-md":!0,"font-bold":!0,"leading-7":!0,"text-gray-100":!0,"sm:truncate":!0},key:14},[i("COMPOSED QUERY"),o("ui-copy-to-clipboard",V,{props:{value:t.composedQuery},key:13},[])]),n("div",{classMap:{"overflow-auto":!0},key:17},[n("pre",{key:16},[n("code",{classMap:{"language-sql":!0},context:{lwc:{dom:"manual"}},key:15},[])])])]}var oe=Object(r.registerTemplate)(se);se.stylesheets=[],X&&se.stylesheets.push.apply(se.stylesheets,X),se.stylesheetTokens={hostAttribute:"my-queryComposer-_queryComposer-host",shadowAttribute:"my-queryComposer-_queryComposer"};var ne=a(16),ie=a(6);ie.registerLanguage("sql",a(50));const le=/[^\d]/g;class ce extends r.LightningElement{constructor(...e){super(...e),this.composedQuery=void 0,this.formatOutput=!0,this.fieldSubqueryParensOnOwnLine=!0,this.newLineAfterKeywords=!0,this.fieldMaxLineLength=1,this.hasRendered=!1,this.fieldMaxLineLengthTransformFn=e=>e.replace(le,"")}set parsedQuery(e){this._parsedQuery=e,this.composeQuery()}get parsedQuery(){return this._parsedQuery}get formDisabled(){return!this.formatOutput}renderedCallback(){const e=this.template.querySelector("code.javascript");e.innerText="// composeQuery(parsedQuery), {\n"+`//   format: ${this.formatOutput},\n`+"//   formatOptions: {\n"+`//     fieldSubqueryParensOnOwnLine: ${this.fieldSubqueryParensOnOwnLine},\n`+`//     newLineAfterKeywords: ${this.newLineAfterKeywords},\n`+`//     fieldMaxLineLength: ${this.fieldMaxLineLength},\n`+"//   }\n// });\n",e.innerText="// composeQuery(parsedQuery), {\n"+`//   format: ${this.formatOutput},\n`+`//   formatOptions: { fieldSubqueryParensOnOwnLine: ${this.fieldSubqueryParensOnOwnLine}, newLineAfterKeywords: ${this.newLineAfterKeywords}, fieldMaxLineLength: ${this.fieldMaxLineLength} }\n`+"// });\n",ie.highlightBlock(e),this.hasRendered=!0}composeQuery(){try{if(this.parsedQuery){const{fieldSubqueryParensOnOwnLine:e,newLineAfterKeywords:t,fieldMaxLineLength:a}=this;this.composedQuery=Object(ne.a)(JSON.parse(JSON.stringify(this.parsedQuery)),{format:this.formatOutput,formatOptions:{fieldSubqueryParensOnOwnLine:e,newLineAfterKeywords:t,fieldMaxLineLength:a}}),this.highlight()}}catch(e){this.composedQuery=""}}handleChange(e){const{name:t,value:a}=e.detail;switch(t){case"formatOutput":this.formatOutput=a;break;case"fieldSubqueryParensOnOwnLine":this.fieldSubqueryParensOnOwnLine=a;break;case"newLineAfterKeywords":this.newLineAfterKeywords=a;break;case"fieldMaxLineLength":this.fieldMaxLineLength=+a||1}this.composeQuery()}highlight(){const e=this.template.querySelector("code.language-sql");e.innerText=this.composedQuery,ie.highlightBlock(e)}}Object(r.registerDecorators)(ce,{publicProps:{parsedQuery:{config:3}},track:{composedQuery:1,formatOutput:1,fieldSubqueryParensOnOwnLine:1,newLineAfterKeywords:1,fieldMaxLineLength:1},fields:["hasRendered","fieldMaxLineLengthTransformFn"]});var ue=Object(r.registerComponent)(ce,{tmpl:oe});function de(e,t,a,r){const{t:s,c:o,h:n,b:i}=e,{_m0:l,_m1:c}=r;return[n("div",{classMap:{flex:!0,"flex-col":!0},key:14},[n("h4",{classMap:{flex:!0,"justify-between":!0,"text-md":!0,"font-bold":!0,"leading-7":!0,"text-gray-100":!0,"sm:truncate":!0},key:1},[s("PARSED QUERY"),o("ui-copy-to-clipboard",V,{props:{value:t.parsedQueryJson},key:0},[])]),n("div",{classMap:{"ml-2":!0},key:4},[o("ui-checkbox",Z,{props:{name:"allowApexBindVariables",value:t.allowApexBindVariables,label:"Allow apex bind variables"},key:2,on:{change:l||(r._m0=i(t.handleChange))}},[]),o("ui-checkbox",Z,{props:{name:"ignoreParseErrors",value:t.ignoreParseErrors,label:"Ignore parsing errors"},key:3,on:{change:c||(r._m1=i(t.handleChange))}},[])]),n("div",{classMap:{"mb-1":!0},key:7},[n("pre",{key:6},[n("code",{classMap:{javascript:!0},context:{lwc:{dom:"manual"}},key:5},[])])]),n("div",{classMap:{"flex-grow":!0,"overflow-auto":!0,"parsed-code":!0},key:10},[n("pre",{key:9},[n("code",{classMap:{json:!0},context:{lwc:{dom:"manual"}},key:8},[])])]),n("div",{classMap:{"mt-6":!0,"border-t":!0},key:13},[n("h4",{classMap:{"text-md":!0,"font-bold":!0,"leading-7":!0,"text-gray-100":!0,"sm:truncate":!0},key:11},[s("COMPOSE QUERY FROM PARSED OUTPUT")]),o("my-query-composer",ue,{props:{parsedQuery:t.parsedQuery},key:12},[])])])]}var Ee=Object(r.registerTemplate)(de);de.stylesheets=[],W&&de.stylesheets.push.apply(de.stylesheets,W),de.stylesheetTokens={hostAttribute:"my-queryParser-_queryParser-host",shadowAttribute:"my-queryParser-_queryParser"},ie.registerLanguage("javascript",a(51)),ie.registerLanguage("json",a(52));class pe extends r.LightningElement{constructor(...e){super(...e),this._query="",this.parsedQuery=void 0,this.parsedQueryJson=void 0,this.composedQuery=void 0,this.allowApexBindVariables=!1,this.ignoreParseErrors=!1,this.hasError=!1,this.hasRendered=!1}set query(e){this._query=e,this.parseQuery()}get query(){return this._query}renderedCallback(){this.hasRendered||(this.setExampleJs(),this.hasRendered=!0)}parseQuery(){try{this.parsedQuery=Object(ne.b)(this._query||"",{allowApexBindVariables:this.allowApexBindVariables,ignoreParseErrors:this.ignoreParseErrors,logErrors:!0}),this.parsedQueryJson=JSON.stringify(this.parsedQuery,null,2),this.hasError=!1}catch(e){this.parsedQueryJson=e.message,this.hasError=!0}this.highlight(),this.dispatchEvent(new CustomEvent("queryerror",{detail:this.hasError}))}setExampleJs(){const e=this.template.querySelector("code.javascript");e.innerText=`parseQuery(soqlQuery, { allowApexBindVariables: ${this.allowApexBindVariables}, ignoreParseErrors: ${this.ignoreParseErrors} });`,ie.highlightBlock(e)}highlight(){const e=this.template.querySelector("code.json");e&&(e.innerText=this.parsedQueryJson,ie.highlightBlock(e))}handleChange(e){const{name:t,value:a}=e.detail;switch(t){case"allowApexBindVariables":this.allowApexBindVariables=a;break;case"ignoreParseErrors":this.ignoreParseErrors=a}this.setExampleJs(),this.parseQuery()}}Object(r.registerDecorators)(pe,{publicProps:{query:{config:3}},track:{parsedQuery:1,parsedQueryJson:1,composedQuery:1,allowApexBindVariables:1,ignoreParseErrors:1},fields:["_query","hasError","hasRendered"]});var ye=Object(r.registerComponent)(pe,{tmpl:Ee});function he(e,t,a,r){const{b:s,c:o,h:n}=e,{_m0:i,_m1:l,_m2:c}=r;return[o("my-layout",M,{key:6},[n("span",{attrs:{slot:"queryList"},key:1},[o("my-query-list",U,{props:{selectedQuery:t.selectedQuery},key:0,on:{select:i||(r._m0=s(t.handleQueryExampleSelected))}},[])]),n("span",{key:5},[o("my-soql-query-textarea",q,{props:{query:t.selectedQuery,hasQueryError:t.hasQueryError},key:2,on:{changed:l||(r._m1=s(t.handleSoqlChanged))}},[]),n("div",{classMap:{"mt-4":!0},key:4},[o("my-query-parser",ye,{props:{query:t.soqlText},key:3,on:{queryerror:c||(r._m2=s(t.handleOnQueryError))}},[])])])])]}var me=Object(r.registerTemplate)(he);he.stylesheets=[],s&&he.stylesheets.push.apply(he.stylesheets,s),he.stylesheetTokens={hostAttribute:"my-app-_app-host",shadowAttribute:"my-app-_app"};class Oe extends r.LightningElement{constructor(...e){super(...e),this.sidebarOpen=!1,this.selectedQuery=void 0,this.soqlText=void 0,this.hasQueryError=!1}connectedCallback(){window.addEventListener("keydown",this.handleKeydown)}disconnectedCallback(){window.removeEventListener("keydown",this.handleKeydown)}handleQueryExampleSelected(e){this.selectedQuery=e.detail}handleSoqlChanged(e){this.soqlText=e.detail,this.closeSidebar()}handleOnQueryError(e){this.hasQueryError=e.detail}openSidebar(){this.sidebarOpen=!0}closeSidebar(){this.sidebarOpen=!1}handleKeydown(e){(this.sidebarOpen&&""===e.code||27===e.keyCode)&&(this.sidebarOpen=!1)}}Object(r.registerDecorators)(Oe,{track:{sidebarOpen:1,selectedQuery:1,soqlText:1,hasQueryError:1}});var Ce=Object(r.registerComponent)(Oe,{tmpl:me});customElements.define("my-app",Object(r.buildCustomElementConstructor)(Ce))}});