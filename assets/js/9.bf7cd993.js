(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{321:function(e,t,n){},330:function(e,t,n){"use strict";n(321)},354:function(e,t,n){},386:function(e,t,n){"use strict";n(354)},441:function(e,t,n){"use strict";n.r(t);const o=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];var s={computed:{noFoundPageByTencent(){return!1!==this.$themeConfig.noFoundPageByTencent}},mounted(){if(this.noFoundPageByTencent){const e=document.createElement("script");e.setAttribute("homePageName","回到首页"),e.setAttribute("homePageUrl","/"),e.setAttribute("src","//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js"),document.body.append(e)}},methods:{getMsg:()=>o[Math.floor(Math.random()*o.length)]}},c=(n(330),n(386),n(0)),i=Object(c.a)(s,(function(){var e=this,t=e._self._c;return e.noFoundPageByTencent?e._e():t("div",{staticClass:"theme-container"},[t("div",{staticClass:"content"},[t("h1",[e._v("404")]),e._v(" "),t("blockquote",[e._v(e._s(e.getMsg()))]),e._v(" "),t("router-link",{attrs:{to:"/"}},[e._v("Take me home.")])],1)])}),[],!1,null,null,null);t.default=i.exports}}]);