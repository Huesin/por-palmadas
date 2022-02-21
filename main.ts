input.onSound(DetectedSound.Loud, function () {
    palmadas = !(palmadas)
    if (palmadas) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
        soundExpression.happy.play()
        basic.showIcon(IconNames.Fabulous)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
        soundExpression.sad.play()
        basic.showIcon(IconNames.Silly)
    }
})
let palmadas = false
maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
basic.pause(500)
maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
basic.pause(500)
maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
basic.pause(500)
maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
basic.pause(500)
basic.forever(function () {
    input.setSoundThreshold(SoundThreshold.Loud, 160)
})
