const vid = document.getElementById("projectVideo");
const spans= document.querySelectorAll("span.videoCaptions");




vid.addEventListener("timeupdate", ()=>{
  for (let i = 0; i < spans.length; i += 1 ) {
    if(parseFloat(spans[i].dataset.start) < vid.currentTime && vid.currentTime < parseFloat(spans[i].dataset.end)){
      spans[i].style.color = "darkorange";
    } else {
      spans[i].style.color = "black";
    }
  }
})
