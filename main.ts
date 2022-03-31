let volt = 0
let input2 = 0
basic.showString("Reading")
music.playMelody("C D E F G A B C5 ", 500)
basic.showIcon(IconNames.Happy)
basic.pause(200)
basic.forever(function () {
    input2 = pins.analogReadPin(AnalogPin.P10)
    volt = pins.map(
    input2,
    0,
    1023,
    0,
    3
    )
    input2 = volt * 10
    input2 = Math.round(volt)
    input2 = volt / 10
    basic.showNumber(volt)
    basic.pause(100)
})
