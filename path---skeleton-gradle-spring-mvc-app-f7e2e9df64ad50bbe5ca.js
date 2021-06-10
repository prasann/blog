webpackJsonp([37745236087411],{892:function(e,t){e.exports={data:{post:{id:"/Users/prasanna/projects/blog/content/posts/2014-06-15--skeleton-gradle-spring-mvc-app/index.md absPath of file >>> MarkdownRemark",html:'<p>Will try to list down few of my learnings to set up a Spring MVC app with Gradle. And also this time i tried using Servlet 3.0 spec which means no .xml files for Spring configuration.</p>\n<p>Refer to the <a href="https://github.com/prasann/GradleSpringApp">GitHub repo</a> for the source code. I will be giving some notes on the code.</p>\n<h4>Create build.gradle file</h4>\n<p>build.gradle can be pretty much simple to start with. I started with adding java and war plugin followed by adding dependencies to the Spring artifacts. I have to define</p>\n<p>runtime ‘javax.servlet:jstl:1.2’</p>\n<p>to make sure it doesn’t get packaged as part of the war.</p>\n<p>Then thought it will be awesome to start the application in one command instead of building the war and deploying it in local instance. After some initial searching landed onto this <a href="https://github.com/bmuschko/gradle-cargo-plugin">Cargo plugin</a> This lets you to configure the server of your choice and get it working. So after doing some basic configuration got this working.</p>\n<p>Now</p>\n<p>gradle war cargoRunLocal</p>\n<p>since the task name is not so user friendly, just added an alias to it.</p>\n<p>task serve(dependsOn: cargoRunLocal) &#x3C;&#x3C; {\n}\n</p>\n<h4>Setup Spring</h4>\n<p>I decided to play around with Servlet 3.0 style of Spring configuration. This means that i do not need to create web.xml or applicationContext.xml files. Instead i can go with complete Java style configuration.</p>\n<p>Application containers (tomcat 7+ in my case) will look for implementation of WebApplicationInitializer and will load that class on the startup. Initializer.java in my src will be equivalent for web.xml</p>\n<p>MvcConfig.java will be equivalent to applicationContext.xml file. This contains all the bean initialization, property place holders and more.</p>\n<p>As you can see most of the configurations are handled by annotations.</p>\n<h4>Setup Unit Tests</h4>\n<p>Setting up Unit tests are no different to Gradle. As i mentioned i have used Java style configuration for my Spring classes. So the style of testing my controllers will also be different.</p>\n<p>InitControllerTest.java will be my controller test. I have initialized a mock web application in the</p>\n<p>@Before</p>\n<p>method and the rest of the stuff are handled by annotations.</p>\n<h4>Setup Logging</h4>\n<p>Setting up slf4j is quite straight forward. You have to add slf4j-log4j, log4j jars and add a log4j.properties to the</p>\n<p>src/main/resources</p>\n<p>In the log4j.properties you can define the way your appenders should work.</p>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Will try to list down few of my learnings to set up a Spring MVC app with Gradle. And also this time i tried using Servlet 3.0 spec which means no .xml files for Spring configuration."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Refer to the "},{type:"element",tagName:"a",properties:{href:"https://github.com/prasann/GradleSpringApp"},children:[{type:"text",value:"GitHub repo"}]},{type:"text",value:" for the source code. I will be giving some notes on the code."}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Create build.gradle file"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"build.gradle can be pretty much simple to start with. I started with adding java and war plugin followed by adding dependencies to the Spring artifacts. I have to define"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"runtime ‘javax.servlet:jstl:1.2’"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"to make sure it doesn’t get packaged as part of the war."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Then thought it will be awesome to start the application in one command instead of building the war and deploying it in local instance. After some initial searching landed onto this "},{type:"element",tagName:"a",properties:{href:"https://github.com/bmuschko/gradle-cargo-plugin"},children:[{type:"text",value:"Cargo plugin"}]},{type:"text",value:" This lets you to configure the server of your choice and get it working. So after doing some basic configuration got this working."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Now"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"gradle war cargoRunLocal"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"since the task name is not so user friendly, just added an alias to it."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"task serve(dependsOn: cargoRunLocal) << {\n}\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Setup Spring"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"I decided to play around with Servlet 3.0 style of Spring configuration. This means that i do not need to create web.xml or applicationContext.xml files. Instead i can go with complete Java style configuration."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Application containers (tomcat 7+ in my case) will look for implementation of WebApplicationInitializer and will load that class on the startup. Initializer.java in my src will be equivalent for web.xml"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"MvcConfig.java will be equivalent to applicationContext.xml file. This contains all the bean initialization, property place holders and more."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"As you can see most of the configurations are handled by annotations."}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Setup Unit Tests"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Setting up Unit tests are no different to Gradle. As i mentioned i have used Java style configuration for my Spring classes. So the style of testing my controllers will also be different."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"InitControllerTest.java will be my controller test. I have initialized a mock web application in the"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"@Before"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"method and the rest of the stuff are handled by annotations."}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Setup Logging"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Setting up slf4j is quite straight forward. You have to add slf4j-log4j, log4j jars and add a log4j.properties to the"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"src/main/resources"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"In the log4j.properties you can define the way your appenders should work."}]}],data:{quirksMode:!1}},fields:{slug:"/skeleton-gradle-spring-mvc-app/",prefix:"2014-06-15"},frontmatter:{title:"Gradle, Spring MVC App.",subTitle:"A skeleton sample app demostrating gradle set up with Spring MVC along with basic logging and deployment in tomcat environment.",cover:null}},author:{id:"/Users/prasanna/projects/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Prasanna</strong> is a full stack web developer, loves to build user interfaces with Javascript. Considers himself as a geek, quick learner and a team player 😃 </p>"},footnote:{id:"/Users/prasanna/projects/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:"<ul>\n<li>rants and writings through personal experience</li>\n</ul>"},site:{siteMetadata:{facebook:{appId:"670156599751120%"}}}},pathContext:{slug:"/skeleton-gradle-spring-mvc-app/"}}}});
//# sourceMappingURL=path---skeleton-gradle-spring-mvc-app-f7e2e9df64ad50bbe5ca.js.map