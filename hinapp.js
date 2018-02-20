var app = angular.module("myApp",[]);

app.controller("myCtrl",function($scope,$http) 
{

 $('#myModal').modal('show');
 
	var courseOptions = ["U.G Programes", "P.G Programes","Integrated Programes","Research Programes"];
	var streamOptions = [["Aeronatical Engineering(B.Tech)","Automobile Engineering(B.Tech)","Chemical Engineering(B.Tech)",
			"Civil Engineering(B.Tech)","Computer Science & Engineering(B.Tech)","Electronics & Comunication Engineerin(B.Tech)",
				"Electrical & Electronics Engineering(B.Tech)","Electronics and Instrumentation Engineering (B.Tech)",
				"Information Technology (B.Tech)","Mechanical Engineering (B.Tech)","B.B.A","B.Com","B.Sc","B.C.A","B.Arch"],
               ["Aeronatical Engineering(M.Tech)","Automobile Engineering(M.Tech)","Civil Engineering(M.Tech)",
               "M.B.A","Centre for Automation and Robotics(ANRO)","Computer Science and Engineering (M.Tech)",
               "Electrical and Electronics Engineering (M.Tech)","Electronics and Communication Engineering (M.Tech)",
               "Electronics and Instrumentation Engineering (M.Tech)","Information Technology (M.Tech)","Mechanical Engineering (M.Tech)",
               "M.C.A","M.A","M.Arch (Executive)"],
               ["B.Tech.MTM(5-1/2 year Integrated Programme)","M.Tech.Construction Engineering and Management"],["CENCON",
               "CDTS","Centre for Automation and Robotics(ANRO)"]];
    var branchOptions = [[["Aeronautical Engineering","Aerospace Engineering"],["Automobile Engineering"],["Chemical Engineering",
    	"Biotechnology"],["Civil Engineering"],["CSE","Enterprise Information System","Information Security"],
    	["ECE"],["EEE"],["Electronics and Instrumentation"],["Information Technology"],["Mechanical Engineering"],
    	["B.B.A(General)"],["B.Com (General)"],["Fashion Design & Arts","Visual Communication"],["B.C.A (General)"],
    	["B.Arch"]],
		[["Aeronautical Engineering"],["Automobile Engineering"],["Civil Engineering"],["General"],["M.Tech on Robotics and Control"],
		["Communication Science and Engineering"],["Electrical and Electronics Engineering"],["Electronics and Communications Engineering"],
		["Electronics and Instrumentation Engineering"],["Information Technology"],["Mechanical Engineering"],["M.C.A General"],
		["M.A. English Language and Communication"],["M.Arch General","M.Arch Housing"]],
		[["B.Tech.MTM(5-1/2 year Integrated Programme)"],["M.Tech.Construction Engineering and Management"]]
		[["M.Tech in Nano Technology"],["MBA Defence Technology Management"],["M.Tech on Robotics and Control"]]];


               	$scope.courses = courseOptions;
               	$scope.streams = [];
               	$scope.branches = [[]];

               	$scope.getStreams = function(){
               		 var key = $scope.courses.indexOf($scope.course);
               		 var myNewOptions = streamOptions[key];
               		 $scope.streams = myNewOptions;
       
               	}

               	$scope.getBranches = function(){
               		var key = $scope.courses.indexOf($scope.course);
               		var key1 = $scope.streams.indexOf($scope.stream);

               		var myNewOptions = branchOptions[key][key1];
               		$scope.branches = myNewOptions;

               	};


		$scope.submitData = function(){
      $http.post( 
        
          "insert.php",
          {'name':$scope.name, 'mobile':$scope.mobile, 'email':$scope.email, 'course':$scope.course, 'stream':$scope.stream, 'branch':$scope.branch}
      ).success(function(data){

                

          $scope.name = null;
          $scope.mobile = null;
          $scope.email = null;
          $scope.course = null;
          $scope.stream = null;
          $scope.branch = null;
      });
    }


});

