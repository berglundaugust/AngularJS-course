
var app = angular.module("sortApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "view/home.html",
            controller: "sortController"
        })

        .when("/list", {
            templateUrl: "view/list.html",
            controller: "sortController"
        })
});

app.controller("sortController", function ($scope) {

    var products = [
        { vendor: "Crecent", productname: "MTB", category: "MTB", shortdescription: "Metallic", price: 2900 , instock : 20, instockdate: new Date("2019-03-05")  },
        { vendor: "Crecent", productname: "City cruiser", category: "Bikes", shortdescription: "Blue", price: 2900 , instock : 1, instockdate: new Date("2019-03-04")  },
        { vendor: "Crecent", productname: "Three wheeler", category: "Bikes", shortdescription: "Gray", price: 2900 , instock : 14, instockdate: new Date("2019-03-01")  },
        { vendor: "Scott", productname: "MTB", category: "MTB", shortdescription: "Black", price: 4000 , instock : 12, instockdate: new Date("2019-03-02")  },
        { vendor: "Scott", productname: "City cruiser", category: "Bikes", shortdescription: "Yellow", price: 4000 , instock : 44, instockdate: new Date("2019-03-02")  },
        { vendor: "Scott", productname: "Three wheeler", category: "Bikes", shortdescription: "Red", price: 4000 , instock : 2, instockdate: new Date("2019-03-01")  },
        { vendor: "Scott", productname: "MTB", category: "MTB", shortdescription: "Brown", price: 4000 , instock : 3, instockdate: new Date("2019-03-04")  },
        { vendor: "Merida", productname: "MTB", category: "MTB", shortdescription: "Spacegray", price: 6000 , instock :20, instockdate: new Date("2019-03-02")  },
        { vendor: "Merida", productname: "City Cruiser", category: "Bikes", shortdescription: "Metallic red", price: 6000 , instock : 20, instockdate: new Date("2019-03-05")  },
        { vendor: "Merida", productname: "Three wheeler", category: "Bikes", shortdescription: "Pink", price: 6000 , instock : 20, instockdate: new Date("2019-03-01")   }
    ];

    $scope.products = products;






});




