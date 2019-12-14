webpackJsonp([0x9ce2a5ccfa41],{886:function(e,t){e.exports={data:{post:{id:"/Users/prasanna/projects/blog/content/posts/2012-12-04--scribblings-socket-io/index.md absPath of file >>> MarkdownRemark",html:'<p>I was trying my hands on socket.io. On my first glance it looked extremely simple to get going. The app i was working was on node.js, so i had no trouble in including socket.io into my project.</p>\n<p>My app had client and server component. For the server component i could able to do the npm install and got the socket.io working. Whereas for the client component i couldn’t able to find the stand alone js available for download. Basically the js comes in along with the npm which means you got to take it out separately if you want to use it. Then i used the js file from their <a href="https://github.com/learnboost/socket.io">Github repo</a>.</p>\n<h2>By default Socket.io doesn’t perform broadcast</h2>\n<p>This is my first learning. Though it seems to be obvious after taking a good look onto the API, it wasn’t very clear for me in the beginning.</p>\n<p><em>For example:</em></p>\n<p><strong>Server</strong></p>\n<p>var app = require(‘express’)(),\nserver = require(‘http’).createServer(app),\nio = require(‘socket.io’).listen(server);</p>\n<p>server.listen(80);</p>\n<p>io.sockets.on(‘connection’, function(socket) {\nsocket.on(‘first_msg’, function(data) {\nsocket.emit(‘reply’, {\nhello: ‘world’\n});\n});\n});</p>\n<p><strong>Client 1:</strong></p>\n<script src = "/socket.io/socket.io.js" > </script>\n<script>\n\tvar socket = io.connect(\'http:/ / localhost \');\n\tsocket.emit(\'first\\_msg \', { my: \'data1 \' });\n</script>\n<p><strong>Client 2:</strong></p>\n<script src = "/socket.io/socket.io.js" > </script>\n<script>\n\tvar socket = io.connect(\'http:/ / localhost \');\n\tsocket.on(\'reply \', function (data){\n\t\tconsole.log("Client1 had pinged server.");\n\t}\n</script>\n<p>In this case i was expecting my <em>Client2</em> console.log to execute but that never happened. Reason being whenever <em>Client1</em> emits ’<em>first\\</em>msg<em>’ it was _Client1</em> who was receiving the reply too (obvious i know !!).</p>\n<p>So in these cases socket.io provides an API to broadcast messages.Hence instead of</p>\n<p>socket.emit(‘reply’, { hello: ‘world’ });</p>\n<p>it should have been</p>\n<p>socket.broadcast.emit(‘reply’, { hello: ‘world’ });</p>\n<h2>Exposed events in socketIO are just defined for socket.on methods</h2>\n<p>I was trying to emit a custom message from my client. I need to perform some actions on its success and failure. Now i need to attach success and error callbacks. For this i found this <a href="https://github.com/LearnBoost/socket.io/wiki/Exposed-events" title="Exposed Events">Exposed events</a> doc. The funda is that all these exposed events are defined only for socket.on which means while emitting a message i cannot bind any callbacks to it.</p>\n<p>For error callback it is straight forward. We have</p>\n<p>socket.on(‘error’, () -> console.log(“Error Occured”))</p>\n<p>which can be bound on the socket so whenever an error is been thrown on the socket the defined behaviour gets executed.</p>\n<p><strong>Client</strong> emits the custom message and sends JSON data to the socket via socket.emit, also he gets an update function that handles the success callback</p>\n<p>socket.emit (‘message’, {hello: ‘world’});\nsocket.on (‘messageSuccess’, function (data) {\n//do something\n});</p>\n<p><strong>Server</strong>-side Gets a call from the message emit from the client and emits the messageSuccess back to the client</p>\n<p>socket.on (‘message’, function (data) {\nio.sockets.emit (‘messageSuccess’, data);\n});</p>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"I was trying my hands on socket.io. On my first glance it looked extremely simple to get going. The app i was working was on node.js, so i had no trouble in including socket.io into my project."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"My app had client and server component. For the server component i could able to do the npm install and got the socket.io working. Whereas for the client component i couldn’t able to find the stand alone js available for download. Basically the js comes in along with the npm which means you got to take it out separately if you want to use it. Then i used the js file from their "},{type:"element",tagName:"a",properties:{href:"https://github.com/learnboost/socket.io"},children:[{type:"text",value:"Github repo"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"By default Socket.io doesn’t perform broadcast"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This is my first learning. Though it seems to be obvious after taking a good look onto the API, it wasn’t very clear for me in the beginning."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"For example:"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Server"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"var app = require(‘express’)(),\nserver = require(‘http’).createServer(app),\nio = require(‘socket.io’).listen(server);"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"server.listen(80);"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"io.sockets.on(‘connection’, function(socket) {\nsocket.on(‘first_msg’, function(data) {\nsocket.emit(‘reply’, {\nhello: ‘world’\n});\n});\n});"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Client 1:"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"script",properties:{src:"/socket.io/socket.io.js"},children:[{type:"text",value:" "}]},{type:"text",value:"\n"},{type:"element",tagName:"script",properties:{},children:[{type:"text",value:"\n\tvar socket = io.connect('http:/ / localhost ');\n\tsocket.emit('first\\_msg ', { my: 'data1 ' });\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Client 2:"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"script",properties:{src:"/socket.io/socket.io.js"},children:[{type:"text",value:" "}]},{type:"text",value:"\n"},{type:"element",tagName:"script",properties:{},children:[{type:"text",value:"\n\tvar socket = io.connect('http:/ / localhost ');\n\tsocket.on('reply ', function (data){\n\t\tconsole.log(\"Client1 had pinged server.\");\n\t}\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"In this case i was expecting my "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"Client2"}]},{type:"text",value:" console.log to execute but that never happened. Reason being whenever "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"Client1"}]},{type:"text",value:" emits ’"},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"first\\"}]},{type:"text",value:"msg"},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"’ it was _Client1"}]},{type:"text",value:" who was receiving the reply too (obvious i know !!)."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"So in these cases socket.io provides an API to broadcast messages.Hence instead of"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"socket.emit(‘reply’, { hello: ‘world’ });"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"it should have been"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"socket.broadcast.emit(‘reply’, { hello: ‘world’ });"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Exposed events in socketIO are just defined for socket.on methods"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"I was trying to emit a custom message from my client. I need to perform some actions on its success and failure. Now i need to attach success and error callbacks. For this i found this "},{type:"element",tagName:"a",properties:{href:"https://github.com/LearnBoost/socket.io/wiki/Exposed-events",title:"Exposed Events"},children:[{type:"text",value:"Exposed events"}]},{type:"text",value:" doc. The funda is that all these exposed events are defined only for socket.on which means while emitting a message i cannot bind any callbacks to it."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"For error callback it is straight forward. We have"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"socket.on(‘error’, () -> console.log(“Error Occured”))"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"which can be bound on the socket so whenever an error is been thrown on the socket the defined behaviour gets executed."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Client"}]},{type:"text",value:" emits the custom message and sends JSON data to the socket via socket.emit, also he gets an update function that handles the success callback"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"socket.emit (‘message’, {hello: ‘world’});\nsocket.on (‘messageSuccess’, function (data) {\n//do something\n});"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Server"}]},{type:"text",value:"-side Gets a call from the message emit from the client and emits the messageSuccess back to the client"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"socket.on (‘message’, function (data) {\nio.sockets.emit (‘messageSuccess’, data);\n});"}]}],data:{quirksMode:!1}},fields:{slug:"/scribblings-socket-io/",prefix:"2012-12-04"},frontmatter:{title:"Scribblings on Socket.io",subTitle:"When i tried out socket.io for the first time, it was quite an interesting learning of few new paradigms and techniques.",cover:null}},author:{id:"/Users/prasanna/projects/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Prasanna</strong> is a full stack web developer, loves to build user interfaces with Javascript. Considers himself as a geek, quick learner and a team player 😃 </p>"},footnote:{id:"/Users/prasanna/projects/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:"<ul>\n<li>rants and writings through personal experience</li>\n</ul>"},site:{siteMetadata:{facebook:{appId:"670156599751120"}}}},pathContext:{slug:"/scribblings-socket-io/"}}}});
//# sourceMappingURL=path---scribblings-socket-io-c3832f1e078e10328cfd.js.map