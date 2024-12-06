/*! Copyright 2024 Adobe
All Rights Reserved. */
import{jsx as r,jsxs as s,Fragment as w}from"@dropins/tools/preact-jsx-runtime.js";import{s as H}from"../chunks/fetch-graphql.js";import{c as R,d as V}from"../chunks/store-config.js";import"../chunks/ServerErrorSignal.js";import"@dropins/tools/event-bus.js";import{classes as j}from"@dropins/tools/lib.js";import{i as q}from"../chunks/isEmailAvailable.js";import{s as D}from"../chunks/setGuestEmailOnCart.js";import{Field as W,Input as G,Skeleton as U,SkeletonRow as x}from"@dropins/tools/components.js";/* empty css                             *//* empty css                   */import{useText as b,Text as _}from"@dropins/tools/i18n.js";/* empty css                      *//* empty css                  *//* empty css                       */import{w as J}from"../chunks/withConditionalRendering.js";import{useState as v,useRef as K,useEffect as C}from"@dropins/tools/preact-hooks.js";import"@dropins/tools/fetch-graphql.js";import"@dropins/tools/signals.js";import"../fragments.js";import"../chunks/synchronizeCheckout.js";const O=({value:t,error:i,hint:g,onChange:h,onBlur:o,onInvalid:u})=>{const m=b({LoginFormLabel:"Checkout.LoginForm.ariaLabel",LoginFormFloatingLabel:"Checkout.LoginForm.floatingLabel",LoginFormPlaceholder:"Checkout.LoginForm.placeholder"});return r(W,{size:"medium",error:i,hint:g,children:r(G,{"aria-label":m.LoginFormLabel,"aria-required":!0,autocomplete:"email",floatingLabel:m.LoginFormFloatingLabel,id:"customer-email",name:"customer-email",onBlur:o,onChange:h,onInvalid:u,placeholder:m.LoginFormPlaceholder,required:!0,type:"email",value:t})})},Q=({onClick:t})=>s("div",{className:"checkout-login-form__sign-in",children:[r(_,{id:"Checkout.LoginForm.account"}),r("a",{"data-testid":"sign-in-link",className:"checkout-login-form__link",href:"#",target:"_blank",rel:"noreferrer",onClick:t,children:r(_,{id:"Checkout.LoginForm.signIn"})})]}),X=({className:t,customerDetails:i,email:g,error:h,hint:o,loading:u=!1,name:m,onEmailBlur:f,onEmailChange:k,onEmailInvalid:E,onSignInClick:a,onSignOutClick:F,...L})=>{const l=b({Title:"Checkout.LoginForm.title"});return u?r(Y,{}):s("div",{className:"checkout-login-form","data-testid":"checkout-login-form",children:[s("div",{className:"checkout-login-form__heading",children:[r("h2",{className:"checkout-login-form__title",children:l.Title}),i?r(Z,{onClick:d=>{d.preventDefault(),F==null||F()}}):r(Q,{onClick:d=>{d.preventDefault(),a==null||a(g)}})]}),i?s("div",{className:"checkout-login-form__customer-details",children:[r("div",{className:"checkout-login-form__customer-name",children:`${i.firstName} ${i.lastName}`}),r("div",{className:"checkout-login-form__customer-email",children:i.email})]}):r("div",{className:"checkout-login-form__content",children:s("form",{...L,className:j(["dropin-login-form__form",t]),name:m,noValidate:!0,children:[r("button",{type:"submit",disabled:!0,style:"display: none","aria-hidden":"true"}),r(O,{value:g,error:h,hint:o,onChange:k,onBlur:f,onInvalid:E})]})})]})},Y=()=>s(U,{"data-testid":"login-form-skeleton",children:[r(x,{variant:"heading",fullWidth:!0}),r(x,{size:"medium",fullWidth:!0})]}),Z=({onClick:t})=>s("p",{className:"checkout-login-form__sign-out",children:[r(_,{id:"Checkout.LoginForm.switch"}),r("a",{className:"checkout-login-form__link",href:"#",target:"_blank",rel:"noreferrer",onClick:t,children:r(_,{id:"Checkout.LoginForm.signOut"})})]}),S={EMAIL:/^[a-z0-9,!#$%&'*+/=?^_`{|}~-]+(\.[a-z0-9,!#$%&'*+/=?^_`{|}~-]+)*@([a-z0-9-]+\.)+[a-z]{2,}$/i},N=t=>S.EMAIL.test(t),rr=1e3,y=({onSignInClick:t,onSignOutClick:i,initialData:g,...h})=>{const[o,u]=v(""),[m,f]=v(""),[k,E]=v(!0),[a,F]=v(!0),L=K(""),l=R.value.data,d=(l==null?void 0:l.email)||"",p=V.value.data,c=b({LoginFormInvalidEmailError:"Checkout.LoginForm.invalidEmailError",LoginFormMissingEmailError:"Checkout.LoginForm.missingEmailError",LoginFormEmailExistsAlreadyHaveAccount:"Checkout.LoginForm.emailExists.alreadyHaveAccount",LoginFormEmailExistsSignInButton:"Checkout.LoginForm.emailExists.signInButton",LoginFormEmailExistsForFasterCheckout:"Checkout.LoginForm.emailExists.forFasterCheckout"}),A=e=>e.valid?"":e.valueMissing?c.LoginFormMissingEmailError:c.LoginFormInvalidEmailError,B=e=>N(e)?"":e===""?c.LoginFormMissingEmailError:c.LoginFormInvalidEmailError,M=e=>{const n=e.target;u(n.value),f(""),E(!0)},T=e=>{const n=e.target;f(B(n.value))},z=e=>{const n=e.target;f(A(n.validity))};C(()=>{!a||!l||(F(!1),u(l.email||""))},[l,a]),C(()=>{if(a||H.authenticated)return;const e=setTimeout(()=>{!N(o)||o===L.current||(L.current=o,q(o).then(n=>{E(n),d!==o&&D(o).catch(console.error)}).catch(n=>{console.error(n),E(!0)}))},rr);return()=>{e&&clearTimeout(e)}},[d,o,a]);const I=k?"":s(w,{children:[c.LoginFormEmailExistsAlreadyHaveAccount," ",r("a",{href:"#",onClick:e=>{e.preventDefault(),t==null||t(o)},children:c.LoginFormEmailExistsSignInButton})," ",c.LoginFormEmailExistsForFasterCheckout]}),$=e=>{t==null||t(N(e)?e:"")},P=p?{firstName:p.firstName,lastName:p.lastName,email:p.email}:void 0;return r(X,{...h,customerDetails:P,email:o,error:m,hint:I,loading:a,onEmailBlur:T,onEmailChange:M,onEmailInvalid:z,onSignInClick:$,onSignOutClick:i})};y.displayName="LoginFormContainer";const kr=J(y);export{kr as LoginForm,kr as default};