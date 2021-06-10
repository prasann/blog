webpackJsonp([28558824443365],{907:function(e,t){e.exports={data:{post:{id:"/Users/prasanna/projects/blog/content/posts/2014-02-14--utc-time-android-device-ntp-server-sync/index.md absPath of file >>> MarkdownRemark",html:'<p>I had a requirement to persist the current UTC time of a request in Android device for future reference.</p>\n<p>Getting the time from the Android device and converting it to UTC will not be efficient since, user might have set wrong time in the device and it might mislead the data.<br>\nSo we decided to sync the device with NTP server before converting the time to UTC.</p>\n<p><strong>Step 1 :</strong> Copy this <a href="https://gist.github.com/prasann/9003350" title="SntpClient.java">SntpClient.java</a> into your source.<br>\n<strong>Step 2 :</strong> The SntpService.java to compute the current UTC is here below.</p>\n<p>public String getUTCTime(){\nlong nowAsPerDeviceTimeZone = 0;\nSntpClient sntpClient = new SntpClient();</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">    if (sntpClient.requestTime(&quot;0.africa.pool.ntp.org&quot;, 30000)) {\n        nowAsPerDeviceTimeZone = sntpClient.getNtpTime();\n        Calendar cal = Calendar.getInstance();\n        TimeZone timeZoneInDevice = cal.getTimeZone();\n        int differentialOfTimeZones = timeZoneInDevice.getOffset(System.currentTimeMillis());\n        nowAsPerDeviceTimeZone -= differentialOfTimeZones;\n    }\n    return DateUtils.getFormattedDateTime(new Date(nowAsPerDeviceTimeZone));\n}</code></pre>\n      </div>\n<p>Some more details on SntpService code:</p>\n<p>Connect to any of the prominent ntp servers. There were lots of recommendation to place this in config file, however i thought it doesn’t make sense for Android since i have to repackage this anyways.</p>\n<p>sntpClient.getNtpTime()</p>\n<p>gives you the current NTP time as per the device time zone.</p>\n<p>Then identify the device’s time zone,</p>\n<p>cal.getTimeZone()</p>\n<p>and calculate the offset difference between UTC and the current device time.</p>\n<p>DateUtils.getFormattedDateTime(date)</p>\n<p>is our custom method to format date into String.</p>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"I had a requirement to persist the current UTC time of a request in Android device for future reference."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Getting the time from the Android device and converting it to UTC will not be efficient since, user might have set wrong time in the device and it might mislead the data."},{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\nSo we decided to sync the device with NTP server before converting the time to UTC."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Step 1 :"}]},{type:"text",value:" Copy this "},{type:"element",tagName:"a",properties:{href:"https://gist.github.com/prasann/9003350",title:"SntpClient.java"},children:[{type:"text",value:"SntpClient.java"}]},{type:"text",value:" into your source."},{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"Step 2 :"}]},{type:"text",value:" The SntpService.java to compute the current UTC is here below."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"public String getUTCTime(){\nlong nowAsPerDeviceTimeZone = 0;\nSntpClient sntpClient = new SntpClient();"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:'    if (sntpClient.requestTime("0.africa.pool.ntp.org", 30000)) {\n        nowAsPerDeviceTimeZone = sntpClient.getNtpTime();\n        Calendar cal = Calendar.getInstance();\n        TimeZone timeZoneInDevice = cal.getTimeZone();\n        int differentialOfTimeZones = timeZoneInDevice.getOffset(System.currentTimeMillis());\n        nowAsPerDeviceTimeZone -= differentialOfTimeZones;\n    }\n    return DateUtils.getFormattedDateTime(new Date(nowAsPerDeviceTimeZone));\n}'}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Some more details on SntpService code:"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Connect to any of the prominent ntp servers. There were lots of recommendation to place this in config file, however i thought it doesn’t make sense for Android since i have to repackage this anyways."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"sntpClient.getNtpTime()"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"gives you the current NTP time as per the device time zone."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Then identify the device’s time zone,"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"cal.getTimeZone()"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"and calculate the offset difference between UTC and the current device time."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"DateUtils.getFormattedDateTime(date)"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"is our custom method to format date into String."}]}],data:{quirksMode:!1}},fields:{slug:"/utc-time-android-device-ntp-server-sync/",prefix:"2014-02-14"},frontmatter:{title:"UTC time in Android device. With NTP server sync.",subTitle:"Using NTP time in the anroid application. This involves calling the SNTP server and also converting the time to UTC format.",cover:null}},author:{id:"/Users/prasanna/projects/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Prasanna</strong> is a full stack web developer, loves to build user interfaces with Javascript. Considers himself as a geek, quick learner and a team player 😃 </p>"},footnote:{id:"/Users/prasanna/projects/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:"<ul>\n<li>rants and writings through personal experience</li>\n</ul>"},site:{siteMetadata:{facebook:{appId:"670156599751120%"}}}},pathContext:{slug:"/utc-time-android-device-ntp-server-sync/"}}}});
//# sourceMappingURL=path---utc-time-android-device-ntp-server-sync-3fb40c0521ea7fe349fd.js.map