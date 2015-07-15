var userInfoModule = angular.module("userInfoModule",[]);

userInfoModule.controller('useInfoController',['$scope',function($scope){
    $scope.useInfo={
        email:'83387856@qq.com',
        password:'hpandlp8187',
        autoLogin:true
    }

    $scope.getFormData =function(){
        console.log($scope.useInfo)
    }

    $scope.setFormData=function(){
        $scope.useInfo={
            email:"aaaa@qq.com",
            password:'bb',
            autoLogin:false
        }
    }

    $scope.resetFormData=function(){
        $scope.useInfo={
            email:'',
            password:'',
            autoLogin:false
        }
    }
}])