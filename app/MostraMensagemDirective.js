angular.module("GerenciaPalestras").directive("mostraMensagem", function() {
	return {
		restrict: 'A',
		scope: {
			tipo : '=',
			mensagem : '='
		},
		template: '<div class="alert alert-{{tipo}}">{{mensagem}}</div>'
	};
});