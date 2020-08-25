webpackJsonp([0x7cdaf82a04c9],{914:function(e,t){e.exports={data:{post:{id:"/home/runner/work/blog/blog/content/posts/2014-04-29--wiring-jasmine2-with-phantom/index.md absPath of file >>> MarkdownRemark",html:'<p>Briefed out the steps that i did to run my Jasmine test suite in my CI.</p>\n<ol>\n<li>\n<p>Download phantomjs.exe (Our CI server was running in a Windows server). <a href="http://phantomjs.org/download.html">Download link</a></p>\n</li>\n<li>\n<p>Use <a href="https://gist.github.com/prasann/9972777">run-jasmine.js</a>. This runner code is taken from phantomJS example and modified to run Jasmine 2.0 and to format the output as we needed.</p>\n</li>\n<li>\n<p>Assuming phantomjs.exe, run-jasmine.js and SpecRunner.html (Specrunner file) are in the same level in a directory, execute this command</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">phantomjs.exe run-jasmine.js SpecRunner.html \\[--debug\\]</code></pre>\n      </div>\n</li>\n</ol>\n<p>The —debug is optional. If run on the debug mode it will print the stack trace of the failed specs and also prints all the specs that are been executed.</p>\n<p>SpecRunner.html is very similar to the one that comes along with Jasmine 2.0 samples. The SpecRunner.html that comes with Jasmine 1.3 will not work, as the way of booting Jasmine is changed in the latest version. The only changes I made to the SpecRunner.html is to modify my src and spec file locations.</p>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Briefed out the steps that i did to run my Jasmine test suite in my CI."}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Download phantomjs.exe (Our CI server was running in a Windows server). "},{type:"element",tagName:"a",properties:{href:"http://phantomjs.org/download.html"},children:[{type:"text",value:"Download link"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Use "},{type:"element",tagName:"a",properties:{href:"https://gist.github.com/prasann/9972777"},children:[{type:"text",value:"run-jasmine.js"}]},{type:"text",value:". This runner code is taken from phantomJS example and modified to run Jasmine 2.0 and to format the output as we needed."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Assuming phantomjs.exe, run-jasmine.js and SpecRunner.html (Specrunner file) are in the same level in a directory, execute this command"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"phantomjs.exe run-jasmine.js SpecRunner.html \\[--debug\\]"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The —debug is optional. If run on the debug mode it will print the stack trace of the failed specs and also prints all the specs that are been executed."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"SpecRunner.html is very similar to the one that comes along with Jasmine 2.0 samples. The SpecRunner.html that comes with Jasmine 1.3 will not work, as the way of booting Jasmine is changed in the latest version. The only changes I made to the SpecRunner.html is to modify my src and spec file locations."}]}],data:{quirksMode:!1}},fields:{slug:"/wiring-jasmine2-with-phantom/",prefix:"2014-04-29"},frontmatter:{title:"Wiring Jasmine 2.0 with Phantom JS",subTitle:"This post describes the steps that are necessary for to wire Jasmine 2.0 test suites with phantomJS.",draft:null}},author:{id:"/home/runner/work/blog/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Prasanna</strong> is a full stack web developer, with exposure to various programming languages.\nUses mostly Java, Javascript these days and got 11+ years of architecting and coding enterprise software solutions.   </p>"},footnote:{id:"/home/runner/work/blog/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:"<ul>\n<li>rants and writings through personal experience</li>\n</ul>"},site:{siteMetadata:{facebook:{appId:"670156599751120%"}}}},pathContext:{slug:"/wiring-jasmine2-with-phantom/"}}}});
//# sourceMappingURL=path---wiring-jasmine-2-with-phantom-de3d80d0401573eda2f7.js.map