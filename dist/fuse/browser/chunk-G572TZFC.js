import{a as O}from"./chunk-7WEXNQKQ.js";import{a as Me,b as Ie,c as Te}from"./chunk-UHISEFFO.js";import{a as we}from"./chunk-Z2MQWE4K.js";import{a as Ne,b as ke}from"./chunk-3JFTCLCY.js";import{a as De}from"./chunk-HA5LSY2V.js";import{a as xe}from"./chunk-J6NPCFJ2.js";import{a as W}from"./chunk-6IEWE3OU.js";import{a as ye}from"./chunk-IWGHEBIZ.js";import{a as L,b as Fe}from"./chunk-2RSQTUPN.js";import{a as j}from"./chunk-OFEOPKCC.js";import{a as _e}from"./chunk-KQASFADC.js";import"./chunk-CHOSRW5W.js";import{g as fe}from"./chunk-QS2WZY2K.js";import{a as ne,b as se,c as me}from"./chunk-JND367CQ.js";import"./chunk-7U4JZNVG.js";import{C as be,F as Ee,J as V,b as le,e as pe,i as k,j as ce,l as ue,p as ge,q as he,u as ve,x as Se,y as Ce}from"./chunk-K2P4EKGI.js";import{$ as ae,Q as oe,R as re,ea as A,ja as de}from"./chunk-DARKUWJB.js";import"./chunk-EENLYY7H.js";import{a as $}from"./chunk-WGGS5SGH.js";import{f as ee,g as te,i as ie,j as H,r as N}from"./chunk-NP3GUERB.js";import{$ as D,Cb as n,Db as o,Eb as f,Fb as C,Gb as b,Ib as Q,Ob as v,Xb as U,Yb as m,Za as i,Zb as E,_a as T,_b as X,dc as Y,ea as h,ec as w,fa as d,ka as F,mc as _,nc as y,pb as u,q as K,rb as r,ua as M,va as I}from"./chunk-32HXX3OB.js";import{a as S,d as B}from"./chunk-NEB6MB4Y.js";var Ae=(()=>{let e=class e{constructor(s,a){this._http=s,this.appSettings=a}getTiposEmpresas(){return this._http.get(this.appSettings.tiposEmpresas.url.base)}};e.\u0275fac=function(a){return new(a||e)(h(N),h($))},e.\u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var $e=(()=>{let e=class e{constructor(s,a){this._http=s,this.appSettingService=a}getSubcripciones(){return this._http.get(this.appSettingService.subcripciones.url.base)}getSubcripcion(s){return this._http.get(`${this.appSettingService.subcripciones.url.base}`)}};e.\u0275fac=function(a){return new(a||e)(h(N),h($))},e.\u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function Pe(t,e){if(t&1&&(n(0,"mat-option",18),m(1),o()),t&2){let p=e.$implicit;r("value",p.id),i(),E(p.nombre)}}function ze(t,e){if(t&1&&(C(0),u(1,Pe,2,2,"mat-option",17),b()),t&2){let p=e.ngIf;i(),r("ngForOf",p.data)}}function Re(t,e){if(t&1&&(n(0,"mat-option",18),m(1),o()),t&2){let p=e.$implicit;r("value",p.id),i(),E(p.nombre)}}function Be(t,e){if(t&1&&(C(0),u(1,Re,2,2,"mat-option",17),b()),t&2){let p=e.ngIf;i(),r("ngForOf",p.data)}}function He(t,e){if(t&1&&(n(0,"mat-option",18),m(1),o()),t&2){let p=e.$implicit;r("value",p.id),i(),E(p.nombre)}}function Le(t,e){if(t&1&&(C(0),u(1,He,2,2,"mat-option",17),b()),t&2){let p=e.ngIf;i(),r("ngForOf",p.data)}}function We(t,e){if(t&1&&(n(0,"mat-option",18),m(1),o()),t&2){let p=e.$implicit;r("value",p.id),i(),E(p.nombre)}}function Ze(t,e){if(t&1&&(C(0),u(1,We,2,2,"mat-option",17),b()),t&2){let p=e.ngIf;i(),r("ngForOf",p.data)}}var Je={validation:!1},J=(()=>{let e=class e{constructor(){this.fb=d(be),this._locacionService=d(xe),this.empresasService=d(De),this.dialogRef=d(ne),this.fuseService=d(fe),this.estadosDatosService=d(j),this.toasService=d(Fe),this.tiposEmpresaService=d(Ae),this.empresaClienteService=d(O),this.subcripciones=d($e),this.departamentos$=this._locacionService.getDepartamentos(),this.empresas$=this.empresasService.getEmpresas(),this.tiposEmpresas$=this.tiposEmpresaService.getTiposEmpresas(),this.subcripciones$=this.subcripciones.getSubcripciones(),this._matData=d(se),this.datePipe=d(H)}getMunicipios(s){let a=s.value;this.municipios$=this._locacionService.getMunicipio(a)}ngOnInit(){this.createForm();let s=this._matData;if(s.edit){let a=s.data;this.form.patchValue(a);let{idDepartamento:l,fechaCorte:c}=a,g=new Date(c);this.form.patchValue({fechaCorte:g}),this.municipios$=this._locacionService.getMunicipio(l)}}onSave(){if(this.form.valid)if(this._matData.edit){let a=this.form.getRawValue(),{idDepartamento:c,fechaCobro:g,estado:x}=a,G=B(a,["idDepartamento","fechaCobro","estado"]),P=this.datePipe.transform(g,"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"),z=S({fechaCobro:P},G);this.fuseService.open(S({},L)).afterClosed().subscribe(R=>{R==="confirmed"?this.empresaClienteService.putEmpresaCliente(z).subscribe(q=>{this.estadosDatosService.stateGrid.next(!0),this.toasService.toasAlertWarn({message:"Registro actualizado con exito!",actionMessage:"Cerrar",duration:3e3}),this.closeDialog()}):this.closeDialog()})}else{let s=this.form.getRawValue(),{idDepartamento:c,idEmpresa:g,fechaCobro:x}=s,G=B(s,["idDepartamento","idEmpresa","fechaCobro"]),P=this.datePipe.transform(x,"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"),z=S({fechaCobro:P},G);this.fuseService.open(S({},L)).afterClosed().subscribe(R=>{R==="confirmed"?this.empresaClienteService.postEmpresaCliente(z).subscribe(q=>{console.log(q),this.estadosDatosService.stateGrid.next(!0),this.toasService.toasAlertWarn({message:"Registro creado con exito!",actionMessage:"Cerrar",duration:3e3}),this.closeDialog()}):this.closeDialog()})}}createForm(){this.form=this.fb.group({id:[null],nit:[""],razonSocial:[""],correo:[""],telefono:[""],direccion:[""],idDepartamento:[""],idTipoEmpresa:[""],idMunicipio:[""],fechaCorte:[""],idSuscripcion:[""],valorSuscripcion:[""],porcCobro:[""],fechaCobro:[""],estado:[!0]})}closeDialog(){this.dialogRef.close()}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=F({type:e,selectors:[["app-form-empresas-clientes"]],standalone:!0,features:[Y([{provide:re,useClass:we},{provide:oe,useValue:"en-GB"},H,Ne(Je)]),w],decls:72,vars:30,consts:[["data",""],["picker",""],[1,"w-full","sm:bg-card","sm:rounded-2xl","sm:w-96","max-w-96","sm:mx-0","mx-auto"],[1,""],[1,"mt-8","text-3xl","font-semibold","leading-tight","tracking-tight","text-center"],[1,"mt-8",3,"formGroup"],[1,"w-full"],["matInput","",3,"formControlName"],[3,"selectionChange","formControlName"],[4,"ngIf"],[3,"formControlName"],["matInput","","mask","separator.0","thousandSeparator",".",3,"formControlName"],["matInput","",3,"matDatepicker","formControlName"],["matIconSuffix","",3,"for"],[1,"flex","flex-wrap","justify-end","gap-2.5"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","bg-credigray-100","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(a,l){if(a&1){let c=Q();n(0,"div",2)(1,"div",3)(2,"div",4),m(3),o(),n(4,"form",5)(5,"mat-form-field",6)(6,"mat-label"),m(7,"Nit"),o(),f(8,"input",7),o(),n(9,"mat-form-field",6)(10,"mat-label"),m(11,"Raz\xF3n social"),o(),f(12,"input",7),o(),n(13,"mat-form-field",6)(14,"mat-label"),m(15,"Correo"),o(),f(16,"input",7),o(),n(17,"mat-form-field",6)(18,"mat-label"),m(19,"Tel\xE9fono"),o(),f(20,"input",7),o(),n(21,"mat-form-field",6)(22,"mat-label"),m(23,"Departamento"),o(),n(24,"mat-select",8,0),v("selectionChange",function(x){return M(c),I(l.getMunicipios(x))}),u(26,ze,2,1,"ng-container",9),_(27,"async"),o()(),n(28,"mat-form-field",6)(29,"mat-label"),m(30,"Ciudad"),o(),n(31,"mat-select",10),u(32,Be,2,1,"ng-container",9),_(33,"async"),o()(),n(34,"mat-form-field",6)(35,"mat-label"),m(36,"Direcci\xF3n"),o(),f(37,"input",7),o(),n(38,"mat-form-field",6)(39,"mat-label"),m(40,"Tipos de empresa"),o(),n(41,"mat-select",10),u(42,Le,2,1,"ng-container",9),_(43,"async"),o()(),n(44,"mat-form-field",6)(45,"mat-label"),m(46,"Subscripci\xF3n"),o(),n(47,"mat-select",10),u(48,Ze,2,1,"ng-container",9),_(49,"async"),o()(),n(50,"mat-form-field",6)(51,"mat-label"),m(52,"Valor subscripci\xF3n"),o(),f(53,"input",11),o(),n(54,"mat-form-field",6)(55,"mat-label"),m(56,"Porcentaje cobro"),o(),f(57,"input",7),o(),n(58,"mat-form-field",6)(59,"mat-label"),m(60,"Fecha de cobro"),o(),f(61,"input",12)(62,"mat-datepicker-toggle",13)(63,"mat-datepicker",null,1),o(),n(65,"div",14)(66,"button",15),v("click",function(){return M(c),I(l.closeDialog())}),n(67,"span"),m(68," Cancelar "),o()(),n(69,"button",16),v("click",function(){return M(c),I(l.onSave())}),n(70,"span"),m(71," Guardar "),o()()()()()()}if(a&2){let c=U(64);i(3),X(" ",l._matData.edit?"Actualizar empresa":"Agregar empresa"," "),i(),r("formGroup",l.form),i(4),r("formControlName","nit"),i(4),r("formControlName","razonSocial"),i(4),r("formControlName","correo"),i(4),r("formControlName","telefono"),i(4),r("formControlName","idDepartamento"),i(2),r("ngIf",y(27,22,l.departamentos$)),i(5),r("formControlName","idMunicipio"),i(),r("ngIf",y(33,24,l.municipios$)),i(5),r("formControlName","direccion"),i(4),r("formControlName","idTipoEmpresa"),i(),r("ngIf",y(43,26,l.tiposEmpresas$)),i(5),r("formControlName","idSuscripcion"),i(),r("ngIf",y(49,28,l.subcripciones$)),i(5),r("formControlName","valorSuscripcion"),i(4),r("formControlName","porcCobro"),i(4),r("matDatepicker",c)("formControlName","fechaCobro"),i(),r("for",c),i(4),r("color","primary"),i(3),r("color","primary")}},dependencies:[A,k,V,le,Ee,ve,ue,ge,he,Se,Ce,ie,ae,_e,ee,te,Ie,Te,Me,ce,pe,ke]});let t=e;return t})();var Ve=(()=>{let e=class e{constructor(s,a,l){this._matDialog=s,this.empresaClienteService=a,this.estadoDatosService=l,this.data=[],this.columns=["Nit","Razon social","Correo","Telefono","Direccion","Estado"],this.columnPropertyMap={Nit:"nit","Razon social":"razonSocial",Correo:"correo",Telefono:"telefono",Direccion:"direccion",Estado:"estado"},this.buttons=[{label:"Edit",icon:"edit",action:c=>{console.log("Editing",c),this.selectedData=c,this.onEdit()}}]}onNew(){this._matDialog.open(J,{autoFocus:!1,data:{edit:!1},maxHeight:"90vh",maxWidth:"100%"})}onEdit(){this._matDialog.open(J,{autoFocus:!1,data:{edit:!0,data:this.selectedData},maxHeight:"90vh",maxWidth:"100%"})}getEmpresas(){this.subcription$=this.empresaClienteService.getEmpresas().pipe(K(s=>(s.data.forEach(a=>{a.estado?a.estado=W.ACTIVO:a.estado=W.INACTIVO}),s))).subscribe(s=>{this.data=s.data})}listenGrid(){this.estadoDatosService.stateGrid.asObservable().subscribe(a=>{a&&this.getEmpresas()})}ngOnDestroy(){this.subcription$.unsubscribe()}ngOnInit(){this.getEmpresas(),this.listenGrid()}};e.\u0275fac=function(a){return new(a||e)(T(me),T(O),T(j))},e.\u0275cmp=F({type:e,selectors:[["app-grid-empresas-clientes"]],standalone:!0,features:[w],decls:15,vars:11,consts:[[1,"bg-card","flex","min-w-0","flex-auto","flex-col","dark:bg-transparent","sm:absolute","sm:inset-0","sm:overflow-hidden"],[1,"relative","flex","flex-0","flex-col","border-b","px-6","py-8","sm:flex-row","sm:items-center","sm:justify-between","md:px-8"],[1,"text-3xl","font-semibold","tracking-tight"],[1,"mt-6","flex","shrink-0","items-center","sm:ml-4","sm:mt-0"],[1,"fuse-mat-dense","rounded-lg","min-w-64",3,"subscriptSizing"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],["matInput","",3,"autocomplete","placeholder"],["mat-flat-button","",1,"ml-4","bg-crediblue-50","rounded-lg","transition","duration-200","text-white","font-semibold",3,"click","color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"flex","flex-auto","overflow-hidden"],[1,"flex","flex-auto","flex-col","overflow-hidden","sm:mb-18","sm:overflow-y-auto"],[3,"columns","displayedColumns","columnPropertyMap","data","buttons"]],template:function(a,l){a&1&&(n(0,"div",0)(1,"div",1)(2,"div",2),m(3,"Clientes - Aliados"),o(),n(4,"div",3)(5,"mat-form-field",4),f(6,"mat-icon",5)(7,"input",6),o(),n(8,"button",7),v("click",function(){return l.onNew()}),f(9,"mat-icon",8),n(10,"span",9),m(11,"Agregar"),o()()()(),n(12,"div",10)(13,"div",11),f(14,"app-custom-table",12),o()()()),a&2&&(i(5),r("subscriptSizing","dynamic"),i(),r("svgIcon","heroicons_solid:magnifying-glass"),i(),r("autocomplete","off")("placeholder","Buscar"),i(),r("color","primary"),i(),r("svgIcon","heroicons_outline:plus"),i(5),r("columns",l.columns)("displayedColumns",l.columns)("columnPropertyMap",l.columnPropertyMap)("data",l.data)("buttons",l.buttons))},dependencies:[A,k,de,V,ye]});let t=e;return t})();var jt=[{path:"",component:Ve}];export{jt as default};
