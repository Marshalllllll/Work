const userId = "Marshalllllll";
function fetchUserInfo(userId){
fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
    .then(response => {
        console.log(response.status); // => 200
        //エラーレスポンスが返されたことを検知する。
        if (!response.ok){
            console.error("エラーレスポンス",response);
        }else{
        return response.json().then(userInfo => {
            // JSONパースされたオブジェクトが渡される
            console.log(userInfo); // =>{...}
        });
    }
    }).catch(error => {
        console.error(error);
    });
}