function getPlugin(option) {
    var url = "http://cdn.bootcss.com/bootstrap/2.3.1/js/";
//1动画过渡
    var transition = "transition.js"
//2警告框
    var alert = "alert.js";
//3按钮
    var button = "button.js";
//4折叠 手风琴
    var collapse = "collapse.js";
//5滚动侦测
    var scrollspy = "scrollspy.js";
//6自动定位浮标
    var affix = "affix.js";
//7下拉菜单
    var dropdown = "dropdown.js";
//8选项卡
    var tab = "tab.js";
//9提示框
    var tooltip = "tooltip.js";
//10图片轮播
    var carousel = "carousel.js";
    var res;
    if (option == transition) {
        res = url + transition;
    }
    if (option == alert) {
        res = url + alert;
    }
    if (option == button) {
        res = url + button;
    }
    if (option == collapse) {
        res = url + collapse;
    }
    if (option == scrollspy) {
        res = url + scrollspy;
    }
    if (option == affix) {
        res = url + affix;
    }
    if (option == dropdown) {
        res = url + dropdown;
    }
    if (option == tab) {
        res = url + tab;
    }
    if (option == tooltip) {
        res = url + tooltip;
    }
    if (option == carousel) {
        res = url + carousel;
    }


    return res;
}


function a(){
    alert("s")
}
