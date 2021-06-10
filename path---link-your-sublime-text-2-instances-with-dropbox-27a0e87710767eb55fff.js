webpackJsonp([74723667045811],{873:function(e,t){e.exports={data:{post:{id:"/Users/prasanna/projects/blog/content/posts/2013-01-10--link-your-sublime-text-2-instances-with-dropbox/index.md absPath of file >>> MarkdownRemark",html:'<p>After started using <strong>Sublime Text 2 (ST2)</strong>, was completely head over heels for it. After using it for some time, figured out that ST2 uses a settings file to remember the plugins, open tabs etc. I was using my laptop (Mac) and sometimes uses my PC (Windows) do type blog post or some other stuff. So thought of giving a try in syncing these two using Dropbox folder.</p>\n<p>The idea is to have the settings file in the Dropbox folder and to have a symlink in the OS to point to. This means whatever changes i did to a ST2 instance will reflect in my other instance too.</p>\n<p><strong>Prerequisites:</strong></p>\n<ul>\n<li>Install ST2 in both the machines.</li>\n<li>Have a DropBox account and install the software in both the machines.</li>\n</ul>\n<h3><strong>In Mac:</strong></h3>\n<p>Move the entire Sublime Text folder into the Dropbox folder.</p>\n<p>mv ’~/Library/Application\\ Support/Sublime\\ Text\\ 2/’ ’~/Dropbox/Sublime\\ Text\\ 2’</p>\n<p>Next step is to create a symlink in the original location so that it the folder in the Dropbox will be used to store the settings.</p>\n<p>ln -s ’~/Library/Application\\ Support/Sublime\\ Text\\ 2’ ’~/Dropbox/Sublime\\ Text\\ 2’</p>\n<h3><strong>In Windows:</strong></h3>\n<p>Windows don’t have symlink concept. So we have to settle with <a href="http://en.wikipedia.org/wiki/NTFS_symbolic_link" title="NTFS Junction Point">NTFS symbolic link</a></p>\n<p>mklink /J ‘C:/Users/user_name/Dropbox/Sublime Text 2’ ‘C:/User/user_name/Applications/Sublime Text 2’</p>\n<p>That’s it, now you don’t need to worry about the sync between these two instances.</p>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"After started using "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Sublime Text 2 (ST2)"}]},{type:"text",value:", was completely head over heels for it. After using it for some time, figured out that ST2 uses a settings file to remember the plugins, open tabs etc. I was using my laptop (Mac) and sometimes uses my PC (Windows) do type blog post or some other stuff. So thought of giving a try in syncing these two using Dropbox folder."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The idea is to have the settings file in the Dropbox folder and to have a symlink in the OS to point to. This means whatever changes i did to a ST2 instance will reflect in my other instance too."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Prerequisites:"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Install ST2 in both the machines."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Have a DropBox account and install the software in both the machines."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"In Mac:"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Move the entire Sublime Text folder into the Dropbox folder."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"mv ’~/Library/Application\\ Support/Sublime\\ Text\\ 2/’ ’~/Dropbox/Sublime\\ Text\\ 2’"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Next step is to create a symlink in the original location so that it the folder in the Dropbox will be used to store the settings."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"ln -s ’~/Library/Application\\ Support/Sublime\\ Text\\ 2’ ’~/Dropbox/Sublime\\ Text\\ 2’"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"In Windows:"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Windows don’t have symlink concept. So we have to settle with "},{type:"element",tagName:"a",properties:{href:"http://en.wikipedia.org/wiki/NTFS_symbolic_link",title:"NTFS Junction Point"},children:[{type:"text",value:"NTFS symbolic link"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"mklink /J ‘C:/Users/user_name/Dropbox/Sublime Text 2’ ‘C:/User/user_name/Applications/Sublime Text 2’"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"That’s it, now you don’t need to worry about the sync between these two instances."}]}],data:{quirksMode:!1}},fields:{slug:"/link-your-sublime-text-2-instances-with-dropbox/",prefix:"2013-01-10"},frontmatter:{title:"Link your Sublime Text 2 instances with Dropbox",subTitle:"Sublime text has a key mapping file where it stores all the shortcut. Here is a way to share your preferences and key maps across two machines using a dropbox account.",cover:null}},author:{id:"/Users/prasanna/projects/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Prasanna</strong> is a full stack web developer, with loads of experience in architecting and coding enterprise software solutions.  </p>"},footnote:{id:"/Users/prasanna/projects/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:"<ul>\n<li>rants and writings through personal experience</li>\n</ul>"},site:{siteMetadata:{facebook:{appId:"670156599751120%"}}}},pathContext:{slug:"/link-your-sublime-text-2-instances-with-dropbox/"}}}});
//# sourceMappingURL=path---link-your-sublime-text-2-instances-with-dropbox-27a0e87710767eb55fff.js.map