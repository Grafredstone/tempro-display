radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber / Salt)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.showString("" + (Salt))
})
radio.onReceivedValue(function (name, value) {
    radio.setGroup(216)
    basic.showIcon(IconNames.Yes)
    radio.setGroup(parseFloat(name))
    Salt = value
})
let Salt = 0
basic.showString("D")
