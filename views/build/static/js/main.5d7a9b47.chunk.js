(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){e.exports={"page-template":"page-template",main:"main","top-img":"top-img","img-cover":"img-cover","img-title":"img-title","img-title01":"img-title01","img-title-sub":"img-title-sub"}},103:function(e,t,a){e.exports={footer:"footer"}},104:function(e,t,a){e.exports={header:"header",title:"title","sub-title":"sub-title"}},105:function(e,t,a){e.exports={"common-wrapper":"common-wrapper"}},106:function(e,t,a){e.exports={container:"container",filter_menu:"filter_menu",filter_ic:"filter_ic",ft_cate:"ft_cate",ft_selectbox:"ft_selectbox",section:"section","teranium-list":"teranium-list","item-card":"item-card",head:"head",img:"img",name:"name",card_selectbox:"card_selectbox","card-sort":"card-sort","sort-select":"sort-select",info:"info",desc:"desc",value:"value"}},109:function(e,t,a){e.exports={"harlem-cardinfo":"harlem-cardinfo",title:"title",notice:"notice","rank-title":"rank-title",name:"name",gold_title:"gold_title","rank-object":"rank-object","img-name":"img-name",img:"img",info:"info","day-gold-red":"day-gold-red",gold_img:"gold_img",teranium_img:"teranium_img",trader:"trader"}},110:function(e,t,a){e.exports={outline:"outline",chapter01:"chapter01",title:"title",copy:"copy","copy-desc":"copy-desc",chapter02:"chapter02",chapter03:"chapter03","deco-bar":"deco-bar","sub-proc":"sub-proc","sub-proc01":"sub-proc01","sub-proc01-img":"sub-proc01-img","sub-proc01-contents":"sub-proc01-contents","sub-proc01-contents-title":"sub-proc01-contents-title","sub-proc01-contents-desc":"sub-proc01-contents-desc","detail-procinfo-btn":"detail-procinfo-btn"}},111:function(e,t,a){e.exports={"character-recommen":"character-recommen",content:"content",content01:"content01",title:"title",desc:"desc"}},115:function(e,t,a){e.exports=a(187)},155:function(e,t,a){},187:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"getAuctionLowPrice",function(){return te}),a.d(n,"setCardSortType",function(){return ae}),a.d(n,"setCurrCard",function(){return ne}),a.d(n,"default",function(){return ce});var r={};a.r(r),a.d(r,"pender",function(){return Q.penderReducer}),a.d(r,"teranium",function(){return ce});var c,l=a(0),i=a.n(l),m=a(101),s=a.n(m),o=a(5),u=a(6),d=a(8),p=a(7),E=a(9),v=a(193),b=a(192),f=a(102),g=a.n(f),N=a(3),h=a.n(N),_=a(103),y=a.n(_),j=h.a.bind(y.a),O=function(){return i.a.createElement("div",{className:j("footer")},i.a.createElement("div",null,i.a.createElement("img",{src:"/resource/img/openapi_logo.png",alt:"\ub124\uc624\ud50c api \ub85c\uace0"})))},C=a(104),w=a.n(C),x=a(189),F=h.a.bind(w.a),k=function(){return i.a.createElement("header",{className:F("header")},i.a.createElement("div",{className:F("title")},i.a.createElement("a",{href:"/"},"\ub358\ud30c\uad11\ubd80 \ub178\uac00\ub2e4\uc815\ubcf4")),i.a.createElement("div",{className:F("sub-title")},i.a.createElement("div",null,i.a.createElement(x.a,{to:"/outline"},"\ub358\ud30c\uad11\ubd80 \uac1c\uc694")),i.a.createElement("div",null,i.a.createElement(x.a,{to:"/loadmap"},"\uad11\ubd80\ucf00\ub9ad \ub85c\ub4dc\ub9f5")),i.a.createElement("div",null,i.a.createElement(x.a,{to:"/teranium"},"\ud14c\ub77c\ub2c8\uc6c0 \uc21c\uc704\ud45c")),i.a.createElement("div",null,"\uc8fc\uc694 \ubd80\uc0b0\ubb3c \uac00\uaca9"),i.a.createElement("div",null,"\ud560\ub818 \uce74\ub4dc \ucd5c\uc800\uac00")))},T=h.a.bind(g.a),S=function(e){var t=e.children;return i.a.createElement("div",{className:T("page-template")},i.a.createElement(k,null),i.a.createElement("div",{className:T("main")},t),i.a.createElement(O,null))},I=a(105),A=a.n(I),R=h.a.bind(A.a),B=function(e){var t=e.children;return i.a.createElement("div",{className:R("common-wrapper")},t)},P=a(106),q=a.n(P),D=a(24),L=a.n(D),M=h.a.bind(q.a),U=function(e){var t=e.name,a=e.card_name,n=e.rarity,r=e.currCardChoice;return i.a.createElement(i.a.Fragment,null,i.a.createElement("li",{style:{color:"\ub808\uc804\ub354\ub9ac"===n?"#FF7800":"\uc720\ub2c8\ud06c"===n?"#FF00FF":"#B36BFF"},onClick:function(){return r(t,a)}},a))},W=function(e){var t=e.name,a=e.lowprice,n=e.cnt_per_gold,r=e.total_gold_cnt,c=e.total_price_cnt,l=e.id,m=e.rarity,s=e.total_cnt,o=e.harlemCardInfo,u=e.curr_card,d=e.card_sort_type,p=e.cardSortTypeCtrl,E=e.currCardChoice,v={color:"\ub808\uc804\ub354\ub9ac"===m?"#FF7800":"\uc720\ub2c8\ud06c"===m?"#FF00FF":"#B36BFF"},b="\ud560\ub818 \ub808\uc5b4 \uce74\ub4dc"===t?o.filter(function(e){return e.seq>=16&&e.seq<=35}).sort(function(e,t){return"price"===d?e.lowprice<t.lowprice?1:e.lowprice>t.lowprice?-1:0:e.name<t.name?-1:e.name>t.name?1:0}).map(function(e){var a=e.name,n=e.rarity;return i.a.createElement(U,{name:t,card_name:a,rarity:n,currCardChoice:E,key:a})}):"\ub9c8\uacc4 \uce74\ub4dc"===t?o.sort(function(e,t){return"price"===d?e.lowprice<t.lowprice?1:e.lowprice>t.lowprice?-1:0:e.name<t.name?-1:e.name>t.name?1:0}).map(function(e){var a=e.name,n=e.rarity;return i.a.createElement(U,{name:t,card_name:a,rarity:n,currCardChoice:E,key:a})}):"",f="name"===d?"sort-select":"",g="price"===d?"sort-select":"";return i.a.createElement("div",{className:M("item-card")},i.a.createElement("div",{className:M("head")},i.a.createElement("div",{className:M("img")},i.a.createElement("img",{src:"\uace8\ub4dc"===t?"/resource/img/gold.png":"https://img-api.neople.co.kr/df/items/".concat("\ud560\ub818 \ub808\uc5b4 \uce74\ub4dc"===t||"\ub9c8\uacc4 \uce74\ub4dc"===t?u.id:l),alt:t})),i.a.createElement("div",{className:M("name"),style:{color:v}},t," ","(\uacc4\uc815\ub2f9 ".concat(s,"\uac1c)"),"\ud560\ub818 \ub808\uc5b4 \uce74\ub4dc"===t||"\ub9c8\uacc4 \uce74\ub4dc"===t?i.a.createElement(i.a.Fragment,null,i.a.createElement("img",{src:"/resource/img/arrow-down.svg",alt:"\ud654\uc0b4\ud45c"})," ",i.a.createElement("br",null),"\ud604\uc7ac \uce74\ub4dc : ",u.name.substr(0,u.name.indexOf(" \uce74\ub4dc")),i.a.createElement("div",{className:M("card_selectbox")},i.a.createElement("div",{className:M("card-sort")},i.a.createElement("span",{className:M(f),onClick:function(){return p("name",t)}},"\uc774\ub984\uc21c"),i.a.createElement("span",{className:M(g),onClick:function(){return p("price",t)}},"\uac00\uaca9\uc21c")),i.a.createElement("ul",null,b))):"")),i.a.createElement("div",{className:M("info")},i.a.createElement("div",{className:M("desc")},i.a.createElement("div",{className:M("kind-name")},"\ud14c\ub77c\ub2c8\uc6c0 \ud55c\uac1c\ub2f9"),i.a.createElement("div",{className:M("value")},i.a.createElement(L.a,{value:n,displayType:"text",thousandSeparator:!0,prefix:"",suffix:"\uace8\ub4dc"}))),i.a.createElement("div",{className:M("desc")},i.a.createElement("div",{className:M("kind-name")},"\uc624\ub298 \uc5bb\ub294 \uace8\ub4dc"),i.a.createElement("div",{className:M("value")},i.a.createElement(L.a,{value:r,displayType:"text",thousandSeparator:!0,prefix:"",suffix:"\uace8\ub4dc"}))),i.a.createElement("div",{className:M("desc")},i.a.createElement("div",{className:M("kind-name")},"\ud604\uc7ac \uacbd\ub9e4 \ucd5c\uc800\uac00"),i.a.createElement("div",{className:M("value")},i.a.createElement(L.a,{value:a,displayType:"text",thousandSeparator:!0,prefix:"",suffix:"\uace8\ub4dc"}))),i.a.createElement("div",{className:M("desc")},i.a.createElement("div",{className:M("kind-name")},"\ud544\uc694 \ud14c\ub77c\ub2c8\uc6c0 \uc218"),i.a.createElement("div",{className:M("value")},i.a.createElement(L.a,{value:c,displayType:"text",thousandSeparator:!0,prefix:"",suffix:"\uac1c"})))))},J=function(e){var t=e.result,a=e.harlemCardInfo,n=e.cardSortTypeCtrl,r=e.currCardChoice,c=t.map(function(e){var t=e.seq,c=e.name,l=e.cnt_per_gold,m=e.total_gold_cnt,s=e.total_price_cnt,o=e.lowprice,u=e.id,d=e.rarity,p=e.total_cnt,E=e.curr_card,v=e.card_sort_type;return i.a.createElement(W,{name:c,key:t,lowprice:o,total_gold_cnt:m,total_price_cnt:s,cnt_per_gold:l,id:u,rarity:d,total_cnt:p,harlemCardInfo:a,curr_card:E,card_sort_type:v,cardSortTypeCtrl:n,currCardChoice:r})});return i.a.createElement("div",{className:M("container")},i.a.createElement("div",{className:M("top-img")},i.a.createElement("div",{className:M("img-cover")},i.a.createElement("img",{src:"/resource/img/teranium_top_min.jpg",alt:"TOP IMG"}),i.a.createElement("div",{className:M("img-title")},i.a.createElement("div",{className:M("img-title01")},"TERANIUM VALUE RANK"),i.a.createElement("div",{className:M("img-title-sub")},"\ud14c\ub77c\ub2c8\uc6c0 \uc2e4\uc2dc\uac04 \uc21c\uc704\ud45c")))),i.a.createElement("div",{className:M("filter_menu")},i.a.createElement("span",{className:M("filter_ic")}),i.a.createElement("span",{className:M("ft_cate")},"\uc815\ub82c",i.a.createElement("img",{src:"/resource/img/arrow-down.svg",alt:"\ud654\uc0b4\ud45c"}),i.a.createElement("div",{className:M("ft_selectbox")},i.a.createElement("ul",null,i.a.createElement("li",null,"\uc21c\uc704"),i.a.createElement("li",null,"\uc5bb\ub294\uace8\ub4dc"))))),i.a.createElement("div",{className:M("section")},i.a.createElement("div",{className:M("teranium-list")},c)))},G=a(28),K=a(14),Y=a(37),z=a(68),H=a(194),V=a(190),$=a(30),Q=a(27),X=a.n(Q),Z=a(108),ee=a.n(Z),te=Object(H.a)("teranium/GET_AUCTION_LOWPRICE",function(){return ee.a.get("/api/teranium/lowprice")}),ae=Object(H.a)("teranium/SET_CARD_SORT_TYPE"),ne=Object(H.a)("teranium/SET_CURR_CARD"),re=Object($.b)({result:Object($.a)(),harlemCardInfo:Object($.a)()}),ce=Object(V.a)(Object(z.a)({},Object(Q.pender)({type:"teranium/GET_AUCTION_LOWPRICE",onSuccess:function(e,t){var a=t.payload.data,n=a.filter(function(e){return e.seq>=10&&e.seq<=35}).sort(function(e,t){return e.lowprice<t.lowprice?1:e.lowprice>t.lowprice?-1:0}),r=a.filter(function(e){return e.seq>=0&&e.seq<=9}).map(function(e){var t=e.limit_cnt,a=e.component_cnt,r=e.price_cnt,c=e.name,l="\ud560\ub818 \ub808\uc5b4 \uce74\ub4dc"===c||"\ub9c8\uacc4 \uce74\ub4dc"===c?n.reduce(function(e,t){return e.lowprice>t.lowprice?t:e}):e,i=t*r,m=t*a*l.lowprice,s=Math.round(m/i);return Object(z.a)({},e,{curr_card:l,lowprice:l.lowprice,total_cnt:t*a,total_price_cnt:i,total_gold_cnt:m,cnt_per_gold:s,card_sort_type:"name"})}).sort(function(e,t){return e.cnt_per_gold<t.cnt_per_gold?1:e.cnt_per_gold>t.cnt_per_gold?-1:0});return e.set("result",Object($.c)(r)).set("harlemCardInfo",Object($.c)(n))}}),(c={},Object(Y.a)(c,"teranium/SET_CARD_SORT_TYPE",function(e,t){var a=t.payload,n=a.type,r=a.name,c=e.get("result").toJS().findIndex(function(e){return e.name===r});return e.setIn(["result",c,"card_sort_type"],n)}),Object(Y.a)(c,"teranium/SET_CURR_CARD",function(e,t){return e}),c)),re),le=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).cardSortTypeCtrl=function(e,t){var n=a.props,r=n.TeraniumActions;n.result.find(function(e){return e.name===t}).card_sort_type!==e&&r.setCardSortType({type:e,name:t})},a.currCardChoice=function(e,t){var n=a.props,r=n.TeraniumActions;n.result;r.setCurrCard({name:e,card_name:t})},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.TeraniumActions;0===e.result.length&&t.getAuctionLowPrice()}},{key:"render",value:function(){var e=this.cardSortTypeCtrl,t=this.currCardChoice,a=this.props,n=a.result,r=a.harlemCardInfo;return i.a.createElement(J,{result:n,harlemCardInfo:r,cardSortTypeCtrl:e,currCardChoice:t})}}]),t}(l.Component),ie=Object(G.b)(function(e){return{result:e.teranium.toJS().result,harlemCardInfo:e.teranium.toJS().harlemCardInfo}},function(e){return{TeraniumActions:Object(K.b)(n,e)}})(le),me=a(44),se=a.n(me),oe=function(){var e=h.a.bind(se.a);return i.a.createElement(S,null,i.a.createElement(B,null,i.a.createElement(ie,null)),i.a.createElement(B,null,i.a.createElement("div",{className:e("page-object")},i.a.createElement(x.a,{to:"/2"},i.a.createElement("div",{className:e("title")},"2. \ud560\ub818\uc9c0\uc5ed \ub4dd\ud15c \uce74\ub4dc\uc815\ubcf4"),i.a.createElement("div",{className:e("notice")},i.a.createElement("div",null,"* \ud560\ub818\uc9c0\uc5ed\uc5d0\uc11c \ub4dc\ub86d\ub418\ub294 \uce74\ub4dc\uc758 \uc2e4\uc2dc\uac04 \uacbd\ub9e4\uc7a5\ucd5c\uc800\uac00\uac00 \ubcf4\uc5ec\uc9d1\ub2c8\ub2e4."))))))},ue=a(109),de=a.n(ue),pe=h.a.bind(de.a),Ee=function(e){var t=e.name,a=e.lowprice,n=e.id,r=e.rarity,c=e.trader,l={color:"\ub808\uc804\ub354\ub9ac"===r?"#FF7800":"\uc720\ub2c8\ud06c"===r?"#FF00FF":"#B36BFF"},m={border:"\ub808\uc804\ub354\ub9ac"===r?"2px solid #FF7800":"\uc720\ub2c8\ud06c"===r?"2px solid #FF00FF":"2px solid #B36BFF"};return i.a.createElement("div",{className:pe("rank-object")},i.a.createElement("div",{className:pe("img-name"),style:l},i.a.createElement("div",{className:pe("img"),style:m},i.a.createElement("img",{src:"https://img-api.neople.co.kr/df/items/".concat(n),alt:t})),i.a.createElement("div",{className:pe("name")},i.a.createElement("a",{href:"https://dunfa.in/\uc544\uc774\ud15c/".concat(t),target:"_BLANK"},i.a.createElement("b",null,t)))),i.a.createElement("div",{className:pe("info")},i.a.createElement("div",{className:pe("day-gold-red")},i.a.createElement("img",{className:pe("gold_img"),src:"/resource/img/gold_mini.png",alt:"\uace8\ub4dc"}),i.a.createElement(L.a,{value:a,displayType:"text",thousandSeparator:!0,prefix:""})),i.a.createElement("div",{className:pe("trader")},i.a.createElement("div",null,c))))},ve=function(e){var t=e.harlemCardInfo.map(function(e){var t=e.seq,a=e.name,n=e.lowprice,r=e.id,c=e.rarity,l=e.trader;return i.a.createElement(Ee,{name:a,key:t,lowprice:n,id:r,rarity:c,trader:l})});return i.a.createElement("div",{className:pe("harlem-cardinfo")},i.a.createElement("div",{className:pe("title")},"2. \ud560\ub818\uc9c0\uc5ed \ub4dd\ud15c \uce74\ub4dc\uc815\ubcf4"),i.a.createElement("div",{className:pe("notice")},i.a.createElement("div",null,"* \ud560\ub818\uc9c0\uc5ed\uc5d0\uc11c \ub4dc\ub86d\ub418\ub294 \uce74\ub4dc\uc758 \uc2e4\uc2dc\uac04 \uacbd\ub9e4\uc7a5\ucd5c\uc800\uac00\uac00 \ubcf4\uc5ec\uc9d1\ub2c8\ub2e4.")),i.a.createElement("div",{className:pe("rank-title")},i.a.createElement("div",{className:pe("img")}," "),i.a.createElement("div",{className:pe("name")}," "),i.a.createElement("div",{className:pe("gold_title")},"\uc2e4\uc2dc\uac04",i.a.createElement("br",null),"\uacbd\ub9e4 \ucd5c\uc800\uac00"),i.a.createElement("div",{className:pe("gold_title")},"\ub4dc\ub78d \ub358\uc804")),t)},be=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.TeraniumActions;0===e.harlemCardInfo.length&&t.getAuctionLowPrice()}},{key:"render",value:function(){var e=this.props.harlemCardInfo;return i.a.createElement(ve,{harlemCardInfo:e})}}]),t}(l.Component),fe=Object(G.b)(function(e){return{harlemCardInfo:e.teranium.toJS().harlemCardInfo}},function(e){return{TeraniumActions:Object(K.b)(n,e)}})(be),ge=function(){var e=h.a.bind(se.a);return i.a.createElement(S,null,i.a.createElement(B,null,i.a.createElement("div",{className:e("page-object")},i.a.createElement(x.a,{to:"/1",className:e("page-object")},i.a.createElement("div",{className:e("title")},"1. \ud14c\ub77c\ub2c8\uc6c0 \ud55c\uac1c\ub2f9 \uac00\uce58\uc21c\uc704\ud45c (\uacbd\ub9e4\uc7a5 \ucd5c\uc800\uac00 \uae30\uc900)"),i.a.createElement("div",{className:e("notice")},i.a.createElement("div",null,"* \uacbd\ub9e4 \ucd5c\uc800\uac00 * \uc0b4\uc218\uc788\ub294 \uac1c\uc218 / \ud14c\ub77c\ub2c8\uc6c0 \uc218 = \ud14c\ub77c\ub2c8\uc6c0 \ud55c\uac1c\ub2f9 \uace8\ub4dc"),i.a.createElement("div",null,"* \ud560\ub818\ub808\uc5b4\uce74\ub4dc\ub294 20\ub9cc, \ub9c8\uacc4\uce74\ub4dc\ub294 30\ub9cc\uace8\ub4dc\ub85c \uc124\uc815\ud55c \uac00\uaca9\uc785\ub2c8\ub2e4."))))),i.a.createElement(B,null,i.a.createElement(fe,null)))},Ne=a(110),he=a.n(Ne),_e=h.a.bind(he.a),ye=function(){return i.a.createElement("div",{className:_e("outline")},i.a.createElement("div",{className:_e("chapter01")},i.a.createElement("div",{className:_e("title")},"We DF Mine Worker"),i.a.createElement("div",{className:_e("copy")},'" \ub358 \ud30c \uad11 \ubd80 \uac00 \ubb54 \uac00 \uc694 ? "'),i.a.createElement("div",{className:_e("copy-desc")},"\ub358\uc804\uc564\ud30c\uc774\ud130\uc5d0\uc11c \ud560 \uc218 \uc788\ub294 \ub178\uac00\ub2e4\ub358\uc804\uc740 \ub9ce\uc2b5\ub2c8\ub2e4. ",i.a.createElement("br",null),"\uac00\uc7a5 \ucd94\ucc9c\ub4dc\ub9ac\ub294 \uacf3\uc740 \ud1a0\ud0c8\uc774\ud074\ub9bd\uc2a4\uc785\ub2c8\ub2e4. ",i.a.createElement("br",null),"\uc774\uc720\ub294 \ub2e4\ub978 \ub358\uc804\uc5d0 \ube44\ud574 \uace8\ub4dc\ubcf4\uc0c1\uc774 \ub192\uc2b5\ub2c8\ub2e4. ",i.a.createElement("br",null),"\uc0ac\ub78c\ub4e4\uc774 \uac00\uc7a5 \ub9ce\uc774 \ub2e4\ub2c8\ub294 \ub178\uac00\ub2e4\ub358\uc804\uc774\uba70 \uadf8\ub798\uc11c \uc815\ubcf4\ub3c4 \ub9ce\uc2b5\ub2c8\ub2e4.",i.a.createElement("br",null),"\uc77c\uc815\ud55c \uc218\uc900\uc758 \uc7a5\ube44\uc2a4\ud399\ub9cc\uc744 \ub9de\ucd98 \uc774\ud6c4 \ud1a0\ud0c8\uc774\ud074\ub9bd\uc2a4\ub9cc \ub2e4\ub2d9\ub2c8\ub2e4. ",i.a.createElement("br",null),"\uc774\uc81c \uad11\ubd80\uac00 \ub418\ub294\uac81\ub2c8\ub2e4. \uace8\ub4dc\ub97c \ub9ce\uc774 \ubaa8\uc73c\uace0 \uc2f6\ub2e4\uba74 \ub358\ud30c\uad11\ubd80\ub97c \uc2dc\uc791\ud574\ubcf4\uc138\uc694.")),i.a.createElement("div",{className:_e("chapter02")}),i.a.createElement("div",{className:_e("chapter03")},i.a.createElement("div",{className:_e("title")},"\ub358\ud30c\uad11\ubd80\ub97c \uc2dc\uc791\ud574\ubcf4\uc138\uc694."),i.a.createElement("div",{className:_e("deco-bar")}),i.a.createElement("div",{className:_e("sub-proc")},i.a.createElement("div",{className:_e("sub-proc01")},i.a.createElement("div",{className:_e("sub-proc01-img")},i.a.createElement("img",{src:"/resource/img/levelup.svg",alt:"\ub808\ubca8\uc5c5"})),i.a.createElement("div",{className:_e("sub-proc01-contents")},i.a.createElement("div",{className:_e("sub-proc01-contents-title")},"\ub9cc\ub819\ub2ec\uc131"),i.a.createElement("div",{className:_e("sub-proc01-contents-desc")},"\ucf00\ub9ad\ud130\ub97c \uace8\ub77c \ub808\ubca8\uc5c5\uc744 \ud569\ub2c8\ub2e4. \uce5c\uc808\ud55c \ud018\uc2a4\ud2b8\uc9c4\ud589\uc744 \ub530\ub77c\uac00\ub2e4 \ubcf4\uba74 \uae08\ubc29 \ub9cc\ub819\uc744 \ub2ec\uc131\ud558\uac8c \ub429\ub2c8\ub2e4."),i.a.createElement("div",{className:_e("detail-procinfo-btn")},i.a.createElement("button",null,"\ucf00\ub9ad\ud130\ucd94\ucc9c \ubc14\ub85c\uac00\uae30")))),i.a.createElement("div",{className:_e("sub-proc01")},i.a.createElement("div",{className:_e("sub-proc01-img")},i.a.createElement("img",{src:"/resource/img/specup.svg",alt:"\uc2a4\ud399\uc5c5"})),i.a.createElement("div",{className:_e("sub-proc01-contents")},i.a.createElement("div",{className:_e("sub-proc01-contents-title")},"\uc7a5\ube44\uc2a4\ud399\uc5c5"),i.a.createElement("div",{className:_e("sub-proc01-contents-desc")},"\ud1a0\ud0c8\uc774\ud074\ub9bd\uc2a4 \uc2ac\ub808\uc774\uc5b4 \ub09c\uc774\ub3c4\ub97c \uc218\uc6d4\ud558\uac8c \ud074\ub9ac\uc5b4\ud558\uae30 \uc704\ud574\uc11c\ub294 \ub192\uc740\uc2a4\ud399\uc774 \ud544\uc694\ud55c\uac74 \uc544\ub2d9\ub2c8\ub2e4. \ud560\ub818\uc5d0\ud53d\uc138\ud2b8 \uc815\ub3c4\uba74 \ubb34\ub09c\ud569\ub2c8\ub2e4."),i.a.createElement("div",{className:_e("detail-procinfo-btn")},i.a.createElement("button",null,"\uc7a5\ube44\ucd94\ucc9c \ubc14\ub85c\uac00\uae30")))),i.a.createElement("div",{className:_e("sub-proc01")},i.a.createElement("div",{className:_e("sub-proc01-img")},i.a.createElement("img",{src:"/resource/img/run.svg",alt:"\ub178\uac00\ub2e4"})),i.a.createElement("div",{className:_e("sub-proc01-contents")},i.a.createElement("div",{className:_e("sub-proc01-contents-title")},"\ud1a0\ud0c8\uc774\ud074\ub9bd\uc2a4 \ud074\ub9ac\uc5b4"),i.a.createElement("div",{className:_e("sub-proc01-contents-desc")},"\uc774\uc81c \ud1a0\ud0c8\uc774\ud074\ub9bd\uc2a4 \ub358\uc804\uc744 \uc2ac\ub808\uc774\uc5b4\ub09c\uc774\ub3c4\ub85c \uc120\ud0dd\ud558\uc5ec \ubc18\ubcf5\ubc18\ubcf5 \ub610\ubc18\ubcf5 \ud074\ub9ac\uc5b4\ub97c \ud569\ub2c8\ub2e4. \uc77c\ubc18+\ud53c\ub85c\ub3c4\ubb3c\uc57d1\ud68c\uba74 \ud558\ub8e8\uc5d0 24\ud68c \ud074\ub9ac\uc5b4\uac00\ub2a5\ud569\ub2c8\ub2e4."),i.a.createElement("div",{className:_e("detail-procinfo-btn")},i.a.createElement("button",null,"\uc2a4\ud0ac\ucd94\ucc9c \ubc14\ub85c\uac00\uae30")))))),i.a.createElement("div",{className:_e("chapter03")},i.a.createElement("div",{className:_e("title")},"\uc774\ub807\uac8c \ub358\ud30c\uace8\ub4dc\uac00 \ubaa8\uc785\ub2c8\ub2e4."),i.a.createElement("div",{className:_e("deco-bar")}),i.a.createElement("div",{className:_e("sub-proc")},i.a.createElement("div",{className:_e("sub-proc01")},i.a.createElement("div",{className:_e("sub-proc01-img")},i.a.createElement("img",{src:"/resource/img/gold.svg",alt:"\uace8\ub4dc\ubcf4\uc0c1"})),i.a.createElement("div",{className:_e("sub-proc01-contents")},i.a.createElement("div",{className:_e("sub-proc01-contents-title")},"\ub358\uc804\ud074\ub9ac\uc5b4\ubcf4\uc0c1"),i.a.createElement("div",{className:_e("sub-proc01-contents-desc")},"\ud1a0\ud0c8\uc774\ud074\ub9bd\uc2a4 \uc2ac\ub808\uc774\uc5b4\ub09c\uc774\ub3c4 \ud074\ub9ac\uc5b4\uc2dc  SSS\ub7ad\ud06c \ub2ec\uc131\uae30\uc900 \ud55c\ud310\ub2f9 \uc57d 30,000 ~ 42,000\uace8\ub4dc \ubcf4\uc0c1\uc774 \uc788\uc2b5\ub2c8\ub2e4."),i.a.createElement("div",{className:_e("detail-procinfo-btn")},i.a.createElement("button",null,"\uc218\uc775\uacc4\uc0b0\uae30 \ubc14\ub85c\uac00\uae30")))),i.a.createElement("div",{className:_e("sub-proc01")},i.a.createElement("div",{className:_e("sub-proc01-img")},i.a.createElement("img",{src:"/resource/img/worker.svg",alt:"\ud14c\ub77c\ub2c8\uc6c0 \ud310\ub9e4"})),i.a.createElement("div",{className:_e("sub-proc01-contents")},i.a.createElement("div",{className:_e("sub-proc01-contents-title")},"\ud14c\ub77c\ub2c8\uc6c0 \uc7ac\ub8cc\uc544\uc774\ud15c \ud310\ub9e4"),i.a.createElement("div",{className:_e("sub-proc01-contents-desc")},"\ud074\ub9ac\uc5b4\uc2dc \ud55c\ud310\ub2f9 4\uac1c\uc758 \ud14c\ub77c\ub2c8\uc6c0\uc744 \uc5bb\uc2b5\ub2c8\ub2e4. NPC\ub97c\ud1b5\ud574 \uc5ec\ub7ec\uac00\uc9c0 \uc544\uc774\ud15c\uc73c\ub85c \uad50\ud658\ud574\uc11c \uacbd\ub9e4\uc7a5\uc5d0 \uc62c\ub824 \ud310\ub9e4\ud569\ub2c8\ub2e4."),i.a.createElement("div",{className:_e("detail-procinfo-btn")},i.a.createElement("button",{style:{width:"154px"}},"\ud14c\ub77c\ub2c8\uc6c0 \uc21c\uc704\ud45c \ubc14\ub85c\uac00\uae30")))),i.a.createElement("div",{className:_e("sub-proc01")},i.a.createElement("div",{className:_e("sub-proc01-img")},i.a.createElement("img",{src:"/resource/img/treasure.svg",alt:"\uae30\ud0c0 \uc544\uc774\ud15c \ub4dc\ub86d"})),i.a.createElement("div",{className:_e("sub-proc01-contents")},i.a.createElement("div",{className:_e("sub-proc01-contents-title")},"\uae30\ud0c0\uc544\uc774\ud15c \ub4dc\ub86d"),i.a.createElement("div",{className:_e("sub-proc01-contents-desc")},"\uac04\ud639 \uace8\ub4dc\uac00\uce58\uac00 \uaf64\ub418\ub294 \uc544\uc774\ud15c\uc774 \ub4dc\ub86d\ub429\ub2c8\ub2e4. \uc131\ubb3c \uc7a5\ube44, \uc9c0\uc625\ud30c\ud2f0 \ucd08\ub300\uc7a5, \ub124\uc784\ub4dc\uce74\ub4dc, \uade0\uc5f4 \ubc18\uc751\uc11d \ub4f1\uc774 \ud574\ub2f9\ub429\ub2c8\ub2e4."),i.a.createElement("div",{className:_e("detail-procinfo-btn")},i.a.createElement("button",{style:{width:"140px"}},"\uacbd\ub9e4\uc7a5\ucd5c\uc800\uac00 \ubc14\ub85c\uac00\uae30")))))))},je=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement(ye,null)}}]),t}(l.Component),Oe=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement(S,null,i.a.createElement(je,null))}}]),t}(l.Component),Ce=a(111),we=a.n(Ce),xe=h.a.bind(we.a),Fe=function(){return i.a.createElement("div",{className:xe("character-recommen")},i.a.createElement("div",{className:xe("top-img")},i.a.createElement("div",{className:xe("img-cover")},i.a.createElement("img",{src:"/resource/img/loadmap_min1.jpg",alt:"\uac80\uadc0"}),i.a.createElement("div",{className:xe("img-title")},i.a.createElement("div",{className:xe("img-title01")},"DF MINE WORKER"),i.a.createElement("div",{className:xe("img-title-sub")},"\uad11\ubd80\ucf00\ub9ad \uc644\uc131\ub85c\ub4dc\ub9f5")))),i.a.createElement("div",{className:xe("content")},i.a.createElement("div",{className:xe("content01")},i.a.createElement("div",{className:xe("title")},"1. \uad11\ubd80\uc6a9 \ucf00\ub9ad\ud130 \ucd94\ucc9c"),i.a.createElement("div",{className:xe("desc")},"\uad11\ubd80\uc6a9 \ucf00\ub9ad\ud130\uc758 \uc911\uc694\ud55c\uc810\uc911 \ud558\ub098\ub294 \uc774\uc18d \ub3cc\uc9c4 \uc2a4\ud0ac\ubc94\uc704 \ub09c\uc774\ub3c4 \ub4f1\ub4f1\uc774 \uc788\ub2e4.")),i.a.createElement("div",{className:xe("content01")},i.a.createElement("div",{className:xe("title")},"2. \uc7a5\ube44 \uc2a4\ud399\uc5c5 \uac00\uc774\ub4dc"),i.a.createElement("div",{className:xe("desc")},"\uad11\ubd80\uc6a9 \ucf00\ub9ad\ud130\uc758 \uc911\uc694\ud55c\uc810\uc911 \ud558\ub098\ub294 \uc774\uc18d \ub3cc\uc9c4 \uc2a4\ud0ac\ubc94\uc704 \ub09c\uc774\ub3c4 \ub4f1\ub4f1\uc774 \uc788\ub2e4.")),i.a.createElement("div",{className:xe("content01")},i.a.createElement("div",{className:xe("title")},"3. \ucf00\ub9ad\ud130\ubcc4 \ucd94\ucc9c \uc0ac\uc6a9\uc2a4\ud0ac"),i.a.createElement("div",{className:xe("desc")},"\uad11\ubd80\uc6a9 \ucf00\ub9ad\ud130\uc758 \uc911\uc694\ud55c\uc810\uc911 \ud558\ub098\ub294 \uc774\uc18d \ub3cc\uc9c4 \uc2a4\ud0ac\ubc94\uc704 \ub09c\uc774\ub3c4 \ub4f1\ub4f1\uc774 \uc788\ub2e4."))))},ke=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement(Fe,null)}}]),t}(l.Component),Te=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement(S,null,i.a.createElement(B,null,i.a.createElement(ke,null)))}}]),t}(l.Component),Se=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement(S,null,i.a.createElement(B,null,i.a.createElement(ie,null)))}}]),t}(l.Component),Ie=a(112),Ae=a(47);Ae.a.initialize("UA-129699864-1");var Re=function(){return Ae.a.set({page:window.location.pathname}),Ae.a.pageview(window.location.pathname),null},Be=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(Ie.Helmet,null,i.a.createElement("title",null,"\ub358\ud30c\uad11\ubd80 \ub178\uac00\ub2e4\uc815\ubcf4")),i.a.createElement(v.a,{path:"/",component:Re}),i.a.createElement(b.a,null,i.a.createElement(v.a,{exact:!0,path:"/outline",component:Oe}),i.a.createElement(v.a,{exact:!0,path:"/loadmap",component:Te}),i.a.createElement(v.a,{exact:!0,path:"/teranium",component:Se}),i.a.createElement(v.a,{exact:!0,path:"/1",component:oe}),i.a.createElement(v.a,{exact:!0,path:"/2",component:ge}),i.a.createElement(v.a,{component:oe})))}}]),t}(l.Component),Pe=a(191),qe=a(114),De=Object(qe.createLogger)(),Le=Object(K.c)(r),Me=[X()()],Ue=K.d,We=function(e){return Object(K.e)(Le,e,Ue(K.a.apply(void 0,[De].concat(Me))))}(),Je=function(){return i.a.createElement(G.a,{store:We},i.a.createElement(Pe.a,null,i.a.createElement(Be,null)))};a(155),a(156),a(186),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(Je,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},44:function(e,t,a){e.exports={"page-adsense":"page-adsense","adsense-970250":"adsense-970250","adsense-300250":"adsense-300250","page-object":"page-object",title:"title",notice:"notice"}}},[[115,1,2]]]);
//# sourceMappingURL=main.5d7a9b47.chunk.js.map