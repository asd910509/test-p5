input.onPinPressed(TouchPin.P0, function () {
    sprite.set(LedSpriteProperty.X, 0)
    sprite.set(LedSpriteProperty.Y, 0)
})
input.onButtonPressed(Button.A, function () {
    sprite.move(1)
    sprite.ifOnEdgeBounce()
})
input.onButtonPressed(Button.AB, function () {
    sprite.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.Y, 1)
})
let sprite: game.LedSprite = null
let _this = game.createSprite(5, 5)
sprite = game.createSprite(0, 0)
basic.forever(function () {
    if (sprite.isTouching(_this)) {
        game.addScore(1)
        basic.pause(100)
        basic.showNumber(game.score())
    }
})
