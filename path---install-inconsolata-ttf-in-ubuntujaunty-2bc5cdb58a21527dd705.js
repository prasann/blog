webpackJsonp([0xbfa14465f177],{874:function(e,t){e.exports={data:{post:{id:"/home/runner/work/blog/blog/content/posts/2009-12-11--install-inconsolata-ttf-in-ubuntujaunty/index.md absPath of file >>> MarkdownRemark",html:'<p>As developers tend to spend most of the time in front of IDEs it makes sense to pick up the best suited font for development. And i have seen most of the developers prefer to use monochrome fonts as it yields better feel while looking at the code. It is been now widely accepted by many developers to use Inconsolata as their development font. So better start using it and prove yourself geeky ;)<br>\nWhen i tried to use Inconsolata with my IntellijIDEA i couldn’t find the ttf type inconsolata. And Intellij supports only ttf types. After a long search i downloaded thr ODf type and converted it to ttf using a converter and then i had the issue of installing it to my Jaunty. And i took help of my dev friends out here to resolve stuffs. So thought of consolidating the steps together as it may reduce someone else’s pain.</p>\n<p><strong>Steps to install Inconsolata.ttf in Ubuntu(Jaunty).</strong></p>\n<p><strong>Step 1:</strong> Start with downloading inconsolata font. <a href="http://www.4shared.com/file/xnMYNL0w/Inconsolata.html">Inconsolata.ttf</a></p>\n<p><strong>Step 2:</strong></p>\n<p>mkdir /usr/share/fonts/truetype</p>\n<p>cd /usr/share/fonts/truetype</p>\n<p>sudo mkdir  ttf-inconsolata</p>\n<p><strong>Step 3:</strong> Copy the Inconsolata.ttf into the directory.</p>\n<p>sudo cp ~/Desktop/Inconsolata.ttf ttf-inconsolata</p>\n<p><strong>Step 4:</strong> Now modify the permissions to allow it to be accessed by IDE’s</p>\n<p>cd ttf-inconsolata</p>\n<p>sudo chmod 777 Inconsolata.ttf</p>\n<p><strong>Step 5:</strong>Its not over yet. Finally before going to the IDE you need to cache the font to make it accessible.</p>\n<p>sudo fc-cache -f -v</p>\n<p>This will show a list of fonts cached recently. Check whether Inconsolata.ttf is been cached.</p>\n<p>Now you can keep staring at your code for a long time as it feels a lot better :)</p>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"As developers tend to spend most of the time in front of IDEs it makes sense to pick up the best suited font for development. And i have seen most of the developers prefer to use monochrome fonts as it yields better feel while looking at the code. It is been now widely accepted by many developers to use Inconsolata as their development font. So better start using it and prove yourself geeky ;)"},{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\nWhen i tried to use Inconsolata with my IntellijIDEA i couldn’t find the ttf type inconsolata. And Intellij supports only ttf types. After a long search i downloaded thr ODf type and converted it to ttf using a converter and then i had the issue of installing it to my Jaunty. And i took help of my dev friends out here to resolve stuffs. So thought of consolidating the steps together as it may reduce someone else’s pain."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Steps to install Inconsolata.ttf in Ubuntu(Jaunty)."}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Step 1:"}]},{type:"text",value:" Start with downloading inconsolata font. "},{type:"element",tagName:"a",properties:{href:"http://www.4shared.com/file/xnMYNL0w/Inconsolata.html"},children:[{type:"text",value:"Inconsolata.ttf"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Step 2:"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"mkdir /usr/share/fonts/truetype"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"cd /usr/share/fonts/truetype"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"sudo mkdir  ttf-inconsolata"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Step 3:"}]},{type:"text",value:" Copy the Inconsolata.ttf into the directory."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"sudo cp ~/Desktop/Inconsolata.ttf ttf-inconsolata"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Step 4:"}]},{type:"text",value:" Now modify the permissions to allow it to be accessed by IDE’s"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"cd ttf-inconsolata"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"sudo chmod 777 Inconsolata.ttf"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Step 5:"}]},{type:"text",value:"Its not over yet. Finally before going to the IDE you need to cache the font to make it accessible."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"sudo fc-cache -f -v"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This will show a list of fonts cached recently. Check whether Inconsolata.ttf is been cached."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Now you can keep staring at your code for a long time as it feels a lot better :)"}]}],data:{quirksMode:!1}},fields:{slug:"/install-inconsolata-ttf-in-ubuntujaunty/",prefix:"2009-12-11"},frontmatter:{title:"Install Inconsolata.ttf in Ubuntu(Jaunty).",subTitle:"Inconsolata is dev friendly font used by devs for their code. This post is about installing Inconsolata tru type in Ubuntu - Jaunty.",draft:null}},author:{id:"/home/runner/work/blog/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Prasanna</strong> is a full stack web developer, with loads of experience in architecting and coding enterprise software solutions.  </p>"},footnote:{id:"/home/runner/work/blog/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:"<ul>\n<li>rants and writings through personal experience</li>\n</ul>"},site:{siteMetadata:{facebook:{appId:"670156599751120%"}}}},pathContext:{slug:"/install-inconsolata-ttf-in-ubuntujaunty/"}}}});
//# sourceMappingURL=path---install-inconsolata-ttf-in-ubuntujaunty-2bc5cdb58a21527dd705.js.map