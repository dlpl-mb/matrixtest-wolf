input.onButtonPressed(Button.A, function () {
    DLPLmatrix.schreibeText(
    nrMatrix.zentral,
    "A=12,3",
    0x0000ff,
    false
    )
})
input.onButtonPressed(Button.AB, function () {
    DLPLmatrix.loescheMatrix(nrMatrix.links)
    for (let x = 0; x <= 4; x++) {
        DLPLmatrix.setPunkt(
        x,
        x,
        0xffff00,
        nrMatrix.links
        )
        basic.showNumber(x)
        basic.pause(200)
    }
    for (let x = 0; x <= 4; x++) {
        DLPLmatrix.setPunkt(
        4 - x,
        x,
        0x0000ff,
        nrMatrix.links
        )
        basic.showNumber(x)
        basic.pause(200)
    }
    basic.pause(2000)
})
input.onButtonPressed(Button.B, function () {
    DLPLmatrix.schreibeText(
    nrMatrix.links,
    "A=12,3",
    0xffff00,
    true
    )
})
basic.showIcon(IconNames.Heart)
for (let index = 0; index < 3; index++) {
    DLPLmatrix.loescheMatrix(nrMatrix.zentral)
    basic.pause(100)
    DLPLmatrix.schreibeText(
    nrMatrix.zentral,
    "0;17;27;0;4;17;14;0",
    0xff0000,
    false
    )
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(500)
}
