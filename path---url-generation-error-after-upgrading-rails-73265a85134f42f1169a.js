webpackJsonp([0x6b28d31dc799],{904:function(e,t){e.exports={data:{post:{id:"/Users/prasanna/projects/blog/content/posts/2015-12-09--url_generation_error_after_upgrading_rails/index.md absPath of file >>> MarkdownRemark",html:'<p>On upgrading my rails app from 4.0 to 4.2.5 i steeped onto a wierd issue where my form_for tag breaks and starts throwing exception.</p>\n<p>A REST model on new action raised an UrlGenerationError exception because of the form_for tag.</p>\n<p>For ex: if User is a model my form_for looked like this</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">form\\_for(@user, url: user\\_path(@user)) do |f|</code></pre>\n      </div>\n<p>Raised exception was</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">No route matches {:action=&gt;&quot;show&quot;, :controller=&gt;&quot;users&quot;, :id=&gt;nil} missing required keys: \\[:id\\]</code></pre>\n      </div>\n<p>The @user object’s id is nil since it’s not yet saved in the database. Previously if it was nil that is been skipped by the the url generation. All these occurrences started throwing errors.</p>\n<p>I have to change the form_for tag to</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">form\\_for(@user) do |f|</code></pre>\n      </div>\n<p>This posts the form to default users_path.</p>\n<h3>Nested objects:</h3>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">form\\_for(@user, url: user\\_address\\_path(@user, @address)) do |f|</code></pre>\n      </div>\n<p>was changed to</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">form\\_for(\\[@user, @address\\]) do |f|</code></pre>\n      </div>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"On upgrading my rails app from 4.0 to 4.2.5 i steeped onto a wierd issue where my form_for tag breaks and starts throwing exception."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"A REST model on new action raised an UrlGenerationError exception because of the form_for tag."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"For ex: if User is a model my form_for looked like this"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"form\\_for(@user, url: user\\_path(@user)) do |f|"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Raised exception was"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:'No route matches {:action=>"show", :controller=>"users", :id=>nil} missing required keys: \\[:id\\]'}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The @user object’s id is nil since it’s not yet saved in the database. Previously if it was nil that is been skipped by the the url generation. All these occurrences started throwing errors."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"I have to change the form_for tag to"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"form\\_for(@user) do |f|"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This posts the form to default users_path."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Nested objects:"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"form\\_for(@user, url: user\\_address\\_path(@user, @address)) do |f|"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"was changed to"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"form\\_for(\\[@user, @address\\]) do |f|"}]}]},{type:"text",value:"\n      "}]}],data:{quirksMode:!1}},fields:{slug:"/url_generation_error_after_upgrading_rails/",prefix:"2015-12-09"},frontmatter:{title:"UrlGenerationError after upgrading to Rails 4.2",subTitle:"On a REST model new action, form_for tag breaks and raises UrlGenerationError after upgrading to Rails 4.2",cover:null}},author:{id:"/Users/prasanna/projects/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Prasanna</strong> is a full stack web developer, with loads of experience in architecting and coding enterprise software solutions.  </p>"},footnote:{id:"/Users/prasanna/projects/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:"<ul>\n<li>rants and writings through personal experience</li>\n</ul>"},site:{siteMetadata:{facebook:{appId:"670156599751120%"}}}},pathContext:{slug:"/url_generation_error_after_upgrading_rails/"}}}});
//# sourceMappingURL=path---url-generation-error-after-upgrading-rails-73265a85134f42f1169a.js.map