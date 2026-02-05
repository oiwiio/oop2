// 1. Функция introduceYourself
function introduceYourself(name: string, age?: number): string {
    if (age !== undefined) {
        return `Привет, меня зовут ${name} и мне ${age} лет.`;
    } else {
        return `Привет, меня зовут ${name}.`;
    }
}

interface Book {
    title: string;
    author: string;
    year?: number;  
}

const myLibrary: Book[] = [
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
myLibrary.forEach((book, index) => {
    console.log(`Книга ${index + 1}:`);
    console.log(`  Название: ${book.title}`);
    console.log(`  Автор: ${book.author}`);
    if (book.year) {
        console.log(`  Год издания: ${book.year}`);
    } else {
        console.log(`  Год издания: не указан`);
    }
    console.log("");
});