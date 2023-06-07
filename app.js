let leadData = []

// selectors //

const scrollTopBtn = document.querySelectorAll(".scroll-top-button")
const form = document.querySelector(".form")
const refreshBtn = document.querySelector("#refresh-btn")

const question1Div = document.querySelector("#question1Div")
const question1 = document.querySelector("#question1")
const question1Answer1 = document.querySelector("#q1a1")
const question1Answer2 = document.querySelector("#q1a2")
const question1Answer3 = document.querySelector("#q1a3")
question1Div.style.display = "block"
question1Div.style.opacity = "1"

const question2Div = document.querySelector("#question2Div")
const question2 = document.querySelector("#question2")
const question2Answer1 = document.querySelector("#q2a1")
const question2Answer2 = document.querySelector("#q2a2")
const question2Answer3 = document.querySelector("#q2a3")

const question3Div = document.querySelector("#question3Div")
const question3 = document.querySelector("#question3")
const question3Answer1 = document.querySelector("#q3a1")
const question3Answer2 = document.querySelector("#q3a2")

const question4Div = document.querySelector("#question4Div")
const question4 = document.querySelector("#question4")
const question4Answer1 = document.querySelector("#q4a1")

const question5Div = document.querySelector("#question5Div")
const question5 = document.querySelector("#question5")
const question5Answer1 = document.querySelector("#q5a1")
const question5Answer2 = document.querySelector("#q5a2")

const question6Div = document.querySelector("#question6Div")
const question6 = document.querySelector("#question6")
const question6Answer1 = document.querySelector("#q6a1")
const question6Answer2 = document.querySelector("#q6a2")
const question6Answer3 = document.querySelector("#q6a3")
const question6Answer4 = document.querySelector("#q6a4")

const ThankyouMessage = document.querySelector("#thankyou-message")




// event listeners //

refreshBtn.addEventListener("click", () => {
    leadData = []
    question1Div.style.display = "block"
    question2Div.style.display = "none"
    question3Div.style.display = "none"
    question4Div.style.display = "none"
    question5Div.style.display = "none"
    question6Div.style.display = "none"
    ThankyouMessage.style.display = "none"
    question1Answer1.checked = false
    question1Answer2.checked = false
    question1Answer3.checked = false
    question2Answer1.checked = false
    question2Answer2.checked = false
    question2Answer3.checked = false
    question3Answer1.checked = false
    question3Answer2.checked = false
    question4Answer1.value = ""
    question5Answer1.checked = false
    question5Answer2.checked = false
    question6Answer1.value = ""
    question6Answer2.value = ""
    question6Answer3.value = ""
    question6Answer4.value = ""
    form.style.backgroundImage = 'url("images/iuean.png")'
    question1Div.style.opacity = "1"
})

