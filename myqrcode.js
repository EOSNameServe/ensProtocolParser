$(document).ready(function(){

    let currentUrl;

    chrome.tabs.query({
        active: true,
        currentWindow: true
        }, (tabs) => {
        currentUrl = tabs[0].url;
        console.log(currentUrl);

        $('#text').val(currentUrl);

        var qrcode = new QRCode(document.getElementById("qrcode"), {
        width : 100,
        height : 100
        });

        function makeCode () {      
            var inputUrl = document.getElementById("text");
            qrcode.makeCode(inputUrl.value);
        }

        makeCode();

        $("#text").
            on("blur", function () {
                makeCode();
            }).
            on("keydown", function (e) {
                if (e.keyCode == 13) {
                    makeCode();
                }
            });
        });

});
