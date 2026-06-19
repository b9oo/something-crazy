/**
 * SuperFX Extension
 */

//% color=#AA00FF icon="\uf0e7"
namespace SuperFX {

    /**
     * Shake the screen
     */
    //% block="shake screen for $ms ms"
    //% ms.defl=500
    export function shakeScreen(ms: number) {
        scene.cameraShake(4, ms)
    }

    /**
     * Show damage text above a sprite
     */
    //% block="show damage $amount on $sprite"
    export function showDamage(sprite: Sprite, amount: number) {
        let txt = textsprite.create("-" + amount)
        txt.setPosition(sprite.x, sprite.y - 10)
        txt.vy = -20

        pause(1000)
        txt.destroy()
    }

    /**
     * Create an explosion effect
     */
    //% block="explosion at x $x y $y"
    export function explosion(x: number, y: number) {
        let p = sprites.create(img`
            . 2 2 .
            2 4 4 2
            2 4 4 2
            . 2 2 .
        `)

        p.setPosition(x, y)
        p.startEffect(effects.fire, 500)

        pause(500)
        p.destroy()
    }

    /**
     * Rainbow sprite effect
     */
    //% block="rainbow effect on $sprite"
    export function rainbow(sprite: Sprite) {
        sprite.startEffect(effects.trail)
    }
}
