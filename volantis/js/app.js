var Debounce=(t,o)=>{const e=o||25;let a;return function(){const o=arguments;a&&clearTimeout(a),a=setTimeout((()=>{a=null,t.apply(this,o)}),e)}};!function(t){volantis.$.bodyAnchor=t("#safearea"),volantis.$.topBtn=t("#s-top"),volantis.$.wrapper=t("#wrapper"),volantis.$.coverAnchor=t("#l_cover .cover-wrapper"),volantis.$.switcher=t("#l_header .switcher .s-search"),volantis.$.header=t("#l_header"),volantis.$.search=t("#l_header .m_search"),volantis.$.mPhoneList=t("#l_header .m-phone .list-v");var o=80;function e(e,a=o){const n=e.href?t(decodeURI(e.getAttribute("href"))):t(e);window.scrollTo({top:n.offset().top-a,behavior:"smooth"})}function a(){volantis.$.topBtn.length&&volantis.$.bodyAnchor&&volantis.$.topBtn.click((t=>{t.preventDefault(),t.stopPropagation(),e(volantis.$.bodyAnchor),t.stopImmediatePropagation()}));let a=document.body.scrollTop;t(document,window).scroll(Debounce((()=>{const e=volantis.$.bodyAnchor.offset().top-o,n=t(window).scrollTop(),i=n-a;a=n,n>volantis.$.bodyAnchor.offset().top?(volantis.$.topBtn.addClass("show"),i>0?volantis.$.topBtn.removeClass("hl"):volantis.$.topBtn.addClass("hl")):volantis.$.topBtn.removeClass("show").removeClass("hl"),n-e>-1?volantis.$.header.addClass("show"):volantis.$.header.removeClass("show")})))}function n(){if(!pdata.ispage)return;volantis.$.wrapper.find(".nav-sub .title").html(pdata.postTitle);let o=document.body.scrollTop;t(document,window).scroll(Debounce((()=>{const e=t(window).scrollTop(),a=e-o;a>=50&&e>100?(o=e,volantis.$.wrapper.addClass("sub")):a<=-50&&(o=e,volantis.$.wrapper.removeClass("sub"))}))),volantis.$.comment=t("#s-comment"),volantis.$.commentTarget=t("#l_main article#comments"),volantis.$.commentTarget.length?volantis.$.comment.click((t=>{t.preventDefault(),t.stopPropagation(),e(volantis.$.commentTarget),t.stopImmediatePropagation()})):volantis.$.comment.remove(),volantis.isMobile&&(volantis.$.toc=t("#s-toc"),volantis.$.tocTarget=t("#l_side .toc-wrapper"),volantis.$.tocTarget.length&&volantis.$.tocTarget.children().length?(volantis.$.toc.click((t=>{t.stopPropagation(),volantis.$.tocTarget.toggleClass("active"),volantis.$.toc.toggleClass("active")})),t(document).click((function(t){t.stopPropagation(),volantis.$.tocTarget.removeClass("active"),volantis.$.toc.removeClass("active")})),t(document,window).scroll(Debounce((()=>{volantis.$.tocTarget.removeClass("active"),volantis.$.toc.removeClass("active")}),100))):volantis.$.toc.remove())}function i(){volantis.$.headerMenu=t(".navigation","#l_header,#l_cover,#l_side"),volantis.$.headerMenu.find("li a.active").removeClass("active"),volantis.$.headerMenu.find("div a.active").removeClass("active");var o=null,e=location.pathname.replace(/\/|%|\./g,"");0==e.length&&(e="home");var a=e.match(/page\d{0,}$/g);a&&(a=a[0],e=e.split(a)[0]);var n,i=e.match(/index.html/);i&&(i=i[0],e=e.split(i)[0]),(e=e.replace(/(\[|\]|~|#|@)/g,"\\$1"))&&volantis.$.headerMenu&&(o=t("#"+e,volantis.$.headerMenu),(n=o)&&n.length&&n.addClass("active").siblings().removeClass("active"))}function s(){volantis.isMobile?t("#l_header .m-phone li:has(.list-v)").click((function(o){o.stopPropagation(),t(t(o.currentTarget).children("ul")).show()})):t("#wrapper .m-pc li > a[href]").parent().click((function(o){o.stopPropagation(),o.target.origin==o.target.baseURI&&t("#wrapper .m-pc .list-v").hide()})),l()}function l(){volantis.isMobile&&(t(document).click((function(t){volantis.$.mPhoneList.hide()})),t(window).scroll(Debounce((()=>{volantis.$.mPhoneList.hide()}))))}function c(){volantis.isMobile&&0!==volantis.$.switcher.length&&(volantis.$.switcher.click((function(t){t.stopPropagation(),volantis.$.header.toggleClass("z_search-open"),volantis.$.switcher.toggleClass("active"),volantis.$.search.find("input").focus()})),t(document).click((function(t){volantis.$.header.removeClass("z_search-open"),volantis.$.switcher.removeClass("active")})),volantis.$.search.click((function(t){t.stopPropagation()})))}function r(){t("#l_main .tabs .nav-tabs").length&&t("#l_main .tabs .nav-tabs").on("click","a",(o=>{o.preventDefault(),o.stopPropagation();const e=t(o.target.parentElement.parentElement.parentElement);return e.find(".nav-tabs .active").removeClass("active"),e.find(o.target.parentElement).addClass("active"),e.find(".tab-content .active").removeClass("active"),e.find(t(o.target).attr("class")).addClass("active"),!1}))}if(volantis.$.header[0]&&(o=volantis.$.header[0].clientHeight+16),t((function(){document.documentElement.clientWidth<500?(volantis.isMobile=1,volantis.isMobileOld=1):(volantis.isMobile=0,volantis.isMobileOld=0),n(),i(),s(),c(),a(),r(),window.onresize=()=>{document.documentElement.clientWidth<500?volantis.isMobile=1:volantis.isMobile=0,volantis.isMobile!=volantis.isMobileOld&&(s(),n(),c())},t("#scroll-down").on("click",(function(){e(volantis.$.bodyAnchor)})),volantis.pjax.push((()=>{t((function(){t("#l_header .nav-main").find(".list-v").not(".menu-phone").removeAttr("style",""),t("#l_header .menu-phone.list-v").removeAttr("style",""),o=80,volantis.$.header[0]&&(o=volantis.$.header[0].clientHeight+16),n(),i(),l(),a(),r(),t("#scroll-down").on("click",(function(){e(volantis.$.bodyAnchor)})),0!==volantis.$.switcher.length&&t(document).click((function(t){volantis.$.header.removeClass("z_search-open"),volantis.$.switcher.removeClass("active")}))}))}),"app.js")})),window.location.hash)var v=setInterval((function(){t("#"+decodeURI(window.location.hash.split("#")[1]).replace(/\ /g,"-")).length&&(t("html, body").animate({scrollTop:t("#"+decodeURI(window.location.hash.split("#")[1]).replace(/\ /g,"-")).offset().top-40},500),clearInterval(v))}),100)}(jQuery);