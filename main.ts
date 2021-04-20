basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
let llum = 38
led.setBrightness(llum)
serial.setBaudRate(BaudRate.BaudRate115200)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        if (llum < 255) {
            llum += 1
            led.setBrightness(llum)
            basic.pause(100)
            serial.writeLine("" + (llum))
        } else {
            soundExpression.giggle.play()
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        if (llum > 0) {
            llum += -1
            led.setBrightness(llum)
            basic.pause(100)
            serial.writeLine("" + (llum))
        } else {
            soundExpression.giggle.play()
        }
    }
})
