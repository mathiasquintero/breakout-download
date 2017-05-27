app.controller('DownloadCtrl', function($scope, $routeParams, $http) {

    $http.get("https://backend.break-out.org/posting/" + $routeParams.id + "/").then(function(res) {
        var media = res.data.media;
        if (media.length > 0) {
            var sizes = media[0].sizes;
            var size = sizes[sizes.length - 1];
            var url = size.url;
            window.open(url, 'Download'); 
        } else {
            console.log("No media!");
        }
    }, function(err) {
        console.error(err);
    });

});
