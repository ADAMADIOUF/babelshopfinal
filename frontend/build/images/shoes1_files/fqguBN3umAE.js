;/*FB_PKG_DELIM*/

__d("PolarisAppInstallConstants",["keyMirror"],(function(a,b,c,d,e,f,g){"use strict";a=c("keyMirror")({"default":null,instagramlitecarbon:null,openinapp:null});b=["postPage","profilePage","tagPage","locationPage","feedPage","exploreLandingPage","ActivityFeedPage","shoppingSERP"];g.APP_BANNER_VARIANTS=a;g.ALLOWLISTED_PAGE_IDS=b}),98);
__d("PolarisTOSStrings",["fbt","PolarisConfig"],(function(a,b,c,d,e,f,g,h){"use strict";var i=h._("__JHASH__aH6OEszbUCA__JHASH__"),j=h._("__JHASH__UYEpdmxOmGH__JHASH__");function a(){return d("PolarisConfig").isGermanyCountryCode()?j:i}b=h._("__JHASH__lYyQLqXtPs6__JHASH__");g.getTOSString=a;g.NETZDG_URHDAG_RANKING_OF_CONTENT_FBT=b}),98);
__d("PolarisRefreshedShellContent.react",["PolarisAppInstallConstants","PolarisConfig","PolarisDismissEntry","PolarisErrorBoundary.react","PolarisFooter.react","PolarisUA","cr:7194","polarisIsUserLoggedIn","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={root:{display:"x78zum5",flexDirection:"xdt5ytf",flexGrow:"x1iyjqo2",order:"x182iqb8",$$css:!0},rootDark:{backgroundColor:"xnz67gz",$$css:!0},rootLight:{backgroundColor:"xvbhtw8",$$css:!0},rootLoggedInBanner:{marginBottom:"x14ler8",$$css:!0},rootPositionRelative:{position:"x1n2onr6",$$css:!0}};function a(a){var e=a.appBannerHeight,f=a.backgroundColor,g=a.children,j=a.footerVariant,k=a.pageIdentifier;a=a.pushFooterOutsideViewport;var l=d("PolarisUA").isMobile()&&d("PolarisConfig").probablyHasApp()&&d("polarisIsUserLoggedIn").isUserLoggedIn()&&d("PolarisAppInstallConstants").ALLOWLISTED_PAGE_IDS.includes(k)&&!d("PolarisDismissEntry").isDismissed(d("PolarisDismissEntry").USE_THE_APP_LI_BANNER);l=l&&(k==="ActivityFeedPage"||k==="postPage");return h.jsx("main",{className:c("stylex")(i.root,d("PolarisUA").isMobile()&&i.rootPositionRelative,f==="ig-primary-background"&&i.rootLight,f==="ig-secondary-background"&&i.rootDark,l&&i.rootLoggedInBanner),role:"main",style:a===!0&&j!==c("PolarisFooter.react").VARIANTS.none?{minHeight:window.innerHeight-e}:void 0,children:g!=null&&h.jsx(c("PolarisErrorBoundary.react"),{errorRenderer:function(a){return h.jsx(b("cr:7194"),{error:a})},children:g})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisAppStoreLauncher.react",["PolarisODS","PolarisUA","polarisGetInstallAppHref","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");var h="launch_app_store",i="instagram_carbon",j="utm_campaign",k="utm_medium";b=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var e=b.prototype;e.componentDidMount=function(){var a=new URLSearchParams(location.search);if(a.get(h)){var b=new URL(location.href),e=a.get(i)==="true";b.searchParams["delete"](h);b.searchParams["delete"](i);history.replaceState({},document.title,b.toString());if(!d("PolarisUA").isDesktop())if(e){c("PolarisODS").incr("web.logging.preload_ods.iglite_open_app_store");c("PolarisODS").incr("web.logging.preload_ods.polaris_iglite_open_app_store");b=a.get(j);e=a.get(k);location.href=d("polarisGetInstallAppHref").getInstallIGLiteCarbonAppHref(b!=null&&b!==""?b:"instagramlitecarbon",e!=null?e:"")}else location.href=d("polarisGetInstallAppHref").getInstallAppHref()}};e.render=function(){return null};return b}(a.PureComponent);g["default"]=b}),98);
__d("PolarisAsyncLiveCreationModal",["cr:2418"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=b("cr:2418")}),98);
__d("PolarisInstagramWebOspFalcoEvent",["PolarisFalcoLogger"],(function(a,b,c,d,e,f,g){"use strict";var h={falco:!0,pigeon:!1};a={log:function(a){d("PolarisFalcoLogger").FalcoLogger.log("instagram_web_osp_event",a(),{},h)}};b=a;g["default"]=b}),98);
__d("PolarisHandleOpenInApp",["PolarisConfig","PolarisLogger","PolarisODS","PolarisOpenInApp"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,e){a===void 0&&(a="openInAppClick");switch(a){case"openInAppClick":d("PolarisLogger").logAction("openInAppClick",{platform:d("PolarisConfig").getAppPlatform(),source:b});c("PolarisODS").incr("web.openinapp.click");break;case"openInAppRedirect":d("PolarisLogger").logAction("openInAppRedirect",{platform:d("PolarisConfig").getAppPlatform(),source:b});c("PolarisODS").incr("web.openinapp.redirect");break;default:break}d("PolarisOpenInApp").openInApp(e.androidAppLink,e.iOSAppLink,e.originalPath)}g.handleOpenInApp=a}),98);
__d("PolarisLoggedInAppBanner.react",["cx","IGDSBox.react","IGDSXPanoFilledIcon","PolarisAppInstallConstants","PolarisAppInstallStrings","PolarisConfig","PolarisDismissEntry","PolarisGenericStrings","PolarisHandleOpenInApp","PolarisIGCoreButton","PolarisIGCoreSVGIconButton","PolarisIgLiteCarbonUpsellsUtils","PolarisLinkBuilder","PolarisLoggedInCtaLogger","PolarisLogger","PolarisNavigationLayoutContext","PolarisNavigationUtils","PolarisODS","PolarisOpenInApp","PolarisSEOEventsLogger","PolarisUA","browserHistory","gkx","polarisIsUserLoggedIn","qex","react","usePolarisGetDeepLink"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useCallback,k=b.useContext,l=b.useEffect,m=b.useState,n="logged_in_banner";function a(a){var b,e=m(!1),f=e[0],g=e[1],h=a.pageID,o=d("PolarisIgLiteCarbonUpsellsUtils").isIgLiteCarbonUpsellsEligible();e=m(d("PolarisDismissEntry").isDismissed(d("PolarisDismissEntry").USE_THE_APP_LI_BANNER));var p=e[0],q=e[1];a=k(c("PolarisNavigationLayoutContext"));e=a.navigationPosition;var r=j(function(){return!d("polarisIsUserLoggedIn").isUserLoggedIn()||!d("PolarisUA").isMobile()||!d("PolarisAppInstallConstants").ALLOWLISTED_PAGE_IDS.includes(h)||p},[p,h]);l(function(){!r()&&!f&&(d("PolarisLogger").logAction("appBannerImpression",{platform:d("PolarisConfig").getAppPlatform(),source:h,type:n}),d("PolarisLoggedInCtaLogger").logLoggedInCtaEvent({containermodule:h,ctaType:"app_banner",ctaVersion:o?"instagramlitecarbon":"use_the_app",eventName:"impression"}),g(!0))},[o,r,f,h]);var s=c("usePolarisGetDeepLink")();a=j(function(a){a.preventDefault();a=s();var b=a.android,e=a.ios;a=a.originalPath;if(d("browserHistory").isShoppingSERP(d("browserHistory").browserHistory)){d("PolarisSEOEventsLogger").logSEOEvent({containermodule:h,eventName:"shoppingSearchSEOOpenTheAppClick"});var f={platform:d("PolarisConfig").getAppPlatform(),source:h,type:n};d("PolarisLogger").logAction("shoppingSearchSEOWebOpenTheAppClick",f);c("PolarisODS").incr("web.app.banner.click");d("PolarisLoggedInCtaLogger").logLoggedInCtaEvent({containermodule:h,ctaType:"app_banner",ctaVersion:o?"instagramlitecarbon":"use_the_app",eventName:"click"});f={androidAppLink:b,iOSAppLink:e,originalPath:null};d("PolarisHandleOpenInApp").handleOpenInApp("openInAppRedirect","shoppingSERP",f)}d("PolarisLogger").logAction("appBannerClick",{platform:d("PolarisConfig").getAppPlatform(),source:h,type:n});d("PolarisLoggedInCtaLogger").logLoggedInCtaEvent({containermodule:h,ctaType:"app_banner",ctaVersion:o?"instagramlitecarbon":"use_the_app",eventName:"click"});d("PolarisUA").isInAppBrowser()&&c("gkx")("4912")&&a!=null?d("PolarisNavigationUtils").openURLWithFullPageReload("instagram://"+d("PolarisLinkBuilder").appendDeeplinkQueryParams(a)):d("PolarisOpenInApp").openInApp(b,e,a,null,o)},[s,o,h]);var t=j(function(a){a.preventDefault(),d("PolarisLogger").logAction("appBannerDismiss",{platform:d("PolarisConfig").getAppPlatform(),source:h,type:n}),d("PolarisLoggedInCtaLogger").logLoggedInCtaEvent({containermodule:h,ctaType:"app_banner",ctaVersion:o?"instagramlitecarbon":"use_the_app",eventName:"dismiss"}),q(!0),d("PolarisDismissEntry").setDismissEntry(d("PolarisDismissEntry").USE_THE_APP_LI_BANNER)},[o,h]);b=(b=c("qex")._("554"))!=null?b:!1;return r()?null:i.jsx("div",{className:"_acc8"+(e==="bottom"?" _abpk":"")+(e!=="bottom"?" _ag6v":""),children:i.jsxs(c("IGDSBox.react"),{alignItems:"center",justifyContent:"center",paddingY:2,position:"relative",width:"100%",children:[i.jsx(c("IGDSBox.react"),{padding:1,position:"absolute",right:!0,top:!0,children:b?null:i.jsx(c("PolarisIGCoreSVGIconButton"),{onClick:t,children:i.jsx(c("IGDSXPanoFilledIcon"),{alt:d("PolarisGenericStrings").CLOSE_TEXT,color:"ig-secondary-text",size:12})})}),i.jsx(c("IGDSBox.react"),{paddingX:6,position:"relative",children:i.jsx(c("PolarisIGCoreButton"),{borderless:!0,onClick:a,children:o?d("PolarisAppInstallStrings").USE_INSTAGRAM_LITE_CARBON_CTA:d("browserHistory").isShoppingSERP(d("browserHistory").browserHistory)?d("PolarisAppInstallStrings").SEE_MORE_CTA:d("PolarisAppInstallStrings").NEW_CTA_USE_THE_APP})})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisLoggedOutUtils",["PolarisWebStorage"],(function(a,b,c,d,e,f,g){"use strict";var h="loggedOutCTAIsShown",i="1";function a(){if(c("PolarisWebStorage").isSessionStorageSupported()){var a=c("PolarisWebStorage").getSessionStorage();if(a!=null&&a.getItem(h)===i)return!0}return!1}var j=["businessCategoryPage","postPage","profilePage","tagPage","locationPage","httpErrorPage","LocationsDirectoryCityPage","LocationsDirectoryCountryPage","LocationsDirectoryLandingPage","ProfilesDirectoryLandingPage"];function b(a,b){return a?!1:j.includes(b)}g.LOGGED_OUT_CTA_SESSION_KEY=h;g.LOGGED_OUT_CTA_SESSION_VALUE=i;g.isLoggedOutCTADismissed=a;g.hasNewLoggedOutCTA=b}),98);
__d("PolarisShellFooter.react",["PolarisConfig","PolarisFooter.react","PolarisPanavisionQEHelpers","PolarisSizing","PolarisUA","react","stylex","usePolarisIsOnAdsActivityPage","usePolarisIsOnFeedPage"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={extraTallFooter:{marginTop:"xqufjia",$$css:!0},footerDark:{backgroundColor:"xnz67gz",$$css:!0},footerLight:{backgroundColor:"xvbhtw8",$$css:!0},footerRedesign:{backgroundColor:"xnz67gz",paddingEnd:"x1pi30zi",paddingStart:"x1swvt13",$$css:!0},footerRedesignWithPrimaryBackground:{backgroundColor:"xvbhtw8",paddingEnd:"x1pi30zi",paddingStart:"x1swvt13",$$css:!0},root:{alignItems:"x1qjc9v5",borderTop:"x6umtig",borderEnd:"x1b1mbwd",borderBottom:"xaqea5y",borderStart:"xav7gou",boxSizing:"x9f619",display:"x78zum5",flexDirection:"xdt5ytf",flexShrink:"x2lah0s",fontSize:"xk390pu",marginTop:"xdj266r",marginEnd:"x11i5rnm",marginBottom:"xat24cr",marginStart:"x1mh8g0r",order:"x1h3rv7z",paddingTop:"xexx8yu",paddingEnd:"xc73u3c",paddingBottom:"x18d9i69",paddingStart:"x5ib6vp",position:"x1n2onr6",verticalAlign:"x11njtxf",$$css:!0}};function j(a,b){var c=a.props.style;return h.cloneElement(a,babelHelpers["extends"]({},a.props,{style:babelHelpers["extends"]({},c,b)}))}function a(a){var b=a.backgroundColor,e=a.footerElement,f=a.footerVariant;f=f===void 0?"centered":f;var g=a.hasPersistentCTA;g=g===void 0?!1:g;var k=a.includeLanguageAndCopyrightInFooter,l=a.isNewMobileLoggedOutCTA,m=a.maxWidth;m=m===void 0?d("PolarisSizing").SITE_WIDTHS.wide:m;var n=a.showSuggestedProfiles;a=a.targetUsername;var o=c("usePolarisIsOnFeedPage")(),p=c("usePolarisIsOnAdsActivityPage")();o=(o||p)&&d("PolarisUA").isDesktop();p=o&&d("PolarisPanavisionQEHelpers").hasFamiliarFeed();o=o&&d("PolarisPanavisionQEHelpers").hasPolarisFeedRevamp();if(e===null)return null;e?e=j(e,{maxWidth:m}):e=h.jsx(c("PolarisFooter.react"),{includeLanguageAndCopyright:k,showSuggestedProfiles:n,style:{maxWidth:d("PolarisSizing").SITE_WIDTHS.footer},targetUsername:a,variant:f});m=0;k=!d("PolarisConfig").isLoggedIn()&&d("PolarisUA").isMobile()&&l;(k||g)&&(m+=55);return h.jsx("footer",{className:c("stylex")(i.root,f===c("PolarisFooter.react").VARIANTS.centered&&!(p||o)&&i.footerRedesign,f===c("PolarisFooter.react").VARIANTS.centered&&p&&i.footerRedesignWithPrimaryBackground,b==="ig-primary-background"&&i.footerLight,b==="ig-secondary-background"&&i.footerDark,l&&i.extraTallFooter),role:"contentinfo",style:m!==0?{paddingBottom:m}:void 0,children:e})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisShellHelpers",["PolarisHoldoutChecks"],(function(a,b,c,d,e,f,g){"use strict";function a(){return c("PolarisHoldoutChecks").H12023.rollout()}g.getIsInPrimaryBackgroundRollout=a}),98);
__d("PolarisShellMobileHeader.react",["cx","PolarisTopNavigation.react","react","useMatchMedia"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.mobileHeader;a=a.viewer;var d=c("useMatchMedia")("(max-width: 767px)");return!d||b==null||!a?null:i.jsx("nav",{className:"_accy",children:i.jsx(c("PolarisTopNavigation.react"),{header:b})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisSupervisionModal.react",["fbt","IGCoreModal","IGDSBox.react","IGDSButton.react","IGDSDivider.react","IGDSText.react","PolarisAssetManagerGlyphMapping","PolarisExternalLink.react","PolarisGenericStrings","PolarisIGCoreIcon","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){a=a.onClose;return i.jsx(c("IGCoreModal"),{onClose:a,children:i.jsxs(c("IGDSBox.react"),{alignItems:"center",marginTop:8,position:"relative",children:[i.jsx(c("PolarisIGCoreIcon"),{alt:h._("__JHASH__c9u_8Cwt3V7__JHASH__"),icon:d("PolarisAssetManagerGlyphMapping").ICONS.APP_ICON_45}),i.jsx(c("IGDSBox.react"),{marginTop:4,paddingX:6,position:"relative",children:i.jsx(c("IGDSText.react").Headline2,{children:h._("__JHASH__OSO4Oro-A46__JHASH__")})}),i.jsx(c("IGDSBox.react"),{marginBottom:8,marginTop:4,paddingX:6,position:"relative",children:i.jsxs(c("IGDSText.react").Body,{color:"secondaryText",children:[h._("__JHASH__mjeEERwFfAE__JHASH__",[h._param("Learn more",i.jsx(c("PolarisExternalLink.react"),{href:"https://help.instagram.com/155940534568753/",children:h._("__JHASH__S08E9ZYDDAB__JHASH__")}))])," "]})}),i.jsx(c("IGDSDivider.react"),{}),i.jsx(c("IGDSBox.react"),{alignItems:"center",color:"primaryBackground",direction:"column",justifyContent:"center",padding:4,position:"relative",width:"100%",children:i.jsx(c("IGDSButton.react"),{display:"block",fullWidth:!0,label:d("PolarisGenericStrings").OK_TEXT,onClick:a,size:"large"})})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisShell.next.react",["PolarisAppStoreLauncher.react","PolarisAsyncCreationModal","PolarisAsyncLiveCreationModal","PolarisAsyncSwitchAccountsModal","PolarisBaseShell.react","PolarisCallGatingHelpers","PolarisConfig","PolarisFeedPageConstants","PolarisFooter.react","PolarisHasFeedCreation","PolarisInstagramWebOspFalcoEvent","PolarisLoggedInAppBanner.react","PolarisLoggedOutUtils","PolarisNavigationLayoutContext","PolarisPageLayoutHandlerContext","PolarisReactRedux","PolarisRefreshedShellContent.react","PolarisScrollPositionManager.react","PolarisSentryFeedbackDialog.react","PolarisShellFooter.react","PolarisShellHelpers","PolarisShellMobileHeader.react","PolarisSizing","PolarisSupervisionModal.react","PolarisToastWrapper.react","PolarisUA","cr:1005","cr:2025","cr:2648","cr:3431","cr:4472","cr:7198","cr:7199","gkx","justknobx","polarisIsUserLoggedIn","polarisNavigationSelectors","polarisUserSelectors","qex","react","stylex","usePolarisIsOnExplorePage"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");e=d("react");var i=e.useContext,j=e.useLayoutEffect,k=e.useRef,l=e.useState,m=b("cr:2648")&&b("cr:7199"),n={desktopRoot:{minHeight:"xg6iff7",$$css:!0},mobileRoot:{minHeight:"x1wjobn4",$$css:!0},mobileToast:{marginBottom:"xx7atzb",$$css:!0},navPlaceholder:{backgroundColor:"xvbhtw8",height:"xz2kmyn",order:"x1h3rv7z",position:"x1n2onr6",width:"xh8yej3",$$css:!0}};function o(a){var c=a.defaultNavigationComponent,e=a.hasPageLayoutHandler,f=a.hideNavigation;a=a.hideNavQueryParam;if(f===!0||a)return null;return b("cr:3431")!==null?e===!0?d("PolarisUA").isMobile()?h.jsx("div",{className:"xvbhtw8 xz2kmyn x1h3rv7z x1n2onr6 xh8yej3"}):null:h.jsx(b("cr:3431"),{}):c}o.displayName=o.name+" [from "+f.id+"]";function a(a){var e=a.backgroundColor;e=e===void 0?d("PolarisUA").isMobile()?"ig-primary-background":"ig-secondary-background":e;var f=a.children,g=a.hideNavigation,p=a.footerElement,q=a.footerVariant;q=q===void 0?c("PolarisFooter.react").VARIANTS.centered:q;var r=a.includeLanguageAndCopyrightInFooter,s=a.maxWidth;s=s===void 0?d("PolarisSizing").SITE_WIDTHS.wide:s;var t=a.mobileHeader,u=a.pageIdentifier,v=a.pushFooterOutsideViewport;v=v===void 0?!1:v;var w=a.showMobileHeader,x=a.showSuggestedProfiles,y=a.targetUsername,z=a.forceShowFooter;z=z===void 0?!1:z;a=a.floatingCtaButton;a=a===void 0?null:a;var A=d("PolarisReactRedux").useSelector(d("polarisUserSelectors").getViewer),B=d("PolarisReactRedux").useSelector(function(a){return a.displayProperties.viewportWidth>=d("PolarisFeedPageConstants").FEED_SIDEBAR_THRESHOLD_MIN}),C=d("PolarisReactRedux").useSelector(d("polarisNavigationSelectors").getHideNavQueryParam),D=d("PolarisReactRedux").useSelector(d("polarisNavigationSelectors").getSupervisionModalQueryParam),E=d("PolarisReactRedux").useSelector(function(a){return a.navigation}),F=E.isAccountSwitcherOpen,G=E.isFeedCreationModalOpen,H=E.isLiveCreationModalOpen;E=E.isLoggedOutIntentDialogOpen;var I=d("PolarisReactRedux").useSelector(function(a){return!!(a==null?void 0:(a=a.unsupportedBrowserToast)==null?void 0:a.show)}),J=l(0),K=J[0],L=J[1];J=l(!1);var M=J[0],N=J[1],O=k(null);J=function(){return d("PolarisUA").isMobile()&&d("PolarisLoggedOutUtils").hasNewLoggedOutCTA(A,u)};var P=function(){N(!1)};j(function(){O.current!=null&&L(O.current.getBoundingClientRect().height),D===!0&&(A==null?void 0:A.isSupervisionEnabled)===!0&&N(!0)},[D,A]);var Q=i(c("PolarisNavigationLayoutContext"));Q=Q.navigationPosition;var R=c("usePolarisIsOnExplorePage")();w=(g!==!0||w===!0)&&(d("PolarisUA").isMobile()||!R)&&Q==="bottom";c("justknobx")._("82")&&c("PolarisInstagramWebOspFalcoEvent").log(function(){return{frontend_env:d("PolarisConfig").getFrontendEnv(),rollout_hash:d("PolarisConfig").getRolloutHash()}});R=i(c("PolarisPageLayoutHandlerContext"));Q=R.hasPageLayoutHandler;R=null;!d("PolarisUA").isMobile()&&G&&d("PolarisHasFeedCreation").hasFeedCreation()&&(R=h.jsx(c("PolarisAsyncCreationModal"),{}));G=!d("PolarisUA").isMobile()&&H&&c("qex")._("290")?h.jsx(c("PolarisAsyncLiveCreationModal"),{}):null;H=M?h.jsx(c("PolarisSupervisionModal.react"),{onClose:P}):null;M=d("PolarisShellHelpers").getIsInPrimaryBackgroundRollout()?"ig-primary-background":e;return h.jsxs(c("PolarisBaseShell.react"),{showToast:I,xstyle:[!d("PolarisUA").isMobile()&&n.desktopRoot,d("PolarisUA").isMobile()&&n.mobileRoot],children:[h.jsx(c("PolarisScrollPositionManager.react"),{}),h.jsx(c("PolarisRefreshedShellContent.react"),{appBannerHeight:K,backgroundColor:M,footerVariant:q,pageIdentifier:u,pushFooterOutsideViewport:v,children:f}),w?h.jsx("div",{style:{order:0},children:h.jsx(c("PolarisShellMobileHeader.react"),{mobileHeader:t,viewer:A})}):null,h.jsx(o,{defaultNavigationComponent:b("cr:7198")==null?null:c("gkx")("3855")?h.jsx(b("cr:7198"),{hasFeedSidebar:B,pageIdentifier:u,viewer:A}):h.jsx("div",{style:{order:d("PolarisUA").isMobile()?5:0},children:h.jsx(b("cr:7198"),{hasFeedSidebar:B,pageIdentifier:u,viewer:A})}),hasPageLayoutHandler:Q,hideNavigation:g,hideNavQueryParam:C}),z||g===!0||!w||J()?h.jsx("div",{style:{order:5},children:h.jsx(c("PolarisShellFooter.react"),{backgroundColor:M,footerElement:p,footerVariant:q,hasPersistentCTA:a!=null,includeLanguageAndCopyrightInFooter:r,isNewMobileLoggedOutCTA:J(),maxWidth:s,pageIdentifier:u,showSuggestedProfiles:x,targetUsername:y})}):null,F&&d("polarisIsUserLoggedIn").isUserLoggedIn()&&h.jsx("div",{children:h.jsx(c("PolarisAsyncSwitchAccountsModal"),{})}),m!=null&&d("PolarisCallGatingHelpers").isIncomingCallEnabled()?b("cr:1005")!=null?h.jsx(b("cr:1005"),{children:h.jsx(m,{})}):h.jsx(m,{}):null,R,G,H,h.jsx(c("PolarisToastWrapper.react"),{className:c("stylex")(w&&!!A&&n.mobileToast)}),h.jsx(c("PolarisSentryFeedbackDialog.react"),{}),E===!0&&b("cr:4472")!=null&&h.jsx(b("cr:4472"),{}),d("PolarisConfig").probablyHasApp()&&!C&&h.jsx("div",{children:h.jsx(c("PolarisLoggedInAppBanner.react"),{pageID:u})}),h.jsx(c("PolarisAppStoreLauncher.react"),{}),a,b("cr:2025")!=null?h.jsx(b("cr:2025"),{}):null]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisLiveCreationModalLazy_DEPRECATED",["IGCoreModal","IGDSBox.react","IGDSSpinner.react","JSResourceForInteraction","PolarisAsyncComponent","PolarisSizing","react","xigRequireInterop"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=d("PolarisAsyncComponent").createAsyncComponent_DEPRECATED({displayName:"LiveCreationModal",fallback:a.jsx(c("IGCoreModal"),{backdropColor:"dark",children:a.jsx(c("IGDSBox.react"),{alignItems:"center",height:112,justifyContent:"center",maxWidth:d("PolarisSizing").FEED_WIDTH_WIDE,position:"relative",width:"100%",children:a.jsx(c("IGDSSpinner.react"),{size:"medium"})})}),resolve:function(){return c("JSResourceForInteraction")("PolarisLiveCreationModal.react").__setRef("PolarisLiveCreationModalLazy_DEPRECATED").load().then(function(a){return c("xigRequireInterop")(a)})}});g["default"]=b}),98);
__d("PolarisInstagramMobileLogoTitle.react",["fbt","PolarisFastLink.react","PolarisIGCoreInstagramWordmarkIcon","react","usePolarisIsOnFeedPage"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function j(){return i.jsx(c("PolarisIGCoreInstagramWordmarkIcon"),{alt:h._("__JHASH__EubW9vzR0uu__JHASH__"),color:"ig-primary-text",size:103})}j.displayName=j.name+" [from "+f.id+"]";function a(a){a=a.isLink;var b=c("usePolarisIsOnFeedPage")(),d=function(a){window.scrollTo(0,0),a.preventDefault()};return a===!0?i.jsx("div",{className:"x1qjc9v5 x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x78zum5 xdt5ytf x2lah0s xk390pu x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x11njtxf x1k70j0n",children:i.jsx(c("PolarisFastLink.react"),{href:"/",onClick:b?d:void 0,children:i.jsx(j,{})})}):i.jsx("div",{className:"x1qjc9v5 x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x78zum5 xdt5ytf x2lah0s xk390pu x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x11njtxf xr9ek0c",children:i.jsx(j,{})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);