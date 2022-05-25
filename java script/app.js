const arrows = document.querySelectorAll(".arrow");
const movielists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow,i)=>{
            const ratio = Math.floor(window.innerWidth/270);
        const itemNumber = movielists[i].querySelectorAll("img").length;
        let clickCounter = 0;
    arrow.addEventListener("click", () => {
        clickCounter++;
         if(itemNumber - (4 + clickCounter) + (4 - ratio)  >= 0 ) {
         movielists[i].style.transform = `translatex(${
            movielists[i].computedStyleMap().get("transform")[0].x.value -370
         }px)`;      
        } else{
          movielists[i].style.transform  = "translatex(0)"
          clickCounter = 0;
        }
      });
    console.log(Math.floor(window.innerWidth/270));
});

