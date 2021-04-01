let req = new XMLHttpRequest();

req.open('GET', 'https://api.github.com/users/Azevedo-Erick');

function loadText(element, value){
    document.getElementById(element).innerHTML=value;
}

function imageOption(id,result) {
    document.getElementById(id).src = result;
}

req.onreadystatechange = () => {
    if(req.readyState == 4) {
        if(req.status == 200) {
            let result = JSON.parse(req.responseText);
            console.log(result);
            window.onload = imageOption("Avatar_url" ,result.avatar_url + "");
            console.log(document.getElementById("Followers"))
            window.onload = loadText("Folowers", result.followers + "");
            window.onload = loadText("Public_Repos", result.public_repos + "");
            window.onload = loadText("Folowing", result.following + "");
            window.onliad = loadText("user-name", result.name + "")
            window.onliad = loadText("name-username", "@"+result.login)
        }
    }
};

req.send();