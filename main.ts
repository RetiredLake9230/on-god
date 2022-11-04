radio.onReceivedNumber(function (receivedNumber) {
    wed = receivedNumber
    if (receivedNumber == 5) {
        basic.showString("Get Ready")
        basic.pause(5000)
    } else if (receivedNumber == wed) {
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            . . . . .
            `)
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
let id = control.deviceSerialNumber()
for (let index = 0; index < 6; index++) {
    radio.sendNumber(id)
    basic.pause(1000)
}
basic.forever(function () {
	
})
