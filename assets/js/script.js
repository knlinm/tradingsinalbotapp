document.querySelector(".social").addEventListener("click", function () {
    window.location.href = "https://t.me/aksoyofficial";
})
var currencyButtons = document.querySelectorAll(".currencies .button");
for (let i = 0; i < currencyButtons.length; i++) {
    currencyButtons[i].addEventListener("click", function () {
        if (currencyButtons[i].classList.contains("locked-button")) {
            window.alert("Contact us")
        }
        else {
            let selectedButton = document.querySelectorAll("button.selected")
            for (let j = 0; j < selectedButton.length; j++) {
                selectedButton[j].classList.remove("selected")
            }
            this.classList.add("selected")
            document.body.style.backgroundImage = `url(assets/img/${i}.jpg)`;
            let hiddenButtons = document.querySelectorAll(".V1tGj-8vrk")
            for (let index = 0; index < hiddenButtons.length; index++) {
                hiddenButtons[index].style.opacity = 1;

            }
            document.querySelector("button.play").innerHTML = "Start"
            document.getElementsByClassName("rate")[0].innerHTML = "Select";
        }
    })
}
var timeButtons = document.querySelectorAll(".V1tGj-8vrk");
for (let i = 0; i < timeButtons.length; i++) {
    timeButtons[i].addEventListener("click", function () {
        if (timeButtons[i].classList.contains("locked-button")) {
            window.alert("Contact us")
        }
        else{
            let selectedTimeButton = document.querySelectorAll(".V1tGj-8vrk.selected")
            for (let j = 0; j < selectedTimeButton.length; j++) {
                selectedTimeButton[j].classList.remove("selected")
            }
            this.classList.add("selected")
            document.querySelector("button.play").style.opacity = 1;
            if (document.querySelector("button.play").innerHTML == "Reset"){
                document.getElementsByClassName("rate")[0].innerHTML = "Select";
                document.querySelector("button.play").innerHTML = "Start"
                document.querySelector("button.play").classList.remove("selected")
            }
        }
    })
}

document.querySelector("button.play").addEventListener("click", function () {
    if (document.querySelector("button.play").innerHTML == "Start") {
        document.getElementsByClassName("loader")[0].classList.remove("hidden")
        document.getElementsByClassName("rate")[0].classList.add("hidden")
        setTimeout(() => {
            document.getElementsByClassName("loader")[0].classList.add("hidden");
            document.getElementsByClassName("rate")[0].classList.remove("hidden");
            let randomValue = Math.round(Math.random());
            if (randomValue == 0) {

                document.getElementsByClassName("rate")[0].innerHTML = "Up";
                document.querySelector(".tntCount").style.background="#6aff41"
            }
            else {
                document.getElementsByClassName("rate")[0].innerHTML = "Down";
                document.querySelector(".tntCount").style.background="#af2121"


            }
            this.classList.add("selected")
            this.innerHTML = "Reset";
        }, 1500);
    }
    else if (document.querySelector("button.play").innerHTML == "Reset") {
        document.getElementsByClassName("rate")[0].innerHTML = "Select";
        document.body.style.background = "#000";
        var allButtons = document.querySelectorAll("button.selected");
        for (let index = 0; index < allButtons.length; index++) {
            allButtons[index].classList.remove("selected")
        }
        this.innerHTML = "Start";
        document.querySelector("button.play").style.opacity = 0;

        for (let i = 0; i < timeButtons.length; i++) {
            timeButtons[i].style.opacity = 0;
        }
    }
})








