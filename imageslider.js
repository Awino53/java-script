const items=document.querySelectorAll(".item")
console.log(items[1]);

let currentSlide=0
function nextSlide(nextSlide){
    //make sure current slide is within limit of number of slides(length of items-1)
    if(nextSlide>=items.length){
        currentSlide=0
    }else if(nextSlide<0){
        currentSlide= items.length-1

    }else{
           currentSlide = nextSlide
    }
    //removes class active from any of the items currently active
    items .forEach(item=>{
        if(item.classList.contains("active")){
            item.classList.remove("active")
        }
    })
    //set only the current slide
    items[currentSlide].classList.add("active")
}

setInterval(()=>{
    nextSlide(currentSlide+1)
},2000)
document.querySelector("#next").addEventListener("click",()=>{
    nextSlide(currentSlide+1)
})

document.querySelector("#prev").addEventListener("click",()=>{
    nextSlide(currentSlide-1)
})

