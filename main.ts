let Salt = 0
let Started = 0
radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber / Salt)
})
radio.onReceivedValue(function (name, value) {
    Started = 1
    radio.setGroup(216)
    basic.showIcon(IconNames.Yes)
    basic.showLeds(`
        . # # . .
        . # . # .
        . # . # .
        . # . # .
        . # # . .
        `)
    Salt = value
    radio.setGroup(parseFloat(name))
})
basic.forever(function () {
    while (Started == 0) {
        basic.showIcon(IconNames.Diamond)
        basic.pause(200)
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(200)
    }
})
