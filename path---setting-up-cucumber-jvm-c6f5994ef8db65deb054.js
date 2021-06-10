webpackJsonp([0xede341ea9395],{891:function(e,t){e.exports={data:{post:{id:"/Users/prasanna/projects/blog/content/posts/2013-07-10--setting-up-cucumber-jvm/index.md absPath of file >>> MarkdownRemark",html:'<p><a href="https://github.com/cucumber/cucumber-jvm" title="Cucumber JVM">Cucumber JVM</a> is Java implementation of Cucumber BDD.</p>\n<h3><strong>Integrating into the Project</strong></h3>\n<p>The installation using maven is super simple, just add the dependency and you are ready to go. Make sure you add both command line interface (cucumber-core) and the IDE interface (cucumber-junit)</p>\n<p>I was using Intellij and add Intellij Cucumber plugin, to make the navigations easier.</p>\n<p>One thing i liked very much is the ability to add custom annotations to the feature. You can add a custom annotation and can create Before and After hook for them.</p>\n<p>In .feature file</p>\n<p>@Email\nFeature:</p>\n<p>In the step definitions file.</p>\n<p>@Before({“@Email”})\n@After({“@Email”})</p>\n<h3><strong>Integrating with Spring</strong></h3>\n<p>For Spring integration you need to add one more component of the cucumber-jvm <em>(cucumber-spring)</em></p>\n<p>It is advisable to have a test runner class which can run all the feature files in one go especially when you are runnning in the CI.</p>\n<p>The structure of the test runner class will be :</p>\n<p>@RunWith(Cucumber.class)\npublic class CucumberAdapterTest {\n}</p>\n<p>Make sure to place all the feature files in the same package as of this Runner class. Or you can specify the path using the cucumber options, like this.</p>\n<p>@RunWith(Cucumber.class)\n@Cucumber.Options(features = “classpath:**/*.feature”)\npublic class CucumberAdapterTest {\n}</p>\n<p>If you are placing all the step definition in other package you can add that to the annotation using glue attribute.</p>\n<p>@RunWith(Cucumber.class)\n@Cucumber.Options(features = “classpath:**/*”, glue = {“path of the step definitions”})\npublic class CucumberAdapterTest {\n}</p>\n<p>This will look up for cucumber.xml file in the classpath. This xml file can hold all the bean definitions. My cucumber.xml was super simple.</p>\n<?xml version="1.0" encoding="UTF-8"?>\n<p><beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xmlns:context="http://www.springframework.org/schema/context"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans \n       http://www.springframework.org/schema/beans/spring-beans-3.0.xsd\n\thttp://www.springframework.org/schema/context \n\thttp://www.springframework.org/schema/context/spring-context-3.0.xsd"></p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">&lt;import resource=&quot;classpath\\*:/application-context.xml&quot;/&gt;\n\n&lt;context:component-scan base-package=&quot;path of the step definition&quot;/&gt;\n&lt;context:annotation-config/&gt;</code></pre>\n      </div>\n</beans>\n<p>The step defnitions can lie in a different package and make sure you use glue attribute to wire them in the Runner class.</p>\n<p>public class StepDefinitions {\n@Autowired\nEntityRepository entityRepository;</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">@Given(&quot;^Register a user$&quot;)\npublic void registerUser() throws Throwable {\n\n}</code></pre>\n      </div>\n<p>}</p>\n<h3><strong>Integrating with Spring Transactions</strong></h3>\n<p>One last thing that i wanted to do is to hook up Spring transactions. So all the data created by the features have to be removed after the test completes. So you can write independent tests without bothering about the data.</p>\n<p>You can use ’<em>txn</em>’ annotation that comes with Cucumber-JVM. All you need to do is to wire up that package along with your adapter class.</p>\n<p>@RunWith(Cucumber.class)\n@Cucumber.Options(glue = {“cucumber.api.spring”})\npublic class CucumberAdapterTest {\n}</p>\n<p>and</p>\n<p>@txn\nScenario: Some scenario to test</p>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://github.com/cucumber/cucumber-jvm",title:"Cucumber JVM"},children:[{type:"text",value:"Cucumber JVM"}]},{type:"text",value:" is Java implementation of Cucumber BDD."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Integrating into the Project"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The installation using maven is super simple, just add the dependency and you are ready to go. Make sure you add both command line interface (cucumber-core) and the IDE interface (cucumber-junit)"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"I was using Intellij and add Intellij Cucumber plugin, to make the navigations easier."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"One thing i liked very much is the ability to add custom annotations to the feature. You can add a custom annotation and can create Before and After hook for them."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"In .feature file"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"@Email\nFeature:"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"In the step definitions file."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"@Before({“@Email”})\n@After({“@Email”})"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Integrating with Spring"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"For Spring integration you need to add one more component of the cucumber-jvm "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"(cucumber-spring)"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"It is advisable to have a test runner class which can run all the feature files in one go especially when you are runnning in the CI."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The structure of the test runner class will be :"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"@RunWith(Cucumber.class)\npublic class CucumberAdapterTest {\n}"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Make sure to place all the feature files in the same package as of this Runner class. Or you can specify the path using the cucumber options, like this."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"@RunWith(Cucumber.class)\n@Cucumber.Options(features = “classpath:**/*.feature”)\npublic class CucumberAdapterTest {\n}"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"If you are placing all the step definition in other package you can add that to the annotation using glue attribute."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"@RunWith(Cucumber.class)\n@Cucumber.Options(features = “classpath:**/*”, glue = {“path of the step definitions”})\npublic class CucumberAdapterTest {\n}"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This will look up for cucumber.xml file in the classpath. This xml file can hold all the bean definitions. My cucumber.xml was super simple."}]},{type:"text",value:"\n"},{type:"comment",value:'?xml version="1.0" encoding="UTF-8"?'},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"beans",properties:{xmlns:"http://www.springframework.org/schema/beans","xmlns:xsi":"http://www.w3.org/2001/XMLSchema-instance","xmlns:context":"http://www.springframework.org/schema/context","xsi:schemalocation":"http://www.springframework.org/schema/beans \n       http://www.springframework.org/schema/beans/spring-beans-3.0.xsd\n\thttp://www.springframework.org/schema/context \n\thttp://www.springframework.org/schema/context/spring-context-3.0.xsd"},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:'<import resource="classpath\\*:/application-context.xml"/>\n\n<context:component-scan base-package="path of the step definition"/>\n<context:annotation-config/>'}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The step defnitions can lie in a different package and make sure you use glue attribute to wire them in the Runner class."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"public class StepDefinitions {\n@Autowired\nEntityRepository entityRepository;"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:'@Given("^Register a user$")\npublic void registerUser() throws Throwable {\n\n}'}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"}"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Integrating with Spring Transactions"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"One last thing that i wanted to do is to hook up Spring transactions. So all the data created by the features have to be removed after the test completes. So you can write independent tests without bothering about the data."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"You can use ’"},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"txn"}]},{type:"text",value:"’ annotation that comes with Cucumber-JVM. All you need to do is to wire up that package along with your adapter class."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"@RunWith(Cucumber.class)\n@Cucumber.Options(glue = {“cucumber.api.spring”})\npublic class CucumberAdapterTest {\n}"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"and"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"@txn\nScenario: Some scenario to test"}]}],data:{quirksMode:!1}},fields:{slug:"/setting-up-cucumber-jvm/",prefix:"2013-07-10"},frontmatter:{title:"Setting up Cucumber-jvm",subTitle:"Setting up cucumber BDD framework in your Java project.",cover:null}},author:{id:"/Users/prasanna/projects/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Prasanna</strong> is a full stack web developer, loves to build user interfaces with Javascript. Considers himself as a geek, quick learner and a team player 😃 </p>"},footnote:{id:"/Users/prasanna/projects/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:"<ul>\n<li>rants and writings through personal experience</li>\n</ul>"},site:{siteMetadata:{facebook:{appId:"670156599751120%"}}}},pathContext:{slug:"/setting-up-cucumber-jvm/"}}}});
//# sourceMappingURL=path---setting-up-cucumber-jvm-c6f5994ef8db65deb054.js.map