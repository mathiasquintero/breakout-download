app.controller('DownloadCtrl', function($scope, $routeParams, $http) {

    $http.get("https://backend.break-out.org/posting/" + $routeParams.id + "/").then(function(res) {
        var media = res.data.media;
        if (media.length > 0) {
            var url = media[0].url;
            var a = document.createElement('a');
            a.download = url; // Set the file name.
            a.style.display = 'none';
            a.href = url;
            document.body.appendChild(a);
            a.click();
        } else {
            console.log("No media!");
        }
    }, function(err) {
        console.error(err);
    });

});
