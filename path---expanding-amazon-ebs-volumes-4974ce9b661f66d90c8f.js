webpackJsonp([0x910e3d47d77d],{859:function(e,t){e.exports={data:{post:{id:"/Users/prasanna/projects/blog-gatsby/content/posts/2016-02-04--expanding_amazon_ebs_volumes/index.md absPath of file >>> MarkdownRemark",html:"<p>I had an AWS image which was created using an EC2 instance of size 8 GB. Whenever i try to launch an instance i usually change the storage size to something say 20 GB. But once the system is launched when i do a</p>\n<p>df -h</p>\n<p>i still see 8 GB and not 20 GB.</p>\n<p>On further reading i understood i need to resize the disk size. So i did the same using</p>\n<p>sudo resize2fs /dev/xvde1</p>\n<p>But i was getting the following error:</p>\n<p> The filesystem is already *** blocks long. Nothing to do!</p>\n<p>Then to reolve this issue i have to perform the following steps.</p>\n<ul>\n<li>SSH to the machine.</li>\n</ul>\n<p>fdisk /dev/xvde</p>\n<ul>\n<li>You should be seeing this message.</li>\n</ul>\n<p>WARNING: DOS-compatible mode is deprecated. It’s strongly recommended to switch off the mode (command ‘c’) and change display units to sectors (command ‘u’)</p>\n<ul>\n<li>Enter ‘u’ to change display units</li>\n<li>Enter ‘p’ to view the current paritions.</li>\n<li>Enter ‘d’ to delete current partitions.</li>\n<li>Enter ‘n’ to create a new partition.</li>\n<li>Enter ‘p’ to set it as primary partitions.</li>\n<li>Enter ‘1’ to set it as primary partitions.</li>\n<li>Set the desired space. If nothing is given the entire space is allotted.</li>\n<li>Enter ‘a’ to make it bootable.</li>\n<li>Enter ‘1’ and ‘w’ to write and save the changes.</li>\n<li>Reboot the instance from AWS console.</li>\n<li>Now if you resize the parition it worked all fine.</li>\n</ul>\n<p>sudo resize2fs /dev/xvde1</p>\n<p>Check the partition size, it should be all set with more space.</p>",htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"I had an AWS image which was created using an EC2 instance of size 8 GB. Whenever i try to launch an instance i usually change the storage size to something say 20 GB. But once the system is launched when i do a"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"df -h"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"i still see 8 GB and not 20 GB."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"On further reading i understood i need to resize the disk size. So i did the same using"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"sudo resize2fs /dev/xvde1"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"But i was getting the following error:"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:" The filesystem is already *** blocks long. Nothing to do!"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Then to reolve this issue i have to perform the following steps."}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"SSH to the machine."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"fdisk /dev/xvde"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"You should be seeing this message."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"WARNING: DOS-compatible mode is deprecated. It’s strongly recommended to switch off the mode (command ‘c’) and change display units to sectors (command ‘u’)"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Enter ‘u’ to change display units"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Enter ‘p’ to view the current paritions."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Enter ‘d’ to delete current partitions."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Enter ‘n’ to create a new partition."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Enter ‘p’ to set it as primary partitions."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Enter ‘1’ to set it as primary partitions."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Set the desired space. If nothing is given the entire space is allotted."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Enter ‘a’ to make it bootable."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Enter ‘1’ and ‘w’ to write and save the changes."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Reboot the instance from AWS console."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Now if you resize the parition it worked all fine."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"sudo resize2fs /dev/xvde1"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Check the partition size, it should be all set with more space."}]}],data:{quirksMode:!1}},fields:{slug:"/expanding_amazon_ebs_volumes/",prefix:"2016-02-04"},frontmatter:{title:"Expanding Amazon EBS Volume in a EC2 instance.",subTitle:"Even after increasing the size of the EBS volume in the AWS console, the actual size of the EBS wasn't increased. Have to follow the following steps to grow the EBS size.",cover:null}},author:{id:"/Users/prasanna/projects/blog-gatsby/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Prasanna</strong> is a full stack web developer, loves to build user interfaces with Javascript. Considers himself as a geek, quick learner and a team player 😃 </p>"},footnote:{id:"/Users/prasanna/projects/blog-gatsby/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:"<ul>\n<li>rants and writings through personal experience</li>\n</ul>"},site:{siteMetadata:{facebook:{appId:"670156599751120"}}}},pathContext:{slug:"/expanding_amazon_ebs_volumes/"}}}});
//# sourceMappingURL=path---expanding-amazon-ebs-volumes-4974ce9b661f66d90c8f.js.map