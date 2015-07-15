var TopBarConfig = {
    isAutoShow: !1,
    isAutoShowBan: {
        "nc.163.com": 1,
        "my.163.com": 1,
        "em.163.com": 1,
        "xyf.163.com": 1,
        "zlj.163.com": 1,
        "dpsg.163.com": 1,
        "tfmz.163.com": 1,
        "ssqq.163.com": 1,
        "sq.163.com": 1,
        "ltzs.163.com": 1,
        "yhl.163.com": 1,
        "mxxc.163.com": 1,
        "xsd.163.com": 1,
        "mtj.163.com": 1,
        "zzz.163.com": 1,
        "yj.163.com": 1,
        "f1racestars.163.com": 1
    },
    isAutoShowTime: 5e3,
    isAllHide: !1,
    pvList: [{
        name: "网易秀品商城",
        link: "http://rd.da.netease.com/redirect?t=ZvrEmJ&p=pgvG0L&proId=1140&target=http%3A%2F%2Fwww.xiupin.com%2F%3Futm_source%3Dyouxi%26utm_medium%3Dguding%26utm_campaign%3Dxp"
    }, {
        name: "网易考拉海购",
        link: "http://rd.da.netease.com/redirect?t=zPL1Mj&p=Rjv6X6&proId=1024&target=http%3A%2F%2Fwww.kaola.com"
    }],
    payWordList: {
        "zgmh.163.com": "安卓充值",
        "xym.163.com": "安卓充值",
        "ldxy.163.com": "安卓充值",
        "em.163.com": "安卓充值",
        "yj.163.com": "安卓充值",
        "ltzs.163.com": "安卓充值",
        "yzr.163.com": "安卓充值",
        "tjl.163.com": "安卓充值",
        "xsd.163.com": "安卓充值",
        "txhd.163.com": "安卓充值",
        "zlj.163.com": "安卓充值",
        "mtj.163.com": "安卓充值",
        "my.163.com": "安卓充值"
    },
    piaoLeftList: {
        "xyq.163.com": 1,
        "dtws.163.com": 1,
        "lj.163.com": 1,
        "ff.163.com": 1,
        "jl.163.com": 1,
        "zh.163.com": 1,
        "em.163.com": 1,
        "sm.163.com": 1,
        "zlj.163.com": 1,
        "ssqq.163.com": 1,
        "xy3.163.com": 1,
        "y3.163.com": 1
    }
};
;
!function () {
    var t = function (t) {
        return document.getElementById(t)
    }, o = function (o, e) {
        var n = t(o), i = e, r = !1, c = 180, a = 350, s = null;
        n.onmouseover = function () {
            r = !0, clearTimeout(s), s = setTimeout(function () {
                r && (n.className = i)
            }, c)
        }, n.onmouseout = function () {
            r = !1, clearTimeout(s), s = setTimeout(function () {
                r || (n.className = "")
            }, a)
        }
    }, e = function (t) {
        return t.replace(/(^\s*)|(\s*$)/g, "")
    }, n = function (t, o, n) {
        if ("undefined" == typeof o) {
            var i = null;
            if (document.cookie && "" != document.cookie)for (var r = document.cookie.split(";"), c = 0; c < r.length; c++) {
                var a = e(r[c]);
                if (a.substring(0, t.length + 1) == t + "=") {
                    i = decodeURIComponent(a.substring(t.length + 1));
                    break
                }
            }
            return i
        }
        n = n || {}, null === o && (o = "", n.expires = -1);
        var s = "";
        if (n.expires && ("number" == typeof n.expires || n.expires.toUTCString)) {
            var l;
            "number" == typeof n.expires ? (l = new Date, l.setTime(l.getTime() + 24 * n.expires * 60 * 60 * 1e3)) : l = n.expires, s = "; expires=" + l.toUTCString()
        }
        var p = n.path ? "; path=" + n.path : "", d = n.domain ? "; domain=" + n.domain : "", m = n.secure ? "; secure" : "";
        document.cookie = [t, "=", encodeURIComponent(o), s, p, d, m].join("")
    }, i = function (o, e, i) {
        function r(t) {
            "undefined" == typeof ADBase ? window.onload = function () {
                t ? jQuery.ajax({
                    url: "/boot.html", success: function () {
                        c()
                    }, error: function () {
                        g.push("tongyong-piaochuang-9781"), c()
                    }
                }) : c()
            } : t ? jQuery.ajax({
                url: "/boot.html", success: function () {
                    c()
                }, error: function () {
                    g.push("tongyong-piaochuang-9781"), c()
                }
            }) : c()
        }

        function c() {
            return g.length ? void ADBase.config({
                pos: g.join(","), noCache: !0, callback: function (o, e) {
                    if (!o)return !1;
                    var i = e["tongyong-dingtiao-8379"], r = e["tongyong-piaochuang-9781"];
                    if (i && i[0] ? (i = i[0], t("NIE-topBar-news-link").href = i.url, t("NIE-topBar-abc-b").src = i.src, t("NIE-topBar-abc-s").src = i.thumbsrc, 1 != n("topbarnewsshow") && TopBarConfig.isAutoShow && !TopBarConfig.isAutoShowBan[window.location.host] && (a.className = l, h = setTimeout(function () {
                            a.className = ""
                        }, TopBarConfig.isAutoShowTime)), document.getElementById("NIE-topBar-news").style.display = "block", n("topbarnewsshow", "1", {expires: 1})) : document.getElementById("NIE-topBar-news").style.display = "none", r && r[0]) {
                        r = r[0];
                        var c = '<div style="position:fixed;_position:absolute;' + (TopBarConfig.piaoLeftList[window.location.host] ? "left" : "right") + ':0;bottom:0;z-index:9999;"><a href="' + r.url + '" title="' + r.title + '" target="_blank" style="display:block;line-height:0;"><img src="' + r.src + '" /></a>							<a href="javascript:void(0)" title="关闭" onclick="this.parentNode.style.display=\'none\';" style="position: absolute;right: 0;top: 0;color: white;font-weight: bolder;font-size: 14px;text-decoration: none;display: block;width: 20px;height: 20px;text-align: center;line-height: 20px;background: #444;">&times;</a></div>';
                        jQuery(document.body).append(c)
                    }
                }
            }) : !1
        }

        var a = t(o), s = t(i), l = e, p = !1, d = 180, m = 1, h = null, g = [];
        TopBarConfig.isAllHide ? document.getElementById("NIE-topBar-news").style.display = "none" : g.push("tongyong-dingtiao-8379");
        var u = window.location.pathname;
        "/" == u || "/index.html" == u ? document.body.offsetWidth < 1200 ? r() : "/index.html" == u ? (g.push("tongyong-piaochuang-9781"), r()) : r(!0) : r(), a.onmouseover = function () {
            p = !0, clearTimeout(h), h = setTimeout(function () {
                p && (a.className = l)
            }, d)
        }, a.onmouseout = function () {
            p = !1, clearTimeout(h), h = setTimeout(function () {
                p || (a.className = "")
            }, m)
        }, s.onclick = function () {
            p = !1, clearTimeout(h), a.className = ""
        }
    }, r = {
        xyq: "http://xyq.163.com/download/index.html",
        tx2: "http://tx2.163.com/reg/finish.html",
        pet: "http://pet.163.com/download/",
        csxy: "http://csxy.163.com/reg/client/",
        dt: "http://dt.163.com/download/",
        dt2: "http://dt2.163.com/download/",
        dtw: "http://dtw.163.com/download.html",
        xy2: "http://xy2.163.com/download/",
        xy3: "http://xy3.163.com/download/download.html",
        xdw: "http://xdw.163.com/download/",
        ff: "http://ff.163.com/download/",
        qn: "http://qn2.163.com/reg/client/",
        qn2: "http://qn2.163.com/reg/client/",
        jl: "http://jl.163.com/download/",
        fj: "http://fj.163.com/download.html",
        st: "http://st.163.com/yxxz/yxxz01.html",
        ball: "http://ball.163.com/",
        xyc: "http://xyc.netease.com/viewthread.php?tid=7666",
        rich: "http://rich.163.com/",
        ysg: "http://ysg.163.com/download/",
        zg: "http://server.zg.163.com/serverlist.php?from=niebar",
        sg: "http://client.sg.163.com/server_list.html",
        xjc: "http://game.xjc.163.com/",
        wh: "http://wh.163.com/download/",
        zh: "http://zh.163.com/download/"
    }, c = {
        pet: "cwwg",
        jl: "jlmc",
        dt2: "dtws",
        sg: "sgtx_web",
        zg: "ch",
        ff: "newff",
        pk: "xyw",
        tx3: "tx2",
        mkey: "mtoken",
        dtws2: "dtws",
        qn2: "qn",
        xdw: "xyw",
        y3: "dota"
    }, a = function () {
        for (var t = arguments, o = 0, e = t.length; e > o; o++)if ("undefined" == typeof t[o])return !1;
        return !0
    }, s = "undefined" != typeof nie && a(nie.config, nie.config.site) ? nie.config.site : window.location.href.replace(/^http:\/\/(.*)\.163\.com.*$/, "$1"), l = {
        xy2: "20100105dh2",
        tx3: "20110329tx2",
        qn: 1,
        zg: "canghai",
        dt: 1,
        xy3: 1,
        fkmm: 1,
        xyq: 1,
        zh: 1,
        lj: "ds",
        dota: "yxsg"
    }, p = {
        xy2: "http://xy2.163.com/reg/",
        tx3: "http://tx3.163.com/reg/",
        xdw: "http://xdw.163.com/reg/",
        dtws2: "http://dtws2.163.com/reg/",
        wh: "http://wh.163.com/reg/",
        xyq: "http://xyq.163.com/reg/",
        y3: "http://y3.163.com/reg/",
        lj: "http://lj.163.com/reg/",
        x3: "http://x3.163.com/reg/",
        zd: "http://zd.163.com/reg/",
        zdcq: "http://zdcq.163.com/reg/",
        zmq: "http://zmq.163.com/reg/",
        xy3: "http://xy3.163.com/reg/",
        zh: "http://zh.163.com/reg/",
        xc: "http://xc.163.com/reg/",
        jl: "http://jl.163.com/reg/",
        ff: "http://ff.163.com/reg/"
    }, d = {xy2: "http://zs.163.com/xy2/"}, m = {xy2: "新大话2助手"};
    ecardLink = "http://ecard.163.com/script/index" + (a(l[s]) ? "?platform=" + (1 == l[s] ? s : l[s]) : ""), regProductID = a(c[s]) ? c[s] : s, regUrl = encodeURIComponent(a(r[s]) ? r[s] : "http://" + s + ".163.com"), regPage = p[s] ? p[s] : "http://reg.163.com/reg/reg.jsp?product=" + regProductID + "&url=" + regUrl + "&loginurl=" + regUrl, zsLink = d[s] ? d[s] : "http://zs.163.com/app/index.html", zsName = m[s] ? m[s] : "游戏云助手", new function () {
        t("global_gp_reg").href = regPage, t("global_gp_card").href = ecardLink, t("global_gp_zs").href = zsLink, t("global_gp_zs").innerHTML = zsName;
        var o = TopBarConfig.payWordList[window.location.host] || "购卡充值";
        document.getElementById("global_gp_card").innerHTML = o, t("global_gp_mid").style.display = "block";
        var e = Math.random() >= .5 ? 0 : 1, n = t("NIE-topBar-right").getElementsByTagName("a")[0];
        n.href = TopBarConfig.pvList[e].link, n.innerHTML = TopBarConfig.pvList[e].name, setInterval(function () {
            n.className = "fadeUp", e = !e + 0, setTimeout(function () {
                n.className = "none", n.href = TopBarConfig.pvList[e].link, n.innerHTML = TopBarConfig.pvList[e].name, setTimeout(function () {
                    n.className = "fadeUp2"
                }, 50)
            }, 400)
        }, 5e3)
    }, new o("NIE-topBar-menu", "NIE-topBar-menu-hover"), new i("NIE-topBar-news", "NIE-topBar-news-hover", "NIE-topBar-news-close"), r = p = c = l = regPage = regUrl = regProductID = null
}();