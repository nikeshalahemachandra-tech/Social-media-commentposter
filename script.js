let liked = false;
let likeCount = 0;

    const btn1 = document.getElementById("likeBtn");
    btn1.addEventListener("click", () =>{
        console.log("Button clicked");
    });

    function toggleLike(){
        const btn = document.getElementById("likeBtn");
        const countText = document.getElementById("likeCount");


        if(!liked){
            likeCount++;
            btn.classList.add("liked");
            btn.textContent = "Liked";
            liked = true;

        } else{
            likeCount--;
            btn.classList.remove("liked")
            btn.textContent = "Like";
            liked =false;
        }

        countText.textContent =likeCount + (likeCount === 2  ?   "Like"  :  "Likes");
    }