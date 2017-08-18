(function () {
	'user strict'

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController) 
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService) {
		var list1 = this;

		list1.toBuy = ShoppingListCheckOffService.getToBuy();
		
		list1.AlreadyBoughtItems = function(itemIndex){

			ShoppingListCheckOffService.AlreadyBoughtItems(itemIndex);
			
		}; 


		
		
	}


	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var list2 = this;

		list2.bought= ShoppingListCheckOffService.getBoughtItems();

	}


	function ShoppingListCheckOffService(){
		 var service = this;

		 var toBuy = [
		 	{
		 		item : "Cookies",
		 		quantity : 3
		 	},
		 	{
		 		item : "Eggs",
		 		quantity : 12
		 	},
		 	{
		 		item : "Chocolates",
		 		quantity : 10
		 	},
		 	{
		 		item : "Juices",
		 		quantity : 3
		 	},
		 	{
		 		item : "Icecream",
		 		quantity : 10
		 	}
		 ];
	
		 var bought = [];
	
		 
		 service.getToBuy = function(){
		 	return toBuy;
		 };

		 service.getBoughtItems = function(){
		 	return bought;
		 };
		 

		 service.AlreadyBoughtItems = function(itemIndex){
		 	
		 	item = toBuy.splice(itemIndex,1);
		 	
			bought.push(item[itemIndex]);
		 	
		
		 };

		 
	}


})();


