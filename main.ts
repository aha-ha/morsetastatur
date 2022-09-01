input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (connected) {
        decode(code)
        code = ""
    }
})
function decode (to_decode: string) {
    if (to_decode != "") {
        if (encoded.indexOf(to_decode) != -1) {
            i = encoded.indexOf(to_decode)
            letter = decoded[i]
            if (letter.length == 1) {
                keyboard.sendString(letter)
            } else {
                if (letter == "delete") {
                    keyboard.sendString(keyboard.keys(keyboard._Key.delete))
                }
            }
        } else {
            music.playMelody("C5 B A G F E D C ", 800)
            keyboard.sendString("Error!")
            basic.pause(1000)
            for (let index = 0; index < 6; index++) {
                keyboard.sendString(keyboard.keys(keyboard._Key.delete))
            }
        }
    } else {
        keyboard.sendString(" ")
    }
}
bluetooth.onBluetoothConnected(function () {
    connected = true
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.InBackground)
    images.createBigImage(`
        . . . . . . . . . .
        . . . . . . . . . #
        . . . . . . . . # .
        . . . . . # . # . .
        . . . . . . # . . .
        `).scrollImage(1, 50)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showLeds(`
        . . # # .
        # . # . #
        . # # # .
        # . # . #
        . . # # .
        `)
})
input.onButtonPressed(Button.A, function () {
    if (connected) {
        music.playTone(880, music.beat(BeatFraction.Sixteenth))
        code = "" + code + "."
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    if (connected) {
        music.playTone(587, music.beat(BeatFraction.Eighth))
        code = "" + code + "-"
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
})
let letter = ""
let i = 0
let connected = false
let decoded: string[] = []
let encoded: string[] = []
let code = ""
code = ""
encoded = [
".-",
".-.-",
"-...",
"-.-.",
"-..",
".",
"..-.",
"--.",
"....",
"..",
".---",
"-.-",
".-..",
"--",
"-.",
"---",
"---.",
".--.",
"--.-",
".-.",
"...",
"-",
"..-",
"..--",
"...-",
".--",
"-..-",
"-.--",
"--..",
".----",
"..---",
"...--",
"....-",
".....",
"-....",
"--...",
"---..",
"----.",
"-----",
"........"
]
decoded = [
"a",
"ä",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"ö",
"p",
"q",
"r",
"s",
"t",
"u",
"ü",
"v",
"w",
"x",
"z",
"y",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"0",
"delete"
]
keyboard.startKeyboardService()
connected = false
basic.showLeds(`
    . . # # .
    # . # . #
    . # # # .
    # . # . #
    . . # # .
    `)
basic.forever(function () {
	
})
