radio.onReceivedNumber(function (receivedNumber) {
    pair = 1
    wed = receivedNumber
    if (receivedNumber == 5) {
        basic.showString("Get Ready")
        basic.pause(5000)
    } else if (receivedNumber == wed) {
        pair = 1
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
let pair = 0
pair = 0
let id = control.deviceSerialNumber()
while (pair == 0) {
    basic.pause(1000)
    radio.sendNumber(id)
    basic.pause(1000)
}
basic.showLeds(`
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    . . . . .
    `)
basic.forever(function () {
	
})
