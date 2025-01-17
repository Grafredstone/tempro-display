radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber / Salt)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.showString("" + Salt + "|" + Funkgruppe)
})
radio.onReceivedValue(function (name, value) {
    radio.setGroup(216)
    basic.showIcon(IconNames.Yes)
    Funkgruppe = parseFloat(name)
    radio.setGroup(Funkgruppe)
    Salt = value
})
let Funkgruppe = 0
let Salt = 0
basic.showString("D")
