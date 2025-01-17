radio.onReceivedNumber(function (receivedNumber) {
    Temp = receivedNumber / Salt
    basic.showNumber(Temp, 100)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.showString("" + Salt + "|" + Funkgruppe, 150)
})
radio.onReceivedValue(function (name, value) {
    basic.showIcon(IconNames.Yes, 500)
    basic.clearScreen()
    Funkgruppe = parseFloat(name)
    radio.setGroup(Funkgruppe)
    Salt = value
})
let Funkgruppe = 0
let Salt = 0
let Temp = 0
radio.setGroup(216)
basic.showString("D")
