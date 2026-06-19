namespace SuperFX {
    export function shakeScreen(duration: number) {
        scene.cameraShake(4, duration)
    }

    export function showDamage(
        target: Sprite,
        amount: number
    ) {
        let txt = textsprite.create("-" + amount)
        txt.setPosition(target.x, target.y - 10)

        txt.vy = -20

        timer.after(1000, function () {
            txt.destroy()
        })
    }

    export function explosion(x: number, y: number) {
        effects.fire.startScreenEffect(500)
        sprites.createProjectileFromSide(0, 0, img`
            . 2 2 .
            2 4 4 2
            2 4 4 2
            . 2 2 .
        `).setPosition(x, y)
    }
}
//% block="shake screen for $ms ms"
//% ms.defl=500
export function shakeScreen(ms: number)

//% block="show damage $amount on $sprite"
export function showDamage(sprite: Sprite, amount: number)

//% block="explosion at x $x y $y"
export function explosion(x: number, y: number)
