(function (global) {
	// set up a namespace for our utility
	var ajaxUtils = {};

	// Returns an HTTP request object
	function getRequestObject() {
		if (window.XMLHttpRequest) {
			return (new XMLHttpRequest());
		}
				else {global.alert("Ajax is not supported!");
		return(null);
	}
}

var request = getRequestObject();
var myhandler = null;
// makes an ajax get request to 'requestUrl'
ajaxUtils.sendGetRequest = 
function(requestUrl, responseHandler) {
	myhandler = responseHandler;
	request.onreadystatechange = 
	function() {
		handleResponse(request, responseHandler);
	};
	request.open("Get", requestUrl, true);
	request.send(null); // for post only
};

function handleResponse(request, responseHandler) {
	if ((request.readyState == 4) &&(request.status == 200)) {
		responseHandler(request);
	}
}


//expose utility to the global object
global.$ajaxUtils = ajaxUtils;

})(window);