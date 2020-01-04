webpackJsonp([22253160401048],{859:function(e,t){e.exports={data:{post:{id:"/Users/prasanna/projects/blog/content/posts/2014-08-31--deploying-jekyll-blog-through-rake-script/index.md absPath of file >>> MarkdownRemark",html:"<p>This blog is powered by Jekyll and I use Github pages as web server.</p>\n<h4>Branch structure in Github</h4>\n<p>Github by default publish the contents of the master branch as a github page. So i have created two branches in the repository.</p>\n<p><strong>source:</strong> contains Jekyll based folder structure. _drafts, _posts, _site etc. All the new posts are added in the drafts folder first and then once its written fully it is then moved to _posts folder and are then ready to be published.</p>\n<p><strong>master:</strong> is simply a generated content from the rake script. This branch has all the HTML files that are generated using Jekyll gem.</p>\n<h4>Folder structure in Dev box</h4>\n<p>I have both the branches checked out in different folders. Both these folders are present in the same level (will be useful while generating output)</p>\n<h4>Rake script</h4>\n<h5>To generate HTML</h5>\n<p>I have the Rakefile in the root level of my source branch. The rake task mentioned below will create HTML equivalent inside the _site folder.</p>\n<p>task :generate do\nJekyll::Site.new(Jekyll.configuration({\n“source”      => ”.”,\n“destination” => ”_site”\n})).process\nend\n</p>\n<h5>To publish in Github</h5>\n<p>This task copies the entire _site folder into the master branch (locally). This is why i need to checkout both master and source branches separately and keep them in the same level.</p>\n<p>After copying the contents, simply it switches to the master branch and does a git push.</p>\n<p>Once the changes are pushed into github’s master branch the changes are then reflected in your site immediately.</p>\n<p>task :publish => [:generate] do\ncp_r ”_site/.”, LOCAL_DIR_NAME\ncp “.travis.yml”, LOCAL_DIR_NAME\npwd = Dir.pwd\nDir.chdir LOCAL_DIR_NAME\nsystem “git add —all”\nmessage = “Site updated at #{Time.now.utc}”\nsystem “git commit -m #{message.inspect}”\nsystem “git push origin master:refs/heads/master”\nDir.chdir pwd\nend</p>",htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This blog is powered by Jekyll and I use Github pages as web server."}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Branch structure in Github"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Github by default publish the contents of the master branch as a github page. So i have created two branches in the repository."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"source:"}]},{type:"text",value:" contains Jekyll based folder structure. _drafts, _posts, _site etc. All the new posts are added in the drafts folder first and then once its written fully it is then moved to _posts folder and are then ready to be published."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"master:"}]},{type:"text",value:" is simply a generated content from the rake script. This branch has all the HTML files that are generated using Jekyll gem."}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Folder structure in Dev box"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"I have both the branches checked out in different folders. Both these folders are present in the same level (will be useful while generating output)"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Rake script"}]},{type:"text",value:"\n"},{type:"element",tagName:"h5",properties:{},children:[{type:"text",value:"To generate HTML"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"I have the Rakefile in the root level of my source branch. The rake task mentioned below will create HTML equivalent inside the _site folder."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"task :generate do\nJekyll::Site.new(Jekyll.configuration({\n“source”      => ”.”,\n“destination” => ”_site”\n})).process\nend\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h5",properties:{},children:[{type:"text",value:"To publish in Github"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This task copies the entire _site folder into the master branch (locally). This is why i need to checkout both master and source branches separately and keep them in the same level."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"After copying the contents, simply it switches to the master branch and does a git push."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Once the changes are pushed into github’s master branch the changes are then reflected in your site immediately."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"task :publish => [:generate] do\ncp_r ”_site/.”, LOCAL_DIR_NAME\ncp “.travis.yml”, LOCAL_DIR_NAME\npwd = Dir.pwd\nDir.chdir LOCAL_DIR_NAME\nsystem “git add —all”\nmessage = “Site updated at #{Time.now.utc}”\nsystem “git commit -m #{message.inspect}”\nsystem “git push origin master:refs/heads/master”\nDir.chdir pwd\nend"}]}],data:{quirksMode:!1}},fields:{slug:"/deploying-jekyll-blog-through-rake-script/",prefix:"2014-08-31"},frontmatter:{title:"Deploying Jekyll site for Github pages through rake script",subTitle:"Deploying jekyll blog or site for Github pages using rake script.",cover:null}},author:{id:"/Users/prasanna/projects/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Prasanna</strong> is a full stack web developer, loves to build user interfaces with Javascript. Considers himself as a geek, quick learner and a team player 😃 </p>"},footnote:{id:"/Users/prasanna/projects/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:"<ul>\n<li>rants and writings through personal experience</li>\n</ul>"},site:{siteMetadata:{facebook:{appId:""}}}},pathContext:{slug:"/deploying-jekyll-blog-through-rake-script/"}}}});
//# sourceMappingURL=path---deploying-jekyll-blog-through-rake-script-ad451f91b2d5f26cbd0b.js.map