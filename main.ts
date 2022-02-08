radio.onReceivedString(function (receivedString) {
    serial.writeLine(receivedString)
    led.toggle(0, 0)
})
basic.showIcon(IconNames.Yes)
radio.setGroup(1)
