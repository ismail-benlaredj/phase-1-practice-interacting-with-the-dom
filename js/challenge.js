const counter = document.getElementById("counter"),
    minus = document.getElementById("minus"),
    plus = document.getElementById("plus"),
    heart = document.getElementById("heart"),
    pause = document.getElementById("pause"),
    restart = document.getElementById("restart"),
    commentslist = document.getElementById("list"),
    commentForm = document.getElementById("comment-form"),
    likesList = document.querySelector(".likes")



const incrementTimer = () => {
    // counter.innerText - 0 => to convert string to intger
    counter.innerText = (counter.innerText - 0) + 1
}
let TimerId = setInterval(incrementTimer, 1000);


pause.addEventListener("click", () => {
    if (TimerId != -1) {
        clearInterval(TimerId)
        pause.innerText = "resume"
        plus.disabled = true
        heart.disabled = true
        minus.disabled = true
        TimerId = -1
    } else {
        counter.innerText = (counter.innerText - 0) + 1
        TimerId = setInterval(incrementTimer, 1000)
        pause.innerText = "pause"
        plus.disabled = false
        heart.disabled = false
        minus.disabled = false
    }
});


plus.addEventListener("click", () => {
    counter.innerText = (counter.innerText - 0) + 1
});
minus.addEventListener("click", () => {
    counter.innerText = (counter.innerText - 0) - 1
});
restart.addEventListener("click", () => {
    counter.innerText = 0
})

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const comment = e.target.querySelector('input').value;
    e.target.querySelector('input').value = ""
    const p = document.createElement("p");
    p.innerHTML += comment;
    commentslist.appendChild(p);
})


let counterChanged = "0",
    elementsObj = {}
heart.addEventListener("click", () => {
    if (elementsObj[counter.innerText]) {
        elementsObj.likes += 1
        elementsObj.elem.innerText = `${counter.innerText} liked ${elementsObj.likes} times`
    } else {
        const li = document.createElement("li")
        elementsObj[counter.innerText] = true
        elementsObj.likes = 1
        li.innerText = `${counter.innerText} liked ${elementsObj.likes} times`
        elementsObj.elem = li
        likesList.appendChild(li)
    }

});
