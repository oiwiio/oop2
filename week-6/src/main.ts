import './style.css';
import { sayHello } from '../components/greeter';
import { formatShortDate } from '../utils/formatters';

// создаем интерфейс приложения
function setupApp() {
  const app = document.querySelector<HTMLDivElement>('#app');
  
  if (!app) return;
  
  // очищаем содержимое
  app.innerHTML = '';
  
  // создаем заголовок
  const title = document.createElement('h1');
  title.textContent = 'Контрольное задание неделя 6';
  title.className = 'title';
  
  // создаем карточку с приветствием
  const card = document.createElement('div');
  card.className = 'card';
  
  const greeting = document.createElement('p');
  greeting.className = 'greeting';
  greeting.textContent = sayHello('Гость');
  
  // кнопка для обновления приветствия
  const button = document.createElement('button');
  button.textContent = 'Обновить время';
  button.addEventListener('click', () => {
    greeting.textContent = sayHello('Гость');
    dateInfo.textContent = `Текущая дата: ${formatShortDate(new Date())}`;
  });
  
  // информация о дате
  const dateInfo = document.createElement('p');
  dateInfo.className = 'date-info';
  dateInfo.textContent = `Текущая дата: ${formatShortDate(new Date())}`;
  
  // собираем карточку
  card.appendChild(greeting);
  card.appendChild(dateInfo);
  card.appendChild(button);
  
  // информация о модулях
  const modulesInfo = document.createElement('div');
  modulesInfo.className = 'modules-info';
  modulesInfo.innerHTML = `
    <h3>Модули и алиасы:</h3>
    <ul>
      <li><code>@/utils/formatters</code> - функции форматирования даты</li>
      <li><code>@/components/greeter</code> - функция приветствия</li>
      <li><code>@/*</code> - алиас на папку src</li>
    </ul>
  `;
  
  // добавляем все на страницу
  app.appendChild(title);
  app.appendChild(card);
  app.appendChild(modulesInfo);
}

// запускаем приложение после загрузки DOM
document.addEventListener('DOMContentLoaded', setupApp);

// для проверки в консоли
console.log('Проверка функций:');
console.log(sayHello('Developer'));
console.log('Короткая дата:', formatShortDate(new Date()));