webpackJsonp([5189210613492],{899:function(e,t){e.exports={data:{post:{id:"/Users/prasanna/projects/blog/content/posts/2017-05-18--store_function_inside_redux_store/index.md absPath of file >>> MarkdownRemark",html:'<p><a href="https://redux.js.org/">Redux</a> is a predictable state container for Javascript. Redux state has to be serializable all the time.</p>\n<p>Object serialization is the process of converting an object’s state to a string from which it can later be restored.</p>\n<p>So, if you are trying to store a function inside the Redux state, you need to serialize them before persisting.</p>\n<blockquote>\n<p>Storing functions inside redux state is not a best practice in general. So try to avoid it.</p>\n</blockquote>\n<p>Javascript functions can be serialized quite easily, the challenge is in retrieving them from the store to execute.</p>\n<p>Below are the helper functions for persisting functions inside Redux state.</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js">  <span class="token comment">//Returns a string</span>\n  <span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">serializeFunction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">func</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>func<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">//serializeFunction(()=>console.log(\'Hello!!\'))</span>\n  <span class="token comment">// Output ==> "()=>console.log(\'Hello!!\')"</span></code></pre>\n      </div>\n<p>The function to be stored in the state should be converted into string using serializeFunction.</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js">  <span class="token comment">//Returns a function</span>\n  <span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">deserializeFunction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">funcString</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Function</span><span class="token punctuation">(</span>\\`<span class="token keyword">return</span> $<span class="token punctuation">{</span>funcString<span class="token punctuation">}</span>\\`<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Convert the string from the redux store into a function using deserializeFunction</p>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://redux.js.org/"},children:[{type:"text",value:"Redux"}]},{type:"text",value:" is a predictable state container for Javascript. Redux state has to be serializable all the time."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Object serialization is the process of converting an object’s state to a string from which it can later be restored."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"So, if you are trying to store a function inside the Redux state, you need to serialize them before persisting."}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Storing functions inside redux state is not a best practice in general. So try to avoid it."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Javascript functions can be serialized quite easily, the challenge is in retrieving them from the store to execute."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Below are the helper functions for persisting functions inside Redux state."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"js"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-js"]},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"  "},{type:"element",tagName:"span",properties:{className:["token","comment"]},children:[{type:"text",value:"//Returns a string"}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"export"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"const"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","function-variable","function"]},children:[{type:"text",value:"serializeFunction"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","parameter"]},children:[{type:"text",value:"func"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"=>"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"func"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"toString"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","comment"]},children:[{type:"text",value:"//serializeFunction(()=>console.log('Hello!!'))"}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","comment"]},children:[{type:"text",value:"// Output ==> \"()=>console.log('Hello!!')\""}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The function to be stored in the state should be converted into string using serializeFunction."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"js"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-js"]},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"  "},{type:"element",tagName:"span",properties:{className:["token","comment"]},children:[{type:"text",value:"//Returns a function"}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"export"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"const"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","function-variable","function"]},children:[{type:"text",value:"deserializeFunction"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","parameter"]},children:[{type:"text",value:"funcString"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"=>"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"new"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","class-name"]},children:[{type:"text",value:"Function"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"\\`"},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"return"}]},{type:"text",value:" $"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"funcString"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\\`"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Convert the string from the redux store into a function using deserializeFunction"}]}],data:{quirksMode:!1}},fields:{slug:"/store_function_inside_redux_store/",prefix:"2017-05-18"},frontmatter:{title:"Storing a function in the Redux store",subTitle:"Serialize JS functions to make it persistent in Redux store.",cover:null,draft:null}},author:{id:"/Users/prasanna/projects/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Prasanna</strong> is a full stack web developer, with loads of experience in architecting and coding enterprise software solutions.  </p>"},footnote:{id:"/Users/prasanna/projects/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:"<ul>\n<li>rants and writings through personal experience</li>\n</ul>"},site:{siteMetadata:{facebook:{appId:"670156599751120%"}}}},pathContext:{slug:"/store_function_inside_redux_store/"}}}});
//# sourceMappingURL=path---store-function-inside-redux-store-316cca76a1a10539d413.js.map