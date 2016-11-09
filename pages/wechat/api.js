var wAlert = window.alert;  
window.alert = function (message) {  
    try {  
        var iframe = document.createElement("IFRAME");  
        iframe.style.display = "none";  
        iframe.setAttribute("src", 'data:text/plain,');  
        document.documentElement.appendChild(iframe);  
        var alertFrame = window.frames[0];  
        var iwindow = alertFrame.window;  
        if (iwindow == undefined) {  
            iwindow = alertFrame.contentWindow;  
        }  
        iwindow.alert(message);  
        iframe.parentNode.removeChild(iframe);  
    }  
    catch (exc) {  
        return wAlert(message);  
    }  
}  
var wConfirm = window.confirm;  
window.confirm = function (message) {  
    try {  
        var iframe = document.createElement("IFRAME");  
        iframe.style.display = "none";  
        iframe.setAttribute("src", 'data:text/plain,');  
        document.documentElement.appendChild(iframe);  
        var alertFrame = window.frames[0];  
        var iwindow = alertFrame.window;  
        if (iwindow == undefined) {  
            iwindow = alertFrame.contentWindow;  
        }  
        iwindow.confirm(message);  
        iframe.parentNode.removeChild(iframe);  
    }  
    catch (exc) {  
        return wConfirm(message);  
    }  
} 
//微信登录
function Login(code){
    var ajax = $.ajax({
        url:"/index.php/MatchAdmin/wechat/Login",
        type:"POST",
        data:{
            "code":code
        },
        success: function(data){
        	
        },
        error: function(){
             
        }
    });
    return ajax;
}
//微信授权
function getSignPackage(url){
    var ajax = $.ajax({
        url:"/index.php/MatchAdmin/wechat/getSignPackage",
        type:"POST",
        data:{
            "url":url
        },
        success: function(data){        
        },
        error: function(){            
        }
    });
    return ajax;
}
//微信分享
function shareConfig(title, desc, link, imgUrl) {
    var config = {
        title: title,
        desc: desc,
        link: link,
        imgUrl: imgUrl,
        success: function() {
            
        },
        cancel: function() {

        }
    };
    var config2 = {
        title: title,
        desc: "",
        link: link,
        imgUrl: imgUrl,
        success: function() {
            
        },
        cancel: function() {

        }
    };
    wx.ready(function(data) {
        // 朋友圈
        wx.onMenuShareTimeline(config2);
        // 朋友
        wx.onMenuShareAppMessage(config);
        // QQ
        wx.onMenuShareQQ(config);
        // 腾讯微博
        wx.onMenuShareWeibo(config);
        // QQ空间
        wx.onMenuShareQZone(config);
    });
}
//投票
function Vote(id){
    var ajax = $.ajax({
        url:"/index.php/MatchAdmin/wechat/Vote",
        type:"POST",
        data:{
            "id":id
        },
        success: function(data){
          alert(data.detail)  
        },
        error: function(){
             
        }
    });
    return ajax;
}