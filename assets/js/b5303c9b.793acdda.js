"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[5480],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?o.createElement(k,i(i({ref:t},p),{},{components:r})):o.createElement(k,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1174:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={id:"docker-deployment",title:"Docker Quick Tutorial",sidebar_position:4},i=void 0,s={unversionedId:"user-guide/docker-deployment",id:"user-guide/docker-deployment",title:"Docker Quick Tutorial",description:"This tutorial uses the docker method to deploy StreamPark via Docker.",source:"@site/docs/user-guide/4-dockerDeployment.md",sourceDirName:"user-guide",slug:"/user-guide/docker-deployment",permalink:"/docs/user-guide/docker-deployment",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/docs/user-guide/4-dockerDeployment.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"docker-deployment",title:"Docker Quick Tutorial",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Develop Environment",permalink:"/docs/user-guide/development"},next:{title:"LDAP Quick Tutorial",permalink:"/docs/user-guide/LDAP"}},l={},c=[{value:"Prepare",id:"prepare",level:2},{value:"Installing docker",id:"installing-docker",level:3},{value:"Installing docker-compose",id:"installing-docker-compose",level:3},{value:"Rapid StreamPark Deployment",id:"rapid-streampark-deployment",level:2},{value:"StreamPark deployment based on h2 and docker-compose",id:"streampark-deployment-based-on-h2-and-docker-compose",level:3},{value:"Deployment",id:"deployment",level:4},{value:"Configure flink home",id:"configure-flink-home",level:4},{value:"Configure flink-session cluster",id:"configure-flink-session-cluster",level:4},{value:"Submit a task",id:"submit-a-task",level:4},{value:"Use existing Mysql services",id:"use-existing-mysql-services",level:3},{value:"Use existing Pgsql services",id:"use-existing-pgsql-services",level:3},{value:"Build images based on source code for StreamPark deployment",id:"build-images-based-on-source-code-for-streampark-deployment",level:2}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This tutorial uses the docker method to deploy StreamPark via Docker."),(0,n.kt)("h2",{id:"prepare"},"Prepare"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Docker 1.13.1+\nDocker Compose 1.28.0+\n")),(0,n.kt)("h3",{id:"installing-docker"},"Installing docker"),(0,n.kt)("p",null,"To start the service with docker, you need to install ",(0,n.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"docker")," first"),(0,n.kt)("h3",{id:"installing-docker-compose"},"Installing docker-compose"),(0,n.kt)("p",null,"To start the service with docker-compose, you need to install ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"docker-compose")," first"),(0,n.kt)("h2",{id:"rapid-streampark-deployment"},"Rapid StreamPark Deployment"),(0,n.kt)("h3",{id:"streampark-deployment-based-on-h2-and-docker-compose"},"StreamPark deployment based on h2 and docker-compose"),(0,n.kt)("h4",{id:"deployment"},"Deployment"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},"wget https://github.com/apache/incubator-streampark/blob/dev/deploy/docker/docker-compose.yaml\nwget https://github.com/apache/incubator-streampark/blob/dev/deploy/docker/.env\ndocker-compose up -d\n")),(0,n.kt)("p",null,"Once the service is started, StreamPark can be accessed through http://localhost:10000 and also through http://localhost:8081 to access Flink. Accessing the StreamPark link will redirect you to the login page, where the default user and password for StreamPark are admin and streampark respectively. To learn more about the operation, please refer to the user manual for a quick start."),(0,n.kt)("h4",{id:"configure-flink-home"},"Configure flink home"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(4200).Z,width:"1310",height:"498"})),(0,n.kt)("h4",{id:"configure-flink-session-cluster"},"Configure flink-session cluster"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(4999).Z,width:"1302",height:"550"})),(0,n.kt)("p",null,"Note:When configuring the flink-sessin cluster address, the ip address is not localhost, but the host network ip, which can be obtained through ifconfig"),(0,n.kt)("h4",{id:"submit-a-task"},"Submit a task"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(6318).Z,width:"1207",height:"627"})),(0,n.kt)("h3",{id:"use-existing-mysql-services"},"Use existing Mysql services"),(0,n.kt)("p",null,"This approach is suitable for enterprise production, where you can quickly deploy strempark based on docker and associate it with an online database\nNote: The diversity of deployment support is maintained through the .env configuration file, make sure there is one and only one .env file in the directory"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},"wget https://github.com/apache/incubator-streampark/blob/dev/deploy/docker/docker-compose.yaml\nwget https://github.com/apache/incubator-streampark/blob/dev/deploy/docker/mysql/.env\nvim .env\n")),(0,n.kt)("p",null,"Modify the corresponding connection information"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},"SPRING_PROFILES_ACTIVE=mysql\nSPRING_DATASOURCE_URL=jdbc:mysql://localhost:3306/streampark?useSSL=false&useUnicode=true&characterEncoding=UTF-8&allowPublicKeyRetrieval=false&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=GMT%2B8\nSPRING_DATASOURCE_USERNAME=root\nSPRING_DATASOURCE_PASSWORD=streampark\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker-compose up -d\n")),(0,n.kt)("h3",{id:"use-existing-pgsql-services"},"Use existing Pgsql services"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},"wget https://github.com/apache/incubator-streampark/blob/dev/deploy/docker/docker-compose.yaml\nwget https://github.com/apache/incubator-streampark/blob/dev/deploy/docker/pgsql/.env\nvim .env\n")),(0,n.kt)("p",null,"Modify the corresponding connection information"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},"SPRING_PROFILES_ACTIVE=pgsql\nSPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/streampark?stringtype=unspecified\nSPRING_DATASOURCE_USERNAME=postgres\nSPRING_DATASOURCE_PASSWORD=streampark\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker-compose up -d\n")),(0,n.kt)("h2",{id:"build-images-based-on-source-code-for-streampark-deployment"},"Build images based on source code for StreamPark deployment"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"git clone https://github.com/apache/incubator-streampark.git\ncd incubator-streampark/deploy/docker\nvim docker-compose\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},"    build:\n      context: ../..\n      dockerfile: deploy/docker/console/Dockerfile\n#    image: ${HUB}:${TAG}\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker-compose up -d\n")))}d.isMDXComponent=!0},4999:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/remote-c75d520f5a61d9f100c0e1c58d304eb3.png"},6318:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/remoteSubmission-390200dc9d1b5a55add19d303add2698.png"},4200:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/streampark_flinkhome-d6e90dd6fa04a003feef2eb6086ca3c3.png"}}]);