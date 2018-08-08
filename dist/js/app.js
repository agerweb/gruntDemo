console.log(1);;
console.log(2);;
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Demo = function () {
	function Demo(name) {
		_classCallCheck(this, Demo);

		this.name = name;
	}

	_createClass(Demo, [{
		key: "getName",
		value: function getName() {
			console.log(this.name);
		}
	}]);

	return Demo;
}();

var m = new Demo1("xixi");

m.getName();
