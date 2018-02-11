function getMeasurement() {
    $.getJSON("http://api.health.nokia.com/measure?action=getmeas&oauth_consumer_key=1656440ecde8b457e38cfc6c41575f3e923c14f54c5d720ff241e645410&oauth_nonce=0330a6c75fdf1100f0a51458319aae00&oauth_signature=Cx9g%2BDp%2FTpVmrYWdkEnWR4AM2QM%3D&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1518365695&oauth_token=bc65e71500d10485dd513f43f89f8b3e79e1837b9d568782d1679b67b5&oauth_version=1.0&userid=15141625",
        function(data, status) {
            // console.log(data);

            var weightKG = data.body.measuregrps[0].measures[0].value * Math.pow(10, data.body.measuregrps[0].measures[0].unit);
            var dateUnixEpoch = data.body.measuregrps[0].date;
            var dateLocal = new Date(data.body.measuregrps[0].date * 1000).toLocaleDateString('hu');
            console.log('------------------------------------');
            console.log(data.body.measuregrps[0]);
            console.log(dateLocal);
            console.log(weightKG + " kg");
            console.log('------------------------------------');

            console.log('------------------------------------');

            setProgress((138 - Math.floor(weightKG)) * 4, progress)
            console.log(progress);
            console.log('------------------------------------');
        });
}

getMeasurement();