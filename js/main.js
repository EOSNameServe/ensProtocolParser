$(document).ready(function(){

    chrome.tabs.query({
        active: true,
        currentWindow: true
        }, (tabs) => {

        function goToTargetPage () {   
            let contractName = $('#ensProtocolUrl').val() || ''
            
<<<<<<< HEAD
            if(contractName.length <= '12'){
=======
            if(contractName.length == '12'){
>>>>>>> b1ea5a4ac803e0394019a76c72fda8b7d29938e9
                let api = `https://node.eosflare.io/v1/chain/get_table_rows`
                let parameters = {
                    "scope":contractName,// 用户输入的名字
                    "code":"enserve.bank",// 写死
                    "table":"enstables",// 写死
                    "json":"true"// 写死
                }
                $('.loading').css('display','block')
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
                    $('.loading').css('display','none')
                }).fail(function(err){
                    alert(err)
                    $('.loading').css('display','none')
                })
            }else {
                alert('不能大于 12 位')
            }
        }

        $("#ensProtocolUrl").on("keydown", function (e) {
                if(e.keyCode == 13) {
                    goToTargetPage();
                }
            });
        });

});
