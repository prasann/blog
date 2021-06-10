webpackJsonp([0x5bd983bff065],{896:function(e,t){e.exports={data:{post:{id:"/Users/prasanna/projects/blog/content/posts/2010-03-05--stop-halting-at-assertions/index.md absPath of file >>> MarkdownRemark",html:'<p>When i was writing functional tests i stepped into a scenario where i have to continue with the test even after an assertion failure. The idea here is that you find an assertion failing, still you may need to go ahead and check out all the assertions as these tests generally take long time to complete. At the end of the test it will be good to have the summary of all the failures along with the stack trace. I was looking for some testing framework to help out with this functionality but unfortunately cant find any.</p>\n<p>Finally using TestNg i implemented this feature. All you need is to write a listener that listens whenever a test fails and simply logs the stack trace without failing the test. There is a neat step by step tutorial given <a href="http://seleniumexamples.com/blog/guide/using-soft-assertions-in-testng">here </a></p>\n<p>Though this example has some specific information for Selenium based tests, it works fine with normal functional tests too.</p>\n<p>Happy Testing :)</p>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"When i was writing functional tests i stepped into a scenario where i have to continue with the test even after an assertion failure. The idea here is that you find an assertion failing, still you may need to go ahead and check out all the assertions as these tests generally take long time to complete. At the end of the test it will be good to have the summary of all the failures along with the stack trace. I was looking for some testing framework to help out with this functionality but unfortunately cant find any."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Finally using TestNg i implemented this feature. All you need is to write a listener that listens whenever a test fails and simply logs the stack trace without failing the test. There is a neat step by step tutorial given "},{type:"element",tagName:"a",properties:{href:"http://seleniumexamples.com/blog/guide/using-soft-assertions-in-testng"},children:[{type:"text",value:"here "}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Though this example has some specific information for Selenium based tests, it works fine with normal functional tests too."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Happy Testing :)"}]}],data:{quirksMode:!1}},fields:{slug:"/stop-halting-at-assertions/",prefix:"2010-03-05"},frontmatter:{title:"Stop halting at Assertions",subTitle:"Generally assertions cause the test to halt. But sometimes we need to continue further and evaluate all the asserts and expect a comprehensive report of all the asserts.",cover:null}},author:{id:"/Users/prasanna/projects/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Prasanna</strong> is a full stack web developer, loves to build user interfaces with Javascript. Considers himself as a geek, quick learner and a team player 😃 </p>"},footnote:{id:"/Users/prasanna/projects/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:"<ul>\n<li>rants and writings through personal experience</li>\n</ul>"},site:{siteMetadata:{facebook:{appId:"670156599751120%"}}}},pathContext:{slug:"/stop-halting-at-assertions/"}}}});
//# sourceMappingURL=path---stop-halting-at-assertions-75863409140707fc8455.js.map