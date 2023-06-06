const scrollTopBtn = document.querySelectorAll(".scroll-top-button")
const form = document.querySelector(".form")
const question1Answers = document.querySelectorAll("#q1")
const question2Answers = document.querySelectorAll("#q2")
const question3Answers = document.querySelectorAll("#q3")
const question4Answers = document.querySelectorAll("#q4")
const question5Answers = document.querySelectorAll("#q5")
const question6Answers = document.querySelectorAll("#q6")
const question7Answers = document.querySelectorAll("#q7")
const question1Div = document.querySelector("#question1")
const question2Div = document.querySelector("#question2")
const question3Div = document.querySelector("#question3")
const question4Div = document.querySelector("#question4")
const question5Div = document.querySelector("#question5")
const question6Div = document.querySelector("#question6")
const question7Div = document.querySelector("#question7")

for (var i = 0; i < scrollTopBtn.length; i++) {
    scrollTopBtn[i].addEventListener("click", () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
}

for (var i = 0; i < question1Answers.length; i++) {
    question1Answers[i].addEventListener("click", () => {
        setTimeout( () => {
            question1Div.style.display = "none"
            form.style.backgroundImage = "none"
            question2Div.style.display = "block"

        }, 1000);
    })
}

for (var i = 0; i < question2Answers.length; i++) {
    question2Answers[i].addEventListener("click", () => {
        setTimeout( () => {
            question2Div.style.display = "none"
            question3Div.style.display = "block"
        }, 1000);
    })
}

for (var i = 0; i < question3Answers.length; i++) {
    question3Answers[i].addEventListener("click", () => {
        setTimeout( () => {
            question3Div.style.display = "none"
            question4Div.style.display = "block"
        }, 1000);
    })
}

for (var i = 0; i < question4Answers.length; i++) {
    question4Answers[i].addEventListener("click", () => {
        setTimeout( () => {
            question4Div.style.display = "none"
            question5Div.style.display = "block"
        }, 1000);
    })
}

for (var i = 0; i < question5Answers.length; i++) {
    question5Answers[i].addEventListener("click", () => {
        setTimeout( () => {
            question5Div.style.display = "none"
            question6Div.style.display = "flex"
        }, 1000);
    })
}

for (var i = 0; i < question5Answers.length; i++) {
    question5Answers[i].addEventListener("click", () => {
        setTimeout( () => {
            question6Div.style.display = "none"
            question7Div.style.display = "flex"
        }, 1000);
    })
}
