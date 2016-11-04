var retCodes = {
    success : "0",
    nonLogin : "10000",
    expired: "10004",
    beReplaced: "10016"
}

const LOGIN_ERROR = "LOGIN_ERROR_0"
var hasNonLoginError = false

var ajaxP = function(url){
	return Promise.resolve($.ajax({
		url: url
	})).then(function(res){
		if (res.state == retCodes.success) {
			hasNonLoginError = false
			return Promise.resolve(res.order)
		} else if (res.state == retCodes.nonLogin || 
            res.state == retCodes.expired || 
            res.state == retCodes.beReplaced) {
			return Promise.reject(new Error(LOGIN_ERROR))
		} else {
			return Promise.reject(new Error(res.detail))
		}
	}).catch(function(e){
		if (e.message == LOGIN_ERROR) {
		    if (!hasNonLoginError) {
		        hasNonLoginError = true
		    } else {
		        return
		    }
		    alert('处于未登录状态, 请登录')
		    window.location.hash = 'sign_in.html'
		}
		return Promise.reject(e)
	})
}