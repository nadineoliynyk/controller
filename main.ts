input.onLoudSound(function () {
    light.showRing(
    "red red red red red red red red red red"
    )
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    makerController.player1.press(ArcadeButton.A)
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    makerController.player1.press(ArcadeButton.B)
})
