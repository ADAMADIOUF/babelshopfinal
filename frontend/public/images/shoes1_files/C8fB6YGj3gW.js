;/*FB_PKG_DELIM*/

__d("PolarisClipsTabHelpers",["IGDSThemeConstantsHelpers","PolarisNavigationHelpers"],(function(a,b,c,d,e,f,g){"use strict";var h=12,i=60,j=32;function k(){var a;a=(a=(a=document.documentElement)==null?void 0:a.clientWidth)!=null?a:0;return a-d("PolarisNavigationHelpers").getNavBarDesktopWidth()-2*j-i-h}function l(){var a,b;a=(a=(a=document.documentElement)==null?void 0:a.clientHeight)!=null?a:0;b=(b=(b=document.documentElement)==null?void 0:b.clientWidth)!=null?b:0;var c=k();c=c*(16/9);var e=d("IGDSThemeConstantsHelpers").getNumericValue("nav-narrow-screen-min"),f=d("IGDSThemeConstantsHelpers").getNumericValue("revamp-nav-bottom-toolbar-height");b=b<e?a*.9-f:a*.9;c>b&&(c=b);return c}var m=1200;function a(a){if(a==null){var b=l();return Math.min(b,m)}b=a.getBoundingClientRect().top;a=32;return Math.min(b-a,m)}var n={container:{display:"x78zum5",maxHeight:"xedcshv",$$css:!0},ufi:{justifyContent:"x13a6bvl",marginStart:"x16n37ib",width:"x1247r65",$$css:!0}};function b(){return{container:n.container,ufi:n.ufi}}c=1500;g.getReelMediaContainerHeight=l;g.getMaxPopoverHeight=a;g.getClipsContainerStyles=b;g.WINDOW_RESIZE_THROTTLE=c}),98);
__d("PolarisAdCTAViewabilityAction",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){return function(c){c=c.state;switch(c){case"entered":case"updated":a||b(!0);break;case"exited":b(!1);break;default:break}}}f.makeAdCTAViewabilityAction=a}),66);
__d("PolarisInstagramAdImpressionFalcoEventImpl",["PolarisFalcoLogger"],(function(a,b,c,d,e,f,g){"use strict";var h={falco:!0,pigeon:!1};a={log:function(a){d("PolarisFalcoLogger").FalcoLogger.log("instagram_ad_impression",a(),{},h)}};b=a;g["default"]=b}),98);
__d("PolarisInstagramAdImpressionFalcoEvent",["InstagramAdImpressionFalcoEvent","PolarisFalcoLoggingMode","PolarisInstagramAdImpressionFalcoEventImpl","PolarisUA","qex"],(function(a,b,c,d,e,f,g){"use strict";a={log:function(a){var b=c("PolarisFalcoLoggingMode").DISTILLERY;if(!d("PolarisUA").isWindowsPWA()){var e;b=(e=c("qex")._("78"))!=null?e:c("PolarisFalcoLoggingMode").DISTILLERY}b===c("PolarisFalcoLoggingMode").NORMAL?c("InstagramAdImpressionFalcoEvent").log(a):b===c("PolarisFalcoLoggingMode").IMMEDIATELY?c("InstagramAdImpressionFalcoEvent").logImmediately(a):b===c("PolarisFalcoLoggingMode").CRITICAL?c("InstagramAdImpressionFalcoEvent").logCritical(a):c("PolarisInstagramAdImpressionFalcoEventImpl").log(a)}};b=a;g["default"]=b}),98);
__d("PolarisInstagramAdSubImpressionFalcoEventImpl",["PolarisFalcoLogger"],(function(a,b,c,d,e,f,g){"use strict";var h={falco:!0,pigeon:!1};a={log:function(a){d("PolarisFalcoLogger").FalcoLogger.log("instagram_ad_sub_impression",a(),{},h)}};b=a;g["default"]=b}),98);
__d("PolarisInstagramAdSubImpressionFalcoEvent",["InstagramAdSubImpressionFalcoEvent","PolarisFalcoLoggingMode","PolarisInstagramAdSubImpressionFalcoEventImpl","PolarisUA","qex"],(function(a,b,c,d,e,f,g){"use strict";a={log:function(a){var b=c("PolarisFalcoLoggingMode").DISTILLERY;if(!d("PolarisUA").isWindowsPWA()){var e;b=(e=c("qex")._("78"))!=null?e:c("PolarisFalcoLoggingMode").DISTILLERY}b===c("PolarisFalcoLoggingMode").NORMAL?c("InstagramAdSubImpressionFalcoEvent").log(a):b===c("PolarisFalcoLoggingMode").IMMEDIATELY?c("InstagramAdSubImpressionFalcoEvent").logImmediately(a):b===c("PolarisFalcoLoggingMode").CRITICAL?c("InstagramAdSubImpressionFalcoEvent").logCritical(a):c("PolarisInstagramAdSubImpressionFalcoEventImpl").log(a)}};b=a;g["default"]=b}),98);
__d("getPolarisODSKeyWithSurfaceDimension",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){if((b==null?void 0:b.isMobile)===!0)return a+".msite";else return a}f["default"]=a}),66);
__d("PolarisAdImpressionAction",["PolarisContainerModuleUtils","PolarisFalcoBladeRunnerExperiment","PolarisInstagramAdImpressionFalcoEvent","PolarisInstagramAdSubImpressionFalcoEvent","PolarisLogger","PolarisNavChain","PolarisODS","PolarisUA","PolarisViewpointActionUtils","cometGHLContentDisplayCheck","cr:6627","getPolarisODSKeyWithSurfaceDimension","memoizeStringOnly","qex","setTimeout"],(function(a,b,c,d,e,f,g){"use strict";var h=c("qex")._("1229"),i=c("qex")._("586")===!0?"test":"control",j=2e3,k=5e3,l=6e4,m=c("memoizeStringOnly")(function(a){return new Map()}),n=new Set();function o(a,b,e,f,g,h){g===void 0&&(g=l);return function(i){var l=m(a||"");if(i.state!=="entered")return;if(n.has(b))return;n.add(b);var o=l.get(b),p=i.snapshotTime,q=function(a){var b=a.isSubImpression;return c("setTimeout")(function(){var a=!c("cometGHLContentDisplayCheck")(i.element);a?b?(c("PolarisODS").incr_CAREFUL_WHEN_USE_DYNAMIC_KEY(c("getPolarisODSKeyWithSurfaceDimension")("web.ads.feed.sub_impression.hidden.delayed",{isMobile:h})),d("PolarisLogger").logAction("adSubImpressionHiddenDelayed")):(c("PolarisODS").incr_CAREFUL_WHEN_USE_DYNAMIC_KEY(c("getPolarisODSKeyWithSurfaceDimension")("web.ads.feed.impression.hidden.delayed",{isMobile:h})),d("PolarisLogger").logAction("adImpressionHiddenDelayed")):c("PolarisODS").incr_CAREFUL_WHEN_USE_DYNAMIC_KEY(b?"web.ads.feed.sub_impression.delayed":"web.ads.feed.impression.delayed")},k-j)};c("setTimeout")(function(){var a=c("cometGHLContentDisplayCheck")(i.element);o==null?a?(e(),l.set(b,i.snapshotTime),q({isSubImpression:!1})):(c("PolarisODS").incr_CAREFUL_WHEN_USE_DYNAMIC_KEY(c("getPolarisODSKeyWithSurfaceDimension")("web.ads.feed.impression.hidden",{isMobile:h})),d("PolarisLogger").logAction("adImpressionHidden")):o!=null&&p-o>=g&&(a?(f(),l.set(b,i.snapshotTime),q({isSubImpression:!0})):(c("PolarisODS").incr_CAREFUL_WHEN_USE_DYNAMIC_KEY(c("getPolarisODSKeyWithSurfaceDimension")("web.ads.feed.sub_impression.hidden",{isMobile:h})),d("PolarisLogger").logAction("adSubImpressionHidden")));n["delete"](b)},j)}}function a(a,e,f,g){var j,k=d("PolarisViewpointActionUtils").getMPKForFeedMedia(a)||"",m=d("PolarisUA").isMobile(),n=babelHelpers["extends"]({m_pk:k,nav_chain:(j=c("PolarisNavChain").getInstance())==null?void 0:j.getNavChainForSend(),pigeon_reserved_keyword_module:d("PolarisContainerModuleUtils").getContainerModule(e)},f),p=[JSON.stringify({is_sponsored:!0,m_pk:k,tracking_token:f.tracking_token})];j=function(){g&&c("PolarisODS").incr("web.ads.feed.impression.viewpoint"),a.isVideo===!0&&m&&c("PolarisODS").incr("web.ads.msite.feed.video_ads.impression"),c("PolarisODS").incr("web.ads.feed.impression"),c("PolarisInstagramAdImpressionFalcoEvent").log(function(){return n}),h===!0&&b("cr:6627")!=null&&b("cr:6627").log(function(){return{event:"impression_client",qe_infos:["ig_web_h1_2023_feed:has_relay_feed:"+i],tracking:p}}),d("PolarisFalcoBladeRunnerExperiment").logTestFalco()};f=function(){c("PolarisODS").incr("web.ads.feed.sub_impression"),c("PolarisInstagramAdSubImpressionFalcoEvent").log(function(){return n}),h===!0&&b("cr:6627")!=null&&b("cr:6627").log(function(){return{event:"sub_impression_client",qe_infos:["ig_web_h1_2023_feed:has_relay_feed:"+i],tracking:p}})};return o(e,k,j,f,l,m)}function e(a){return function(b){var d;if(b.state!=="entered")return;var e=m("");d=((d=a)!=null?d:"")+".cta_impression";var f=e.get(d);f==null&&(c("PolarisODS").incr("web.ads.feed.cta_impression"),e.set(d,b.snapshotTime))}}g.makePostAdImpressionAction=a;g.makeAdCTAImpressionAction=e}),98);
__d("useDebounced",["debounce","react"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useEffect,i=b.useMemo,j=b.useRef;function a(a,b,d){b===void 0&&(b=100);d===void 0&&(d=!1);var e=j(a);h(function(){e.current=a},[a]);var f=i(function(){return c("debounce")(function(){return e.current.apply(e,arguments)},b,null,!1,d)},[b,d]);h(function(){return f.reset},[f]);return f}g["default"]=a}),98);
__d("usePolarisSponsoredPostCTAFooterDominantColor",["DateConsts","PolarisAdCTAViewabilityAction","PolarisAdImpressionAction","PolarisViewpointReact.react","gkx","polarisAdsSelectors","qex","react","useDebounced"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useEffect,i=b.useRef,j=b.useState,k=4*d("DateConsts").MS_PER_SEC,l=5*d("DateConsts").MS_PER_SEC,m=3*d("DateConsts").MS_PER_SEC;function n(){var a=c("qex")._("17");switch(a){case 1:return l;case 2:return m;case 0:default:return k}}function o(){return c("gkx")("3534")?n():k}function a(a){var b=a.isMediaRendered,e=a.mediaId;a=a.post;var f=d("polarisAdsSelectors").useFeedAdInfo(a.id,function(a){return a}),g=j(null),k=g[0],l=g[1];g=j(!1);var m=g[0];g=g[1];var n=i(!1),p=a.isVideo,q=c("useDebounced")(l,o());h(function(){var a;if(e==null||!b&&p===!1)return;a=f==null?void 0:(a=f.ctaItems)==null?void 0:a.get(e);if(a==null)return;if(m){if(q.isPending())return;n.current===!1?(n.current=!0,q(a.ctaDominantColor)):l(a.ctaDominantColor);return}m||(n.current=!1,q.isPending()?q.reset():l(null))},[m,q,e,f==null?void 0:f.ctaItems,b,p]);g=d("PolarisViewpointReact.react").useViewpoint({action:[d("PolarisAdCTAViewabilityAction").makeAdCTAViewabilityAction(m,g),d("PolarisAdImpressionAction").makeAdCTAImpressionAction(e)],id:a.id});return{ctaDominantColor:k,ctaFooterViewpointRef:g}}g["default"]=a}),98);
__d("PolarisMaybeInstantPostModal.react",["cr:5667"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=b("cr:5667")}),98);
__d("PolarisMediaBrowserPostModal.react",["invariant","PolarisIsLoggedInDesktop","PolarisMaybeInstantPostModal.react","PolarisPost.react","PolarisPostVariants","PolarisReactRedux","PolarisRoutes","isStringNullOrEmpty","nullthrows","polarisPostSelectors","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("react").useEffect;function a(a){var b=a.analyticsContext,e=a.combinedPosts,f=a.mediaLinkBuilder,g=a.modalEntryPath,k=a.onClose,l=a.onImpression,m=a.onOpen,n=a.postId,o=d("PolarisReactRedux").useSelector(function(a){return d("polarisPostSelectors").getDeletedIds(a)});a=e.map(function(a){return a.id});var p=d("PolarisReactRedux").useSelector(function(a){return d("polarisPostSelectors").getPostOrNullById(a,n)});j(function(){p==null&&(o.includes(n)||h(0,51476),k())},[o,k,p,n]);return p==null?null:i.jsx(c("PolarisMaybeInstantPostModal.react"),{analyticsContext:b,combinedPostIds:a,dimensions:p.dimensions,mediaLinkBuilder:f,modalEntryPath:c("isStringNullOrEmpty")(g)?d("PolarisRoutes").FEED_PATH:g,onClose:k,onOpen:m,postCode:c("nullthrows")(p.code),postId:n,children:i.jsx(c("PolarisPost.react"),{analyticsContext:b+"Modal",autoplay:d("PolarisIsLoggedInDesktop").isLoggedInDesktop(),id:n,isVisible:!0,onImpression:l,testid:void 0,variant:d("PolarisPostVariants").VARIANTS.flexible,visiblePosition:0})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);