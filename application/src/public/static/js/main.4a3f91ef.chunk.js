(this["webpackJsonpweb-interface"]=this["webpackJsonpweb-interface"]||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(1),r=a.n(s),n=a(2),i=a.n(n),o=(a(16),a(4)),l=(a(17),"http://127.0.0.1:4000/rates");var d={postRate:function(e){return fetch(l,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.status}))},getRates:function(){return fetch(l,{headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return e}))}};var u=function(e){return Object(c.jsx)("div",{className:"col-4 mb-2",children:Object(c.jsx)("div",{className:"card border border-primary cardShadown",children:Object(c.jsx)("div",{className:"card-body",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-12",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("p",{className:"text-center",children:e.rate.pair.from.amount+" "+e.rate.pair.from.rate})})}),Object(c.jsx)("div",{className:"col-12",children:Object(c.jsx)("div",{className:"d-flex justify-content-center bd-highlight",children:Object(c.jsx)("h6",{className:"bd-highlight text-primary",children:"TO"})})}),Object(c.jsx)("div",{className:"col-12",children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("p",{className:"text-center",children:e.rate.pair.to.amount+" "+e.rate.pair.to.rate})})}),Object(c.jsxs)("div",{className:"col-12",children:[Object(c.jsx)("p",{className:"m-0",children:"Fee "+e.rate.fee+"%"}),Object(c.jsx)("p",{className:"m-0",children:"Fee amount "+e.rate.feeAmount+" "+e.rate.pair.from.rate}),Object(c.jsx)("p",{className:"m-0 mb-3",children:"Mark-up "+e.rate.mark+" "+e.rate.pair.from.rate})]}),Object(c.jsx)("div",{className:"col-12",children:Object(c.jsx)("hr",{className:"mx-1 my-0"})}),Object(c.jsx)("div",{className:"col-12",children:function(e){var t=new Date(e),a=t.getFullYear(),s=t.getMonth()+1,r=t.getDate(),n=t.getHours(),i=t.getMinutes();return r<10&&(r="0"+r),s<10&&(s="0"+s),Object(c.jsx)("p",{className:"m-0 mt-1 text-center text-secondary",children:r+"/"+s+"/"+a+" "+n+":"+i})}(e.rate.date)})]})})})})},j=a(9),m=a(10),h=function(){function e(t){var a=this;Object(j.a)(this,e),this.fixerServer="http://data.fixer.io/api/latest?access_key=ffcc344a3f31700c0020d166fd17ea96",this.RatesMap=new Map,this.LoadingFxStatus=t,fetch(this.fixerServer).then((function(e){return e.json()})).then((function(e){e.success?(a.fixerData=e,a.refreshRatesValues(),a.LoadingFxStatus("OK")):a.LoadingFxStatus("ERR")}))}return Object(m.a)(e,[{key:"refreshRatesValues",value:function(){this.RatesMap.set("EURUSD",this.fixerData.rates.USD),this.RatesMap.set("EURARS",this.fixerData.rates.ARS),this.RatesMap.set("EURBRL",this.fixerData.rates.BRL),this.RatesMap.set("USDARS",this.fixerData.rates.ARS/this.fixerData.rates.USD),this.RatesMap.set("USDBRL",this.fixerData.rates.BRL/this.fixerData.rates.USD),this.RatesMap.set("BRLARS",this.fixerData.rates.ARS/this.fixerData.rates.BRL)}},{key:"getFeePorcentage",value:function(e){switch(e){case"EURUSD":return 1;case"EURARS":return 3;case"EURBRL":return 4;case"USDARS":return 2;case"USDBRL":return 1;case"BRLARS":return 7;default:return 5}}},{key:"getRate",value:function(e,t){var a={};a.convertAmount=(this.RatesMap.get(e)*t).toFixed(2),a.fee=this.getFeePorcentage(e);var c=t*(this.getFeePorcentage(e)/100);a.feeAmount=c.toFixed(2);var s=t+c;return a.mark=s.toFixed(2),a}}]),e}(),b=a(3),x=(a(7),new h((function(e){switch(e){case"OK":b.a.success("Fixer data loaded");break;case"ERR":default:b.a.error("Err loading fixer data. try again")}})));var f=function(e){var t=Object(s.useState)(["USD","ARS","BRL"]),a=Object(o.a)(t,2),r=a[0],n=a[1],i=Object(s.useState)({convertAmount:0,fee:0,feeAmount:0,mark:0,selectFrom:"EUR",selectTo:"USD",amontToConvert:0}),l=Object(o.a)(i,2),u=l[0],j=l[1];function m(){var e=document.querySelector("#amountToconvert").value,t=document.querySelector("#selectFrom").value,a=document.querySelector("#selectTo").value,c=t+a,s=x.getRate(c,Number(e));console.log(s),j({convertAmount:s.convertAmount,fee:s.fee,feeAmount:s.feeAmount,mark:s.mark,selectFrom:t,selectTo:a,amontToConvert:e})}function h(){switch(document.querySelector("#selectFrom").value){case"EUR":n(["USD","ARS","BRL"]);break;case"USD":n(["ARS","BRL"]);break;case"BRL":n(["ARS"]);break;default:n(["USD","ARS","BRL"])}m()}return b.a.configure(),Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("div",{className:"card-header",children:"New Rate"}),Object(c.jsx)("div",{className:"card-body",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-12",children:Object(c.jsxs)("div",{className:"input-group mb-3",children:[Object(c.jsx)("div",{className:"input-group-prepend",children:Object(c.jsxs)("select",{className:"custom-select",id:"selectFrom",children:[Object(c.jsx)("option",{value:"EUR",onClick:h,children:"EUR"}),Object(c.jsx)("option",{value:"USD",onClick:h,children:"USD"}),Object(c.jsx)("option",{value:"BRL",onClick:h,children:"BRL"})]})}),Object(c.jsx)("input",{type:"number",className:"form-control","aria-label":"Text input with dropdown button",onChange:m,id:"amountToconvert"})]})}),Object(c.jsx)("div",{className:"col-12",children:Object(c.jsx)("div",{className:"d-flex justify-content-center bd-highlight",children:Object(c.jsx)("h3",{className:"bd-highlight text-primary",children:"="})})}),Object(c.jsx)("div",{className:"col-12",children:Object(c.jsxs)("div",{className:"input-group mb-3",children:[Object(c.jsx)("div",{className:"input-group-prepend",children:Object(c.jsx)("select",{className:"custom-select",id:"selectTo",children:r.map((function(e){return t=e,a=e,Object(c.jsx)("option",{value:a,onClick:h,children:t},a);var t,a}))})}),Object(c.jsx)("input",{type:"number",className:"form-control","aria-label":"Text input with dropdown button",id:"amountConverted",value:u.convertAmount,disabled:!0})]})}),Object(c.jsxs)("div",{className:"col-12",children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("p",{className:"col-5 font-weight-bold",children:"Fee:"}),Object(c.jsx)("p",{className:"col-7",id:"cardFee",children:u.fee+"%"})]}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("p",{className:"col-5 font-weight-bold",children:"Fee amount"}),Object(c.jsx)("p",{className:"col-7",id:"cardFeeAmount",children:u.feeAmount+" "+u.selectFrom})]}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("p",{className:"col-5 font-weight-bold",children:"Mark-up"}),Object(c.jsx)("p",{className:"col-7",id:"cardMark",children:u.mark+" "+u.selectFrom})]})]}),Object(c.jsx)("div",{className:"col-12 mt-2",children:Object(c.jsx)("div",{className:"d-flex justify-content-center bd-highlight",children:Object(c.jsx)("button",{type:"button",className:"btn btn-outline-primary",onClick:function(){var t={pair:{from:{rate:u.selectFrom,amount:Number(u.amontToConvert)},to:{rate:u.selectTo,amount:Number(u.convertAmount)}},fee:Number(u.fee),feeAmount:Number(u.feeAmount),mark:Number(u.mark)};d.postRate(t).then((function(t){201===t?(b.a.success("Rate saved"),e.refreshRatesFromApi()):409===t?b.a.error("Err wrong rate information"):b.a.error("Err saving Rate")}))},children:"Buy"})})})]})})]})})};var v=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1];function n(){d.getRates().then((function(e){r(e)}))}return Object(s.useEffect)((function(){n()}),[]),Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"row mt-5",children:[Object(c.jsx)("div",{className:"col-8",children:Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("div",{className:"card-header",children:"Rates List"}),Object(c.jsx)("div",{className:"card-body",children:Object(c.jsx)("div",{className:"row overflow-auto",style:{maxHeight:"75vh"},children:a.map((function(e){return Object(c.jsx)(u,{rate:e},e._id)}))})})]})}),Object(c.jsx)("div",{className:"col-4",children:Object(c.jsx)(f,{refreshRatesFromApi:n})})]})})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,27)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),r(e),n(e)}))};a(20),a(21);i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),O()}},[[24,1,2]]]);
//# sourceMappingURL=main.4a3f91ef.chunk.js.map