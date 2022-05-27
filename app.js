$(document).ready(function(){
    $(".ti-settings").click(function(){
        $(".settings-menu").show(500);
        $(".ti-settings").hide(500);
    });

    $(".return").click(function(){
        $(".settings-menu").hide(500);
        $(".ti-settings").show(500);
    });
    $(".lightmode").click(function(){
        $("body").css("backgroundColor","white");
        $(".header").css("backgroundColor","silver");
        $(".child").css("backgroundColor","silver");
        $(".today").css("backgroundColor","silver");
    });
    $(".darkmode").click(function(){
        $("body").css("backgroundColor","black");
        $(".header").css("backgroundColor","rgb(7,7,7)");
        $(".child").css("backgroundColor","rgb(7,7,7)");
        $(".today").css("backgroundColor","rgb(7,7,7)");
    });
});