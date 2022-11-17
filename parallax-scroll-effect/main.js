// ------------- VARIABLES ------------- //
var ticking = false;
var isFirefox = /Firefox/i.test(navigator.userAgent);
var isIe =
    /MSIE/i.test(navigator.userAgent) ||
    /Trident.*rv\:11\./i.test(navigator.userAgent);
var scrollSensitivitySetting = 30; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive)
var slideDurationSetting = 600; //Amount of time for which slide is "locked"
var currentSlideNumber = 0;
var totalSlideNumber = $(".background").length;
