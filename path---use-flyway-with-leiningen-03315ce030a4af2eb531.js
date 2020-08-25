webpackJsonp([0x72a3270fec31],{909:function(e,t){e.exports={data:{post:{id:"/home/runner/work/blog/blog/content/posts/2017-07-16--use flyway with leiningen/index.md absPath of file >>> MarkdownRemark",html:'<p><a href="https://leiningen.org/">Leiningen</a> is the easiest way to start with clojure project automation. The project under discussion is a webservices written in clojure with <a href="https://github.com/metosin/compojure-api">compojure-api</a> and <a href="https://github.com/ring-clojure/ring">ring</a> middleware.</p>\n<p>When it came to Database migrations, I didn’t find anything straightforward amongst the lein plugins. So, decided to use <a href="https://flywaydb.org/">flyway</a>. I have worked with flyway in the past with Java applications. But, this is the first time with clojure, leiningen combination.</p>\n<h3>Migration utility in clojure</h3>\n<p>Here is the small migration helper written in Clojure</p>\n<div class="gatsby-highlight" data-language="clojure">\n      <pre class="language-clojure"><code class="language-clojure"><span class="token punctuation">(</span><span class="token keyword">ns</span> app.migration\n  <span class="token punctuation">(</span><span class="token operator">:require</span> <span class="token punctuation">[</span>environ.core <span class="token operator">:refer</span> <span class="token punctuation">[</span>env<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n  <span class="token punctuation">(</span><span class="token operator">:import</span> org.flywaydb.core.Flyway\n           org.flywaydb.core.internal.info.MigrationInfoDumper<span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n<span class="token comment">;; Build DB String from the Environment Variables</span>\n<span class="token punctuation">(</span><span class="token keyword">def</span> <span class="token number">db</span>-url <span class="token punctuation">(</span><span class="token keyword">str</span> <span class="token string">"jdbc:postgresql://"</span>\n                 <span class="token punctuation">(</span>env <span class="token operator">:pg-db-host</span><span class="token punctuation">)</span> <span class="token string">":"</span>\n                 <span class="token punctuation">(</span>env <span class="token operator">:pg-db-port</span><span class="token punctuation">)</span> <span class="token string">"/"</span> <span class="token punctuation">(</span>env <span class="token operator">:pg-db-name</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n<span class="token comment">;; Initialize Flyway object</span>\n<span class="token punctuation">(</span><span class="token keyword">def</span> flyway\n  <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>locations <span class="token punctuation">(</span><span class="token keyword">into-array</span> String <span class="token punctuation">[</span><span class="token string">"classpath:db/migration"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span>\n    <span class="token punctuation">(</span><span class="token keyword">doto</span> <span class="token punctuation">(</span><span class="token keyword">new</span> Flyway<span class="token punctuation">)</span>\n      <span class="token punctuation">(</span>.setDataSource <span class="token number">db</span>-url <span class="token punctuation">(</span>env <span class="token operator">:pg-db-user</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>env <span class="token operator">:pg-db-password</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token keyword">into-array</span> String <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n      <span class="token punctuation">(</span>.setLocations locations<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n<span class="token punctuation">(</span><span class="token keyword">defn</span> migrate <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">(</span>.migrate flyway<span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n<span class="token punctuation">(</span><span class="token keyword">defn</span> clean <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">(</span>.clean flyway<span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n<span class="token punctuation">(</span><span class="token keyword">defn</span> reset <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">(</span>clean<span class="token punctuation">)</span> <span class="token punctuation">(</span>migrate<span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n<span class="token punctuation">(</span><span class="token keyword">defn</span> info <span class="token punctuation">[</span><span class="token punctuation">]</span>\n  <span class="token punctuation">(</span><span class="token keyword">println</span> <span class="token punctuation">(</span>MigrationInfoDumper/dumpToAsciiTable <span class="token punctuation">(</span>.all <span class="token punctuation">(</span>.info flyway<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<h3>Running migration during deployment</h3>\n<p>I’m using <a href="https://github.com/weavejester/lein-ring">lein-ring</a> plugin, this provided an option to execute function before the handler starts. So, I wired app.migrate to the init block of the handler.</p>\n<p>This helps to run migration everytime before the application deploys. Ofcourse, flyway will take care of what migrations need to run based on the migration version.</p>\n<h3>Running migrations for local development</h3>\n<p>The above method works perfectly for the application deployment scenarios. However, in local it will be better to execute​ ​migration and clean databases as and when required, rather than re-deploying the application. lein-exec plugin offers​ ​a way to create and execute clojure code from project.clj files. With the above-mentioned migration present, all ​I​​ ha​ve to do is to create some aliases as shown below.</p>\n<div class="gatsby-highlight" data-language="clojure">\n      <pre class="language-clojure"><code class="language-clojure"><span class="token operator">:aliases</span> <span class="token punctuation">{</span> \n    <span class="token string">"db-clean"</span>   <span class="token punctuation">[</span><span class="token string">"exec"</span> <span class="token string">"-ep"</span> <span class="token string">"(use \'deal-picker.migration) (clean)"</span><span class="token punctuation">]</span>\n    <span class="token string">"db-migrate"</span> <span class="token punctuation">[</span><span class="token string">"exec"</span> <span class="token string">"-ep"</span> <span class="token string">"(use \'deal-picker.migration) (migrate)"</span><span class="token punctuation">]</span>\n    <span class="token string">"db-info"</span>    <span class="token punctuation">[</span><span class="token string">"exec"</span> <span class="token string">"-ep"</span> <span class="token string">"(use \'deal-picker.migration) (info)"</span><span class="token punctuation">]</span>\n    <span class="token string">"db-reset"</span>   <span class="token punctuation">[</span><span class="token string">"exec"</span> <span class="token string">"-ep"</span> <span class="token string">"(use \'deal-picker.migration) (reset)"</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://leiningen.org/"},children:[{type:"text",value:"Leiningen"}]},{type:"text",value:" is the easiest way to start with clojure project automation. The project under discussion is a webservices written in clojure with "},{type:"element",tagName:"a",properties:{href:"https://github.com/metosin/compojure-api"},children:[{type:"text",value:"compojure-api"}]},{type:"text",value:" and "},{type:"element",tagName:"a",properties:{href:"https://github.com/ring-clojure/ring"},children:[{type:"text",value:"ring"}]},{type:"text",value:" middleware."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"When it came to Database migrations, I didn’t find anything straightforward amongst the lein plugins. So, decided to use "},{type:"element",tagName:"a",properties:{href:"https://flywaydb.org/"},children:[{type:"text",value:"flyway"}]},{type:"text",value:". I have worked with flyway in the past with Java applications. But, this is the first time with clojure, leiningen combination."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Migration utility in clojure"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Here is the small migration helper written in Clojure"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"clojure"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-clojure"]},children:[{type:"element",tagName:"code",properties:{className:["language-clojure"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"ns"}]},{type:"text",value:" app.migration\n  "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:":require"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"["}]},{type:"text",value:"environ.core "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:":refer"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"["}]},{type:"text",value:"env"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"]"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"]"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:":import"}]},{type:"text",value:" org.flywaydb.core.Flyway\n           org.flywaydb.core.internal.info.MigrationInfoDumper"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:"\n\n"},{type:"element",tagName:"span",properties:{className:["token","comment"]},children:[{type:"text",value:";; Build DB String from the Environment Variables"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"def"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"db"}]},{type:"text",value:"-url "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"str"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"jdbc:postgresql://"'}]},{type:"text",value:"\n                 "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"env "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:":pg-db-host"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'":"'}]},{type:"text",value:"\n                 "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"env "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:":pg-db-port"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"/"'}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"env "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:":pg-db-name"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:"\n\n"},{type:"element",tagName:"span",properties:{className:["token","comment"]},children:[{type:"text",value:";; Initialize Flyway object"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"def"}]},{type:"text",value:" flyway\n  "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"let"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"["}]},{type:"text",value:"locations "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"into-array"}]},{type:"text",value:" String "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"["}]},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"classpath:db/migration"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"]"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"]"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"doto"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"new"}]},{type:"text",value:" Flyway"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:"\n      "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:".setDataSource "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"db"}]},{type:"text",value:"-url "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"env "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:":pg-db-user"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"env "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:":pg-db-password"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"into-array"}]},{type:"text",value:" String "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"["}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"]"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:"\n      "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:".setLocations locations"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:"\n\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"defn"}]},{type:"text",value:" migrate "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"["}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"]"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:".migrate flyway"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:"\n\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"defn"}]},{type:"text",value:" clean "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"["}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"]"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:".clean flyway"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:"\n\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"defn"}]},{type:"text",value:" reset "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"["}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"]"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"clean"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"migrate"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:"\n\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"defn"}]},{type:"text",value:" info "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"["}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"]"}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"println"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"MigrationInfoDumper/dumpToAsciiTable "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:".all "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:".info flyway"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Running migration during deployment"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"I’m using "},{type:"element",tagName:"a",properties:{href:"https://github.com/weavejester/lein-ring"},children:[{type:"text",value:"lein-ring"}]},{type:"text",value:" plugin, this provided an option to execute function before the handler starts. So, I wired app.migrate to the init block of the handler."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This helps to run migration everytime before the application deploys. Ofcourse, flyway will take care of what migrations need to run based on the migration version."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Running migrations for local development"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The above method works perfectly for the application deployment scenarios. However, in local it will be better to execute​ ​migration and clean databases as and when required, rather than re-deploying the application. lein-exec plugin offers​ ​a way to create and execute clojure code from project.clj files. With the above-mentioned migration present, all ​I​​ ha​ve to do is to create some aliases as shown below."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"clojure"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-clojure"]},children:[{type:"element",tagName:"code",properties:{className:["language-clojure"]},children:[{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:":aliases"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:" \n    "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"db-clean"'}]},{type:"text",value:"   "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"["}]},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"exec"'}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"-ep"'}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"(use \'deal-picker.migration) (clean)"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"]"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"db-migrate"'}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"["}]},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"exec"'}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"-ep"'}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"(use \'deal-picker.migration) (migrate)"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"]"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"db-info"'}]},{type:"text",value:"    "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"["}]},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"exec"'}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"-ep"'}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"(use \'deal-picker.migration) (info)"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"]"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"db-reset"'}]},{type:"text",value:"   "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"["}]},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"exec"'}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"-ep"'}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"(use \'deal-picker.migration) (reset)"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"]"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]}]}]},{type:"text",value:"\n      "}]}],data:{quirksMode:!1}},fields:{slug:"/use flyway with leiningen/",prefix:"2017-07-16"},frontmatter:{title:"Flyway migrations in lein clojure",subTitle:"Integrating flyway migrations to compojure apps.",draft:null}},author:{id:"/home/runner/work/blog/blog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p><strong>Prasanna</strong> is a full stack web developer, with exposure to various programming languages.\nUses mostly Java, Javascript these days and got 11+ years of architecting and coding enterprise software solutions.   </p>"},footnote:{id:"/home/runner/work/blog/blog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:"<ul>\n<li>rants and writings through personal experience</li>\n</ul>"},site:{siteMetadata:{facebook:{appId:"670156599751120%"}}}},pathContext:{slug:"/use flyway with leiningen/"}}}});
//# sourceMappingURL=path---use-flyway-with-leiningen-03315ce030a4af2eb531.js.map