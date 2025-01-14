radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber / Salt)
})
radio.onReceivedValue(function (name, value) {
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
let Salt = 0
while (true) {
    basic.showIcon(IconNames.Diamond)
    basic.pause(200)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(200)
}
