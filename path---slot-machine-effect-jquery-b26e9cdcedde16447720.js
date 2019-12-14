webpackJsonp([84340514680652],{891:function(e,t){e.exports={data:{post:{id:"/Users/prasanna/projects/blog/content/posts/2011-09-25--slot-machine-effect-jquery/index.md absPath of file >>> MarkdownRemark",html:'<p><strong>Intention:</strong><br>\nIn an yet another cart based web-app, the intention is to make the cart page looks fancier. <a href="http://praveenselvam.com" title="Praveen Selvam">Praveen Selvam</a> came up with this idea of slot machine effect in the price section whenever an item been added.</p>\n<p><strong>Slot Machine Effect:</strong></p>\n<p><strong>Requisite:</strong></p>\n<ul>\n<li>jQuery 1.5+</li>\n</ul>\n<p><strong>Idea:</strong></p>\n<ul>\n<li>Create an element to display the animation.</li>\n<li>Next create an empty element say <div></div> and set its position: ‘fixed’</li>\n<li>Set the position of the empty element to the Start Value of the slot.</li>\n<li>Now use jQuery animate to move the empty element from Start value to the specified End Value in a given duration.</li>\n<li>jQuery animate has a step() method which gives you the current position of the div for every unit of time.</li>\n<li>Now inside this step() method set the display element’s text to the current position value of the empty element.</li>\n<li>Since empty element moves from start value to end value, you will see the numbers changing from start value to end value in the display area.</li>\n</ul>\n<p><strong>Javascript Code:</strong></p>\n<p>$(‘#animate_btn’).click(function() {\ncashFlow($(‘.value’), $(‘#startVal’).val(), $(‘#endVal’).val(),\n$(‘#duration’).val() * 1000, $(‘#decimal’).val());\n});</p>\n<p>cashFlow = function(elem, from, to, duration, decimal) {\nvar magicObject;\nif (typeof magicObject === ‘undefined’) {\nmagicObject = $(’<div></div>‘).appendTo(‘body’);\n}\nmagicObject.css({\nposition: “fixed”,\nleft: from\n}).animate({\nleft: to\n}, {\nduration: duration,\nstep: function(currentLeft) {\nelem.html(Number(currentLeft).toFixed(decimal));\n},\ncomplete: function() {\nmagicObject.remove();\n}\n});\n};</p>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Intention:"}]},{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\nIn an yet another cart based web-app, the intention is to make the cart page looks fancier. "},{type:"element",tagName:"a",properties:{href:"http://praveenselvam.com",title:"Praveen Selvam"},children:[{type:"text",value:"Praveen Selvam"}]},{type:"text",value:" came up with this idea of slot machine effect in the price section whenever an item been added."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Slot Machine Effect:"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Requisite:"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"jQuery 1.5+"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Idea:"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Create an element to display the animation."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Next create an empty element say "},{type:"element",tagName:"div",properties:{},children:[]},{type:"text",value:" and set its position: ‘fixed’"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Set the position of the empty element to the Start Value of the slot."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Now use jQuery animate to move the empty element from Start value to the specified End Value in a given duration."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"jQuery animate has a step() method which gives you the current position of the div for every unit of time."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Now inside this step() method set the display element’s text to the current position value of the empty element."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Since empty element moves from start value to end value, you will see the numbers changing from start value to end value in the display area."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Javascript Code:"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"$(‘#animate_btn’).click(function() {\ncashFlow($(‘.value’), $(‘#startVal’).val(), $(‘#endVal’).val(),\n$(‘#duration’).val() * 1000, $(‘#decimal’).val());\n});"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"cashFlow = function(elem, from, to, duration, decimal) {\nvar magicObject;\nif (typeof magicObject === ‘undefined’) {\nmagicObject = $(’"}]},{type:"element",tagName:"div",properties:{},children:[]},{type:"text",value:"‘).appendTo(‘body’);\n}\nmagicObject.css({\nposition: “fixed”,\nleft: from\n}).animate({\nleft: to\n}, {\nduration: duration,\nstep: function(currentLeft) {\nelem.html(Number(currentLeft).toFixed(decimal));\n},\ncomplete: function() {\nmagicObject.remove();\n}\n});\n};"},{type:"element",tagName:"p",properties:{},children:[]}],data:{quirksMode:!1}},fields:{slug:"/slot-machine-effect-jquery/",prefix:"2011-09-25"},frontmatter:{title:"Slot machine effect using jQuery",subTitle:"A cool widget that looks like a slot machine. Small piece of code and a nice trick to animate the numbers to achieve a slot machine effect.",cover:null}},author:{id:"/Users/prasanna/projects/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Prasanna</strong> is a full stack web developer, loves to build user interfaces with Javascript. Considers himself as a geek, quick learner and a team player 😃 </p>"},footnote:{id:"/Users/prasanna/projects/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:"<ul>\n<li>rants and writings through personal experience</li>\n</ul>"},site:{siteMetadata:{facebook:{appId:""}}}},pathContext:{slug:"/slot-machine-effect-jquery/"}}}});
//# sourceMappingURL=path---slot-machine-effect-jquery-b26e9cdcedde16447720.js.map