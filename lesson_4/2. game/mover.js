let mover = {
    getDirection() {
        const avaliableDirections = [1, 2, 3, 4, 6, 7, 8, 9]
        while (true) {
            let direction = parseInt(prompt("Введите число (1,2,3,4,6,7,8,9), куда вы хотите переместиться. Или 'Отмена' для выхода",))
            if (isNaN(direction)) {
                return null
            }
            if (!avaliableDirections.includes(direction)) {
                alert('Для перемещения необходимо ввести 1, 2, 3, 4, 6, 7, 8 иил 9')
                continue
            }
            return direction
        }
    },
    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y
        }
        switch (direction) {
            case 1:
                nextPosition.y++
                nextPosition.x--
                break
            case 2:
                nextPosition.y++
                break
            case 3:
                nextPosition.y++
                nextPosition.x++
                break
            case 4:
                nextPosition.x--
                break
            case 6:
                nextPosition.x++
                break
            case 7:
                nextPosition.y--
                nextPosition.x--
                break
            case 8:
                nextPosition.y--
                break
            case 9:
                nextPosition.y--
                nextPosition.x++
                break
        }
        return nextPosition


    }
}