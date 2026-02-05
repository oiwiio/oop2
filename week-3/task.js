// 1. Функция introduceYourself
function introduceYourself(name, age) {
    if (age !== undefined) {
        return "\u041F\u0440\u0438\u0432\u0435\u0442, \u043C\u0435\u043D\u044F \u0437\u043E\u0432\u0443\u0442 ".concat(name, " \u0438 \u043C\u043D\u0435 ").concat(age, " \u043B\u0435\u0442.");
    }
    else {
        return "\u041F\u0440\u0438\u0432\u0435\u0442, \u043C\u0435\u043D\u044F \u0437\u043E\u0432\u0443\u0442 ".concat(name, ".");
    }
}
var myLibrary = [
    {
        title: "Мастер и Маргарита",
        author: "Михаил Булгаков",
        year: 1967
    },
    {
        title: "Преступление и наказание",
        author: "Федор Достоевский",
        year: 1866
    },
    {
        title: "1984",
        author: "Джордж Оруэлл"
    }
];
console.log("=== Демонстрация работы функции introduceYourself ===");
console.log(introduceYourself('Петр', 30));
console.log(introduceYourself('Анна'));
console.log("");
console.log("=== Моя библиотека ===");
myLibrary.forEach(function (book, index) {
    console.log("\u041A\u043D\u0438\u0433\u0430 ".concat(index + 1, ":"));
    console.log("  \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435: ".concat(book.title));
    console.log("  \u0410\u0432\u0442\u043E\u0440: ".concat(book.author));
    if (book.year) {
        console.log("  \u0413\u043E\u0434 \u0438\u0437\u0434\u0430\u043D\u0438\u044F: ".concat(book.year));
    }
    else {
        console.log("  \u0413\u043E\u0434 \u0438\u0437\u0434\u0430\u043D\u0438\u044F: \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D");
    }
    console.log("");
});
