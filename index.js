let homeScore = document.getElementById("score-1")
let homeCount = 0

function addHome1() {
    homeCount += 1
    homeScore.textContent = homeCount
}

function addHome2() {
    homeCount += 2
    homeScore.textContent = homeCount
}

function addHome3() {
    homeCount += 3
    homeScore.textContent = homeCount
}

let guestScore = document.getElementById("score-2")
let guestCount = 0

function addGuest1() {
    guestCount += 1
    guestScore.textContent = guestCount
}

function addGuest2() {
    guestCount += 2
    guestScore.textContent = guestCount
}

function addGuest3() {
    guestCount += 3
    guestScore.textContent = guestCount
}

function reset() {
    homeScore.textContent = 0
    guestScore.textContent = 0
    homeCount = 0
    guestCount = 0
}
