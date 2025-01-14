def on_received_number(receivedNumber):
    basic.show_number(receivedNumber / Salt)
radio.on_received_number(on_received_number)

def on_received_value(name, value):
    global Salt
    basic.show_icon(IconNames.YES)
    basic.show_leds("""
        . # # . .
        . # . # .
        . # . # .
        . # . # .
        . # # . .
        """)
    radio.set_group(parse_float(name))
    Salt = value
radio.on_received_value(on_received_value)

Salt = 0
while True:
    basic.show_icon(IconNames.DIAMOND)
    basic.pause(200)
    basic.show_icon(IconNames.SMALL_DIAMOND)
    basic.pause(200)