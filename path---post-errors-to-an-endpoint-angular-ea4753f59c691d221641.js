webpackJsonp([0xb4e055c4a115],{878:function(e,t){e.exports={data:{post:{id:"/Users/prasanna/projects/blog-gatsby/content/posts/2016-06-25--post_errors_to_an_endpoint_angular/index.md absPath of file >>> MarkdownRemark",html:"<p>We were looking for an efficient way of capturing all the Javascript errors from browsers in our backend so it appears in our Kibana dashboard along with the server logs</p>\n<p>We had a Angular 1.5.8 application in front of multiple micro-services endpoint. Any error in the angular application will appear in the browser console and we planned to push these logs back to the server.</p>\n<h4>Angular’s <em>$exceptionHandler</em></h4>\n<p>In order to catch all the exceptions, we have to override the $exceptionHandler component provided by angular. Only catch here is that, since we are overriding angular component we may not be able to inject $http or any other angular component in our overrides and doing so will throw a cyclic dependency issue.</p>\n<h4>Initial solution</h4>\n<p>We came up with an idea of injecting $injector and fetching $http using the same.</p>\n<p>factory(‘$exceptionHandler’, [‘$log’, ‘$window’, ‘$injector’,\n($log, $window, $injector)=> {\nreturn (exception, cause) => {\n$log.error(exception, cause);\ntry {\nconst $http = $injector.get(‘$http’);\nconst logMessage = [{\nlevel: ‘error’,\nmessage: exception.toString(),\nurl: $window.location.href,\nstackTrace: exception.stack,\ncurrentTimestamp: Date.now()\n}];\n$http.post(‘/log/message’, logMessage);\n} catch (loggingError) {\n$log.log(loggingError);\n}\n);</p>\n<p>The above piece of code will work perfectly and will be able to post all the errors generated to an exposed endpoint.</p>\n<p>But the problem is, if the $http.post throws any exception then it causes unrecoverable recursion and browser will hung.</p>\n<p>In order to come out of that issue, we re wrote our http post logic using native JS syntax.</p>\n<h4>Final solution</h4>\n<p>Same code re written using native JS functions.</p>\n<p>factory(‘$exceptionHandler’, [‘$log’, ‘$window’, ‘$injector’, ($log, $window, $injector)=> {\nreturn (exception, cause) => {\n$log.error(exception, cause);\ntry {\nlet commonHeaders = $injector.get(‘$http’).defaults.headers.common;\nconst logMessage = [{\nlevel: ‘error’,\nmessage: exception.toString(),\nurl: $window.location.href,\nstackTrace: exception.stack,\ncurrentTimestamp: Date.now()\n}];\nlet xmlhttp = new XMLHttpRequest();\nxmlhttp.open(‘POST’, ‘/log/message’);\nxmlhttp.setRequestHeader(‘Content-Type’, ‘application/json;charset=UTF-8’);\nfor (let header in commonHeaders) {\nif (commonHeaders.hasOwnProperty(header)) {\nlet headerValue = commonHeaders[header];\nif (angular.isFunction(headerValue)) {\nheaderValue = headerValue();\n}\nxmlhttp.setRequestHeader(header, headerValue);\n}\n}\nxmlhttp.send(angular.toJson(logMessage));\n} catch (loggingError) {\n$log.log(loggingError);\n}\n};<br>\n});</p>",htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"We were looking for an efficient way of capturing all the Javascript errors from browsers in our backend so it appears in our Kibana dashboard along with the server logs"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"We had a Angular 1.5.8 application in front of multiple micro-services endpoint. Any error in the angular application will appear in the browser console and we planned to push these logs back to the server."}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Angular’s "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"$exceptionHandler"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"In order to catch all the exceptions, we have to override the $exceptionHandler component provided by angular. Only catch here is that, since we are overriding angular component we may not be able to inject $http or any other angular component in our overrides and doing so will throw a cyclic dependency issue."}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Initial solution"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"We came up with an idea of injecting $injector and fetching $http using the same."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"factory(‘$exceptionHandler’, [‘$log’, ‘$window’, ‘$injector’,\n($log, $window, $injector)=> {\nreturn (exception, cause) => {\n$log.error(exception, cause);\ntry {\nconst $http = $injector.get(‘$http’);\nconst logMessage = [{\nlevel: ‘error’,\nmessage: exception.toString(),\nurl: $window.location.href,\nstackTrace: exception.stack,\ncurrentTimestamp: Date.now()\n}];\n$http.post(‘/log/message’, logMessage);\n} catch (loggingError) {\n$log.log(loggingError);\n}\n);"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The above piece of code will work perfectly and will be able to post all the errors generated to an exposed endpoint."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"But the problem is, if the $http.post throws any exception then it causes unrecoverable recursion and browser will hung."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"In order to come out of that issue, we re wrote our http post logic using native JS syntax."}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Final solution"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Same code re written using native JS functions."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"factory(‘$exceptionHandler’, [‘$log’, ‘$window’, ‘$injector’, ($log, $window, $injector)=> {\nreturn (exception, cause) => {\n$log.error(exception, cause);\ntry {\nlet commonHeaders = $injector.get(‘$http’).defaults.headers.common;\nconst logMessage = [{\nlevel: ‘error’,\nmessage: exception.toString(),\nurl: $window.location.href,\nstackTrace: exception.stack,\ncurrentTimestamp: Date.now()\n}];\nlet xmlhttp = new XMLHttpRequest();\nxmlhttp.open(‘POST’, ‘/log/message’);\nxmlhttp.setRequestHeader(‘Content-Type’, ‘application/json;charset=UTF-8’);\nfor (let header in commonHeaders) {\nif (commonHeaders.hasOwnProperty(header)) {\nlet headerValue = commonHeaders[header];\nif (angular.isFunction(headerValue)) {\nheaderValue = headerValue();\n}\nxmlhttp.setRequestHeader(header, headerValue);\n}\n}\nxmlhttp.send(angular.toJson(logMessage));\n} catch (loggingError) {\n$log.log(loggingError);\n}\n};"},{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\n});"}]}],data:{quirksMode:!1}},fields:{slug:"/post_errors_to_an_endpoint_angular/",prefix:"2016-06-25"},frontmatter:{title:"Post browser logs to server in an Angular app",subTitle:"This post describes about posting all the browser errors in an angular application to an endpoint. This will be helpful to analyse or debug issues.",cover:null}},author:{id:"/Users/prasanna/projects/blog-gatsby/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Prasanna</strong> is a full stack web developer, loves to build user interfaces with Javascript. Considers himself as a geek, quick learner and a team player 😃 </p>"},footnote:{id:"/Users/prasanna/projects/blog-gatsby/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:"<ul>\n<li>rants and writings through personal experience</li>\n</ul>"},site:{siteMetadata:{facebook:{appId:"670156599751120"}}}},pathContext:{slug:"/post_errors_to_an_endpoint_angular/"}}}});
//# sourceMappingURL=path---post-errors-to-an-endpoint-angular-ea4753f59c691d221641.js.map