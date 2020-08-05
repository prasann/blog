webpackJsonp([0xd31bcbecfa28],{862:function(e,t){e.exports={data:{post:{id:"/home/runner/work/blog/blog/content/posts/2014-06-02--cross-site-http-requests/index.md absPath of file >>> MarkdownRemark",html:'<p>Browsers have a default security mechanism to prevent http(s) request from one domain to other. Since there are tons of possibilities to misuse them.</p>\n<p>The same origin policy prevents a document or script loaded from one origin from getting or setting properties of a document from another origin. This policy dates all the way back to Netscape Navigator 2.0.</p>\n<p>However there are lots of genuine use cases for this scenario to occur which got to be handled by the application and the browsers.</p>\n<p>I had to face one such genuine case, and got to deal with one of the miserable browser of my time IE :(</p>\n<p>Just documenting few techniques to overcome this problem. I am not elaborating the techniques since that can be figured out, all i wanted is to document the possible solutions and when to use them.</p>\n<h4>1. CORS - Cross Origin Resource sharing</h4>\n<p>A detailed description of how to implement is on this <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS">Mozilla docs</a></p>\n<p>This is a very common and an elegant solution that you can find on the net for this problem. All you will need is to add few headers on the application server. This will allow application to allow requests from other application (domain). And also all the response from the parent application will include a header</p>\n<p>Access-Control-Allow-Origin:</p>\n<p>Which will tell the browser to allow those specified domains to talk to the application.</p>\n<p>This solution works well with most of the modern browsers. Check out for the CORS browser support <a href="http://caniuse.com/cors">here.</a></p>\n<p><strong>Limitations with IE:</strong></p>\n<p>As you can see the browser compatibility chart, IE8 and IE9 has a partial implementation to CORS.</p>\n<p>Modern browsers could able to support CORS for XMLHttpRequest. However IE8 and IE9 supports CORS using XDomainRequest object. What this means is that they have few limitations of their own.</p>\n<p>Some of the most important constraints are,</p>\n<ul>\n<li>Your requests should be only GET, POST HTTP methods and not PUT, DELETE etc.</li>\n<li>Both the domain (the calling and the caller) uses the same protocol. Either HTTP or HTTPS.</li>\n<li>Your request should not have any custom headers.</li>\n</ul>\n<p>The exhaustive list is been detailed out in this <a href="http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx">MSDN blog</a>.</p>\n<p><strong>Workaround for IE</strong></p>\n<p>If you think you can live with the constraints mentioned above, then the workaround is quite simple. You got to change all the XHR to XDR to make it work. Luckily if you are using jQuery you don’t need to go through changing all the requests. Instead you can use this <a href="https://github.com/MoonScript/jQuery-ajaxTransport-XDomainRequest">jQuery plugin</a> . I guess there are more of these available just check out before breaking your brains.</p>\n<h4>2. JSONP Solution</h4>\n<p>Using <a href="http://json-p.org/">JSONP</a> response instead of JSON response.</p>\n<p><strong>Advantage:</strong> No need of any specific workaround for IE8.</p>\n<p><strong>Limitation:</strong> Works only for HTTP(S) GET request. If you are planning to use POST/PUT/DELETE this solution is not for you.</p>\n<h4>3. iFrame Hack.</h4>\n<p>This is a creepy hack. Lets say, if you want to make a call from appA to appB. In appA’s landing page load a hidden iFrame with some URL of appB. Then perform all the requests to appB from that iFrame. Since iFrame’s domain is appB browsers’ will not complain.</p>\n<p><strong>Limitation:</strong> Here the challenge is to consume the response. Your landing page should wait for an even in the iFrame and should consume the iFrame content. Don’t even think of this solution if you want to make more than 1 cross site request in a page.</p>\n<h4>4. Reverse Proxy solution</h4>\n<p>If you want your appA to make a call to appB. Set up a simple reverse proxy to the appA. And use relative paths for the Ajax requests, while the server would be acting as a proxy to any remote location.</p>\n<p>So in appA the relative path of the request will be <em>/cors-ajax</em>. The browser will not complain since this is not pointing to a different domain. And the reverse proxy rule will redirect anything of <em>cors-ajax</em> to appB.</p>\n<p>More reference to this implementation:</p>\n<ul>\n<li><a href="http://www.askapache.com/htaccess/reverse-proxy-apache.html#Configuring_Proxy">Configuring the Proxy</a></li>\n<li><a href="http://stackoverflow.com/questions/7807600/apache-mod-proxy-configuring-proxypass-proxypassreverse-for-cross-domain-ajax">Configuring Mod Proxy - SO</a></li>\n</ul>\n<p><strong>Limitation:</strong> The server config are quite hard (at least for me) to understand and perform.</p>\n<h4>5. App based solution</h4>\n<p>This solution is very similar to that of the reverse proxy but you don’t need to make any server config changes. The initial CORS approach sounds reasonable, but few limitations like same protocol might stop us from using it. Applications like <a href="http://anyorigin.com/">AnyOrigin</a>, <a href="http://whateverorigin.org/">WhateverOrigin</a> does that for you. They support http and https so you can use the protocol of the main window and consume the response. If you feel unsafe of using a different domain, you can deploy it in your own infrastructure.</p>\n<p><strong>Limitation:</strong> One more app to maintain :(</p>\n<h4>6. Add a generic controller/servlet in your parent domain.</h4>\n<p>Have a controller/servlet in your app which actually does the external domain call. Have only one GET, POST method. Keep posting all your requests to the same end-point with an additional header containing the actual end-point. Inside the method extract the header, make a call and go around about it. This means that browser doesn’t know its an external domain call as your app will serve as a wrapper to that external domain call.</p>\n<p><strong>Limitation:</strong> Multiple HTTP calls for single request/response.</p>\n<p><strong>More on:</strong> <a href="http://stackoverflow.com/questions/3076414/ways-to-circumvent-the-same-origin-policy">How to circumvent same origin policy?</a></p>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Browsers have a default security mechanism to prevent http(s) request from one domain to other. Since there are tons of possibilities to misuse them."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The same origin policy prevents a document or script loaded from one origin from getting or setting properties of a document from another origin. This policy dates all the way back to Netscape Navigator 2.0."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"However there are lots of genuine use cases for this scenario to occur which got to be handled by the application and the browsers."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"I had to face one such genuine case, and got to deal with one of the miserable browser of my time IE :("}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Just documenting few techniques to overcome this problem. I am not elaborating the techniques since that can be figured out, all i wanted is to document the possible solutions and when to use them."}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"1. CORS - Cross Origin Resource sharing"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"A detailed description of how to implement is on this "},{type:"element",tagName:"a",properties:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS"},children:[{type:"text",value:"Mozilla docs"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This is a very common and an elegant solution that you can find on the net for this problem. All you will need is to add few headers on the application server. This will allow application to allow requests from other application (domain). And also all the response from the parent application will include a header"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Access-Control-Allow-Origin:"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Which will tell the browser to allow those specified domains to talk to the application."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This solution works well with most of the modern browsers. Check out for the CORS browser support "},{type:"element",tagName:"a",properties:{href:"http://caniuse.com/cors"},children:[{type:"text",value:"here."}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Limitations with IE:"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"As you can see the browser compatibility chart, IE8 and IE9 has a partial implementation to CORS."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Modern browsers could able to support CORS for XMLHttpRequest. However IE8 and IE9 supports CORS using XDomainRequest object. What this means is that they have few limitations of their own."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Some of the most important constraints are,"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Your requests should be only GET, POST HTTP methods and not PUT, DELETE etc."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Both the domain (the calling and the caller) uses the same protocol. Either HTTP or HTTPS."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Your request should not have any custom headers."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The exhaustive list is been detailed out in this "},{type:"element",tagName:"a",properties:{href:"http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx"},children:[{type:"text",value:"MSDN blog"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Workaround for IE"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"If you think you can live with the constraints mentioned above, then the workaround is quite simple. You got to change all the XHR to XDR to make it work. Luckily if you are using jQuery you don’t need to go through changing all the requests. Instead you can use this "},{type:"element",tagName:"a",properties:{href:"https://github.com/MoonScript/jQuery-ajaxTransport-XDomainRequest"},children:[{type:"text",value:"jQuery plugin"}]},{type:"text",value:" . I guess there are more of these available just check out before breaking your brains."}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"2. JSONP Solution"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Using "},{type:"element",tagName:"a",properties:{href:"http://json-p.org/"},children:[{type:"text",value:"JSONP"}]},{type:"text",value:" response instead of JSON response."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Advantage:"}]},{type:"text",value:" No need of any specific workaround for IE8."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Limitation:"}]},{type:"text",value:" Works only for HTTP(S) GET request. If you are planning to use POST/PUT/DELETE this solution is not for you."}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"3. iFrame Hack."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This is a creepy hack. Lets say, if you want to make a call from appA to appB. In appA’s landing page load a hidden iFrame with some URL of appB. Then perform all the requests to appB from that iFrame. Since iFrame’s domain is appB browsers’ will not complain."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Limitation:"}]},{type:"text",value:" Here the challenge is to consume the response. Your landing page should wait for an even in the iFrame and should consume the iFrame content. Don’t even think of this solution if you want to make more than 1 cross site request in a page."}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"4. Reverse Proxy solution"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"If you want your appA to make a call to appB. Set up a simple reverse proxy to the appA. And use relative paths for the Ajax requests, while the server would be acting as a proxy to any remote location."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"So in appA the relative path of the request will be "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"/cors-ajax"}]},{type:"text",value:". The browser will not complain since this is not pointing to a different domain. And the reverse proxy rule will redirect anything of "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"cors-ajax"}]},{type:"text",value:" to appB."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"More reference to this implementation:"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://www.askapache.com/htaccess/reverse-proxy-apache.html#Configuring_Proxy"},children:[{type:"text",value:"Configuring the Proxy"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://stackoverflow.com/questions/7807600/apache-mod-proxy-configuring-proxypass-proxypassreverse-for-cross-domain-ajax"},children:[{type:"text",value:"Configuring Mod Proxy - SO"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Limitation:"}]},{type:"text",value:" The server config are quite hard (at least for me) to understand and perform."}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"5. App based solution"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This solution is very similar to that of the reverse proxy but you don’t need to make any server config changes. The initial CORS approach sounds reasonable, but few limitations like same protocol might stop us from using it. Applications like "},{type:"element",tagName:"a",properties:{href:"http://anyorigin.com/"},children:[{type:"text",value:"AnyOrigin"}]},{type:"text",value:", "},{type:"element",tagName:"a",properties:{href:"http://whateverorigin.org/"},children:[{type:"text",value:"WhateverOrigin"}]},{type:"text",value:" does that for you. They support http and https so you can use the protocol of the main window and consume the response. If you feel unsafe of using a different domain, you can deploy it in your own infrastructure."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Limitation:"}]},{type:"text",value:" One more app to maintain :("}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"6. Add a generic controller/servlet in your parent domain."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Have a controller/servlet in your app which actually does the external domain call. Have only one GET, POST method. Keep posting all your requests to the same end-point with an additional header containing the actual end-point. Inside the method extract the header, make a call and go around about it. This means that browser doesn’t know its an external domain call as your app will serve as a wrapper to that external domain call."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Limitation:"}]},{type:"text",value:" Multiple HTTP calls for single request/response."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"More on:"}]},{type:"text",value:" "},{type:"element",tagName:"a",properties:{href:"http://stackoverflow.com/questions/3076414/ways-to-circumvent-the-same-origin-policy"},children:[{type:"text",value:"How to circumvent same origin policy?"}]}]}],data:{quirksMode:!1}},fields:{slug:"/cross-site-http-requests/",prefix:"2014-06-02"},frontmatter:{title:"Cross Site HTTP(S) Requests.",subTitle:"Some of the tried out solutions for the cross site request issue. Should be a good place to look out for which solution to be used under a circumstance.",draft:null}},author:{id:"/home/runner/work/blog/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Prasanna</strong> is a full stack web developer, with loads of experience in architecting and coding enterprise software solutions.  </p>"},footnote:{id:"/home/runner/work/blog/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:"<ul>\n<li>rants and writings through personal experience</li>\n</ul>"},site:{siteMetadata:{facebook:{appId:"670156599751120%"}}}},pathContext:{slug:"/cross-site-http-requests/"}}}});
//# sourceMappingURL=path---cross-site-http-requests-8f45178b8cea8971d337.js.map