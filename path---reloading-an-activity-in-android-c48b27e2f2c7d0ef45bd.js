webpackJsonp([0x65bb733eb9ea],{882:function(e,t){e.exports={data:{post:{id:"/Users/prasanna/projects/blog-gatsby/content/posts/2011-07-13--reloading-an-activity-in-android/index.md absPath of file >>> MarkdownRemark",html:"<p>More often i wanted to reload an activity to refresh the contents of an page. I have seen many ways to do this in Android world and i always puzzled about the best approach.</p>\n<p>However these are some of the approaches that i took . I found the following two approaches a lot cleaner as they kill the existing intent and restart.</p>\n<p><strong>Approach 1:</strong></p>\n<p>Intent intent = getIntent();\nfinish();\nstartActivity(intent);</p>\n<p><strong>Approach 2:</strong></p>\n<p>Intent intent = getIntent();\noverridePendingTransition(0, 0);\nintent.addFlags(Intent.FLAG_ACTIVITY_NO_ANIMATION);\nfinish();\noverridePendingTransition(0, 0);\nstartActivity(intent);</p>\n<p><em><strong>Note:</strong> The second approach works only from API 5+</em></p>",htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"More often i wanted to reload an activity to refresh the contents of an page. I have seen many ways to do this in Android world and i always puzzled about the best approach."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"However these are some of the approaches that i took . I found the following two approaches a lot cleaner as they kill the existing intent and restart."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Approach 1:"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Intent intent = getIntent();\nfinish();\nstartActivity(intent);"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Approach 2:"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Intent intent = getIntent();\noverridePendingTransition(0, 0);\nintent.addFlags(Intent.FLAG_ACTIVITY_NO_ANIMATION);\nfinish();\noverridePendingTransition(0, 0);\nstartActivity(intent);"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Note:"}]},{type:"text",value:" The second approach works only from API 5+"}]}]}],data:{quirksMode:!1}},fields:{slug:"/reloading-an-activity-in-android/",prefix:"2011-07-13"},frontmatter:{title:"Reloading an activity in Android",subTitle:"Refreshing or reloading activity in Android application. This might be important in the case of refreshing data in the activity.",cover:null}},author:{id:"/Users/prasanna/projects/blog-gatsby/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Prasanna</strong> is a full stack web developer, loves to build user interfaces with Javascript. Considers himself as a geek, quick learner and a team player 😃 </p>"},footnote:{id:"/Users/prasanna/projects/blog-gatsby/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:"<ul>\n<li>rants and writings through personal experience</li>\n</ul>"},site:{siteMetadata:{facebook:{appId:"670156599751120"}}}},pathContext:{slug:"/reloading-an-activity-in-android/"}}}});
//# sourceMappingURL=path---reloading-an-activity-in-android-c48b27e2f2c7d0ef45bd.js.map