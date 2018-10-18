$(document).ready(function(){

    chrome.tabs.query({
        active: true,
        currentWindow: true
        }, (tabs) => {

        

        function goToTargetPage () {   
            let inputUrl = $('#ensProtocolUrl').val() || ''
            let contractName = inputUrl.substring(6)
            
            if(inputUrl.includes('ens://') && contractName.length == '12'){
                let api = `https://node.eosflare.io/v1/chain/get_table_rows`
                let parameters = {
                    "scope":contractName,// 用户输入的名字
                    "code":"enserve.bank",// 写死
                    "table":"enstables",// 写死
                    "json":"true"// 写死
                }
                $.ajax({
                    url : api,
                    type : 'POST',
                    data : JSON.stringify(parameters),
                    contentType: "application/json",
                })
                .done(function(res){
                    let targetUtl = (res.rows[0] || {}).dapp
                    if(targetUtl){
                        window.open(targetUtl)
                    }else{
                        let r = confirm("need to bind")
                        if (r==true){
                            window.open(`https://github.com/flyer88/ENS`)
                        }else {
                            return
                        }
                    }
                }).fail(function(err){
                })
            }else {
                alert('Unexpected Format')
            }
        }

        $("#ensProtocolUrl").on("keydown", function (e) {
                if(e.keyCode == 13) {
                    goToTargetPage();
                }
            });
        });

});
