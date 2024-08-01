const users = [
    { a: "Привет", b: "Hello" },
    { a: "Спасибо", b: "Thank you" },
    { a: "Да", b: "Yes" },
    { a: "Нет", b: "No" },
    { a: "Пожалуйста", b: "Please" },
    { a: "Извините", b: "Sorry" },
    { a: "Доброе утро", b: "Good morning" },
    { a: "Добрый вечер", b: "Good evening" },
    { a: "Спокойной ночи", b: "Good night" },
    { a: "До свидания", b: "Goodbye" },
    { a: "Как дела?", b: "How are you?" },
    { a: "Хорошо", b: "Good" },
    { a: "Плохо", b: "Bad" },
    { a: "Еда", b: "Food" },
    { a: "Вода", b: "Water" },
    { a: "Чай", b: "Tea" },
    { a: "Кофе", b: "Coffee" },
    { a: "Дом", b: "House" },
    { a: "Машина", b: "Car" },
    { a: "Дорога", b: "Road" },
    { a: "Магазин", b: "Store" },
    { a: "Работа", b: "Work" },
    { a: "Учеба", b: "Study" },
    { a: "Друзья", b: "Friends" },
    { a: "Семья", b: "Family" },
    { a: "Книга", b: "Book" },
    { a: "Школа", b: "School" },
    { a: "Университет", b: "University" },
    { a: "Парк", b: "Park" },
    { a: "Время", b: "Time" }
];


usersStrings = [];



function createPara() {

    users.forEach(users => {
        const newPara = document.createElement("p");
        newPara.textContent = ` ${users.a}     `;
        const translation = document.createElement("p");
        translation.className = "translation";
        translation.textContent = users.b;
        translation.style.visibility = "hidden";
        const button = document.createElement("button");
        button.className = "button"
        button.innerText = "Show / Hide ";
        button.addEventListener("click", function () {
            if (translation.style.visibility === "hidden") {
                translation.style.visibility = "visible";
            } else {
                translation.style.visibility = "hidden";
            }
        });
        let div = document.getElementById('box');
        div.append(newPara);
        div.append(translation);
        newPara.append(button);
    })

};

createPara();

