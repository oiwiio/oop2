function toArray<T>(...args: T[]): T[] {
    return args;
}

console.log("=== Часть A: Дженерики (функция toArray) ===");

const numbersArray = toArray(1, 2, 3, 4, 5);
console.log("Массив чисел:", numbersArray);

const stringsArray = toArray("яблоко", "банан", "апельсин");
console.log("Массив строк:", stringsArray);

const objectsArray = toArray(
    { id: 1, name: "Алексей" },
    { id: 2, name: "Мария" }
);
console.log("Массив объектов:", objectsArray);


const booleansArray = toArray(true, false, true, true);
console.log("Массив булевых значений:", booleansArray);

console.log("\n");

// Часть B: Перегрузка функций

 // без указаний системы 
function parseInput(input: string): number;

// указание системы счисления
function parseInput(input: string, radix: number): number;

//перегруженная функция
function parseInput(input: string, radix?: number): number {
    if (radix !== undefined) {
        return parseInt(input, radix);
    } else {
        return parseInt(input);
    }
}

console.log("=== Часть B: Перегрузка функций (parseInput) ===");

// пример 1: вызов без указания системы счисления (по умолчанию 10)
const decimalNumber = parseInput("123");
console.log('parseInput("123") =', decimalNumber);

// пример 2: вызов с указанием системы счисления (двоичная)
const binaryNumber = parseInput("1010", 2);
console.log('parseInput("1010", 2) =', binaryNumber);

// пример 3: вызов с указанием системы счисления (шестнадцатеричная)
const hexNumber = parseInput("FF", 16);
console.log('parseInput("FF", 16) =', hexNumber);

// пример 4: вызов с нечисловыми символами
const mixedNumber = parseInput("123abc");
console.log('parseInput("123abc") =', mixedNumber);

// пример 5: Вывод в разных системах счисления
console.log("\nПроверка результатов:");
console.log(`Десятичное 123 = ${decimalNumber}`);
console.log(`Двоичное 1010 = ${binaryNumber} (десятичное)`);
console.log(`Шестнадцатеричное FF = ${hexNumber} (десятичное)`);

console.log("\n=== Дополнительные примеры ===");

// разные типы 
console.log("Смешанные типы (но одного типа):");
const mixedTypesArray = toArray<string | number>("текст", 42, "еще текст", 100);
console.log("Результат:", mixedTypesArray);

// массив массивов
const nestedArray = toArray([1, 2], [3, 4], [5, 6]);
console.log("Массив массивов:", nestedArray);

// проверка граничных случаев parseInput
console.log("\nГраничные случаи parseInput:");
console.log('parseInput("", 10) =', parseInput("", 10));
console.log('parseInput("abc", 10) =', parseInput("abc", 10));
console.log('parseInput("  123  ", 10) =', parseInput("  123  ", 10));