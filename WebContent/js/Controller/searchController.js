angular.module('searchModule', ['searchModule']) 

function searchController($scope, $http) {
	  $scope.notices = [
	                   {"header":"Notice 1", "desc":"임시데이터 테스트를 해볼까"},
	                   {"header":"Notice 2", "desc":"가라데이터는 가짜데이터"},
	                   {"header":"Notice 3", "desc":"왜 연동은 안되고 있는것일까-그건 크로스 도메인 때문이었어"}
	                   ];
	  $scope.searchResults;
	  $scope.search = function() {
		  $scope.q = $scope.searchKeywd ;
		  $('#notice-panel').attr('hidden','true');
		  $('search-result').removeAttr('hidden');
		    
		  $http({
		  	method: 'get',
		  	url: 'http://58.229.240.117:8983/solr/gettingstarted/select?q='+$scope.q+'&wt=json&indent=true',
		  	header: {'content-Type':'appliction/json; charset=utf-8'}
		  })
		  .success(function(data){
		  	//alert("test success");
		  	$scope.searchResults = data.response.docs;
		  	href: 'localhost:8080/TestSearchResult.html'
		  	//alert($scope.searchResults)
		  })
		  .error(function(data){
		  	alert("통신에 오류가 있습니다. 잠시 후 다시 시도해주세요.");
		  });
		};
  }
