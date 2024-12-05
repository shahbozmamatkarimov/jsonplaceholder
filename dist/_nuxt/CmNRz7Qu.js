import{i as ce,_ as s,c as W,l as E,P as te,a as de,m as ue,r as N,Y as fe,K as be,Z as L,$ as T,a0 as k,s as he,b as ne,p as ve,v as pe,F as me,u as ge}from"./XHRsKjHK.js";import{d as J,r as w,F as X,z as C,a1 as xe,i as G,D as Ce,e as ye,o as $e,a2 as Se,v as R,x as H,J as ke,K as we,L as Ie,t as U,y as ee,a3 as _e}from"./C5z8L6On.js";import{u as Oe}from"./-3vFPiCX.js";import{u as oe,F as Pe}from"./DlMAtvUg.js";var De=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)a.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(t[n[l]]=e[n[l]]);return t};const Be={prefixCls:String,name:String,id:String,type:String,defaultChecked:{type:[Boolean,Number],default:void 0},checked:{type:[Boolean,Number],default:void 0},disabled:Boolean,tabindex:{type:[Number,String]},readonly:Boolean,autofocus:Boolean,value:te.any,required:Boolean},Me=J({compatConfig:{MODE:3},name:"Checkbox",inheritAttrs:!1,props:ce(Be,{prefixCls:"rc-checkbox",type:"checkbox",defaultChecked:!1}),emits:["click","change"],setup(e,a){let{attrs:t,emit:n,expose:l}=a;const f=w(e.checked===void 0?e.defaultChecked:e.checked),h=w();X(()=>e.checked,()=>{f.value=e.checked}),l({focus(){var o;(o=h.value)===null||o===void 0||o.focus()},blur(){var o;(o=h.value)===null||o===void 0||o.blur()}});const m=w(),b=o=>{if(e.disabled)return;e.checked===void 0&&(f.value=o.target.checked),o.shiftKey=m.value;const I={target:s(s({},e),{checked:o.target.checked}),stopPropagation(){o.stopPropagation()},preventDefault(){o.preventDefault()},nativeEvent:o};e.checked!==void 0&&(h.value.checked=!!e.checked),n("change",I),m.value=!1},y=o=>{n("click",o),m.value=o.shiftKey};return()=>{const{prefixCls:o,name:I,id:v,type:g,disabled:c,readonly:$,tabindex:P,autofocus:M,value:S,required:A}=e,i=De(e,["prefixCls","name","id","type","disabled","readonly","tabindex","autofocus","value","required"]),{class:r,onFocus:u,onBlur:d,onKeydown:p,onKeypress:j,onKeyup:F}=t,D=s(s({},i),t),_=Object.keys(D).reduce((z,O)=>((O.startsWith("data-")||O.startsWith("aria-")||O==="role")&&(z[O]=D[O]),z),{}),Y=W(o,r,{[`${o}-checked`]:f.value,[`${o}-disabled`]:c}),K=s(s({name:I,id:v,type:g,readonly:$,disabled:c,tabindex:P,class:`${o}-input`,checked:!!f.value,autofocus:M,value:S},_),{onChange:b,onClick:y,onFocus:u,onBlur:d,onKeydown:p,onKeypress:j,onKeyup:F,required:A});return C("span",{class:Y},[C("input",E({ref:h},K),null),C("span",{class:`${o}-inner`},null)])}}}),je=new be("antCheckboxEffect",{"0%":{transform:"scale(1)",opacity:.5},"100%":{transform:"scale(1.6)",opacity:0}}),Fe=e=>{const{checkboxCls:a}=e,t=`${a}-wrapper`;return[{[`${a}-group`]:s(s({},N(e)),{display:"inline-flex",flexWrap:"wrap",columnGap:e.marginXS,[`> ${e.antCls}-row`]:{flex:1}}),[t]:s(s({},N(e)),{display:"inline-flex",alignItems:"baseline",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"},[`& + ${t}`]:{marginInlineStart:0},[`&${t}-in-form-item`]:{'input[type="checkbox"]':{width:14,height:14}}}),[a]:s(s({},N(e)),{position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer",alignSelf:"center",[`${a}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0,margin:0,[`&:focus-visible + ${a}-inner`]:s({},fe(e))},[`${a}-inner`]:{boxSizing:"border-box",position:"relative",top:0,insetInlineStart:0,display:"block",width:e.checkboxSize,height:e.checkboxSize,direction:"ltr",backgroundColor:e.colorBgContainer,border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,borderCollapse:"separate",transition:`all ${e.motionDurationSlow}`,"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"21.5%",display:"table",width:e.checkboxSize/14*5,height:e.checkboxSize/14*8,border:`${e.lineWidthBold}px solid ${e.colorWhite}`,borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:`all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`}},"& + span":{paddingInlineStart:e.paddingXS,paddingInlineEnd:e.paddingXS}})},{[a]:{"&-indeterminate":{[`${a}-inner`]:{"&:after":{top:"50%",insetInlineStart:"50%",width:e.fontSizeLG/2,height:e.fontSizeLG/2,backgroundColor:e.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}}}}},{[`${t}:hover ${a}:after`]:{visibility:"visible"},[`
        ${t}:not(${t}-disabled),
        ${a}:not(${a}-disabled)
      `]:{[`&:hover ${a}-inner`]:{borderColor:e.colorPrimary}},[`${t}:not(${t}-disabled)`]:{[`&:hover ${a}-checked:not(${a}-disabled) ${a}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${a}-checked:not(${a}-disabled):after`]:{borderColor:e.colorPrimaryHover}}},{[`${a}-checked`]:{[`${a}-inner`]:{backgroundColor:e.colorPrimary,borderColor:e.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:`all ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`}},"&:after":{position:"absolute",top:0,insetInlineStart:0,width:"100%",height:"100%",borderRadius:e.borderRadiusSM,visibility:"hidden",border:`${e.lineWidthBold}px solid ${e.colorPrimary}`,animationName:je,animationDuration:e.motionDurationSlow,animationTimingFunction:"ease-in-out",animationFillMode:"backwards",content:'""',transition:`all ${e.motionDurationSlow}`}},[`
        ${t}-checked:not(${t}-disabled),
        ${a}-checked:not(${a}-disabled)
      `]:{[`&:hover ${a}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${a}:after`]:{borderColor:e.colorPrimaryHover}}},{[`${t}-disabled`]:{cursor:"not-allowed"},[`${a}-disabled`]:{[`&, ${a}-input`]:{cursor:"not-allowed",pointerEvents:"none"},[`${a}-inner`]:{background:e.colorBgContainerDisabled,borderColor:e.colorBorder,"&:after":{borderColor:e.colorTextDisabled}},"&:after":{display:"none"},"& + span":{color:e.colorTextDisabled},[`&${a}-indeterminate ${a}-inner::after`]:{background:e.colorTextDisabled}}}]};function Ge(e,a){const t=ue(a,{checkboxCls:`.${e}`,checkboxSize:a.controlInteractiveSize});return[Fe(t)]}const re=de("Checkbox",(e,a)=>{let{prefixCls:t}=a;return[Ge(t,e)]}),Te=()=>({name:String,prefixCls:String,options:L([]),disabled:Boolean,id:String}),Ee=()=>s(s({},Te()),{defaultValue:L(),value:L(),onChange:T(),"onUpdate:value":T()}),ze=()=>({prefixCls:String,defaultChecked:k(),checked:k(),disabled:k(),isGroup:k(),value:te.any,name:String,id:String,indeterminate:k(),type:he("checkbox"),autofocus:k(),onChange:T(),"onUpdate:checked":T(),onClick:T(),skipGroup:k(!1)}),Ve=()=>s(s({},ze()),{indeterminate:k(!1)}),le=Symbol("CheckboxGroupContext");var ae=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)a.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(t[n[l]]=e[n[l]]);return t};const B=J({compatConfig:{MODE:3},name:"ACheckbox",inheritAttrs:!1,__ANT_CHECKBOX:!0,props:Ve(),setup(e,a){let{emit:t,attrs:n,slots:l,expose:f}=a;const h=oe(),m=Pe.useInject(),{prefixCls:b,direction:y,disabled:o}=ne("checkbox",e),I=ve(),[v,g]=re(b),c=xe(le,void 0),$=Symbol("checkboxUniId"),P=G(()=>(c==null?void 0:c.disabled.value)||o.value);Ce(()=>{!e.skipGroup&&c&&c.registerValue($,e.value)}),ye(()=>{c&&c.cancelValue($)}),$e(()=>{pe(!!(e.checked!==void 0||c||e.value===void 0))});const M=r=>{const u=r.target.checked;t("update:checked",u),t("change",r),h.onFieldChange()},S=w();return f({focus:()=>{var r;(r=S.value)===null||r===void 0||r.focus()},blur:()=>{var r;(r=S.value)===null||r===void 0||r.blur()}}),()=>{var r;const u=me((r=l.default)===null||r===void 0?void 0:r.call(l)),{indeterminate:d,skipGroup:p,id:j=h.id.value}=e,F=ae(e,["indeterminate","skipGroup","id"]),{onMouseenter:D,onMouseleave:_,onInput:Y,class:K,style:z}=n,O=ae(n,["onMouseenter","onMouseleave","onInput","class","style"]),x=s(s(s(s({},F),{id:j,prefixCls:b.value}),O),{disabled:P.value});c&&!p?(x.onChange=function(){for(var Z=arguments.length,Q=new Array(Z),V=0;V<Z;V++)Q[V]=arguments[V];t("change",...Q),c.toggleOption({label:u,value:e.value})},x.name=c.name.value,x.checked=c.mergedValue.value.includes(e.value),x.disabled=P.value||I.value,x.indeterminate=d):x.onChange=M;const ie=W({[`${b.value}-wrapper`]:!0,[`${b.value}-rtl`]:y.value==="rtl",[`${b.value}-wrapper-checked`]:x.checked,[`${b.value}-wrapper-disabled`]:x.disabled,[`${b.value}-wrapper-in-form-item`]:m.isFormItemInput},K,g.value),se=W({[`${b.value}-indeterminate`]:d},g.value);return v(C("label",{class:ie,style:z,onMouseenter:D,onMouseleave:_},[C(Me,E(E({"aria-checked":d?"mixed":void 0},x),{},{class:se,ref:S}),null),u.length?C("span",null,[u]):null]))}}}),q=J({compatConfig:{MODE:3},name:"ACheckboxGroup",inheritAttrs:!1,props:Ee(),setup(e,a){let{slots:t,attrs:n,emit:l,expose:f}=a;const h=oe(),{prefixCls:m,direction:b}=ne("checkbox",e),y=G(()=>`${m.value}-group`),[o,I]=re(y),v=w((e.value===void 0?e.defaultValue:e.value)||[]);X(()=>e.value,()=>{v.value=e.value||[]});const g=G(()=>e.options.map(i=>typeof i=="string"||typeof i=="number"?{label:i,value:i}:i)),c=w(Symbol()),$=w(new Map),P=i=>{$.value.delete(i),c.value=Symbol()},M=(i,r)=>{$.value.set(i,r),c.value=Symbol()},S=w(new Map);return X(c,()=>{const i=new Map;for(const r of $.value.values())i.set(r,!0);S.value=i}),Se(le,{cancelValue:P,registerValue:M,toggleOption:i=>{const r=v.value.indexOf(i.value),u=[...v.value];r===-1?u.push(i.value):u.splice(r,1),e.value===void 0&&(v.value=u);const d=u.filter(p=>S.value.has(p)).sort((p,j)=>{const F=g.value.findIndex(_=>_.value===p),D=g.value.findIndex(_=>_.value===j);return F-D});l("update:value",d),l("change",d),h.onFieldChange()},mergedValue:v,name:G(()=>e.name),disabled:G(()=>e.disabled)}),f({mergedValue:v}),()=>{var i;const{id:r=h.id.value}=e;let u=null;return g.value&&g.value.length>0&&(u=g.value.map(d=>{var p;return C(B,{prefixCls:m.value,key:d.value.toString(),disabled:"disabled"in d?d.disabled:e.disabled,indeterminate:d.indeterminate,value:d.value,checked:v.value.indexOf(d.value)!==-1,onChange:d.onChange,class:`${y.value}-item`},{default:()=>[t.label!==void 0?(p=t.label)===null||p===void 0?void 0:p.call(t,d):d.label]})})),o(C("div",E(E({},n),{},{class:[y.value,{[`${y.value}-rtl`]:b.value==="rtl"},n.class,I.value],id:r}),[u||((i=t.default)===null||i===void 0?void 0:i.call(t))]))}}});B.Group=q;B.install=function(e){return e.component(B.name,B),e.component(q.name,q),e};const Ae={class:"space-y-4"},Ke={class:"bg-[#f0f5fa] p-4 rounded-lg flex gap-2"},Le={__name:"index",setup(e){const a=Oe();return ge(),a.getTodos(),(t,n)=>{const l=B;return U(),R("section",null,[H("ul",Ae,[(U(!0),R(ke,null,we(Ie(a).store.todos,(f,h)=>(U(),R("li",Ke,[C(l,{checked:f.completed,"onUpdate:checked":m=>f.completed=m},null,8,["checked","onUpdate:checked"]),H("p",null,"#"+ee(f.id),1),H("h1",{class:_e(["font-semibold max-w-[90%]",f.completed?"line-through":""])},ee(f.title),3)]))),256))])])}}};export{Le as default};