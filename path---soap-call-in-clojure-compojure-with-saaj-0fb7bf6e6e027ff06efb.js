webpackJsonp([0xf27b2b2d5697],{894:function(e,t){e.exports={data:{post:{id:"/Users/prasanna/projects/blog/content/posts/2018-02-16--soap-call-in-clojure-compojure-with-saaj/index.md absPath of file >>> MarkdownRemark",html:'<h3>Simple Object Access Protocol (SOAP)</h3>\n<p>SOAP brings its own protocol and focuses on exposing pieces of application logic (not data) as services. SOAP is focused on accessing named operations, each implements some business logic through different interfaces. This image below expresses the difference between a SOAP and normal REST/JSON endpoint very well.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/soap-primer-7d9ce5ab887476bc5832d0fe1d924a35-48538.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAAB70lEQVQoz3VSTW/aQBD1v4IDF6r8BTjyBzhw4RyRFAVBhHuIOOSEgtRDVA6WkiiBC00UkFIqgVAoRLgmEBDG4F1/gT9YezsGlUZVO1qtNLMz7828WYb+x7ytvY8Qx16ryxWWtMXUwHOXbJhtHnVd/7xPxhh3Op09yoZQDamL4bMyGyriK54JgAXF3vb8Mcdx2u321dV1o/FVEGg2556fe9ksRQtDm/+UJ4PluI9nQ58ZCFst2mzSep1Opz4KIW69XmfZT5eXn5+eXu8q9PbWubkhhmYZ8sxAorVSTF3xmTFWT06kXG5zeEgeHggUAxww12o1uHl+sOv8n7owoij2ej8wXgnCGGNlF+V5fjQawdi6roPbbpPHRw9aGwz8GT3X28nDrNdrSZIQkvv9HqRaliXL8g5C07SLi5JtmxxHz868j8ebL2XiC/S7D8a2bX1rwAN+oVDI5/PQTqvVSiaToVAoFoudnubv7xvwaqiKrhimjkxN3q/K22+1XC6zLFssFkGzeDweDAYTiUQ0Gj04+PC9+c3R5stxT357QdOBqSFmP70LQlFarVbT6TTHcYCSyWQCgUAkEkmlUuFw+PjoiLprUXhWpTfY9grPmb8EhJnhbyCEut3uVsseQEwmk1KpVKlUqKXqaG6tVMc0PJf8ApYIPWzkb3Y2AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="SOAP explanation"\n        title=""\n        src="/static/soap-primer-7d9ce5ab887476bc5832d0fe1d924a35-48538.png"\n        srcset="/static/soap-primer-7d9ce5ab887476bc5832d0fe1d924a35-bed0f.png 200w,\n/static/soap-primer-7d9ce5ab887476bc5832d0fe1d924a35-5fd34.png 400w,\n/static/soap-primer-7d9ce5ab887476bc5832d0fe1d924a35-48538.png 800w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Source: <a href="https://stackoverflow.com/a/44713574/419448">Stack overflow</a></p>\n<h3>Soap With Attachment API for Java (SAAJ)</h3>\n<p><a href="https://docs.oracle.com/javaee/5/tutorial/doc/bnbhg.html">SAAJ</a> is a lower level API in Java that express SOAP messages. Java developers rarely use SAAJ since the JAX WS and Spring WS provides better abstraction over SAAJ.</p>\n<h3>SOAP in Clojure</h3>\n<h4>1. Prerequisite</h4>\n<p>As a one-time step, convert the WSDL into Java objects. This can be done using `wsimport` or `xjc`</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">xjc -wsdl wsdl-file-name</code></pre>\n      </div>\n<p>or</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">wsimport wsdl-file-name</code></pre>\n      </div>\n<h4>2. Build SOAP Message</h4>\n<p>First step is to build a soap message with header and body. The root element of the SOAP body is one of the Java object created in the first step. Construct the Java object with the necessary data. Finally convert the SOAP Message into string.</p>\n<h4>3. Perform POST</h4>\n<p>A simple HTTP POST need to be performed with <code class="language-text">Content-Type</code> header set to <code class="language-text">text/xml</code>. This can be done using normal <code class="language-text">clj-http</code> methods.Authentication should be covered ideally in the SOAP header.</p>\n<h4>4. Parse response into Java Object</h4>\n<p>Finally the response string has to be converted into a SOAP Message again. This is required to parse the SOAP Response Body into one of the generated object.</p>\n<h3>Code in action</h3>\n<p>Here is my <a href="https://github.com/prasann/soap-clj">Github repository</a> with a small working application.</p>',htmlAst:{type:"root",children:[{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Simple Object Access Protocol (SOAP)"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"SOAP brings its own protocol and focuses on exposing pieces of application logic (not data) as services. SOAP is focused on accessing named operations, each implements some business logic through different interfaces. This image below expresses the difference between a SOAP and normal REST/JSON endpoint very well."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"\n  "},{type:"element",tagName:"a",properties:{className:["gatsby-resp-image-link"],href:"/static/soap-primer-7d9ce5ab887476bc5832d0fe1d924a35-48538.png",style:"display: block",target:"_blank",rel:["noopener"]},children:[{type:"text",value:"\n  \n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 55.25%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAAB70lEQVQoz3VSTW/aQBD1v4IDF6r8BTjyBzhw4RyRFAVBhHuIOOSEgtRDVA6WkiiBC00UkFIqgVAoRLgmEBDG4F1/gT9YezsGlUZVO1qtNLMz7828WYb+x7ytvY8Qx16ryxWWtMXUwHOXbJhtHnVd/7xPxhh3Op09yoZQDamL4bMyGyriK54JgAXF3vb8Mcdx2u321dV1o/FVEGg2556fe9ksRQtDm/+UJ4PluI9nQ58ZCFst2mzSep1Opz4KIW69XmfZT5eXn5+eXu8q9PbWubkhhmYZ8sxAorVSTF3xmTFWT06kXG5zeEgeHggUAxww12o1uHl+sOv8n7owoij2ej8wXgnCGGNlF+V5fjQawdi6roPbbpPHRw9aGwz8GT3X28nDrNdrSZIQkvv9HqRaliXL8g5C07SLi5JtmxxHz868j8ebL2XiC/S7D8a2bX1rwAN+oVDI5/PQTqvVSiaToVAoFoudnubv7xvwaqiKrhimjkxN3q/K22+1XC6zLFssFkGzeDweDAYTiUQ0Gj04+PC9+c3R5stxT357QdOBqSFmP70LQlFarVbT6TTHcYCSyWQCgUAkEkmlUuFw+PjoiLprUXhWpTfY9grPmb8EhJnhbyCEut3uVsseQEwmk1KpVKlUqKXqaG6tVMc0PJf8ApYIPWzkb3Y2AAAAAElFTkSuQmCC'); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;",alt:"SOAP explanation",title:"",src:"/static/soap-primer-7d9ce5ab887476bc5832d0fe1d924a35-48538.png",srcSet:["/static/soap-primer-7d9ce5ab887476bc5832d0fe1d924a35-bed0f.png 200w","/static/soap-primer-7d9ce5ab887476bc5832d0fe1d924a35-5fd34.png 400w","/static/soap-primer-7d9ce5ab887476bc5832d0fe1d924a35-48538.png 800w"],sizes:["(max-width:","800px)","100vw,","800px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  \n  "}]},{type:"text",value:"\n    "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Source: "},{type:"element",tagName:"a",properties:{href:"https://stackoverflow.com/a/44713574/419448"},children:[{type:"text",value:"Stack overflow"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Soap With Attachment API for Java (SAAJ)"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://docs.oracle.com/javaee/5/tutorial/doc/bnbhg.html"},children:[{type:"text",value:"SAAJ"}]},{type:"text",value:" is a lower level API in Java that express SOAP messages. Java developers rarely use SAAJ since the JAX WS and Spring WS provides better abstraction over SAAJ."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"SOAP in Clojure"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"1. Prerequisite"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"As a one-time step, convert the WSDL into Java objects. This can be done using `wsimport` or `xjc`"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"bash"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-bash"]},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"xjc -wsdl wsdl-file-name"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"or"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"bash"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-bash"]},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"wsimport wsdl-file-name"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"2. Build SOAP Message"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"First step is to build a soap message with header and body. The root element of the SOAP body is one of the Java object created in the first step. Construct the Java object with the necessary data. Finally convert the SOAP Message into string."}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"3. Perform POST"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"A simple HTTP POST need to be performed with "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"Content-Type"}]},{type:"text",value:" header set to "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"text/xml"}]},{type:"text",value:". This can be done using normal "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"clj-http"}]},{type:"text",value:" methods.Authentication should be covered ideally in the SOAP header."}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"4. Parse response into Java Object"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Finally the response string has to be converted into a SOAP Message again. This is required to parse the SOAP Response Body into one of the generated object."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Code in action"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Here is my "},{type:"element",tagName:"a",properties:{href:"https://github.com/prasann/soap-clj"},children:[{type:"text",value:"Github repository"}]},{type:"text",value:" with a small working application."}]}],data:{quirksMode:!1}},fields:{slug:"/soap-call-in-clojure-compojure-with-saaj/",prefix:"2018-02-16"},frontmatter:{title:"Dealing with SOAP in clojure",subTitle:"Performing SOAP calls using basic Java libraries in a Clojure app.",cover:null}},author:{id:"/Users/prasanna/projects/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Prasanna</strong> is a full stack web developer, with loads of experience in architecting and coding enterprise software solutions.  </p>"},footnote:{id:"/Users/prasanna/projects/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:"<ul>\n<li>rants and writings through personal experience</li>\n</ul>"},site:{siteMetadata:{facebook:{appId:"670156599751120%"}}}},pathContext:{slug:"/soap-call-in-clojure-compojure-with-saaj/"}}}});
//# sourceMappingURL=path---soap-call-in-clojure-compojure-with-saaj-0fb7bf6e6e027ff06efb.js.map