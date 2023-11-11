const searchButton = document.querySelector(".searchbtn");
const input = document.querySelector("input");

const user = document.querySelector(".githubUser");
const login = document.querySelector(".githubUserName");
const joined = document.querySelector(".githubJoinedDate");
const gitBio = document.querySelector(".githubBio");
const repo = document.querySelector(".repoTotal");
const follower = document.querySelector(".followerTotal");
const following = document.querySelector(".followingTotal");
const locations = document.querySelector(".locations");
const twit = document.querySelector(".twit");
const websites = document.querySelector(".websites");
const companies = document.querySelector(".companies");


let img = document.createElement("img");
let imgContainer = document.querySelector(".mainImg");

searchButton.addEventListener("click", (()=>{
    const url = `https://api.github.com/users/${input.value}`;
    async function getUserData(){
    const res = await fetch(url)
    const data = await res.json();
    const dateData = data.created_at.slice(0, data.created_at.length);

    img.src = data.avatar_url;
    imgContainer.appendChild(img);
    imgContainer.style.border = "none";

    user.innerHTML = data.name;
    login.innerHTML = `@${data.login}`;
    joined.innerHTML = `joined ${dateData}`;
    repo.innerHTML = data.public_repos;
    follower.innerHTML = data.followers;
    following.innerHTML = data.following;

    gitBio.innerHTML = 
    data.bio === "" || data.bio === null ? "This profile has no bio..." : data.bio;
    twit.innerHTML = 
    data.twitter_username === "" || data.twitter_username === null ? "No Twitter" : data.twitter_username;
}
    input.value = "";
    getUserData()
}))

const toggle = function (e) {
    if (e.currentTarget.classList.contains("light--hidden")){
        document.documentElement.setAttribute("color-mode", "light");
        localStorage.setItem("color_mode", "light")
        return;
    }
    else {
        document.documentElement.setAttribute("color-mode", "dark")
        localStorage.setItem("color_mode", "dark")
    }
}

const toggleColorButtons = document.querySelectorAll(".color-mode__btn");
toggleColorButtons.forEach((btn)=>{
    btn.addEventListener("click", toggle);
})








