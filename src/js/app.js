var app = angular.module('app',["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url: '/index',
            views: {
                '': {
                    templateUrl: 'html/main.html'
                },
                'header@index': {
                    templateUrl: 'html/header.html'
                }
            }
        })
        // .state('booklist', {
        //     url: '/{bookType:[0-9]{1,4}}',
        //     views: { //注意这里的写法，当一个页面上带有多个ui-view的时候如何进行命名和视图模板的加载动作
        //         '': {
        //             templateUrl: 'tpls/bookList.html'
        //         },
        //         'booktype@booklist': {
        //             templateUrl: 'tpls/bookType.html'
        //         },
        //         'bookgrid@booklist': {
        //             templateUrl: 'tpls/bookGrid.html'
        //         }
        //     }
        // })
        // .state('addbook', {
        //     url: '/addbook',
        //     templateUrl: 'tpls/addBookForm.html'
        // })
        // .state('bookdetail', {
        //     url: '/bookdetail/:bookId', //注意这里在路由中传参数的方式
        //     templateUrl: 'tpls/bookDetail.html'
        // })
});