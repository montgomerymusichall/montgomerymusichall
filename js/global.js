(function (window, $, musichall) {
    "use strict";
    if (!$) {
        throw 'jQuery not found.';   
    }
    
    musichall.mainNav = {
        $mainNavLinks : $('.main-nav li a'),
        pageHash : window.location.hash.substring(1).length ? window.location.hash.substring(1) : 'home',
        init: function () {
            $('.main-nav li a').removeClass('active');
            $('.main-nav li a[data-page=' + musichall.mainNav.pageHash + ']').addClass('active');
        }
    };
    
    $(document).ready(musichall.mainNav.init);
    
})(window, jQuery, window.musichall = window.musichall || {});