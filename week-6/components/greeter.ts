// импорт функции из untils
import { formatDate } from '../utils/formatters';

export function sayHello(name: string): string {
    const currentDate = new Date();
    
    const formattedDate = formatDate(currentDate);
    
    return `привет, ${name}! сегодня ${formattedDate}`;
}

export function sayHelloWithDate(name: string, customDate: Date): string {
    const formattedDate = formatDate(customDate);
    return `привет, ${name}! ты выбрал дату ${formattedDate}`;
}