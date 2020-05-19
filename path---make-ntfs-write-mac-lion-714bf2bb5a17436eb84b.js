webpackJsonp([0x946786acd7bf],{875:function(e,t){e.exports={data:{post:{id:"/Users/prasanna/projects/blog/content/posts/2011-12-07--make_ntfs_write_mac_lion/index.md absPath of file >>> MarkdownRemark",html:'<p>Just now i got my new MBP pre loaded with Lion OSX and one of the surprises i stepped onto is NTFS write issue on the Mac.</p>\n<p>Based on a few blog posts and comments I managed to find a way that worked for me, so I thought I’d put it all here in one place for others.</p>\n<p><strong>Pre requisites:</strong></p>\n<p>Get <a href="http://mxcl.github.com/homebrew/" title="homebrew">HomeBrew</a> installed in your machine. And of course this needs XCode tools to be installed.</p>\n<p><strong>Steps:</strong></p>\n<ol>\n<li>Install latest Fuse4X (a fork of MacFUSE) and NTFS-3G packages:</li>\n</ol>\n<p>brew install fuse4x\nbrew install ntfs-3g</p>\n<ol start="2">\n<li>Type brew info fuse4x-kext in the terminal. You will be shown a message similar to this:</li>\n</ol>\n<p>In order for FUSE-based filesystems to work, the fuse4x kernel extension\nmust be installed by the root user:\nsudo cp -rfX /usr/local/Cellar/fuse4x-kext/0.8.13/Library/Extensions/fuse4x.kext /System/Library/Extensions\nsudo chmod +s /System/Library/Extensions/fuse4x.kext/Support/load_fuse4x</p>\n<p>Perform both the operation.  </p>\n<ol start="3">\n<li>And after this i simply followed this <a href="http://fernandoff.posterous.com/ntfs-write-support-on-osx-lion-with-ntfs-3g-f">blog post entry</a>. Since you have already installed Fuse4x and ntfs-3g you can directly jump to</li>\n</ol>\n<blockquote>\n<p>“Ok, at this point you should have a functional fuse4x and ntfs-3g install.”</p>\n</blockquote>\n<p>and create an alternative</p>\n<p>/sbin/ntfs_mount</p>\n<p>script as described there.<br>\nAnd at last you got make one change to get things working.<br>\nThe script in the bog post is for MacPort users. For HomveBrew users you got to make this change.<br>\nreplace</p>\n<p>/opt/local/bin/ntfs-3g</p>\n<p>with</p>\n<p>/usr/local/bin/ntfs-3g</p>\n<p>And that’s it. Just try mounting a NTFS drive and you should have write permissions to your drive. If you face any issues check out the log @</p>\n<p>/var/log/ntfsmnt.log</p>\n<p>or try re-booting the machine in the worst case.</p>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Just now i got my new MBP pre loaded with Lion OSX and one of the surprises i stepped onto is NTFS write issue on the Mac."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Based on a few blog posts and comments I managed to find a way that worked for me, so I thought I’d put it all here in one place for others."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Pre requisites:"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Get "},{type:"element",tagName:"a",properties:{href:"http://mxcl.github.com/homebrew/",title:"homebrew"},children:[{type:"text",value:"HomeBrew"}]},{type:"text",value:" installed in your machine. And of course this needs XCode tools to be installed."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Steps:"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Install latest Fuse4X (a fork of MacFUSE) and NTFS-3G packages:"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"brew install fuse4x\nbrew install ntfs-3g"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{start:2},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Type brew info fuse4x-kext in the terminal. You will be shown a message similar to this:"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"In order for FUSE-based filesystems to work, the fuse4x kernel extension\nmust be installed by the root user:\nsudo cp -rfX /usr/local/Cellar/fuse4x-kext/0.8.13/Library/Extensions/fuse4x.kext /System/Library/Extensions\nsudo chmod +s /System/Library/Extensions/fuse4x.kext/Support/load_fuse4x"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Perform both the operation.  "}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{start:3},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"And after this i simply followed this "},{type:"element",tagName:"a",properties:{href:"http://fernandoff.posterous.com/ntfs-write-support-on-osx-lion-with-ntfs-3g-f"},children:[{type:"text",value:"blog post entry"}]},{type:"text",value:". Since you have already installed Fuse4x and ntfs-3g you can directly jump to"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"“Ok, at this point you should have a functional fuse4x and ntfs-3g install.”"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"and create an alternative"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"/sbin/ntfs_mount"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"script as described there."},{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\nAnd at last you got make one change to get things working."},{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\nThe script in the bog post is for MacPort users. For HomveBrew users you got to make this change."},{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\nreplace"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"/opt/local/bin/ntfs-3g"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"with"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"/usr/local/bin/ntfs-3g"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"And that’s it. Just try mounting a NTFS drive and you should have write permissions to your drive. If you face any issues check out the log @"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"/var/log/ntfsmnt.log"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"or try re-booting the machine in the worst case."}]}],data:{quirksMode:!1}},fields:{slug:"/make_ntfs_write_mac_lion/",prefix:"2011-12-07"},frontmatter:{title:"Make your NTFS drive writable under Mac Lion",subTitle:"Make your NTFS drive writabe under mac lion.",cover:null}},author:{id:"/Users/prasanna/projects/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Prasanna</strong> is a full stack web developer, with loads of experience in architecting and coding enterprise software solutions.  </p>"},footnote:{id:"/Users/prasanna/projects/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:"<ul>\n<li>rants and writings through personal experience</li>\n</ul>"},site:{siteMetadata:{facebook:{appId:"670156599751120%"}}}},pathContext:{slug:"/make_ntfs_write_mac_lion/"}}}});
//# sourceMappingURL=path---make-ntfs-write-mac-lion-714bf2bb5a17436eb84b.js.map