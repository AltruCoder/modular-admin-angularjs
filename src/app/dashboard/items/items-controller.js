/*
*	Controller for items 
*/

modularAdmin.app

.controller("DashboardItemsListCtrl", function($log, itemsService) {

	var vm = this;

	itemsService.get()

	.then(function(data){
		vm.items = data.items;
	});

	$log.log("In DashboardItemsList controller");

});