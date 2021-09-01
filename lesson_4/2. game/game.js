let game = {

    run() {
        while (true) {
            const direction = mover.getDirection()
            if (direction === null) {
                console.log('Игра окончена.')
                return
            }
            const nextPoint = mover.getNextPosition(direction)
            if (nextPoint.x < 0 || nextPoint.y < 0 || nextPoint.x > 9 || nextPoint.y > 9) {
                console.log('Вы уперлись в стену. Выбирете другое направление.')
                game.run()
            }
            renderer.clear()
            player.move(nextPoint)
            renderer.render()

        }
    },

    init() {
        console.log('Ваше положение на поле в виде о')
        renderer.render()
        console.log('Чтобы начать игру введите game.run() и нажмите Enter')
    }
}
game.init()