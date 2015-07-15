document.domain = "qq.com";
function $() {
    var elements = new Array();
    for (var i = 0; i < arguments.length; i++) {
        var element = arguments[i];
        if (typeof element == "string") {
            element = document.getElementById(element);
        }
        if (arguments.length == 1) {
            return element;
        }
        elements.push(element);
    }
    return elements;
}
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}
(function () {
    if ($('top')) {
        $('top').innerHTML = '<dl id="nav"><dt id="one-ddheader"><a href="http://cf.qq.com/main.shtml" id="one_home" title="��ҳ"></a><a href="http://cf.qq.com/webplat/info/36/88/list_1.shtml" id="one_news" title="���߱���"></a><a href="http://cf.qq.com/web200905/info/new_install.htm" id="one_gameinfo" title="��Ϸָ��"></a><a href="http://cf.qq.com/web200905/info/dl_game.htm" id="one_download" title="��������"></a><a href="#" id="one_shortcut" title="����ͨ��"></a><a href="http://app.cf.qq.com/cgi-bin/CommAction/showaction.cgi?iPdName=14&iType=2" id="one_cfarea" title="����ר��"></a><a href="http://cf.qq.com/act/a20081010team/" id="one_traitsys" title="��ɫϵͳ" target="_blank"></a><a href="http://games.qq.com/tencent/qqcf/" id="one_playerconcur" target="_blank" title="��һ���"></a><a href="http://service.qq.com/category/cf.html" id="one_customser" title="��Ѷ�ͷ�" target="_blank"></a><a href="http://cf.gamebbs.qq.com/" id="one_bbs" title="��̳" target="_blank"></a> </dt><dd id="one-ddcontent" class="c"><ul id="two_home"></ul><ul id="two_news"><li><a href="http://cf.qq.com/webplat/info/36/88/188/list_1.shtml">����</a></li><li><a href="http://cf.qq.com/webplat/info/36/88/199/list_1.shtml">����</a></li><li><a href="http://cf.qq.com/webplat/info/36/88/209/list_1.shtml">�</a></li><li><a href="http://cf.qq.com/webplat/info/36/88/208/list_1.shtml">����</a></li></ul><ul id="two_gameinfo"><li><a href="http://cf.qq.com/web200905/info/new_install.htm">�±���·</a></li><li><a href="http://cf.qq.com/web200905/info/gmi_story.htm">��Ϸ����</a></li><li><a href="http://cf.qq.com/web200905/info/faq_version.htm">��������</a></li></ul><ul id="two_download"><li><a href="http://cf.qq.com/web200905/info/dl_game.htm">��Ϸ����</a></li><li><a href="http://cf.qq.com/web200905/info/dl_wallpaper.htm">������ֽ</a></li><li><a href="http://cf.qq.com/web200905/info/dl_song.htm">�������</a></li><li><a href="http://cf.qq.com/web200905/info/dl_magazine.htm">������־</a></li><li><a href="http://cf.qq.com/web200905/info/dl_story.htm">����С˵</a></li></ul><ul id="two_shortcut"><li><a href="http://cf.qq.com/act/a20101020tyf/" target="_blank">�����</a></li><li><a href="http://cf.qq.com/act/a20090409forceout/index.htm" target="_blank">��Ų�ѯ</a></li><li><a href="http://QQCFyj.gamebbs.qq.com" target="_blank">BUG�ύ</a></li><li><a href="http://gamesafe.qq.com/" target="_blank">��Ϸ��ȫ</a></li><li><a href="http://fcm.qq.com/" target="_blank">������</a></li><li><a href="http://cf.qq.com/act/a20090907tenprotect/index.htm" target="_blank">�����ר��</a></li></ul><ul id="two_cfarea"><li><a href="http://app.cf.qq.com/cgi-bin/CommAction/showaction.cgi?iPdName=14&iType=2">�ר��</a></li><li><a href="http://app.cf.qq.com/cgi-bin/CommAction/showaction.cgi?iPdName=14&iType=1">�汾ר��</a></li><li><a href="http://cf.qq.com/web200905/info/games_list.htm">����ר��</a></li><li><a  target="_blank" href="http://live.qq.com/zt/gzone/002.html">��Ƶר��</a></li><li><a href="http://act.vip.qq.com/privilege/templates/10200/" target="_blank">QQ��Աר��</a></li><li><a href="http://app.cf.qq.com/web200905/info/cdkey.htm">CDKEYר��</a></li></ul><ul id="two_traitsys"><li><a href="http://cf.qq.com/act/a20081010team/" target="_blank">ս��ϵͳ</a></li><li><a href="http://cf.qq.com/act/a20080415honor/index.htm" target="_blank">����ϵͳ</a></li></ul><ul id="two_playerconcur"><li><a href="http://games.qq.com/tencent/qqcf/" target="_blank">ս������</a></li><li><a href="http://act3.games.qq.com/2667/work/list.do?field3=1" target="_blank">������</a></li><li><a href="http://games.qq.com/tencent/qqcf/video/" target="_blank">�����Ƶ</a></li><li><a href="http://act3.games.qq.com/2667/work/list.do?field3=2" target="_blank">��ҽ�ͼ</a></li> <li><a href="http://cf.qzone.qq.com/" target="_blank">�ٷ�����</a></li><li><a href="http://t.qq.com/crossfire" target="_blank">�ٷ�΢��</a></li></ul><ul id="two_customser"><li><a href="http://service.qq.com/category/cf.html" target="_blank">�ͻ�����</a></li><li><a href="/web200905/info/agreement.htm" target="_blank">�û�Э��</a></li><li><a href="/web200905/info/player_rule.htm" target="_blank">�������</a></li><li><a href="http://wenwen.soso.com/z/c18048256.htm?ch=fl.fl" target="_blank">���ѻ���</a></li></ul><ul id="two_bbs"><li><a href="http://cf.gamebbs.qq.com/" target="_blank">��̳</a></li><li><a href="http://post.soso.com/��Խ����" target="_blank">�Ѱ�</a></li></ul></dd></dl><div id="banner"><a target="_blank" href="http://cf.qq.com/act/a20101021halloween/"></a></div>'
    }
})();
document.write('<div id="loginbox"><div id="unlogin"><a href="javascript:OpenLoginDiv();" onfocus="this.blur();" title="�û���¼" onclick=\'pgvSendClick({hottag:\"main.link.login\"});\'>�û���¼</a><span id="loginfl"></span></div><div id="logined" style="display:none;"> <p class="c"><a href="http://cf.qq.com/web200905/info/gameinfo.htm" target="_blank" title="�鿴��Ϸ����">��Ϸ����</a> <a href="http://cf.qq.com/act/a20080306team/" target="_blank" title="����ս��ϵͳ">ս��ϵͳ</a> <a href="http://igame.qq.com/index.htm?gtype=2&page=1" target="_blank" title="������Ϸ����">��Ϸ����</a> <a href="javascript:LogoutPage();" title="ע��" class="logout">ע��</a></p></div></div><div id="leftbar"><h2 title="����"></h2><ul><li><a id="l_dl" href="http://cf.qq.com/web200905/info/dl_game.htm" onclick="pgvSendClick({hottag:\'main.downbtn.yxxz\'});" title="��Ϸ����">��Ϸ����</a></li><li><a id="l_ct" href="http://cf.qq.com/comm-htdocs/pay/?t=cf" onclick="pgvSendClick({hottag:\'main.sidebar.zhcz\'});" title="�ʻ���ֵ" target="_blank">�ʻ���ֵ</a></li><li><a id="l_ts" href="http://app.cf.qq.com/market/index.shtml" onclick="pgvSendClick({hottag:\'main.sidebar.djsc\'});" target="_blank" title="�����̳�">�����̳�</a></li><li><a id="l_vp" href="http://cf.qq.com/vip/" target="_blank" onclick="pgvSendClick({hottag:\'main.sidebar.cfhy\'});" title="CF��Ա">CF��Ա</a></li><li><a id="l_lk" href="http://app.cf.qq.com/act/a20080723cj/" target="_blank" onclick="pgvSendClick({hottag:\'main.sidebar.xylb\'});" title="�������">�������</a></li><li><a id="l_li" href="http://cf.qq.com/act/a20080415honor/index.htm" title="����ͼ��" target="_blank">����ͼ��</a></li><li><a id="l_cy" href="http://app.cf.qq.com/web200905/info/cdkey.htm" target="_blank" onclick=\'pgvSendClick({hottag:"main.sidebar.cdkey"});\' title="CDKEYר��">CDKEYר��</a></li><li><a id="l_qq" href="http://act.vip.qq.com/privilege/templates/10200/" target="_blank" onclick=\'pgvSendClick({hottag:"main.sidebar.qqhy"});\' title="QQ��Աר��">QQ��Աר��</a></li><li><a id="l_bq" href="http://qqgame.qq.com/act/a20100819cf/index.html" target="_blank" onclick=\'pgvSendClick({hottag:"main.sidebar.lzhz"});\' title="�������ר��">�������ר��</a></li></ul><div class="left_gg_box"><a id="h180" target="_blank"><img  border="0" width="165" id="i180" /></a></div><div class="left_gg_box"><a id="h181" target="_blank"><img  border="0"  width="165" id="i181" /></a></div></div>');
addLoadEvent(function () {
    if ($('foot')) {
        $('foot').innerHTML = '<div class="center"><div class="container" style="color:#B6B1A6;">�����Ļ���Ӫ���֤ <a href="http://cf.qq.com/web200905/info/game_rule.htm" target="_blank">��������[2008]6��</a> ���������澭Ӫ���֤ �³�����2008��714��</div></div><div id="footlogo" class="container"><p> Copyright &copy; 1998-2010 Tencent Inc. All Rights Reserved. <br />Copyright &copy; NEOWIZ GAMES.All Rights Reserved. <br />Copyright &copy; 2002-2010 Smilegate Inc. All rights reserved. <br /></p></div>';
    }
});
(function () {
    $('loginfl').style.display = "none";
    addLoadEvent(function () {
        insertFlash('loginfl', 'f', 'http://ossweb-img.qq.com/images/cf/web200905/fl_login.swf', 320, 180);
        $('loginfl').style.display = "block";
        setTimeout(function () {
            $('unlogin').style.backgroundPosition = "-1000px -1000px";
        }, 100);
    });
})();
/*  |xGv00|18d2a7c09a78876801f2027ff70e8e6e */