webpackJsonp([0xf18be80b49d3],{919:function(e,t){e.exports={data:{post:{id:"/home/runner/work/blog/blog/content/posts/2011-09-11--writing-custom-tags-for-jstls/index.md absPath of file >>> MarkdownRemark",html:'<p>First start with writing a tag library descriptor(TLD). A TLD is a XML document that contains information about a library as a whole and about each tag contained in the library.<br>\nThe structure of the TLD file is pretty readalbe.</p>\n<p>Below is an implementation of tag which takes in a section name(value) of a web page and checks whether the logged-in user has rights to view the section.</p>\n<p><strong>Step 1:</strong> custom.tld</p>\n<?xml version="1.0" encoding="ISO-8859-1" ?>\n<!DOCTYPE taglib PUBLIC "-//Sun Microsystems, Inc.//DTD JSP Tag Library 1.1//EN"\n        "http://java.sun.com/j2ee/dtds/web-jsptaglibrary\\_1\\_1.dtd">\n<taglib xmlns="http://java.sun.com/j2ee/dtds/web-jsptaglibrary\\_1\\_1.dtd">\n    <tlibversion>1.0</tlibversion>\n    <jspversion>1.1</jspversion>\n    <shortname>custom</shortname>\n    <info>Custom tag library</info>\n    <tag>\n        <name>permission</name>\n        <tagclass>com.prasans.PermissionTag</tagclass>\n        <info>\n            Checks the User Permission to access the content.\n        </info>\n        <attribute>\n            <name>value</name>\n            <required>true</required>\n        </attribute>\n        <attribute>\n            <name>invertCondition</name>\n            <required>false</required>\n        </attribute>\n    </tag>\n</taglib>\n<p>Here we have implemented a tag called permission within the ‘custom’ tag library.</p>\n<p>Usage: <em>&#x3C;custom:permission value="">{section}&#x3C;/custom:permission></em><br>\nSimilarly you can add more tags to your library by adding more <tag> nodes.</p>\n<p>After done with defining TLD, next step is to implement the conditional logic. Below is a piece of Java code that does the implementation of the TLD.</p>\n<p><strong>Step 2:</strong> PermissionTag.java</p>\n<p>package com.prasans;</p>\n<p>import javax.servlet.http.HttpServletRequest;\nimport javax.servlet.jsp.jstl.core.ConditionalTagSupport;</p>\n<p>public class PermissionTag extends ConditionalTagSupport {\nprivate String value = null;\nprivate boolean invertCondition;</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">public void setValue(String value) {\n    this.value = value;\n}\n\npublic String getValue() {\n    return value;\n}\n\npublic boolean isInvertCondition() {\n    return invertCondition;\n}\n\npublic void setInvertCondition(boolean invertCondition) {\n    this.invertCondition = invertCondition;\n}\n\n@Override\nprotected boolean condition() {\n    // If needed you can access Request Object like this.\n    HttpServletRequest request = (HttpServletRequest) pageContext.getRequest();\n    boolean permission = checkForThePermission(value);\n    return invertCondition ? !permission : permission;\n}</code></pre>\n      </div>\n<p>}</p>\n<p><strong>Explanation:</strong></p>\n<p>* Since the expectation of this tag is to return true or false, we are extending the <em>ConditionalTagSupport</em> class. Based on the need you can choose upon your class implementation.</p>\n<p>*Note that all tag attributes are member variables of the class and all of them should have getters and setters.</p>\n<p>*Here we have overridden the condition() from ConditionalTagSupport to return the needed boolean result.</p>\n<p>* InvertCondition is an attribute that helps us in simulating negative scenarios.</p>\n<p>For ex: “Show the section <em>If User A do not have ‘X’ permission</em>”</p>\n<p>After building the TLD and its corresponding logic, the next step is to integrate with your application.<br>\nAdd the custome tag library to your web.xml to integrate with your web app.</p>\n<p><strong>Step 3:</strong> web.xml</p>\n<jsp-config>\n    <taglib>\n        <taglib-uri>/custom</taglib-uri>\n        <taglib-location>/WEB-INF/tags/custom.tld</taglib-location>\n    </taglib>\n</jsp-config>\n<p>The taglib-uri is the <em><shortname></em> defined in the TLD file. And <em><taglib-location></em> is the location of the tld. Make sure that you are bundling the TLD along with your WAR.</p>\n<p>Thats it. You can start using your custom tags in your JSPs now.</p>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"First start with writing a tag library descriptor(TLD). A TLD is a XML document that contains information about a library as a whole and about each tag contained in the library."},{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\nThe structure of the TLD file is pretty readalbe."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Below is an implementation of tag which takes in a section name(value) of a web page and checks whether the logged-in user has rights to view the section."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Step 1:"}]},{type:"text",value:" custom.tld"}]},{type:"text",value:"\n"},{type:"comment",value:'?xml version="1.0" encoding="ISO-8859-1" ?'},{type:"text",value:"\n\n"},{type:"element",tagName:"taglib",properties:{xmlns:"http://java.sun.com/j2ee/dtds/web-jsptaglibrary\\_1\\_1.dtd"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"tlibversion",properties:{},children:[{type:"text",value:"1.0"}]},{type:"text",value:"\n    "},{type:"element",tagName:"jspversion",properties:{},children:[{type:"text",value:"1.1"}]},{type:"text",value:"\n    "},{type:"element",tagName:"shortname",properties:{},children:[{type:"text",value:"custom"}]},{type:"text",value:"\n    "},{type:"element",tagName:"info",properties:{},children:[{type:"text",value:"Custom tag library"}]},{type:"text",value:"\n    "},{type:"element",tagName:"tag",properties:{},children:[{type:"text",value:"\n        "},{type:"element",tagName:"name",properties:{},children:[{type:"text",value:"permission"}]},{type:"text",value:"\n        "},{type:"element",tagName:"tagclass",properties:{},children:[{type:"text",value:"com.prasans.PermissionTag"}]},{type:"text",value:"\n        "},{type:"element",tagName:"info",properties:{},children:[{type:"text",value:"\n            Checks the User Permission to access the content.\n        "}]},{type:"text",value:"\n        "},{type:"element",tagName:"attribute",properties:{},children:[{type:"text",value:"\n            "},{type:"element",tagName:"name",properties:{},children:[{type:"text",value:"value"}]},{type:"text",value:"\n            "},{type:"element",tagName:"required",properties:{},children:[{type:"text",value:"true"}]},{type:"text",value:"\n        "}]},{type:"text",value:"\n        "},{type:"element",tagName:"attribute",properties:{},children:[{type:"text",value:"\n            "},{type:"element",tagName:"name",properties:{},children:[{type:"text",value:"invertCondition"}]},{type:"text",value:"\n            "},{type:"element",tagName:"required",properties:{},children:[{type:"text",value:"false"}]},{type:"text",value:"\n        "}]},{type:"text",value:"\n    "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Here we have implemented a tag called permission within the ‘custom’ tag library."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Usage: "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:'<custom:permission value="">{section}</custom:permission>'}]},{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\nSimilarly you can add more tags to your library by adding more "},{type:"element",tagName:"tag",properties:{},children:[{type:"text",value:" nodes."}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"After done with defining TLD, next step is to implement the conditional logic. Below is a piece of Java code that does the implementation of the TLD."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Step 2:"}]},{type:"text",value:" PermissionTag.java"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"package com.prasans;"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"import javax.servlet.http.HttpServletRequest;\nimport javax.servlet.jsp.jstl.core.ConditionalTagSupport;"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"public class PermissionTag extends ConditionalTagSupport {\nprivate String value = null;\nprivate boolean invertCondition;"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"public void setValue(String value) {\n    this.value = value;\n}\n\npublic String getValue() {\n    return value;\n}\n\npublic boolean isInvertCondition() {\n    return invertCondition;\n}\n\npublic void setInvertCondition(boolean invertCondition) {\n    this.invertCondition = invertCondition;\n}\n\n@Override\nprotected boolean condition() {\n    // If needed you can access Request Object like this.\n    HttpServletRequest request = (HttpServletRequest) pageContext.getRequest();\n    boolean permission = checkForThePermission(value);\n    return invertCondition ? !permission : permission;\n}"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"}"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Explanation:"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"* Since the expectation of this tag is to return true or false, we are extending the "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"ConditionalTagSupport"}]},{type:"text",value:" class. Based on the need you can choose upon your class implementation."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"*Note that all tag attributes are member variables of the class and all of them should have getters and setters."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"*Here we have overridden the condition() from ConditionalTagSupport to return the needed boolean result."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"* InvertCondition is an attribute that helps us in simulating negative scenarios."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"For ex: “Show the section "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"If User A do not have ‘X’ permission"}]},{type:"text",value:"”"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"After building the TLD and its corresponding logic, the next step is to integrate with your application."},{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\nAdd the custome tag library to your web.xml to integrate with your web app."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Step 3:"}]},{type:"text",value:" web.xml"}]},{type:"text",value:"\n"},{type:"element",tagName:"jsp-config",properties:{},children:[{type:"text",value:"\n    "},{type:"element",tagName:"taglib",properties:{},children:[{type:"text",value:"\n        "},{type:"element",tagName:"taglib-uri",properties:{},children:[{type:"text",value:"/custom"}]},{type:"text",value:"\n        "},{type:"element",tagName:"taglib-location",properties:{},children:[{type:"text",value:"/WEB-INF/tags/custom.tld"}]},{type:"text",value:"\n    "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The taglib-uri is the "},{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"shortname",properties:{},children:[]}]},{type:"text",value:" defined in the TLD file. And "},{type:"element",tagName:"em",properties:{},children:[{type:"element",tagName:"taglib-location",properties:{},children:[]}]},{type:"text",value:" is the location of the tld. Make sure that you are bundling the TLD along with your WAR."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Thats it. You can start using your custom tags in your JSPs now."}]}],data:{quirksMode:!1}},fields:{slug:"/writing-custom-tags-for-jstls/",prefix:"2011-09-11"},frontmatter:{title:"Writing Custom Tags for JSTLs",subTitle:"Writing a custom JSTL tag and integrating with the application. A sample code to do the same.",draft:null}},author:{id:"/home/runner/work/blog/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Prasanna</strong> is a full stack web developer, with exposure to various programming languages.\nUses mostly Java, Javascript these days and got 11+ years of architecting and coding enterprise software solutions.   </p>"},footnote:{id:"/home/runner/work/blog/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:"<ul>\n<li>rants and writings through personal experience</li>\n</ul>"},site:{siteMetadata:{facebook:{appId:"670156599751120%"}}}},pathContext:{slug:"/writing-custom-tags-for-jstls/"}}}});
//# sourceMappingURL=path---writing-custom-tags-for-jstls-a9e65e14caca7486b1a8.js.map