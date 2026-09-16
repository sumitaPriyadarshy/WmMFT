var isCloud = false;
isCloudMode = function(){
    var rndm = Math.random();
    var obj = {
        command: "isCloudMode",
        random: rndm
    }; /* Make a call and receive list */
    $.ajax({
        type: "POST",
        url: "/WebInterface/function/",
        data: obj,
        error: function () {
            $(document).data("isCloudMode",false);
            isCloud = false;
        },
        success: function (response) {
            $(document).data("isCloudMode",response==="true");
            isCloud = response==="true";
            if(isCloud){
                //$(document).prop('title', 'webMethods.io MFT WebClient');
                //$('#privacyPolicy').prop('href','https://www.softwareag.com/en_corporate/cloud_privacy_policy.html');
            }
        }
        });
}
isCloudMode();