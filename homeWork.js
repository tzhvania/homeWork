/**
 * Created by lunaa on 10/2/2014.
 */
var app = angular.module('MyApplication', [])
var ctrl = app.controller('MyController', function ($scope) {

	$scope.elements = [

		{'title': 'pirveli', 'text': 'jandaba' },
		{'title': 'meore', 'text': 'jandabasdasda' },
		{'title': 'mesame', 'text': 'jandaasdasdasdasdba' },
		{'title': 'meotxe', 'text': 'jaasdasdasdasdndaba' },
		{'title': 'mexute', 'text': 'janasdsdasasddaba' }

	];
});