for (var i = 0; i < scrollTopBtn.length; i++) {
    scrollTopBtn[i].addEventListener("click", () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
}

question1.addEventListener("submit", (e) => {
    e.preventDefault()
    if (question1Answer1.checked) {
        leadData.push(question1Answer1.value)
        question1Div.style.opacity = "0"
        setTimeout(() => {
            question1Div.style.display = "none"
            question2Div.style.display = "block"
            setTimeout(() => {
                question2Div.style.opacity = "1"
            }, 400);
        }, 400);
        form.style.backgroundImage = "none"
        
    }
    else if (question1Answer2.checked) {
        leadData.push(question1Answer2.value)
        question1Div.style.opacity = "0"
        setTimeout(() => {
            question1Div.style.display = "none"
            question2Div.style.display = "block"
            setTimeout(() => {
                question2Div.style.opacity = "1"
            }, 400);
        }, 400);
        form.style.backgroundImage = "none"
    }
    else if (question1Answer3.checked) {
        leadData.push(question1Answer3.value)
        question1Div.style.opacity = "0"
        setTimeout(() => {
            question1Div.style.display = "none"
            question2Div.style.display = "block"
            setTimeout(() => {
                question2Div.style.opacity = "1"
            }, 400);
        }, 400);
        form.style.backgroundImage = "none"
    }
    console.log(leadData)
})

question2.addEventListener("submit", (e) => {
    e.preventDefault()
    if (question2Answer1.checked) {
        leadData.push(question2Answer1.value)
        question2Div.style.opacity = "0"
        setTimeout(() => {
            question2Div.style.display = "none"
            question3Div.style.display = "block"
            setTimeout(() => {
                question3Div.style.opacity = "1"
            }, 400);
        }, 400);
    }
    else if (question2Answer2.checked) {
        leadData.push(question2Answer2.value)
        question2Div.style.opacity = "0"
        setTimeout(() => {
            question2Div.style.display = "none"
            question3Div.style.display = "block"
            setTimeout(() => {
                question3Div.style.opacity = "1"
            }, 400);
        }, 400);
    }
    else if (question2Answer3.checked) {
        leadData.push(question2Answer3.value)
        question2Div.style.opacity = "0"
        setTimeout(() => {
            question2Div.style.display = "none"
            question3Div.style.display = "block"
            setTimeout(() => {
                question3Div.style.opacity = "1"
            }, 400);
        }, 400);
    }
    console.log(leadData)
})

question3.addEventListener("submit", (e) => {
    e.preventDefault()
    if (question3Answer1.checked) {
        leadData.push(question3Answer1.value)
        question3Div.style.opacity = "0"
        setTimeout(() => {
            question3Div.style.display = "none"
            question4Div.style.display = "block"
            setTimeout(() => {
                question4Div.style.opacity = "1"
            }, 400);
        }, 400);
        form.style.backgroundImage = "none"
    }
    else if (question3Answer2.checked) {
        leadData.push(question3Answer2.value)
        question3Div.style.opacity = "0"
        setTimeout(() => {
            question3Div.style.display = "none"
            question4Div.style.display = "block"
            setTimeout(() => {
                question4Div.style.opacity = "1"
            }, 400);
        }, 400);
    }
    console.log(leadData)
})

question4.addEventListener("submit", (e) => {
    e.preventDefault()
    if (question4Answer1.value) {
        leadData.push(question4Answer1.value)
        question4Div.style.opacity = "0"
        setTimeout(() => {
            question4Div.style.display = "none"
            question5Div.style.display = "block"
            setTimeout(() => {
                question5Div.style.opacity = "1"
            }, 400);
        }, 400);
    }
    console.log(leadData)
})

question5.addEventListener("submit", (e) => {
    e.preventDefault()
    if (question5Answer1.checked) {
        leadData.push(question5Answer1.value)
        question5Div.style.opacity = "0"
        setTimeout(() => {
            question5Div.style.display = "none"
            question6Div.style.display = "block"
            setTimeout(() => {
                question6Div.style.opacity = "1"
            }, 400);
        }, 400);
    }
    else if (question5Answer2.checked) {
        leadData.push(question5Answer2.value)
        question5Div.style.opacity = "0"
        setTimeout(() => {
            question5Div.style.display = "none"
            question6Div.style.display = "block"
            setTimeout(() => {
                question6Div.style.opacity = "1"
            }, 400);
        }, 400);
    }
    console.log(leadData)
})

question6.addEventListener("submit", (e) => {
    e.preventDefault()
    if (question6Answer1.value && question6Answer2.value && question6Answer3.value && question6Answer4.value) {
        leadData.push(question6Answer1.value)
        leadData.push(question6Answer2.value)
        leadData.push(question6Answer3.value)
        leadData.push(question6Answer4.value)
        question6Div.style.opacity = "0"
        setTimeout(() => {
            question6Div.style.display = "none"
            ThankyouMessage.style.display = "block"
            setTimeout(() => {
                ThankyouMessage.style.opacity = "1"
            }, 400);
        }, 400);
        sendMail()
    }
    console.log(leadData)
})

const sendMail = () => {
    let parameters = {
        help_type: leadData[0],
        age: leadData[1],
        gender: leadData[2],
        reason: leadData[3],
        able_to_commit: leadData[4],
        first_name: leadData[5],
        second_name: leadData[6],
        number: leadData[7],
        email_id: leadData[8]
    }
    emailjs.send("service_011wkip", "template_5151k3q", parameters).then(function (res) {
        console.log("Success " + res.status)
    })
}