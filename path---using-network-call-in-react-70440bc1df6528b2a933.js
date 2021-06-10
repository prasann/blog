webpackJsonp([97819287637326],{906:function(e,t){e.exports={data:{post:{id:"/Users/prasanna/projects/blog/content/posts/2017-09-11--using-network-call-in-react/index.md absPath of file >>> MarkdownRemark",html:'<p>All network calls that are necessary to load data needed by the component should go inside <code class="language-text">componentDidMount()</code></p>\n<blockquote>\n<h5><a href="https://facebook.github.io/react/docs/react-component.html#componentdidmount">From React docs</a></h5>\n<p>componentDidMount() is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request. Setting state in this method will trigger a re-rendering.</p>\n</blockquote>\n<h4>Why not inside <code class="language-text">constructor()</code>?</h4>\n<ul>\n<li>If you make a fetch for a component in constructor, and the user navigates away from the page containing that component before the request completes, it will still try to setState on that component despite being unmounted, and React will throw an error.</li>\n<li>If your component fails to load, still you will end up making an unnecessary server-request.</li>\n</ul>\n<h4>Why not in <code class="language-text">componenentWillMount()</code>?</h4>\n<p>This function is invoked immediately before mounting occurs. So, obviously this appears to be a best place to place the call to load data. However that’s not the case.</p>\n<ul>\n<li>Even if you add the network call in componentWillMount, your request will almost certainly not finish before the component is rendered. There is no way to pause the rendering till the request returns. So you will end up re-rendering the component anyways.</li>\n<li>This is the only lifecycle hook called on server rendering. So, if you are serving from the backend, this will be executed twice.</li>\n</ul>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"All network calls that are necessary to load data needed by the component should go inside "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"componentDidMount()"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"h5",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://facebook.github.io/react/docs/react-component.html#componentdidmount"},children:[{type:"text",value:"From React docs"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"componentDidMount() is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request. Setting state in this method will trigger a re-rendering."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Why not inside "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"constructor()"}]},{type:"text",value:"?"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"If you make a fetch for a component in constructor, and the user navigates away from the page containing that component before the request completes, it will still try to setState on that component despite being unmounted, and React will throw an error."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"If your component fails to load, still you will end up making an unnecessary server-request."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Why not in "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"componenentWillMount()"}]},{type:"text",value:"?"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This function is invoked immediately before mounting occurs. So, obviously this appears to be a best place to place the call to load data. However that’s not the case."}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Even if you add the network call in componentWillMount, your request will almost certainly not finish before the component is rendered. There is no way to pause the rendering till the request returns. So you will end up re-rendering the component anyways."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"This is the only lifecycle hook called on server rendering. So, if you are serving from the backend, this will be executed twice."}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},fields:{slug:"/using-network-call-in-react/",prefix:"2017-09-11"},frontmatter:{title:"Asynchronous calls in React component",subTitle:"Preferred way for loading data in async calls, and downsides of other options.",cover:null}},author:{id:"/Users/prasanna/projects/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Prasanna</strong> is a full stack web developer, loves to build user interfaces with Javascript. Considers himself as a geek, quick learner and a team player 😃 </p>"},footnote:{id:"/Users/prasanna/projects/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:"<ul>\n<li>rants and writings through personal experience</li>\n</ul>"},site:{siteMetadata:{facebook:{appId:"670156599751120%"}}}},pathContext:{slug:"/using-network-call-in-react/"}}}});
//# sourceMappingURL=path---using-network-call-in-react-70440bc1df6528b2a933.js.map