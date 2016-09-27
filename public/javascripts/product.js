(function() {
	var app = angular.module('store-products', []);

	app.directive('productTitle', function() {
		return {
			restrict: 'E',
			templateUrl: '/templates/product-title.html'
		};
	});

	app.directive('productDescription', function() {
		return {
			restrict: 'E',
			templateUrl: '/templates/product-description.html'
		};
	});

})();	

