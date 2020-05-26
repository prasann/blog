webpackJsonp([0x8fc4575bb321],{903:function(e,t){e.exports={data:{post:{id:"/home/runner/work/blog/blog/content/posts/2011-01-20--test-your-controllers-modelattribute-methods/index.md absPath of file >>> MarkdownRemark",html:'<p>I was about to write some unit tests around my Spring’s controller classes and also i wanted to write the test using MockHttpRequest and MockHttpResponse.</p>\n<p>My controller had a method to which i was using ModelAttribute as one of the parameter. I just want to simulate the same scenario in my Unit Tests.</p>\n<p>Unfortunately i could not see any methods in MockHttpRequest to help me with this. So i had to take a simple different approach as an workaround for this.</p>\n<p>My Controller code looks similar to this:</p>\n<p>@Controller\n@RequestMapping(value = “/register”)\npublic class MyController {\n@RequestMapping(value = “/save”, method = RequestMethod.POST)\npublic ModelAndView save(@ModelAttribute User user) {\n//Code to save the User object\nreturn new ModelAndView();\n}\n}</p>\n<p>My Unit Tests:</p>\n<p>public class MyControllerTest {\nMockHttpServletResponse response;\nMockHttpServletRequest request;\nAnnotationMethodHandlerAdapter handler;</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">@Before\npublic final void init() {\n    response = new MockHttpServletResponse();\n    request = new MockHttpServletRequest();\n    handler = new AnnotationMethodHandlerAdapter();\n}\n\n@Test\npublic void shouldTestSaveUser() {\n    final User mockUser = new UserTestBuilder().withName(&quot;John&quot;).build();\n    request.setMethod(&quot;POST&quot;);\n    request.setRequestURI(&quot;/register/save&quot;);\n\n    MyController myController = new MyController() {\n        @ModelAttribute\n        public User mockModel() {\n            return user;\n        }\n    }\n    ModelAndView model = handler.handle(request, response, myController);\n}</code></pre>\n      </div>\n<p>}</p>\n<p><em><strong>Explanation:</strong></em></p>\n<p>Whenever a method in a controller is annotated with @ModelAttribute , it will be invoked for every request made to that controller. So while creating the mycontroller object i am overriding a sample method which has this annotation and returns a User object as a ModelAttribute.</p>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"I was about to write some unit tests around my Spring’s controller classes and also i wanted to write the test using MockHttpRequest and MockHttpResponse."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"My controller had a method to which i was using ModelAttribute as one of the parameter. I just want to simulate the same scenario in my Unit Tests."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Unfortunately i could not see any methods in MockHttpRequest to help me with this. So i had to take a simple different approach as an workaround for this."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"My Controller code looks similar to this:"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"@Controller\n@RequestMapping(value = “/register”)\npublic class MyController {\n@RequestMapping(value = “/save”, method = RequestMethod.POST)\npublic ModelAndView save(@ModelAttribute User user) {\n//Code to save the User object\nreturn new ModelAndView();\n}\n}"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"My Unit Tests:"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"public class MyControllerTest {\nMockHttpServletResponse response;\nMockHttpServletRequest request;\nAnnotationMethodHandlerAdapter handler;"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:'@Before\npublic final void init() {\n    response = new MockHttpServletResponse();\n    request = new MockHttpServletRequest();\n    handler = new AnnotationMethodHandlerAdapter();\n}\n\n@Test\npublic void shouldTestSaveUser() {\n    final User mockUser = new UserTestBuilder().withName("John").build();\n    request.setMethod("POST");\n    request.setRequestURI("/register/save");\n\n    MyController myController = new MyController() {\n        @ModelAttribute\n        public User mockModel() {\n            return user;\n        }\n    }\n    ModelAndView model = handler.handle(request, response, myController);\n}'}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"}"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Explanation:"}]}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Whenever a method in a controller is annotated with @ModelAttribute , it will be invoked for every request made to that controller. So while creating the mycontroller object i am overriding a sample method which has this annotation and returns a User object as a ModelAttribute."}]}],data:{quirksMode:!1}},fields:{slug:"/test-your-controllers-modelattribute-methods/",prefix:"2011-01-20"},frontmatter:{title:"Test your Controller's ModelAttribute methods.",subTitle:"Injecting a ModelAttribute to the controller's method in Unit tests using Spring and jUnit.",cover:null,draft:null}},author:{id:"/home/runner/work/blog/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Prasanna</strong> is a full stack web developer, with loads of experience in architecting and coding enterprise software solutions.  </p>"},footnote:{id:"/home/runner/work/blog/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:"<ul>\n<li>rants and writings through personal experience</li>\n</ul>"},site:{siteMetadata:{facebook:{appId:"670156599751120%"}}}},pathContext:{slug:"/test-your-controllers-modelattribute-methods/"}}}});
//# sourceMappingURL=path---test-your-controllers-modelattribute-methods-63203e4e058792b3f784.js.map