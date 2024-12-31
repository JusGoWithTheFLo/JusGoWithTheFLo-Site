const sidebar = document.querySelector(".sidebar");
function sidebar_open(){
    sidebar.style.display = "flex";
    document.querySelector(".header").style.display = "none";
}

function sidebar_close(){
    sidebar.style.display = "none";
    document.querySelector(".header").style.display = "flex";
}