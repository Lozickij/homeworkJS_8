// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

        document.addEventListener('DOMContentLoaded', function (e) {  
            console.log('Все теги прогрузились.');                    
        });

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

        window.addEventListener('load', function (e) {
            console.log('Страница загрузилась');
        });

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

        const superEls = document.querySelectorAll('.super_element'); // Не уверен, что понял, чего от меня хотят ..?

        superEls.forEach(element => {
            element.addEventListener('click', function (e) {
                const target = e.target;
                console.log(`Класс ${e.target.className} присутствует в элементе`, e.currentTarget);
            });
        });

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."

        const textArea = document.querySelector('textarea');

        textArea.addEventListener('mouseover', function (e) {
            console.log("Вы навели на textarea.");
        });

// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, 
// который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, 
// то ничего выводить не нужно. Необходимо использовать делегирование.

        const listEl = document.querySelector('ul');
        const buttonEls = listEl.querySelectorAll('button');
        // const buttonEls = document.querySelectorAll('button');

        buttonEls.forEach(element => {
            element.addEventListener('click', function (e) {
                const target = e.target;
                console.log(e.target.textContent);
            });
        });

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 
// задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, 
// своими словами.

    // Вообще не понял вопроса, у меня всё выводится по мере воздействия на элементы, а если подкл. все кнопки на странице, то на кнопке bth выводится еще и текст. Внизу. Наверное потому что функция вызвана внизу?

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

        const listsBg = document.querySelectorAll('li');

        for (let i = 1; i < listsBg.length; i+=2) {
            const element = listsBg[i];
            element.style.background = "yellowgreen";
        }

