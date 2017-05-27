app.controller('DownloadCtrl', function($scope, $routeParams, $http) {

    $http.get("https://backend.break-out.org/posting/" + $routeParams.id + "/").then(function(res) {
        var media = res.data.media;
        if (media.length > 0) {
            var sizes = media[0].sizes;
            var size = sizes[sizes.length - 1];
            var url = size.url;
            var a = document.createElement('a');
            a.download = url; // Set the file name.
            a.style.display = 'none';
            a.href = url;
            document.body.appendChild(a);
            a.click();
            delete a;
        } else {
            console.log("No media!");
        }
    }, function(err) {
        console.error(err);
    });

});
