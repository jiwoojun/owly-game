controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (owly.isHittingTile(CollisionDirection.Bottom)) {
        owly.vy += -80
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    info.changeScoreBy(-1)
    tiles.setTileAt(location, assets.tile`myTile`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`myTile`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    if (controller.up.isPressed()) {
        owly.y += -5
    }
})
let owly: Sprite = null
owly = sprites.create(img`
    . . . . . . . f . . . . . . . . 
    . . . . . f f 3 f f . . . . . . 
    . . . . f 1 1 1 1 1 f . . . . . 
    . . . f f 3 3 1 3 3 f f . . . . 
    . . f 1 1 3 f 3 f 3 1 1 f . . . 
    . . f 1 1 3 3 f 3 3 1 1 f . . . 
    . . f 1 1 3 3 3 3 3 1 1 f . . . 
    . . f 1 1 1 1 1 1 1 1 1 f . . . 
    . . f 3 3 3 3 3 3 3 3 3 f . . . 
    . . . f f f f f f f f f . . . . 
    . . . . . . . . . . f f f f . . 
    . . . . . . . . . . f 1 1 f . . 
    . . . . . . . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level1`)
controller.moveSprite(owly, 180, 0)
owly.ay = 100
scene.cameraFollowSprite(owly)
tiles.placeOnRandomTile(owly, assets.tile`myTile1`)
tiles.coverAllTiles(assets.tile`myTile1`, assets.tile`myTile`)
info.setScore(0)
