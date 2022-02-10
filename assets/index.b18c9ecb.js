import{t as x,c as C,o as P,a as S,w as _,b as m,u,n as N,g as T,m as $,S as V,r as b,d as L,e as R,f as l,_ as O,T as E,h as F,i as H,p as q,j as G,k as Q,l as w,F as j,q as U,s as z,I as D,v as K,B as J,x as W}from"./vendor.add6eaed.js";import X from"https://esm.sh/copy-to-clipboard";import Y from"https://cdn.jsdelivr.net/npm/codemirror/src/codemirror.js";const Z=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function c(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=c(e);fetch(e.href,a)}};Z();var ee="/assets/github.78818959.svg",te="/assets/logo.c9f36a96.svg";const ae=["innerHTML"],ne={props:{content:String,loading:Boolean},setup(i){const r=i,{content:c,loading:o}=x(r),e=C(()=>$(c.value));return(a,d)=>{const h=V;return P(),S(h,{spinning:u(o)},{default:_(()=>[m("div",N(T(a.$attrs)),[m("div",{innerHTML:u(e)},null,8,ae)],16)]),_:1},8,["spinning"])}}};var B=(i,r)=>{const c=i.__vccOpts||i;for(const[o,e]of r)c[o]=e;return c};const oe={class:"my-editor"},se={props:{content:{type:String},readonly:{type:Boolean,default:()=>!1},loading:Boolean},emits:["update:content"],setup(i,{expose:r,emit:c}){const o=i,{content:e,readonly:a,loading:d}=x(o);let h;const v=b(null);L(()=>{h=Y.fromTextArea(v.value,{lineNumbers:!0,readonly:!!a}),typeof e.value=="string"&&g(e.value),h.on("change",(y,t)=>{c("update:content",h.doc.getValue())})});function g(y){h.doc.setValue(y)}return r({update:g}),(y,t)=>(P(),R("div",oe,[m("textarea",{ref_key:"input",ref:v},null,512)]))}};var M=B(se,[["__scopeId","data-v-5439ba93"]]);const re={props:{content:String,loading:Boolean},setup(i){const r=i,{content:c,loading:o}=x(r);return(e,a)=>{const d=O,h=E;return P(),S(h,{class:"render"},{default:_(()=>[l(d,{key:"1",tab:"Result"},{default:_(()=>[l(ne,{content:u(c),loading:u(o),class:"markdown",style:{"padding-left":"30px"}},null,8,["content","loading"])]),_:1}),l(d,{key:"2",tab:"Source"},{default:_(()=>[l(M,{content:u(c),loading:u(o),readonly:!0},null,8,["content","loading"])]),_:1})]),_:1})}}};const I=i=>(q("data-v-61bd0d07"),i=i(),G(),i),le={style:{position:"relative"}},ie=I(()=>m("a",{href:"https://github.com/release-lab",target:"_blank",style:{position:"fixed",right:"0",top:"0"}},[m("img",{src:ee,style:{width:"60px",height:"60px"}})],-1)),ce={class:"toolbar"},pe=I(()=>m("img",{style:{"max-width":"100%","max-height":"100%"},src:te},null,-1)),ue=U(" Generate "),de=U(" Share "),_e={class:"container"},me={class:"left"},he={style:{display:"flex",height:"100%","padding-left":"10px"}},fe={class:"right"},ve={setup(i){const r=b(!1),c=b(null),o=b(""),e=F({repo:"https://github.com/release-lab/whatchanged.git",branch:"master",version:"HEAD~"}),a=x(e);function d(t){Q(()=>e[t],n=>{h(t,n)})}function h(t,n){const s=new URL(window.location.href);s.searchParams.has(t)?s.searchParams.set(t,n):s.searchParams.append(t,n),window.history.pushState(null,null,s)}d("branch"),d("repo"),d("version");const v=b("");function g(){const t=encodeURIComponent(o.value);r.value=!0;const n=Math.random()+"";w.info({key:n,message:"Generating",description:"This may take a few minutes..."});const s=new URL("https://whatchanged.herokuapp.com");s.searchParams.append("repo",e.repo||""),s.searchParams.append("branch",e.branch||""),s.searchParams.append("version",e.version||""),s.searchParams.append("template",t||""),fetch(s).then(p=>p.text()).then(p=>{w.close(n),v.value=p}).catch(p=>{w.close(n),w.error({message:"Error",description:p.message})}).finally(()=>{r.value=!1})}function y(){const t=new URL(window.location.href);t.searchParams.append("tpl",o.value),X(t.href),z.info("URL have been copy to clipboard.")}return L(()=>{const t=new URL(window.location.href);let n=0;if(t.searchParams.has("username")&&(e.username=t.searchParams.get("username"),n++),t.searchParams.has("repo")&&(e.repo=t.searchParams.get("repo"),n++),t.searchParams.has("branch")&&(e.repo=t.searchParams.get("branch"),n++),t.searchParams.has("version")&&(e.version=t.searchParams.get("version")),t.searchParams.has("tpl"))n++,o.value=t.searchParams.get("tpl");else{const s=new URL("https://whatchanged.herokuapp.com");s.pathname="/template",fetch(s).then(p=>p.text()).then(p=>{o.value=p,c.value.update(o.value)})}n===3&&e.username&&e.repo&&g()}),(t,n)=>{const s=D,p=K,k=J,A=j;return P(),R("div",le,[ie,m("div",ce,[pe,l(A,{layout:"inline",model:u(a),onSubmit:H(g,["prevent"])},{default:_(()=>[l(p,{label:"Repository",style:{width:"480px"}},{default:_(()=>[l(s,{value:u(a).repo.value,"onUpdate:value":n[0]||(n[0]=f=>u(a).repo.value=f)},null,8,["value"])]),_:1}),l(p,{label:"Branch"},{default:_(()=>[l(s,{value:u(a).branch.value,"onUpdate:value":n[1]||(n[1]=f=>u(a).branch.value=f)},null,8,["value"])]),_:1}),l(p,{label:"Version"},{default:_(()=>[l(s,{value:u(a).version.value,"onUpdate:value":n[2]||(n[2]=f=>u(a).version.value=f)},null,8,["value"])]),_:1}),l(p,null,{default:_(()=>[l(k,{type:"primary","html-type":"submit",loading:r.value},{default:_(()=>[ue]),_:1},8,["loading"]),l(k,{type:"default",onClick:y,style:{"margin-left":"20px"}},{default:_(()=>[de]),_:1})]),_:1})]),_:1},8,["model","onSubmit"])]),m("div",_e,[m("div",me,[m("div",he,[l(M,{ref_key:"editor",ref:c,template:o.value,"onUpdate:template":n[3]||(n[3]=f=>o.value=f),readonly:!0},null,8,["template"])])]),m("div",fe,[l(re,{content:v.value,loading:r.value},null,8,["content","loading"])])])])}}};var ge=B(ve,[["__scopeId","data-v-61bd0d07"]]);const ye=W(ge);ye.mount("#app");