function getPlugin(option) {
    var url = "http://cdn.bootcss.com/bootstrap/2.3.1/js/";
//1��������
    var transition = "transition.js"
//2�����
    var alert = "alert.js";
//3��ť
    var button = "button.js";
//4�۵� �ַ���
    var collapse = "collapse.js";
//5�������
    var scrollspy = "scrollspy.js";
//6�Զ���λ����
    var affix = "affix.js";
//7�����˵�
    var dropdown = "dropdown.js";
//8ѡ�
    var tab = "tab.js";
//9��ʾ��
    var tooltip = "tooltip.js";
//10ͼƬ�ֲ�
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
