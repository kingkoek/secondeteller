input.onButtonPressed(Button.A, function () {
    tijd = 0
    basic.showNumber(tijd)
})
let tijd = 0
tijd = 0
basic.showNumber(tijd)
loops.everyInterval(1000, function () {
    tijd += 1
    basic.showNumber(tijd)
})
