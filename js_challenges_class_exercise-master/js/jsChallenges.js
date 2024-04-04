document.querySelector("#subscribe").addEventListener("click", function() {
    console.log("this works");
    if (this.checked) {
        document.querySelector("#emailDiv").style.display = "block"
    }
    else{
        document.querySelector("#emailDiv").style.display = "none"
        console.log('else statement')
    }
})

document.addEventListener("click", function() {
    let currentTime = new Date()
    alert("Current time: "+ currentTime);
})
