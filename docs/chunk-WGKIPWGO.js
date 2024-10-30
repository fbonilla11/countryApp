import{A as o,B as f,C as l,D as te,E as I,F as _,G as R,H as ne,I as M,J as N,K as ie,L as re,M as oe,P as ae,R as ce,S as me,U as A,V as pe,a as $,b as z,c as U,d as G,e as J,f as w,g as K,h as p,i as B,j as Q,k as W,l as X,m as Y,n as P,o as a,p as u,q as E,r as s,s as n,t,u as m,v as Z,w as y,x as T,y as ee,z as x}from"./chunk-YKZ567HR.js";var d=class r{constructor(i){this.HttpClient=i}apiURL="https://restcountries.com/v3.1";searchCountryByAlphaCode(i){let e=`${this.apiURL}/alpha/${i}`;return this.HttpClient.get(e).pipe(z(c=>c.length>0?c[0]:null),U(()=>$(null)))}getHttpRequest(i){return this.HttpClient.get(i).pipe(U(()=>$([])))}searchCapital(i){let e=`${this.apiURL}/capital/${i}`;return this.getHttpRequest(e)}searchCountry(i){let e=`${this.apiURL}/name/${i}`;return this.getHttpRequest(e)}searchRegion(i){let e=`${this.apiURL}/region/${i}`;return this.getHttpRequest(e)}static \u0275fac=function(e){return new(e||r)(K(re))};static \u0275prov=J({token:r,factory:r.\u0275fac,providedIn:"root"})};var v=class r{placeholder="";newTerm=new Y;addNewTerm(i){this.newTerm.emit(i)}static \u0275fac=function(e){return new(e||r)};static \u0275cmp=p({type:r,selectors:[["shared-search-box"]],inputs:{placeholder:"placeholder"},outputs:{newTerm:"newTerm"},decls:2,vars:1,consts:[["txtInput",""],["type","text",1,"form-control",3,"keyup.enter","placeholder"]],template:function(e,c){if(e&1){let C=Z();n(0,"input",1,0),y("keyup.enter",function(){Q(C);let le=x(1);return W(c.addNewTerm(le.value))}),t()}e&2&&ee("placeholder",c.placeholder)}})};var F=class r{static \u0275fac=function(e){return new(e||r)};static \u0275cmp=p({type:r,selectors:[["shared-loading-spinner"]],decls:15,vars:0,consts:[[1,"spinner-container","bg-dark"],[1,"text-center"],["width","45","height","45","viewBox","0 0 45 45","xmlns","http://www.w3.org/2000/svg","stroke","#fff",1,"bg-dark"],["fill","none","fill-rule","evenodd","transform","translate(1 1)","stroke-width","2"],["cx","22","cy","22","r","6","stroke-opacity","0"],["attributeName","r","begin","1.5s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","1.5s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","1.5s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["attributeName","r","begin","3s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","3s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","3s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["cx","22","cy","22","r","8"],["attributeName","r","begin","0s","dur","1.5s","values","6;1;2;3;4;5;6","calcMode","linear","repeatCount","indefinite"]],template:function(e,c){e&1&&(n(0,"div",0)(1,"span",1),o(2,"Buscando"),t(),X(),n(3,"svg",2)(4,"g",3)(5,"circle",4),m(6,"animate",5)(7,"animate",6)(8,"animate",7),t(),n(9,"circle",4),m(10,"animate",8)(11,"animate",9)(12,"animate",10),t(),n(13,"circle",11),m(14,"animate",12),t()()()())},styles:[".spinner-container[_ngcontent-%COMP%]{align-items:center;background-color:#000;border-radius:20px;bottom:15px;color:#fff;display:flex;padding:5px 10px;position:fixed;right:15px;box-shadow:0 3px 5px #00000059}span[_ngcontent-%COMP%]{margin:15px}"]})};var ge=r=>["/countries/by/",r];function Ce(r,i){r&1&&(n(0,"div",2),o(1,` No hay pa\xEDses que mostrar
`),t())}function ye(r,i){if(r&1&&(n(0,"tr")(1,"td"),o(2),t(),n(3,"td"),o(4),t(),n(5,"td"),m(6,"img",5),t(),n(7,"td"),o(8),t(),n(9,"td"),o(10),t(),n(11,"td"),o(12),I(13,"number"),t(),n(14,"td")(15,"a",6)(16,"p"),o(17,"Informaci\xF3n"),t()()()()),r&2){let e=i.$implicit,c=i.index;a(2),f(c+1),a(2),l(" ",e.flag," "),a(2),s("src",e.flags.svg,P)("alt",e.name.common),a(2),l(" ",e.name.common," "),a(2),l(" ",e.capital," "),a(2),l(" ",_(13,8,e.population)," "),a(3),s("routerLink",te(10,ge,e.cca3))}}function ve(r,i){if(r&1&&(n(0,"table",3)(1,"thead")(2,"tr")(3,"th"),o(4,"#"),t(),n(5,"th"),o(6,"Icon"),t(),n(7,"th"),o(8,"Bandera"),t(),n(9,"th"),o(10,"Nombre"),t(),n(11,"th"),o(12,"Capital"),t(),n(13,"th"),o(14,"Poblacion"),t(),m(15,"th"),t()(),n(16,"tBody"),E(17,ye,18,12,"tr",4),t()()),r&2){let e=T();a(17),s("ngForOf",e.countries)}}var h=class r{countries=[];static \u0275fac=function(e){return new(e||r)};static \u0275cmp=p({type:r,selectors:[["countries-country-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["table",""],["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],[1,"alert","alert-warning","text-center"],[1,"table","table-hover","text-center"],[4,"ngFor","ngForOf"],["width","40px",3,"src","alt"],[3,"routerLink"]],template:function(e,c){if(e&1&&E(0,Ce,2,0,"div",1)(1,ve,18,1,"ng-template",null,0,R),e&2){let C=x(2);s("ngIf",c.countries.length===0)("ngIfElse",C)}},dependencies:[ne,M,me,N]})};var k=class r{constructor(i){this.CountriesService=i}countries=[];searchByCapital(i){this.CountriesService.searchCapital(i).subscribe(e=>{this.countries=e})}static \u0275fac=function(e){return new(e||r)(u(d))};static \u0275cmp=p({type:r,selectors:[["app-by-capital-page"]],decls:11,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por capital",3,"newTerm"],[3,"countries"]],template:function(e,c){e&1&&(n(0,"h2"),o(1,"Por Capital"),t(),m(2,"hr"),n(3,"div",0)(4,"div",1)(5,"shared-search-box",2),y("newTerm",function(b){return c.searchByCapital(b)}),t()()(),n(6,"div",0)(7,"div",1),m(8,"hr")(9,"shared-loading-spinner")(10,"countries-country-table",3),t()()),e&2&&(a(10),s("countries",c.countries))},dependencies:[v,F,h]})};var O=class r{constructor(i){this.CountriesService=i}countries=[];searchByCountry(i){this.CountriesService.searchCountry(i).subscribe(e=>{this.countries=e})}static \u0275fac=function(e){return new(e||r)(u(d))};static \u0275cmp=p({type:r,selectors:[["app-by-country-page"]],decls:10,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por pa\xEDs",3,"newTerm"],[3,"countries"]],template:function(e,c){e&1&&(n(0,"h2"),o(1,"Por Pa\xEDs"),t(),m(2,"hr"),n(3,"div",0)(4,"div",1)(5,"shared-search-box",2),y("newTerm",function(b){return c.searchByCountry(b)}),t()()(),n(6,"div",0)(7,"div",1),m(8,"hr")(9,"countries-country-table",3),t()()),e&2&&(a(9),s("countries",c.countries))},dependencies:[v,h]})};var j=class r{constructor(i){this.CountriesService=i}countries=[];searchByRegion(i){this.CountriesService.searchRegion(i).subscribe(e=>{this.countries=e})}static \u0275fac=function(e){return new(e||r)(u(d))};static \u0275cmp=p({type:r,selectors:[["app-by-region-page"]],decls:10,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por regi\xF3n",3,"newTerm"],[3,"countries"]],template:function(e,c){e&1&&(n(0,"h2"),o(1,"Por Regi\xF3n"),t(),m(2,"hr"),n(3,"div",0)(4,"div",1)(5,"shared-search-box",2),y("newTerm",function(b){return c.searchByRegion(b)}),t()()(),n(6,"div",0)(7,"div",1),m(8,"hr")(9,"countries-country-table",3),t()()),e&2&&(a(9),s("countries",c.countries))},dependencies:[v,h]})};function he(r,i){if(r&1&&(n(0,"div")(1,"div",2)(2,"div",3)(3,"h2"),o(4," Pa\xEDs: "),n(5,"strong"),o(6),t()(),m(7,"hr"),n(8,"div",2)(9,"div",4)(10,"h3"),o(11,"Bandera:"),t(),m(12,"img",5),t(),n(13,"div",6)(14,"h3"),o(15,"Informaci\xF3n:"),t(),n(16,"ul",7)(17,"li",8)(18,"strong"),o(19,"Poblaci\xF3n: "),t(),o(20),I(21,"number"),t(),n(22,"li",8)(23,"strong"),o(24,"C\xF3digo:"),t(),o(25),t(),n(26,"li",8)(27,"strong"),o(28,"Languages:"),t(),o(29),t(),n(30,"li",8)(31,"strong"),o(32,"Superficie del pa\xEDs:"),t(),o(33),I(34,"number"),t(),n(35,"li",8)(36,"strong"),o(37,"Selecci\xF3n de f\xFAtbol: "),t(),o(38),t()()()()()(),n(39,"div",9)(40,"div",6)(41,"h3"),o(42,"Traducciones:"),t(),n(43,"div",10)(44,"span",11),o(45),t(),n(46,"span",11),o(47),t(),n(48,"span",11),o(49),t(),n(50,"span",11),o(51),t(),n(52,"span",11),o(53),t()()()()()),r&2){let e=T();a(6),f(e.country.name.common),a(6),s("src",e.country.flags.svg,P)("alt",e.country.name.common),a(8),l("",_(21,13,e.country.population)," "),a(5),l(" ",e.country.cca3," "),a(4),l(" ",e.country.languages.eng," "),a(4),l(" ",_(34,15,e.country.area)," m2 "),a(5),l(" ",e.country.fifa," "),a(7),f(e.country.translations.ara.common),a(2),f(e.country.translations.bre.common),a(2),f(e.country.translations.ces.common),a(2),f(e.country.translations.cym.common),a(2),f(e.country.translations.ita.common)}}function be(r,i){r&1&&(n(0,"div",12)(1,"p"),o(2,"Cargando..."),t()())}var L=class r{constructor(i,e,c){this.activatedRoute=i;this.CountriesServiceService=e;this.router=c}country;ngOnInit(){this.activatedRoute.params.pipe(G(({id:i})=>this.CountriesServiceService.searchCountryByAlphaCode(i))).subscribe(i=>i?this.country=i:this.router.navigateByUrl(""))}static \u0275fac=function(e){return new(e||r)(u(ae),u(d),u(ce))};static \u0275cmp=p({type:r,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail","rounded-pill",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"],[1,"alert","alert-info","text-center"]],template:function(e,c){if(e&1&&E(0,he,54,17,"div",1)(1,be,3,0,"ng-template",null,0,R),e&2){let C=x(2);s("ngIf",c.country)("ngIfElse",C)}},dependencies:[M,N]})};var xe=[{path:"by-capital",component:k},{path:"by-country",component:O},{path:"by-region",component:j},{path:"by/:id",component:L},{path:"**",redirectTo:"by-capital"}],H=class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=B({type:r});static \u0275inj=w({imports:[A.forChild(xe),A]})};var se=class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=B({type:r});static \u0275inj=w({imports:[ie,H,pe,oe]})};export{se as CountriesModule};
