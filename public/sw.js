if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),d={module:{uri:i},exports:t,require:r};s[i]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-2780d724"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/152-6de31342de3375a7.js",revision:"6de31342de3375a7"},{url:"/_next/static/chunks/157-f8a8aee5773f0e6c.js",revision:"f8a8aee5773f0e6c"},{url:"/_next/static/chunks/1a48c3c1-50dc31aac088341e.js",revision:"50dc31aac088341e"},{url:"/_next/static/chunks/342-86f484394da80f47.js",revision:"86f484394da80f47"},{url:"/_next/static/chunks/344.ca9483555c2a0490.js",revision:"ca9483555c2a0490"},{url:"/_next/static/chunks/518.056ea5c984d1a55d.js",revision:"056ea5c984d1a55d"},{url:"/_next/static/chunks/523-323500ead78b1d5e.js",revision:"323500ead78b1d5e"},{url:"/_next/static/chunks/524-82b047d9880cdf2c.js",revision:"82b047d9880cdf2c"},{url:"/_next/static/chunks/535.6f6bd2b0e291e1e3.js",revision:"6f6bd2b0e291e1e3"},{url:"/_next/static/chunks/75fc9c18-289ba7b5fb63f228.js",revision:"289ba7b5fb63f228"},{url:"/_next/static/chunks/894.884bc9854a9cfe85.js",revision:"884bc9854a9cfe85"},{url:"/_next/static/chunks/978-3f8b700e5c056af4.js",revision:"3f8b700e5c056af4"},{url:"/_next/static/chunks/framework-a87821de553db91d.js",revision:"a87821de553db91d"},{url:"/_next/static/chunks/main-21fbc9a5ad2df4ee.js",revision:"21fbc9a5ad2df4ee"},{url:"/_next/static/chunks/pages/404-80dd8df07ecadf4e.js",revision:"80dd8df07ecadf4e"},{url:"/_next/static/chunks/pages/_app-51646858e0da9dfc.js",revision:"51646858e0da9dfc"},{url:"/_next/static/chunks/pages/_error-815e492bede44f3e.js",revision:"815e492bede44f3e"},{url:"/_next/static/chunks/pages/auth-81bafc63716ad6ab.js",revision:"81bafc63716ad6ab"},{url:"/_next/static/chunks/pages/cartoons-59ccd2b16935b3b7.js",revision:"59ccd2b16935b3b7"},{url:"/_next/static/chunks/pages/favourites-eb214e0332fd27de.js",revision:"eb214e0332fd27de"},{url:"/_next/static/chunks/pages/film/%5Bid%5D-2bbc0da49953580c.js",revision:"2bbc0da49953580c"},{url:"/_next/static/chunks/pages/films-42e092e9eb0ec9f8.js",revision:"42e092e9eb0ec9f8"},{url:"/_next/static/chunks/pages/index-2570b10713e7c2e4.js",revision:"2570b10713e7c2e4"},{url:"/_next/static/chunks/pages/name/%5Bid%5D-7dc90a118b244470.js",revision:"7dc90a118b244470"},{url:"/_next/static/chunks/pages/room/%5Bid%5D-8ae6c6425735b1fa.js",revision:"8ae6c6425735b1fa"},{url:"/_next/static/chunks/pages/search/%5Bid%5D-9c899e7c0875dfb5.js",revision:"9c899e7c0875dfb5"},{url:"/_next/static/chunks/pages/series-99e2ab1adc53ea77.js",revision:"99e2ab1adc53ea77"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-33e6a3d20cc78d89.js",revision:"33e6a3d20cc78d89"},{url:"/_next/static/css/00e83a1548c6467d.css",revision:"00e83a1548c6467d"},{url:"/_next/static/css/06738a47c3c2f721.css",revision:"06738a47c3c2f721"},{url:"/_next/static/css/4f07f5eed61322ba.css",revision:"4f07f5eed61322ba"},{url:"/_next/static/css/84fd69725945bb29.css",revision:"84fd69725945bb29"},{url:"/_next/static/css/86e19008aa80148b.css",revision:"86e19008aa80148b"},{url:"/_next/static/css/872dccc4a37dcf64.css",revision:"872dccc4a37dcf64"},{url:"/_next/static/css/d1dfb69287501b74.css",revision:"d1dfb69287501b74"},{url:"/_next/static/css/e292eda33722b01d.css",revision:"e292eda33722b01d"},{url:"/_next/static/css/f271dc168f5dd01e.css",revision:"f271dc168f5dd01e"},{url:"/_next/static/css/f7269ea68fac0eaa.css",revision:"f7269ea68fac0eaa"},{url:"/_next/static/fTdqHrBp_TtH7Fog_YekP/_buildManifest.js",revision:"59d90c24634ca46a50dac52ae74665db"},{url:"/_next/static/fTdqHrBp_TtH7Fog_YekP/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/fTdqHrBp_TtH7Fog_YekP/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"34ee9ed99273b178cfaab99b1fbc4d6a"},{url:"/fonts/FiraSans-Bold.woff2",revision:"07b9daf36cfedbb07b47c1eed9921763"},{url:"/fonts/FiraSans-ExtraBold.woff2",revision:"84e01280cf056a4198d6c14b2f8db407"},{url:"/fonts/FiraSans-Light.woff2",revision:"c2ece2ce8559a936160dd98c0747c9b2"},{url:"/fonts/FiraSans-Medium.woff2",revision:"3392354b6a7a83ac879b2dd4e258e7e1"},{url:"/fonts/FiraSans-Regular.woff2",revision:"44af09a058cd81661fc93376ee5d8f34"},{url:"/fonts/FiraSans-SemiBold.woff2",revision:"0b6a215f82eda2e94a2734e24a3924df"},{url:"/icons/icon-128x128.png",revision:"ed71efe8c1e31e605897c4e0171f83f6"},{url:"/icons/icon-144x144.png",revision:"d9a869458a89e798459710e7a8028246"},{url:"/icons/icon-152x152.png",revision:"0dedc3071c2c73f0bda7b593f6558f15"},{url:"/icons/icon-192x192.png",revision:"0ce8446c4ac510e59c6d5ca0900db6fb"},{url:"/icons/icon-384x384.png",revision:"6057c09d0bbd6a8a4215d7ddfb051c6a"},{url:"/icons/icon-512x512.png",revision:"3650a08a216920abf8dd8d95cba53918"},{url:"/icons/icon-72x72.png",revision:"1deefc2ceb464b17a8627e38551cd2b3"},{url:"/icons/icon-96x96.png",revision:"d53dc757ae185536c1a84ff46eddd0d0"},{url:"/logo.svg",revision:"83db41f04e69d7689d1e6ca74e6fda64"},{url:"/manifest.json",revision:"ed085b71e6220b327b4b98a7268b67bb"},{url:"/player.js",revision:"d76e7a8bb60bf52dd7e2b6f2a5bb09a0"},{url:"/trailer.mp4",revision:"d6176db411467b57ee46707729152039"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
