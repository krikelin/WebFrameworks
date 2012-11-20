/****
Web Framwork preview Polyfill
***/
(function () {
	
	window.addEventListener("load", function () {
		var root = document.frameworkRoot = document.querySelector("meta[name='ms:framework_root']").getAttribute("content");
		if(!root || root == undefined || typeof(root) == 'undefined')
			throw "Root meta not set";
		
		assignFramework(root, "link", "href", "$");
		assignFramework(root, "script", "src", '$');

	});

	function assignFramework(root, element, attr, token) {
		var scripts = document.querySelectorAll(element);
		
		for(var i = 0 ; i < scripts.length; i++) {
			var script = scripts[i];
			var parent = script.parentNode;
			var newElm = document.createElement(element);
			var src = script.getAttribute(attr);
			newElm.setAttribute(attr, root + src.replace(token, ''));
			console.log(newElm);
			parent.appendChild(newElm);
		}
	}
})();