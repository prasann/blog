webpackJsonp([40466155527037],{848:function(e,t){e.exports={data:{post:{id:"/Users/prasanna/projects/blog/content/posts/2015-05-27--add_ckeditor_to_rails_pipeline/index.md absPath of file >>> MarkdownRemark",html:'<p>We are using <a href="http://ckeditor.com/">ckeditor</a> in our rails application (Rails 4.2).</p>\n<p>Number of network calls made by the ckeditor and its plugins are quite alot and we were facing difficulty in integrating them with the Rails asset pipeline.</p>\n<p>My initial approach is to use a <a href="https://github.com/tsechingho/ckeditor-rails">ckeditor rails gem</a>. However getting it to work was complicated. On top of it we had some custom plugins written for ckeditor and making it to work with ckeditor rails gem was almost impossible.</p>\n<p>Taking some pointers from this <a href="https://github.com/galetahub/ckeditor/issues/307">issue</a> finally could get into some working solution.</p>\n<ol>\n<li>\n<p>Move all the CKEditor files into vendor/assets/javascript/ckeditor</p>\n</li>\n<li>\n<p>In application.js add</p>\n<p>//= require ckeditor/ckeditor</p>\n</li>\n<li>\n<p>ckeditor.js looks up for other ckeditor relative to CKEDITOR_BASEPATH location. So before loading ckeditor in JS add a line to set that environment variable.</p>\n<p>window.CKEDITOR_BASEPATH = ‘/assets/ckeditor/‘;</p>\n</li>\n<li>\n<p>Add</p>\n<p>config.assets.precompile &#x3C;&#x3C; [‘ckeditor/*’]</p>\n<p>to your application.rb file.</p>\n</li>\n<li>\n<p>Finally add a file called precompile_hook.rake This rake task will help in compiling the ckeditor files and add it to the assets folder. The content of the rake task is here. <a href="https://gist.github.com/prasann/c8978041777cb443fb77">precompile_hook.rake</a></p>\n</li>\n</ol>\n<p>Here is the screenshot of the network calls before and after adding ckeditor to asset pipeline.</p>\n<p> <a href="/assets/images/posts/add_ckeditor_to_rails/full/before.png" title="Before adding to asset pipeline"><img src="/assets/images/posts/add_ckeditor_to_rails/thumbs/before.png" alt="Before adding to asset pipeline"></a> <a href="/assets/images/posts/add_ckeditor_to_rails/full/after.png" title="After adding to asset pipeline"><img src="/assets/images/posts/add_ckeditor_to_rails/thumbs/after.png" alt="After adding to asset pipeline"></a> </p>\n<p>Even after adding ckeditor to asset pipeline the it did not effectively reduce all calls into one. Still the ckeditor’s plugin calls are been fired separately.</p>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"We are using "},{type:"element",tagName:"a",properties:{href:"http://ckeditor.com/"},children:[{type:"text",value:"ckeditor"}]},{type:"text",value:" in our rails application (Rails 4.2)."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Number of network calls made by the ckeditor and its plugins are quite alot and we were facing difficulty in integrating them with the Rails asset pipeline."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"My initial approach is to use a "},{type:"element",tagName:"a",properties:{href:"https://github.com/tsechingho/ckeditor-rails"},children:[{type:"text",value:"ckeditor rails gem"}]},{type:"text",value:". However getting it to work was complicated. On top of it we had some custom plugins written for ckeditor and making it to work with ckeditor rails gem was almost impossible."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Taking some pointers from this "},{type:"element",tagName:"a",properties:{href:"https://github.com/galetahub/ckeditor/issues/307"},children:[{type:"text",value:"issue"}]},{type:"text",value:" finally could get into some working solution."}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Move all the CKEditor files into vendor/assets/javascript/ckeditor"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"In application.js add"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"//= require ckeditor/ckeditor"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"ckeditor.js looks up for other ckeditor relative to CKEDITOR_BASEPATH location. So before loading ckeditor in JS add a line to set that environment variable."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"window.CKEDITOR_BASEPATH = ‘/assets/ckeditor/‘;"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Add"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"config.assets.precompile << [‘ckeditor/*’]"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"to your application.rb file."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Finally add a file called precompile_hook.rake This rake task will help in compiling the ckeditor files and add it to the assets folder. The content of the rake task is here. "},{type:"element",tagName:"a",properties:{href:"https://gist.github.com/prasann/c8978041777cb443fb77"},children:[{type:"text",value:"precompile_hook.rake"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Here is the screenshot of the network calls before and after adding ckeditor to asset pipeline."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:" "},{type:"element",tagName:"a",properties:{href:"/assets/images/posts/add_ckeditor_to_rails/full/before.png",title:"Before adding to asset pipeline"},children:[{type:"element",tagName:"img",properties:{src:"/assets/images/posts/add_ckeditor_to_rails/thumbs/before.png",alt:"Before adding to asset pipeline"},children:[]}]},{type:"text",value:" "},{type:"element",tagName:"a",properties:{href:"/assets/images/posts/add_ckeditor_to_rails/full/after.png",title:"After adding to asset pipeline"},children:[{type:"element",tagName:"img",properties:{src:"/assets/images/posts/add_ckeditor_to_rails/thumbs/after.png",alt:"After adding to asset pipeline"},children:[]}]},{type:"text",value:" "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Even after adding ckeditor to asset pipeline the it did not effectively reduce all calls into one. Still the ckeditor’s plugin calls are been fired separately."}]}],data:{quirksMode:!1}},fields:{slug:"/add_ckeditor_to_rails_pipeline/",prefix:"2015-05-27"},frontmatter:{title:"Integrating CKEditor with Rails asset pipeline.",subTitle:"Integrating CKEditor plugin into rails asset pipeline.",cover:null}},author:{id:"/Users/prasanna/projects/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Prasanna</strong> is a full stack web developer, loves to build user interfaces with Javascript. Considers himself as a geek, quick learner and a team player 😃 </p>"},footnote:{id:"/Users/prasanna/projects/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:"<ul>\n<li>rants and writings through personal experience</li>\n</ul>"},site:{siteMetadata:{facebook:{appId:"670156599751120"}}}},pathContext:{slug:"/add_ckeditor_to_rails_pipeline/"}}}});
//# sourceMappingURL=path---add-ckeditor-to-rails-pipeline-89920507795debabcb2e.js.map