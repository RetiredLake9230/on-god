radio.onReceivedNumber(function (receivedNumber) {
    if (ex == true) {
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            . . . . .
            `)
        ex = false
        wed = receivedNumber
    } else if (receivedNumber == 5) {
        basic.showString("Get Ready")
        basic.pause(5000)
    } else if (false) {
    	
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(5)
    basic.showString("Get Ready")
    basic.pause(5000)
})
let wed = 0
let ex = false
let id = control.deviceSerialNumber()
loops.everyInterval(1000, function () {
    radio.sendNumber(id)
})
basic.forever(function () {
    ex = true
})
