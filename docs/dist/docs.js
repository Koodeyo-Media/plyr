"document"in self&&("classList"in document.createElement("_")?!function(){"use strict";var e=document.createElement("_");if(e.classList.add("c1","c2"),!e.classList.contains("c2")){var t=function(e){var t=DOMTokenList.prototype[e];DOMTokenList.prototype[e]=function(e){var i,n=arguments.length;for(i=0;n>i;i++)e=arguments[i],t.call(this,e)}};t("add"),t("remove")}if(e.classList.toggle("c3",!1),e.classList.contains("c3")){var i=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(e,t){return 1 in arguments&&!this.contains(e)==!t?t:i.call(this,e)}}e=null}():!function(e){"use strict";if("Element"in e){var t="classList",i="prototype",n=e.Element[i],s=Object,o=String[i].trim||function(){return this.replace(/^\s+|\s+$/g,"")},r=Array[i].indexOf||function(e){for(var t=0,i=this.length;i>t;t++)if(t in this&&this[t]===e)return t;return-1},a=function(e,t){this.name=e,this.code=DOMException[e],this.message=t},c=function(e,t){if(""===t)throw new a("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(t))throw new a("INVALID_CHARACTER_ERR","String contains an invalid character");return r.call(e,t)},l=function(e){for(var t=o.call(e.getAttribute("class")||""),i=t?t.split(/\s+/):[],n=0,s=i.length;s>n;n++)this.push(i[n]);this._updateClassName=function(){e.setAttribute("class",this.toString())}},u=l[i]=[],d=function(){return new l(this)};if(a[i]=Error[i],u.item=function(e){return this[e]||null},u.contains=function(e){return e+="",-1!==c(this,e)},u.add=function(){var e,t=arguments,i=0,n=t.length,s=!1;do e=t[i]+"",-1===c(this,e)&&(this.push(e),s=!0);while(++i<n);s&&this._updateClassName()},u.remove=function(){var e,t,i=arguments,n=0,s=i.length,o=!1;do for(e=i[n]+"",t=c(this,e);-1!==t;)this.splice(t,1),o=!0,t=c(this,e);while(++n<s);o&&this._updateClassName()},u.toggle=function(e,t){e+="";var i=this.contains(e),n=i?t!==!0&&"remove":t!==!1&&"add";return n&&this[n](e),t===!0||t===!1?t:!i},u.toString=function(){return this.join(" ")},s.defineProperty){var p={get:d,enumerable:!0,configurable:!0};try{s.defineProperty(n,t,p)}catch(h){-2146823252===h.number&&(p.enumerable=!1,s.defineProperty(n,t,p))}}else s[i].__defineGetter__&&n.__defineGetter__(t,d)}}(self)),plyr.setup(".js-media-player",{debug:!0,title:"Video demo",tooltips:{controls:!0},captions:{defaultActive:!0}}),function(){function e(e,t,i){if(e)if(e.classList)e.classList[i?"add":"remove"](t);else{var n=(" "+e.className+" ").replace(/\s+/g," ").replace(" "+t+" ","");e.className=n+(i?" "+t:"")}}function t(t,o){if(t in n&&(o||t!=s)&&(s.length||t!=n.video)){var r=document.querySelector(".js-media-player").plyr;switch(t){case n.video:r.source({type:"video",title:"View From A Blue Moon",sources:[{src:"https://cdn.selz.com/plyr/1.5/View_From_A_Blue_Moon_Trailer-HD.mp4",type:"video/mp4"},{src:"https://cdn.selz.com/plyr/1.5/View_From_A_Blue_Moon_Trailer-HD.webm",type:"video/webm"}],poster:"https://cdn.selz.com/plyr/1.5/View_From_A_Blue_Moon_Trailer-HD.jpg",tracks:[{kind:"captions",label:"English",srclang:"en",src:"https://cdn.selz.com/plyr/1.5/View_From_A_Blue_Moon_Trailer-HD.en.vtt","default":!0}]});break;case n.audio:r.source({type:"audio",title:"Kishi Bashi &ndash; &ldquo;It All Began With A Burst&rdquo;",sources:[{src:"https://cdn.selz.com/plyr/1.5/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3",type:"audio/mp3"},{src:"https://cdn.selz.com/plyr/1.5/Kishi_Bashi_-_It_All_Began_With_a_Burst.ogg",type:"audio/ogg"}]});break;case n.youtube:r.source({type:"video",title:"View From A Blue Moon",sources:[{src:"bTqVqk7FSmY",type:"youtube"}]});break;case n.vimeo:r.source({type:"video",title:"View From A Blue Moon",sources:[{src:"143418951",type:"vimeo"}]})}s=t;for(var a=i.length-1;a>=0;a--)e(i[a].parentElement,"active",!1);e(document.querySelector('[data-source="'+t+'"]').parentElement,"active",!0)}}for(var i=document.querySelectorAll("[data-source]"),n={video:"video",audio:"audio",youtube:"youtube",vimeo:"vimeo"},s=window.location.hash.replace("#",""),o=window.history&&window.history.pushState,r=i.length-1;r>=0;r--)i[r].addEventListener("click",function(){var e=this.getAttribute("data-source");t(e),o&&history.pushState({type:e},"","#"+e)});if(window.addEventListener("popstate",function(e){e.state&&"type"in e.state&&t(e.state.type)}),o){var a=!s.length;a&&(s=n.video),s in n&&history.replaceState({type:s},"",a?"":"#"+s),s!==n.video&&t(s,!0)}}(),document.domain.indexOf("plyr.io")>-1&&(!function(e,t,i,n,s,o,r){e.GoogleAnalyticsObject=s,e[s]=e[s]||function(){(e[s].q=e[s].q||[]).push(arguments)},e[s].l=1*new Date,o=t.createElement(i),r=t.getElementsByTagName(i)[0],o.async=1,o.src=n,r.parentNode.insertBefore(o,r)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-40881672-11","auto"),ga("send","pageview"));