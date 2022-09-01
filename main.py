def macheEtwas():
    pass

def on_bluetooth_disconnected():
    basic.show_leds("""
        . . # # .
                # . # . #
                . # # # .
                # . # . #
                . . # # .
    """)
bluetooth.on_bluetooth_disconnected(on_bluetooth_disconnected)

basic.show_leds("""
    . . # # .
        # . # . #
        . # # # .
        # . # . #
        . . # # .
""")

def on_forever():
    pass
basic.forever(on_forever)
