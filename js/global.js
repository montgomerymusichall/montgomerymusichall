(function (window, $, musichall) {
    "use strict";
    if (!$) {
        throw 'jQuery not found.';   
    }
    
    musichall.mainNav = {
        pagePathName : window.location.pathname,
        init: function () {
            var $mainNavLinks = $('.main-nav li a');
            
            $mainNavLinks.removeClass('active');
            if(musichall.mainNav.pagePathName != '/') {
                $('.main-nav li a[href="' + musichall.mainNav.pagePathName + '"]').addClass('active');
            } else {
                $('.main-nav li:first-child a').addClass('active');
            }
        }
    };
    
    $(document).ready(musichall.mainNav.init);
    
})(window, jQuery, window.musichall = window.musichall || {});