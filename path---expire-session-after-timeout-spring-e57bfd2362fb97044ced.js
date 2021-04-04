webpackJsonp([0x6b71bbaf1174],{868:function(e,t){e.exports={data:{post:{id:"/home/runner/work/blog/blog/content/posts/2016-09-25--expire_session_after_timeout_spring/index.md absPath of file >>> MarkdownRemark",html:"<p>Using Spring security we were building an application which has 2 types of users Internal and External. Our requirement was</p>\n<ol>\n<li>Internal and External users have different idle timeouts.</li>\n<li>External user’s session should be invalidated after 30 mins. Irrespective of whether the user is active or not.</li>\n</ol>\n<h4>Setting up Idle timeout in Spring security</h4>\n<p>Spring provides out of box option to configure an idle timeout value. This invalidation is done by Spring security and happens while making a request after specified amount of time.</p>\n<p>We were able to achieve this by setting up setMaxInactiveIntervalInSeconds on the session object while creation.</p>\n<h4>Setting up Max timeout in Spring security</h4>\n<p>The above technique can be used only for setting the idle time. But our second scenario is to invalidate the session irrespective of whether the user is active or not.</p>\n<p>We ended up writing a custom filter which to invalidate the session manually whenever the session age is greater than the specified value.</p>\n<p>This filter will invalidate the session when the maximum time has reached for that session.</p>",htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Using Spring security we were building an application which has 2 types of users Internal and External. Our requirement was"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Internal and External users have different idle timeouts."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"External user’s session should be invalidated after 30 mins. Irrespective of whether the user is active or not."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Setting up Idle timeout in Spring security"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Spring provides out of box option to configure an idle timeout value. This invalidation is done by Spring security and happens while making a request after specified amount of time."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"We were able to achieve this by setting up setMaxInactiveIntervalInSeconds on the session object while creation."}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Setting up Max timeout in Spring security"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The above technique can be used only for setting the idle time. But our second scenario is to invalidate the session irrespective of whether the user is active or not."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"We ended up writing a custom filter which to invalidate the session manually whenever the session age is greater than the specified value."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This filter will invalidate the session when the maximum time has reached for that session."}]}],data:{quirksMode:!1}},fields:{slug:"/expire_session_after_timeout_spring/",prefix:"2016-09-25"},frontmatter:{title:"Spring security session timeouts",subTitle:"Setup session timeouts in spring security. This will explain how to setup the idle timeout and also the max timeout for separate sessions.",draft:null}},author:{id:"/home/runner/work/blog/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Prasanna</strong> is a full stack web developer, with exposure to various programming languages.\nUses mostly Java, Javascript these days and got 11+ years of architecting and coding enterprise software solutions.   </p>"},footnote:{id:"/home/runner/work/blog/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:"<ul>\n<li>rants and writings through personal experience</li>\n</ul>"},site:{siteMetadata:{facebook:{appId:"670156599751120%"}}}},pathContext:{slug:"/expire_session_after_timeout_spring/"}}}});
//# sourceMappingURL=path---expire-session-after-timeout-spring-e57bfd2362fb97044ced.js.map