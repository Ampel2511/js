var quests = [
    ["Каких камней не бывает в море?", ['a. Больших', "b. Квадратных", 'c. Сухих', 'd. Тонких'], 'c'],
    ["Чем больше из нее берешь, тем больше она становится, что это?", ['a. Яма', 'b. Копилка', 'c. Тарелка с едой', 'd. Бочка с водой'], 'a'],
    ["Что принадлежит вам, однако другие используют это чаще вас?", ['a. Имя', 'b. Одежда', 'c. Деньги', 'd. Время'], 'a'],
    ["Где впервые был обнаружен картофель?", ['a. На Луне', 'b. В земле', 'c. В море', 'd. На тарелке'], 'b'],
    ["Какой шанс выбрать правильный ответ?", ['a. Это точно неправильный ответ', 'b. 100%', 'c. 25%', 'd. 33%'], 'b']
]
var corrAnsw = 0
let game = {

    run() {
        while (quests.length != 0) {
            let i = parseInt(Math.random() * quests.length);
            console.log(quests[i][0])
            for (variant of quests[i][1]) {
                console.log(variant)
            }
            let userAnsw = prompt('Выберите ответ')
            if (userAnsw == 'q') {
                break
            } else if (quests[i][2] == userAnsw) {
                alert("Ответ верный.")
                quests.splice(i, 1);
                corrAnsw++
            } else {
                alert("Ответ неверный!")
                quests.splice(i, 1);
            }
        }
        console.log(`Игра окончена. Вы набрали ${corrAnsw * 100} очков`)
        let new_game = prompt('Хотите сыграть снова? Выберите Yes или No.')
        if (new_game === 'Yes') {
            game.run()
        } else {
            console.log('Игра окончена.')
            return
        }
    },
    init() {
        console.log('Отвечайте на вопросы, выбирая a, b, c или d. За каждый правильный ответ вы получить 100 очков. Чтобы закончить игру нажмите q')
        console.log('Чтобы начать игру введите game.run() и нажмите Enter')
    }
}
game.init()