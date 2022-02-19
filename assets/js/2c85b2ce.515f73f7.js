"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[6495],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3258:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return m}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={slug:"spark-structured-streaming",title:"How to support Spark StructuredStreaming",tags:["Spark","StructuredStreaming"]},l="How to use StructuredStreaming recently supported by Seatunnel",u={permalink:"/blog/spark-structured-streaming",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/blog/2021-12-30-spark-structured-streaming.md",source:"@site/blog/2021-12-30-spark-structured-streaming.md",title:"How to support Spark StructuredStreaming",description:"Foreword",date:"2021-12-30T00:00:00.000Z",formattedDate:"December 30, 2021",tags:[{label:"Spark",permalink:"/blog/tags/spark"},{label:"StructuredStreaming",permalink:"/blog/tags/structured-streaming"}],readingTime:7.8,truncated:!1,authors:[],frontMatter:{slug:"spark-structured-streaming",title:"How to support Spark StructuredStreaming",tags:["Spark","StructuredStreaming"]},prevItem:{title:"How to use Spark to do OLAP analysis on TiDB",permalink:"/blog/spark-execute-tidb"}},c={authorsImageUrls:[]},p=[{value:"Foreword",id:"foreword",children:[],level:3},{value:"How to use StructuredStreaming",id:"how-to-use-structuredstreaming",children:[],level:3},{value:"Seatunnel",id:"seatunnel",children:[],level:3},{value:"Ready to work",id:"ready-to-work",children:[],level:3},{value:"Seatunnel Pipeline",id:"seatunnel-pipeline",children:[{value:"Spark",id:"spark",children:[],level:4},{value:"Input",id:"input",children:[],level:4},{value:"Filter",id:"filter",children:[],level:4},{value:"Output",id:"output",children:[],level:4}],level:3},{value:"Scenario Analysis",id:"scenario-analysis",children:[{value:"Scenario 1: Real-time aggregation scenario",id:"scenario-1-real-time-aggregation-scenario",children:[],level:4},{value:"Scenario 2: Multiple stream association scenarios",id:"scenario-2-multiple-stream-association-scenarios",children:[],level:4}],level:3},{value:"Conclusion",id:"conclusion",children:[],level:3},{value:"\u8054\u7cfb\u6211\u4eec",id:"\u8054\u7cfb\u6211\u4eec",children:[],level:2}],d={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"foreword"},"Foreword"),(0,o.kt)("p",null,"StructuredStreaming is a newly opened module after Spark 2.0. Compared with SparkStreaming, it has some prominent advantages:",(0,o.kt)("br",null)," ","\u2003","\u2003","First, it can achieve lower latency;",(0,o.kt)("br",null),"\n","\u2003","\u2003","Second, real-time aggregation can be done, such as real-time calculation of the total sales of each commodity every day;",(0,o.kt)("br",null),"\n","\u2003","\u2003","Third, you can do the association between streams, for example, to calculate the click rate of an advertisement, you need to associate the exposure record of the advertisement with the click record. ",(0,o.kt)("br",null),"\nThe above points may be cumbersome or difficult to implement if using SparkStreaming, but it will be easier to implement using StructuredStreaming."),(0,o.kt)("h3",{id:"how-to-use-structuredstreaming"},"How to use StructuredStreaming"),(0,o.kt)("p",null,"Maybe you have not studied StructuredStreaming in detail, but found that StructuredStreaming can solve your needs very well. How to quickly use StructuredStreaming to solve your needs? Currently there is a tool ",(0,o.kt)("strong",{parentName:"p"},"Seatunnel")," in the community, the project address: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel"},"https://github.com/apache/incubator-seatunnel")," ,\nIt can help you use StructuredStreaming to complete your needs efficiently and at low cost."),(0,o.kt)("h3",{id:"seatunnel"},"Seatunnel"),(0,o.kt)("p",null,"Seatunnel is a very easy-to-use, high-performance, real-time data processing product that can deal with massive data. It is built on Spark. Seatunnel has a very rich set of plug-ins, supports reading data from Kafka, HDFS, Kudu, performs various data processing, and writes the results to ClickHouse, Elasticsearch or Kafka"),(0,o.kt)("h3",{id:"ready-to-work"},"Ready to work"),(0,o.kt)("p",null,"First we need to install Seatunnel, the installation is very simple, no need to configure system environment variables"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Prepare the Spark environment"),(0,o.kt)("li",{parentName:"ol"},"Install Seatunnel"),(0,o.kt)("li",{parentName:"ol"},"Configure Seatunnel")),(0,o.kt)("p",null,"The following are simple steps, the specific installation can refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/quick-start"},"Quick Start")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd /usr/local\nwget https://archive.apache.org/dist/spark/spark-2.2.0/spark-2.2.0-bin-hadoop2.7.tgz\ntar -xvf https://archive.apache.org/dist/spark/spark-2.2.0/spark-2.2.0-bin-hadoop2.7.tgz\nwget https://github.com/InterestingLab/seatunnel/releases/download/v1.3.0/seatunnel-1.3.0.zip\nunzip seatunnel-1.3.0.zip\ncd seatunnel-1.3.0\n\nvim config/seatunnel-env.sh\n# Specify the Spark installation path\nSPARK_HOME=${SPARK_HOME:-/usr/local/spark-2.2.0-bin-hadoop2.7}\n")),(0,o.kt)("h3",{id:"seatunnel-pipeline"},"Seatunnel Pipeline"),(0,o.kt)("p",null,"We only need to write a configuration file of Seatunnel Pipeline to complete the data import."),(0,o.kt)("p",null,"The configuration file includes four parts, namely Spark, Input, filter and Output."),(0,o.kt)("h4",{id:"spark"},"Spark"),(0,o.kt)("p",null,"This part is the related configuration of Spark, which mainly configures the resource size required for Spark execution."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'spark {\n  spark.app.name = "seatunnel"\n  spark.executor.instances = 2\n  spark.executor.cores = 1\n  spark.executor.memory = "1g"\n}\n')),(0,o.kt)("h4",{id:"input"},"Input"),(0,o.kt)("p",null,"Below is an example of reading data from kafka"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'kafkaStream {\n    topics = "seatunnel"\n    consumer.bootstrap.servers = "localhost:9092"\n    schema = "{\\"name\\":\\"string\\",\\"age\\":\\"integer\\",\\"addrs\\":{\\"country\\":\\"string\\",\\"city\\":\\"string\\"}}"\n}\n')),(0,o.kt)("p",null,"Through the above configuration, the data in kafka can be read. Topics is the topic of kafka to be subscribed to. Subscribing to multiple topics at the same time can be separated by commas. Consumer.bootstrap.servers is the list of Kafka servers, and schema is optional. Because the value read by StructuredStreaming from kafka (official fixed field value) is of binary type, see ",(0,o.kt)("a",{parentName:"p",href:"http://spark.apache.org/docs/latest/structured-streaming-kafka-integration.html"},"http://spark.apache.org/docs/latest/structured-streaming-kafka-integration.html"),"\nBut if you are sure that the data in your kafka is a json string, you can specify the schema, and the input plugin will parse it according to the schema you specify"),(0,o.kt)("h4",{id:"filter"},"Filter"),(0,o.kt)("p",null,"Here is a simple filter example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'filter{\n    sql{\n        table_name = "student"\n        sql = "select name,age from student"\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"table_name")," is the registered temporary table name for easy use in the following sql"),(0,o.kt)("h4",{id:"output"},"Output"),(0,o.kt)("p",null,"The processed data is output, assuming that our output is also kafka"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'output{\n    kafka {\n        topic = "seatunnel"\n        producer.bootstrap.servers = "localhost:9092"\n        streaming_output_mode = "update"\n        checkpointLocation = "/your/path"\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"topic")," is the topic you want to output, ",(0,o.kt)("inlineCode",{parentName:"p"},"producer.bootstrap.servers")," is a list of kafka clusters, ",(0,o.kt)("inlineCode",{parentName:"p"},"streaming_output_mode")," is an output mode parameter of StructuredStreaming, there are three types of ",(0,o.kt)("inlineCode",{parentName:"p"},"append|update|complete"),", for details, see the documentation http: //spark.apache.org/docs/latest/structured-streaming-programming-guide.html#output-modes"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"checkpointLocation")," is the checkpoint path of StructuredStreaming. If configured, this directory will store the running information of the program. For example, if the program exits and restarts, it will continue to consume the last offset."),(0,o.kt)("h3",{id:"scenario-analysis"},"Scenario Analysis"),(0,o.kt)("p",null,"The above is a simple example. Next, we will introduce a slightly more complex business scenario."),(0,o.kt)("h4",{id:"scenario-1-real-time-aggregation-scenario"},"Scenario 1: Real-time aggregation scenario"),(0,o.kt)("p",null,"Suppose there is now a mall with 10 kinds of products on it, and now it is necessary to find the daily sales of each product in real time, and even to find the number of buyers of each product (not very precise).\nThe huge advantage of this is that massive data can be aggregated during real-time processing, and there is no need to write data into the data warehouse first, and then run offline scheduled tasks for aggregation.\nIt is still very convenient to operate."),(0,o.kt)("p",null,"The data of kafka is as follows"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{"good_id":"abc","price":300,"user_id":123456,"time":1553216320}\n')),(0,o.kt)("p",null,"So how do we use Seatunnel to fulfill this requirement, of course, we only need to configure it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'#The configuration in spark is configured according to business requirements\nspark {\n  spark.app.name = "seatunnel"\n  spark.executor.instances = 2\n  spark.executor.cores = 1\n  spark.executor.memory = "1g"\n}\n\n#configure input\ninput {\n    kafkaStream {\n        topics = "good_topic"\n        consumer.bootstrap.servers = "localhost:9092"\n        schema = "{\\"good_id\\":\\"string\\",\\"price\\":\\"integer\\",\\"user_id\\":\\"Long\\",\\"time\\":\\"Long\\"}"\n    }\n}\n\n#configure filter    \nfilter {\n    \n    #When the program is doing aggregation, it will internally store the aggregation state of the program since startup, which will lead to OOM over time. If the watermark is set, the program will automatically clean up the state other than the watermark.\n    #Here means use the ts field to set the watermark, the limit is 1 day\n\n    Watermark {\n        time_field = "time"\n        time_type = "UNIX"              #UNIX represents a timestamp with a time field of 10, and other types can be found in the plugin documentation for details.\n        time_pattern = "yyyy-MM-dd"     #The reason why the ts is assigned to the day is because the daily sales are sought, if the hourly sales are sought, the hour can be assigned `yyyy-MM-dd HH`\n        delay_threshold = "1 day"\n        watermark_field = "ts"          #After setting the watermark, a new field will be added, `ts` is the name of this field\n    }\n    \n    #The reason for group by ts is to make the watermark take effect, approx_count_distinct is an estimate, not an exact count_distinct\n    sql {\n        table_name = "good_table_2"\n        sql = "select good_id,sum(price) total, approx_count_distinct(user_id) person from good_table_2 group by ts,good_id"\n    }\n}\n\n#Next we choose to output the results to Kafka in real time\noutput{\n    kafka {\n        topic = "seatunnel"\n        producer.bootstrap.servers = "localhost:9092"\n        streaming_output_mode = "update"\n        checkpointLocation = "/your/path"\n    }\n}\n\n')),(0,o.kt)("p",null,"The above configuration is complete, start Seatunnel, and you can get the results you want."),(0,o.kt)("h4",{id:"scenario-2-multiple-stream-association-scenarios"},"Scenario 2: Multiple stream association scenarios"),(0,o.kt)("p",null,"Suppose you have placed an advertisement on a certain platform, and now you need to calculate the CTR (click-through rate) of each advertisement in real time. The data comes from two topics, one is the advertisement exposure log, and the other is the advertisement click log.\nAt this point, we need to associate the two stream data together for calculation, and Seatunnel also supports this function recently, let's take a look at how to do it:"),(0,o.kt)("p",null,"Click on topic data format"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{"ad_id":"abc","click_time":1553216320,"user_id":12345}\n\n')),(0,o.kt)("p",null,"Exposure topic data format"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{"ad_id":"abc","show_time":1553216220,"user_id":12345}\n\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'#The configuration in spark is configured according to business requirements\nspark {\n  spark.app.name = "seatunnel"\n  spark.executor.instances = 2\n  spark.executor.cores = 1\n  spark.executor.memory = "1g"\n}\n\n#configure input\ninput {\n    \n    kafkaStream {\n        topics = "click_topic"\n        consumer.bootstrap.servers = "localhost:9092"\n        schema = "{\\"ad_id\\":\\"string\\",\\"user_id\\":\\"Long\\",\\"click_time\\":\\"Long\\"}"\n        table_name = "click_table"\n    }\n    \n    kafkaStream {\n        topics = "show_topic"\n        consumer.bootstrap.servers = "localhost:9092"\n        schema = "{\\"ad_id\\":\\"string\\",\\"user_id\\":\\"Long\\",\\"show_time\\":\\"Long\\"}"\n        table_name = "show_table"\n    }\n}\n\nfilter {\n    \n    #Left association right table must set watermark\n    #Right off left and right tables must set watermark\n    #http://spark.apache.org/docs/latest/structured-streaming-programming-guide.html#inner-joins-with-optional-watermarking\n    Watermark {\n              source_table_name = "click_table" #Here you can specify to add a watermark to a temporary table. If you don\'t specify it, it will be the first one in the input.\n              time_field = "time"\n              time_type = "UNIX"               \n              delay_threshold = "3 hours"\n              watermark_field = "ts" \n              result_table_name = "click_table_watermark" #After adding the watermark, it can be registered as a temporary table, which is convenient for subsequent use in sql\n    }\n    \n    Watermark {\n                source_table_name = "show_table" \n                time_field = "time"\n                time_type = "UNIX"               \n                delay_threshold = "2 hours"\n                watermark_field = "ts" \n                result_table_name = "show_table_watermark" \n     }\n    \n    \n    sql {\n        table_name = "show_table_watermark"\n        sql = "select a.ad_id,count(b.user_id)/count(a.user_id) ctr from show_table_watermark as a left join click_table_watermark as b on a.ad_id = b.ad_id and a.user_id = b.user_id "\n    }\n    \n}\n\n#Next we choose to output the results to Kafka in real time\noutput {\n    kafka {\n        topic = "seatunnel"\n        producer.bootstrap.servers = "localhost:9092"\n        streaming_output_mode = "append" #Stream association only supports append mode\n        checkpointLocation = "/your/path"\n    }\n}\n')),(0,o.kt)("p",null,"Through configuration, the case of stream association is also completed here."),(0,o.kt)("h3",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Through configuration, you can quickly use StructuredStreaming for real-time data processing, but you still need to understand some concepts of StructuredStreaming, such as the watermark mechanism, and the output mode of the program."),(0,o.kt)("p",null,'Finally, Seatunnel also supports spark streaming and spark batching of course.\nIf you are also interested in these two, you can read our previous article "',(0,o.kt)("a",{parentName:"p",href:"/blog/hive-to-clickhouse"},"How to quickly import data from Hive into ClickHouse"),'",\n"',"[Excellent data engineer, how to use Spark to do OLAP analysis on TiDB]",' (2021-12-30-spark-execute-tidb.md)",\n"',"[How to use Spark to quickly write data to Elasticsearch]",' (2021-12-30-spark-execute-elasticsearch.md)"'),(0,o.kt)("p",null,"If you want to know more functions and cases of Seatunnel combined with HBase, ClickHouse, Elasticsearch, Kafka, MySQL and other data sources, you can go directly to the official website ","[https://seatunnel.apache.org/]","(",(0,o.kt)("a",{parentName:"p",href:"https://seatunnel.apache."},"https://seatunnel.apache.")," org/)"),(0,o.kt)("h2",{id:"\u8054\u7cfb\u6211\u4eec"},"\u8054\u7cfb\u6211\u4eec"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Mailing list : ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"mailto:dev@seatunnel.apache.org"},"dev@seatunnel.apache.org")),". Send anything to ",(0,o.kt)("inlineCode",{parentName:"li"},"dev-subscribe@seatunnel.apache.org")," and subscribe to the mailing list according to the replies."),(0,o.kt)("li",{parentName:"ul"},"Slack: Send a ",(0,o.kt)("inlineCode",{parentName:"li"},"Request to join SeaTunnel slack")," email to the mailing list (",(0,o.kt)("inlineCode",{parentName:"li"},"dev@seatunnel.apache.org"),"), and we will invite you to join (please make sure you are registered with Slack before doing so)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://space.bilibili.com/1542095008"},"bilibili B station video"))))}m.isMDXComponent=!0}}]);