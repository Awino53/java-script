const header=document.querySelector("header")
const main=document.querySelector("main")
const toggleModeButton=document.querySelector("#toggler")

toggleModeButton.addEventListener("click",function(){
    if(toggleModeButton.classList.contains("dark-mode-btn")){
    //were in dark mode---change to light mode
    toggleModeButton.classList.remove("dark-mode-btn");
    header.classList.remove("dark-header");
    main.classList.remove("dark-main");
    toggleModeButton.textContent="dark Mode"
}else{
    //were in light mode---change to dark mode
    toggleModeButton.classList.add("dark-mode-btn");
    header.classList.add("dark-header");
    main.classList.add("dark-main");
    toggleModeButton.textContent="Light Mode"
}   
})

setTimeout(function(){
    document.getElementById("sign-in").classList.remove("hidden")
},4000)

document.getElementById("close").addEventListener("click",()=>{
    document.getElementById("sign-in").classList.add("hidden")
})
//js allows us to manipulate elements text content, inner html,properties(class,id,name,src,href..),handle events
//builde an image slider with html css and js--