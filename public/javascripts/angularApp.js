(function() {
	var app = angular.module('store', ['store-products']);	

	app.controller('StoreController', function() {
		this.products = gems;
	});

	app.controller('PanelController', function() {
		this.tab = 1;
		this.selectTab = function(setTab) {
			this.tab = setTab;
		};
		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});

	app.controller('ReviewController', function() {
		this.review = {};

		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
		};
	});

//tried to use a directive template that included a controller. Don't know how to deal with nested controllers though and 
//html of template did not recognize already established created directives. 

	// app.directive('productPanels', function() {
	// 	return {
	// 		restrict: 'E',
	// 		templateUrl: '/templates/product-panels.html',
	// 		controller: function () {
	// 			this.tab = 1;
	// 			this.selectTab = function(setTab) {
	// 				this.tab = setTab;
	// 			};
	// 			this.isSelected = function(checkTab) {
	// 				return this.tab === checkTab;
	// 			};
	// 		},
	// 		controllerAs: 'panel'
	// 	};
	// });

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2.95,
			description: 'This is truly one of the greatest pieces that this gem store has to over!',
			canPurchase: true,
			soldOut: false,
			images: {
				full: "/images/dodecahedron.jpg",				
				thumb: ""
			},
			reviews: [
			{
				stars: 4,
				body: "I love this product!!!",
				author: "Austin Wilson"
			},
			{
				stars: 5,
				body: "Wow!",
				author: "Sam Eagleson"
			},
			{
				stars: 0,
				body: "Stupid! Don't buy!",
				author: "Joe"
			}
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: "Great to show her you care without having to break the bank! One of our best sellers!",
			canPurchase: true,
			soldOut: false,
			images: {
				full: "/images/pentagonal.png",
				thumb: ""
			},
			reviews: [
			{
				stars: 2,
				body: "This was awful! Don't by it! I don't think I would want to buy from them every again!",
				author: "Sabrina Bainbridge"
			}
			]
		}
	];
})();


