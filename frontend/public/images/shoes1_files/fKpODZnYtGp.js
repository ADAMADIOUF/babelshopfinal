;/*FB_PKG_DELIM*/

__d("PolarisCommentLikeListsActions",["PolarisCommentLikeListsState","PolarisPaginationUtils","nullthrows"],(function(a,b,c,d,e,f,g){"use strict";var h="5f0b1f6281e72053cbc07909c8d154ae",i=24,j=1;function a(){return d("PolarisPaginationUtils").generatePaginationActionCreators({getState:function(a,b){return((a=a.commentLikeLists[b])!=null?a:d("PolarisCommentLikeListsState").EMPTY_LISTS).pagination},onError:function(a,b,c){return{commentId:c,fetch:b,type:"COMMENT_LIKE_LISTS__REQUEST_FAILED"}},onUpdate:function(a,b,d){b=b&&c("nullthrows")(b.comment).edge_liked_by;return{commentId:d,count:b==null?void 0:b.count,fetch:a,pageInfo:b==null?void 0:b.page_info,type:"COMMENT_LIKE_LISTS_REQUEST_UPDATED",users:((b==null?void 0:b.edges)||[]).map(function(a){return a.node})}},pageSize:i,pagesToPreload:j,queryId:h,queryParams:function(a){return{comment_id:a}}})}b=a();e=b;f=b.first;a=b.next;g._actionCreators=e;g.requestCommentLikes=f;g.requestNextCommentLikes=a}),98);
__d("PolarisAPISetGender",["PolarisInstapi"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){b={custom_gender:b,gender:Number(a)};return d("PolarisInstapi").apiPost("/api/v1/web/accounts/set_gender/",{body:b})}g.setGender=a}),98);
__d("PolarisGenderActions",["fbt","PolarisAPISetGender","PolarisGenericStrings"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a,b){return function(c){c({customGender:b,gender:a,type:"GENDER_INFO_LOADED"})}}function i(a,b){return function(c){c({type:"GENDER_INFO_UPDATE_REQUESTED"});return d("PolarisAPISetGender").setGender(a,b).then(function(d){c({customGender:b,gender:a,type:"GENDER_INFO_UPDATE_SUCCEEDED"})},function(e){c({toast:{actionHandler:function(){return c(i(a,b))},actionText:d("PolarisGenericStrings").RETRY_TEXT,text:e.message||h._("__JHASH__R3pc3xZiqMF__JHASH__")},type:"GENDER_INFO_UPDATE_FAILED"})})}}g.loadGenderInfo=a;g.updateGenderInfo=i}),98);
__d("PolarisSettingsActionLoadConfigForCommentFilteringPage",[],(function(a,b,c,d,e,f){"use strict";function a(a){var b=a.configResponse;a=a.keywords;return{commentFilteringConfig:!b.disabled,commentFilteringKeywords:a,type:"COMMENT_FILTERING_PAGE_LOADED"}}f.loadConfigForCommentFilteringPage=a}),66);
__d("PolarisSettingsActionLoadCookieSettingsPage",["invariant"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a){a||h(0,65509);a={offsiteTrackingEnabled:a.offsite_tracking_enabled||!1,shouldShowConsentSettings:a.should_show_consent_settings||!1,thirdPartyCookiesEnabled:a.third_party_cookies_enabled||!1};return{formData:a,type:"COOKIE_SETTINGS_PAGE_LOADED"}}g.loadCookieSettingsPage=a}),98);
__d("PolarisSettingsActionLoadEmailsSentPage",["invariant"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a){a=a.data;a||h(0,51683);a={otherEmails:a.other_emails.emails,securityEmails:a.security_emails.emails};return{formData:a,type:"EMAILS_SENT_PAGE_LOADED"}}g.loadEmailsSentPage=a}),98);
__d("PolarisSettingsActionLoadKeywordsForCommentFilteringPage",[],(function(a,b,c,d,e,f){"use strict";function a(a){var b=a.config;a=a.keywordsResponse;a=[].concat(a.keywords).sort().join(", ");return{commentFilteringConfig:b,commentFilteringKeywords:a,type:"COMMENT_FILTERING_PAGE_LOADED"}}f.loadKeywordsForCommentFilteringPage=a}),66);
__d("PolarisSettingsActionLoadLoginActivityPage",["invariant"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a){a=a.data;a||h(0,51685);a={sessions:a.sessions.map(function(a){return babelHelpers["extends"]({},a,{isConfirmed:!1,isCurrent:a.is_current,loginTimestamp:a.login_timestamp,timeStamp:a.timestamp})}),suspiciousLogins:a.suspicious_logins.map(function(a){return babelHelpers["extends"]({},a,{isConfirmed:!1,isCurrent:a.is_current,loginId:a.id,loginTimestamp:a.login_timestamp,timeStamp:a.timestamp})})};return{formData:a,type:"LOGIN_ACTIVITY_PAGE_LOADED"}}g.loadLoginActivityPage=a}),98);
__d("PolarisSettingsActionLoadPrivacyAndSecurityPage",["invariant"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a){a||h(0,51684);a={disallowStoryReshare:{loading:!1,value:a.disallow_story_reshare||!1},feedPostReshareDisabled:{loading:!1,value:a.feed_post_reshare_disabled||!1},isEmbedsDisabled:{loading:!1,value:a.is_embeds_disabled||!1},isInterestTopicsEnabled:{loading:!1,value:a.is_interest_topics_enabled||!1},offsiteTrackingEnabled:{loading:!1,value:a.offsite_tracking_enabled||!1},presenceDisabled:{loading:!1,value:a.presence_disabled||!1},privateAccount:{loading:!1,value:a.private_account||!1},shouldHideTwoFactor:{loading:!1,value:a.should_hide_two_factor||!1},shouldShowConsentSettings:{loading:!1,value:a.should_show_consent_settings||!1},thirdPartyCookiesEnabled:{loading:!1,value:a.third_party_cookies_enabled||!1},twoFactorEnabled:{loading:!1,value:a.two_factor_enabled||!1},userCallSettings:{loading:!1,value:a.user_call_settings||"off"},usertagReviewEnabled:{loading:!1,value:a.usertag_review_enabled||!1}};return{formData:a,type:"PRIVACY_AND_SECURITY_PAGE_LOADED"}}g.loadPrivacyAndSecurityPage=a}),98);
__d("PolarisSettingsActionLoadProfileEditPage",["invariant"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a){a=a.form_data;a||h(0,51686);a={bio:a.biography||"",bioLinksForEditPage:a.bio_links_for_web_edit_only,birthday:a.birthday||null,businessAccount:a.business_account||!1,chainingEnabled:a.chaining_enabled||!1,email:a.email||"",fbBirthday:a.fb_birthday||null,fullName:a.first_name||"",gender:a.gender,isEmailConfirmed:a.is_email_confirmed||!1,isPhoneConfirmed:a.is_phone_confirmed||!1,nameAlternateCtaLink:a.name_alternate_cta_link||null,nameAlternateCtaMessage:a.name_alternate_cta_message||null,nameAlternateMessage:a.name_alternate_message||null,nameDisabled:a.name_disabled||null,phoneNumber:a.phone_number||"",profileEditParams:a.profile_edit_params||null,trustedDays:a.trust_days||14,trustedUsername:a.trusted_username||"",username:a.username,usernameAdditionalCtaLink:a.username_additional_cta_link||null,usernameAdditionalCtaMessage:a.username_additional_cta_message||null,usernameAdditionalMessage:a.username_additional_message||null,website:a.external_url||""};return{formData:a,type:"PROFILE_EDIT_PAGE_LOADED"}}g.loadProfileEditPage=a}),98);
__d("PolarisSettingsActionLoadTwoFactorAuthPage",["invariant"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a){a||h(0,51687);return{phoneNumber:a.phone_number||"",showTrustedDevices:a.show_trusted_devices||!1,totpTwoFactorEnabled:a.eligible_for_totp_two_factor?a.totp_two_factor_enabled||!1:void 0,twoFactorEnabled:a.two_factor_enabled||!1,type:"TWO_FACTOR_AUTH_PAGE_LOADED"}}g.loadTwoFactorAuthPage=a}),98);
__d("PolarisCommentOptionsDialog.react",["fbt","IGCoreDialog","IGDSDialogBackwardsCompatibilityWrapper.react","PolarisFRXReportModal.react","PolarisGenericStrings","PolarisReportConstants","PolarisReportUnderLawDialogItem.react","polarisIsUserLoggedIn","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("react").useState;function a(a){var b=a.canDeleteComment,e=a.canPinComment;e=e===void 0?!1:e;var f=a.commentId,g=a.commentOwnerAvatar,k=a.commentOwnerFbidV2,l=a.commentOwnerId,m=a.commentOwnerUsername,n=a.mediaOwnerId,o=a.onClose,p=a.onDelete;a=a.onPin;var q=j(!1),r=q[0],s=q[1];q=function(){s(!0)};var t=function(){o(),s(!1)},u=function(){p(),o()};if(r)return i.jsx(c("IGDSDialogBackwardsCompatibilityWrapper.react"),{children:i.jsx(c("PolarisFRXReportModal.react"),{frxLocation:d("PolarisReportConstants").FRXLocation.COMMENTS,frxObjectType:d("PolarisReportConstants").FRXObjectType.COMMENT,onClose:t,reportedObjectID:f,reportedOwner:{fbidV2:k,id:l,profilePicURL:g,username:m},useSimpleBlockModalWithoutRefresh:l===n})});r=d("polarisIsUserLoggedIn").isUserLoggedIn()?i.jsx(d("IGCoreDialog").IGCoreDialogItem,{color:"ig-error-or-destructive",onClick:q,children:h._("__JHASH__67YjhX5VKnw__JHASH__")}):i.jsx(d("PolarisReportUnderLawDialogItem.react").ReportUnderLawDialogItem,{contentId:f});return i.jsxs(d("IGCoreDialog").IGCoreDialog,{onModalClose:t,children:[r,e&&i.jsx(d("IGCoreDialog").IGCoreDialogItem,{color:"ig-secondary-button",onClick:a,children:h._("__JHASH__sDIwOLrRvhV__JHASH__")}),b&&i.jsx(d("IGCoreDialog").IGCoreDialogItem,{color:"ig-error-or-destructive",onClick:u,children:h._("__JHASH__ZQcmJOKw3wW__JHASH__")}),i.jsx(d("IGCoreDialog").IGCoreDialogItem,{onClick:t,children:d("PolarisGenericStrings").CANCEL_TEXT})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisNoCommentsPlaceholder.react",["fbt","IGDSBox.react","IGDSText.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(){var a=h._("__JHASH__MYZn3VY5517__JHASH__"),b=h._("__JHASH__ZnOaVd3FLUq__JHASH__");return i.jsxs(c("IGDSBox.react"),{alignItems:"center",height:"100%",justifyContent:"center",children:[i.jsx(c("IGDSBox.react"),{marginBottom:2,children:i.jsx(c("IGDSText.react").Headline2,{textAlign:"center",children:a})}),i.jsx(c("IGDSBox.react"),{marginTop:2,children:i.jsx(c("IGDSText.react").Body,{textAlign:"center",children:b})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisReduxSettingsActions",["PolarisGenderActions","PolarisProfessionalConversionActions","PolarisSettingsActionLoadConfigForCommentFilteringPage","PolarisSettingsActionLoadCookieSettingsPage","PolarisSettingsActionLoadEmailsSentPage","PolarisSettingsActionLoadKeywordsForCommentFilteringPage","PolarisSettingsActionLoadLoginActivityPage","PolarisSettingsActionLoadPrivacyAndSecurityPage","PolarisSettingsActionLoadProfileEditPage","PolarisSettingsActionLoadTwoFactorAuthPage"],(function(a,b,c,d,e,f,g){"use strict";a=function(a){return function(b){b(d("PolarisSettingsActionLoadLoginActivityPage").loadLoginActivityPage({data:a}))}};b=function(a){return function(b){b(d("PolarisSettingsActionLoadProfileEditPage").loadProfileEditPage(a));b(d("PolarisGenderActions").loadGenderInfo(String(a.form_data.gender),(b=a.form_data.custom_gender)!=null?b:""))}};c=function(a){return function(b){b(d("PolarisSettingsActionLoadPrivacyAndSecurityPage").loadPrivacyAndSecurityPage(a))}};e=function(a){return function(b,c){b(d("PolarisSettingsActionLoadKeywordsForCommentFilteringPage").loadKeywordsForCommentFilteringPage({config:c().settings.commentFilteringConfig,keywordsResponse:a}))}};f=function(a){return function(b,c){b(d("PolarisSettingsActionLoadConfigForCommentFilteringPage").loadConfigForCommentFilteringPage({configResponse:a,keywords:c().settings.commentFilteringKeywords}))}};var h=function(a){return function(b){b(d("PolarisSettingsActionLoadEmailsSentPage").loadEmailsSentPage(a))}},i=function(a){return function(b){b(d("PolarisSettingsActionLoadCookieSettingsPage").loadCookieSettingsPage(a))}},j=function(a){return function(b){b(d("PolarisProfessionalConversionActions").initProfessionalConversionFlow(a.account_type,a.category_id,a.collect_contact_info||!1,a.create_business_manager||!1,a.entry_point,a.app_id,a.fb_user_id,a.fb_user_nonce,a.page_id,a.preferred_business_id,a.show_context_screen||!1,a.whatsapp_deeplink,a.whatsapp_link_request_id,a.whatsapp_user_nonce))}},k=function(a){return function(b){b(d("PolarisSettingsActionLoadTwoFactorAuthPage").loadTwoFactorAuthPage(a))}};g.setupLoginActivityPage=a;g.setupProfileEditPage=b;g.setupPrivacyAndSecurityPage=c;g.setupKeywordsForCommentFilteringPage=e;g.setupConfigForCommentFilteringPage=f;g.setupEmailsSentPage=h;g.setupCookieSettingsPage=i;g.setupConvertToProfessionalAccountPage=j;g.setupTwoFactorAuthPage=k}),98);
__d("PolarisPostGifComment.react",["IGDSBox.react","IGDSText.react","PolarisExternalLink.react","PolarisFastLink.react","PolarisODS","PolarisPostStrings","PolarisReactRedux","PolarisReduxSettingsActions","PolarisRoutes","react","usePolarisGetQuery","usePolarisGetQuerySetup"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useEffect,j=b.useState,k="https://help.instagram.com/cookie_settings";function l(){return h.jsx(c("IGDSText.react"),{color:"primaryButton",weight:"semibold",children:d("PolarisPostStrings").GIF_COMMENT_ALLOW_COOKIES_TEXT})}l.displayName=l.name+" [from "+f.id+"]";function m(a){var b=a.shouldShowConsentSettings;a=a.thirdPartyCookiesEnabled;if(b&&!a)return h.jsx(c("PolarisFastLink.react"),{href:d("PolarisRoutes").COOKIE_SETTINGS_PATH,children:h.jsx(l,{})});else return h.jsx(c("PolarisExternalLink.react"),{href:k,children:h.jsx(l,{})})}function n(){var a=c("usePolarisGetQuery")("/api/v1/accounts/cookie_settings/web_info/");c("usePolarisGetQuerySetup")(a,d("PolarisReduxSettingsActions").setupCookieSettingsPage);a=d("PolarisReactRedux").useSelector(function(a){return a.settings.privacyAndSecurityData.thirdPartyCookiesEnabled.value});var b=d("PolarisReactRedux").useSelector(function(a){return a.settings.privacyAndSecurityData.shouldShowConsentSettings.value});if(!a)return h.jsx(c("IGDSBox.react"),{marginTop:1,children:h.jsxs(c("IGDSText.react"),{color:"secondaryText",children:[d("PolarisPostStrings").GIF_COMMENT_ERROR_EXPLANATION," ",h.jsx(m,{shouldShowConsentSettings:b,thirdPartyCookiesEnabled:a})]})})}function a(a){a=a.gifSrc;var b=j(!1),d=b[0],e=b[1];i(function(){c("PolarisODS").incr("web.comments.gif_comment.view_impression")},[a]);b=function(){e(!0),c("PolarisODS").incr("web.comments.gif_comment.img_error")};return h.jsxs(c("IGDSBox.react"),{marginTop:2,children:[h.jsx("img",{className:"x107yiy2 xv8uw2v x1tfwpuw x2g32xy",onError:b,src:a}),d&&h.jsx(n,{})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisIgWellbeingRestrictManageCommentFalcoEvent",["PolarisFalcoLogger"],(function(a,b,c,d,e,f,g){"use strict";var h={falco:!0,pigeon:!1};a={log:function(a){var b=a.action,c=a.actorIgUserid,e=a.commentId,f=a.commentThreadId,g=a.parentMediaId;a=a.step;d("PolarisFalcoLogger").FalcoLogger.log("ig_wellbeing_restrict_manage_comment",{action:b,actor_ig_userid:parseInt(c,10),comment_id:e?parseInt(e,10):void 0,entrypoint:"comment",parent_comment_id:f===e?void 0:parseInt(f,10),parent_media_id:parseInt(g,10),step:a},{},h)}};b=a;g["default"]=b}),98);