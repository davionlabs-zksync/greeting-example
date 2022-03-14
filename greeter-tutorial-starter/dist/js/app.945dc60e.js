(function(e){function t(t){for(var r,s,o=t[0],c=t[1],u=t[2],d=0,p=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/greeting-example/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},1:function(e,t){},5152:function(e){e.exports=JSON.parse('[{"address":"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee","decimals":18,"name":"ETH","symbol":"ETH"},{"address":"0xeb8f08a975ab53e34d8a0330e0d34de942c95926","decimals":6,"name":"USD Coin (rinkeby)","symbol":"USDC"}]')},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.mainLoading?n("div",{attrs:{id:"app"}},[n("div",{staticClass:"start-screen"},[n("h1",[e._v("Welcome to Greeter dApp!")]),n("button",{on:{click:e.connectMetamask}},[e._v("Connect Metamask")])])]):n("div",{attrs:{id:"app"}},[n("h1",[e._v("Greeter says: "+e._s(e.greeting)+" 👋")]),n("div",[e._v(" This a simple dApp, which can choose fee token and interact with the `Greeter` smart contract. ")]),n("div",{staticClass:"main-box"},[n("div",[e._v(" Select token: "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedTokenAddress,expression:"selectedTokenAddress"}],on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedTokenAddress=t.target.multiple?n:n[0]},e.changeToken]}},e._l(e.tokens,(function(t){return n("option",{key:t.address,domProps:{value:t.address}},[e._v(" "+e._s(t.symbol)+" ")])})),0)]),e.selectedToken?n("div",{staticClass:"balance"},[n("p",[e._v(" Balance: "),e.retreivingBalance?n("span",[e._v("Loading...")]):n("span",[e._v(e._s(e.currentBalance)+" "+e._s(e.selectedToken.symbol))])]),n("p",[e._v(" Expected fee: "),e.retreivingFee?n("span",[e._v("Loading...")]):n("span",[e._v(e._s(e.currentFee)+" "+e._s(e.selectedToken.symbol))]),n("button",{staticClass:"refresh-button",on:{click:e.updateFee}},[e._v("Refresh")])])]):e._e(),n("div",{staticClass:"greeting-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newGreeting,expression:"newGreeting"}],attrs:{disabled:!e.selectedToken||0!=e.txStatus,placeholder:"Write new greeting here..."},domProps:{value:e.newGreeting},on:{input:function(t){t.target.composing||(e.newGreeting=t.target.value)}}}),n("button",{staticClass:"change-button",attrs:{disabled:!e.selectedToken||0!=e.txStatus||e.retreivingFee},on:{click:e.changeGreeting}},[e.selectedToken&&!e.txStatus?n("span",[e._v("Change greeting")]):e.selectedToken?1==e.txStatus?n("span",[e._v("Sending tx...")]):2==e.txStatus?n("span",[e._v("Waiting until tx is committed...")]):3==e.txStatus?n("span",[e._v("Updating the page...")]):e.retreivingFee?n("span",[e._v("Updating the fee...")]):e._e():n("span",[e._v("Select token to pay fee first")])])])])])},i=[],s=n("1da1"),o=(n("e9c4"),n("d3b7"),n("4de4"),n("96cf"),n("82e6")),c=n("c030"),u="0x9AFcC5DD19d929B29d0Ae469299bD4695Ece0ace",l=n("9f1d"),d=n("5152"),p={name:"App",data:function(){return{newGreeting:"",greeting:"unknown",tokens:d,selectedToken:null,selectedTokenAddress:"",mainLoading:!0,provider:null,signer:null,contract:null,canSubmit:!0,txStatus:0,retreivingFee:!1,retreivingBalance:!1,currentBalance:"",currentFee:""}},methods:{initializeProviderAndSigner:function(){this.provider=new o["Web3Provider"](window.ethereum),this.signer=this.provider.getSigner(),this.contract=new o["Contract"](u,l,this.signer)},getGreeting:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.contract.greet();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},getFee:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.contract.estimateGas.setGreeting(e.newGreeting);case 2:return n=t.sent,t.next=5,e.provider.getGasPrice();case 5:return r=t.sent,t.abrupt("return",c["ethers"].utils.formatUnits(n.mul(r),e.selectedToken.decimals));case 7:case"end":return t.stop()}}),t)})))()},getBalance:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.signer.getBalance(e.selectedToken.address);case 2:return n=t.sent,t.abrupt("return",c["ethers"].utils.formatUnits(n,e.selectedToken.decimals));case 4:case"end":return t.stop()}}),t)})))()},changeGreeting:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.txStatus=1,t.prev=1,console.log("11111111111"),t.next=5,e.contract.setGreeting(e.newGreeting,{customData:{feeToken:e.selectedToken.address}});case 5:return n=t.sent,console.log("2222222222"),e.txStatus=2,t.next=10,n.wait();case 10:return console.log("33333333333"),e.txStatus=3,t.next=14,e.getGreeting();case 14:return e.greeting=t.sent,e.retreivingFee=!0,e.retreivingBalance=!0,t.next=19,e.getBalance();case 19:return e.currentBalance=t.sent,t.next=22,e.getFee();case 22:e.currentFee=t.sent,t.next=28;break;case 25:t.prev=25,t.t0=t["catch"](1),alert(JSON.stringify(t.t0));case 28:e.txStatus=0,e.retreivingFee=!1,e.retreivingBalance=!1;case 31:case"end":return t.stop()}}),t,null,[[1,25]])})))()},updateFee:function(){var e=this;this.retreivingFee=!0,this.getFee().then((function(t){e.currentFee=t})).catch((function(e){return console.log(e)})).finally((function(){e.retreivingFee=!1}))},updateBalance:function(){var e=this;this.retreivngBalance=!0,this.getBalance().then((function(t){e.currentBalance=t})).catch((function(e){return console.log(e)})).finally((function(){e.retreivngBalance=!0}))},changeToken:function(){var e=this;this.selectedToken=this.tokens.filter((function(t){return t.address==e.selectedTokenAddress}))[0],this.updateFee(),this.updateBalance()},loadMainScreen:function(){var e=this;this.initializeProviderAndSigner(),this.provider&&this.signer?this.getGreeting().then((function(t){e.greeting=t,e.mainLoading=!1})):alert("Follow the tutorial to learn how to connect to Metamask!")},connectMetamask:function(){var e=this;window.ethereum.request({method:"eth_requestAccounts"}).then((function(){280==+window.ethereum.networkVersion?e.loadMainScreen():alert("Please switch network to zkSync!")})).catch((function(e){return console.log(e)}))}}},g=p,f=(n("034f"),n("2877")),v=Object(f["a"])(g,a,i,!1,null,null,null),h=v.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(h)}}).$mount("#app")},"85ec":function(e,t,n){},"9f1d":function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"_greeting","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"greet","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_greeting","type":"string"}],"name":"setGreeting","outputs":[],"stateMutability":"nonpayable","type":"function"}]')}});
//# sourceMappingURL=app.945dc60e.js.map