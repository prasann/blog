webpackJsonp([18831663928085],{901:function(e,t){e.exports={data:{post:{id:"/home/runner/work/blog/blog/content/posts/2018-03-22--start-nginx-when-upstream-unavailable/index.md absPath of file >>> MarkdownRemark",html:'<h3>Upstreams in Nginx</h3>\n<p><code class="language-text">upstream</code> is an nginx directive to define groups of servers. Servers can listen on differnt ports, and it is possible to mix and match the UNIX-domain sockets and TCP connections. You can read about it <a href="http://nginx.org/en/docs/http/ngx_http_upstream_module.html">here.</a></p>\n<h3>Issue with upstream</h3>\n<p>If you are using proxy_pass with upstream definitions in nginx config, then nginx checks for the server availability during the startup phase. A sample nginx.conf with upstream is here, lots of the .conf file is redacted to focus on the point in discussion.</p>\n<div class="gatsby-highlight" data-language="nginx">\n      <pre class="language-nginx"><code class="language-nginx">    <span class="token keyword">http</span> <span class="token punctuation">{</span>\n        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n        <span class="token keyword">upstream</span> service<span class="token operator">-</span>a <span class="token punctuation">{</span>\n            <span class="token keyword">server</span> service<span class="token operator">-</span>a<span class="token operator">-</span>ip<span class="token operator">-</span>or<span class="token operator">-</span>name<span class="token punctuation">:</span><span class="token number">3000</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        \n        <span class="token keyword">server</span> <span class="token punctuation">{</span>\n            <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n            <span class="token keyword">location</span> <span class="token operator">/</span>service<span class="token operator">-</span>a<span class="token operator">/</span> <span class="token punctuation">{</span>\n                <span class="token keyword">proxy_pass</span> <span class="token keyword">http</span><span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>service<span class="token operator">-</span>a<span class="token operator">/</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span></code></pre>\n      </div>\n<p>In the above mentioned scenario, nginx server will check for service-a while start-up phase. If service-a is down, you will see an error like host not found in upstream service-a</p>\n<h3>The Workaround</h3>\n<p>This workaround is for services running in local setup in different docker containers. So, instead of using <code class="language-text">upstream</code> directive you can directly point your service-discoverable-name in the proxy pass. The only thing while running docker containers, you need to add an additional nginx directive <code class="language-text">resolver</code> and make it point to docker’s internal DNS resolver. 127.0.0.11 The above mentioned config can be re-written as mentioned.</p>\n<div class="gatsby-highlight" data-language="nginx">\n      <pre class="language-nginx"><code class="language-nginx">    <span class="token keyword">http</span> <span class="token punctuation">{</span>\n        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n        <span class="token keyword">resolver</span> <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.11</span><span class="token punctuation">;</span>\n        \n        <span class="token keyword">server</span> <span class="token punctuation">{</span>\n            <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n            <span class="token keyword">location</span> <span class="token operator">/</span>service<span class="token operator">-</span>a<span class="token operator">/</span> <span class="token punctuation">{</span>\n                <span class="token keyword">proxy_pass</span> <span class="token keyword">http</span><span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>service<span class="token operator">-</span>a<span class="token operator">-</span>ip<span class="token operator">-</span>or<span class="token operator">-</span>name<span class="token punctuation">:</span><span class="token number">3000</span><span class="token operator">/</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span></code></pre>\n      </div>\n<p><em>Note: nginx approach is very valid in production like setups. However, in developer boxes it may not be possible to have all the services running while nginx starts. The workaround mentioned here should be mostly used in local or in dev setup and not advisable to use in prodcution like setup.</em></p>',htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Upstreams in Nginx"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"upstream"}]},{type:"text",value:" is an nginx directive to define groups of servers. Servers can listen on differnt ports, and it is possible to mix and match the UNIX-domain sockets and TCP connections. You can read about it "},{type:"element",tagName:"a",properties:{href:"http://nginx.org/en/docs/http/ngx_http_upstream_module.html"},children:[{type:"text",value:"here."}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Issue with upstream"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"If you are using proxy_pass with upstream definitions in nginx config, then nginx checks for the server availability during the startup phase. A sample nginx.conf with upstream is here, lots of the .conf file is redacted to focus on the point in discussion."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"nginx"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-nginx"]},children:[{type:"element",tagName:"code",properties:{className:["language-nginx"]},children:[{type:"text",value:"    "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"http"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"upstream"}]},{type:"text",value:" service"},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"-"}]},{type:"text",value:"a "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n            "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"server"}]},{type:"text",value:" service"},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"-"}]},{type:"text",value:"a"},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"-"}]},{type:"text",value:"ip"},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"-"}]},{type:"text",value:"or"},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"-"}]},{type:"text",value:"name"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"3000"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n        \n        "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"server"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n            "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"\n            "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"location"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"/"}]},{type:"text",value:"service"},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"-"}]},{type:"text",value:"a"},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"/"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n                "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"proxy_pass"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"http"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"/"}]},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"/"}]},{type:"text",value:"service"},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"-"}]},{type:"text",value:"a"},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"/"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n            "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"In the above mentioned scenario, nginx server will check for service-a while start-up phase. If service-a is down, you will see an error like host not found in upstream service-a"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"The Workaround"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This workaround is for services running in local setup in different docker containers. So, instead of using "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"upstream"}]},{type:"text",value:" directive you can directly point your service-discoverable-name in the proxy pass. The only thing while running docker containers, you need to add an additional nginx directive "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"resolver"}]},{type:"text",value:" and make it point to docker’s internal DNS resolver. 127.0.0.11 The above mentioned config can be re-written as mentioned."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"nginx"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-nginx"]},children:[{type:"element",tagName:"code",properties:{className:["language-nginx"]},children:[{type:"text",value:"    "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"http"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"resolver"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"127.0"}]},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:".0"}]},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:".11"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n        \n        "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"server"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n            "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"\n            "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"location"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"/"}]},{type:"text",value:"service"},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"-"}]},{type:"text",value:"a"},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"/"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n                "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"proxy_pass"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"http"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"/"}]},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"/"}]},{type:"text",value:"service"},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"-"}]},{type:"text",value:"a"},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"-"}]},{type:"text",value:"ip"},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"-"}]},{type:"text",value:"or"},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"-"}]},{type:"text",value:"name"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"3000"}]},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"/"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n            "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"Note: nginx approach is very valid in production like setups. However, in developer boxes it may not be possible to have all the services running while nginx starts. The workaround mentioned here should be mostly used in local or in dev setup and not advisable to use in prodcution like setup."}]}]}],data:{quirksMode:!1}},fields:{slug:"/start-nginx-when-upstream-unavailable/",prefix:"2018-03-22"},frontmatter:{title:"Start nginx when upstream is unavailable",subTitle:"Workaround to start nginx in local docker setup, if one of the defined upstream isn't available.",draft:null}},author:{id:"/home/runner/work/blog/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Prasanna</strong> is a full stack web developer, with exposure to various programming languages.\nUses mostly Java, Javascript these days and got 11+ years of architecting and coding enterprise software solutions.   </p>"},footnote:{id:"/home/runner/work/blog/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:"<ul>\n<li>rants and writings through personal experience</li>\n</ul>"},site:{siteMetadata:{facebook:{appId:"670156599751120%"}}}},pathContext:{slug:"/start-nginx-when-upstream-unavailable/"}}}});
//# sourceMappingURL=path---start-nginx-when-upstream-unavailable-50021fc099d5cb1c167e.js.map