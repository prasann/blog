webpackJsonp([32012598179034],{867:function(e,t){e.exports={data:{post:{id:"/home/runner/work/blog/blog/content/posts/2010-11-15--hadoop-version-in-aws-map-reduce/index.md absPath of file >>> MarkdownRemark",html:"<p>Creating job flows using AWS MapReduce’s GUI is pretty simple and very straight forward. But i wanted to use Java SDK to create/run jobs in MapReduce. I could successfully able set up the job and configured all the parameters except for a weird error.</p>\n<p>java.lang.NoSuchMethodError:\norg.apache.hadoop.mapred.JobConf.\nsetBooleanIfUnset(Ljava/lang/String;Z)V</p>\n<p>I was constantly getting this error while running the job. Initially i had no idea why this error occurs and none of the forum talks about it either. Then i figured out that the default Hadoop version used by the Ec2 instances was 0.18 and i was expecting 0.20. Interestingly i didn’t face this issue when i did it through GUI.</p>\n<p>As a solution i need to explicitly set the version number as 0.20 to the Instances object so that it will use the same while running the job.</p>\n<p>JobFlowInstancesConfig instances = new JobFlowInstancesConfig();\ninstances.setHadoopVersion(“0.20”);</p>",htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Creating job flows using AWS MapReduce’s GUI is pretty simple and very straight forward. But i wanted to use Java SDK to create/run jobs in MapReduce. I could successfully able set up the job and configured all the parameters except for a weird error."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"java.lang.NoSuchMethodError:\norg.apache.hadoop.mapred.JobConf.\nsetBooleanIfUnset(Ljava/lang/String;Z)V"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"I was constantly getting this error while running the job. Initially i had no idea why this error occurs and none of the forum talks about it either. Then i figured out that the default Hadoop version used by the Ec2 instances was 0.18 and i was expecting 0.20. Interestingly i didn’t face this issue when i did it through GUI."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"As a solution i need to explicitly set the version number as 0.20 to the Instances object so that it will use the same while running the job."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"JobFlowInstancesConfig instances = new JobFlowInstancesConfig();\ninstances.setHadoopVersion(“0.20”);"}]}],data:{quirksMode:!1}},fields:{slug:"/hadoop-version-in-aws-map-reduce/",prefix:"2010-11-15"},frontmatter:{title:"Hadoop Version in AWS Map Reduce",subTitle:"Performing Map Reduce operation using Amazon AWS interface.",cover:null,draft:null}},author:{id:"/home/runner/work/blog/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Prasanna</strong> is a full stack web developer, with loads of experience in architecting and coding enterprise software solutions.  </p>"},footnote:{id:"/home/runner/work/blog/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:"<ul>\n<li>rants and writings through personal experience</li>\n</ul>"},site:{siteMetadata:{facebook:{appId:"670156599751120%"}}}},pathContext:{slug:"/hadoop-version-in-aws-map-reduce/"}}}});
//# sourceMappingURL=path---hadoop-version-in-aws-map-reduce-b75390728808b1db6ae5.js.map