Описание

Данный репозиторий содержит решение задачи по формированию массива из строк, длина которых меньше или равна 3 символа. Входной массив может быть введен с клавиатуры или задан на старте выполнения алгоритма.

Решение

Для решения задачи мы будем использовать метод filter() и стрелочную функцию.

javascript
Copy code
const filterArray = function (arr) {
  return arr.filter(element => element.length <= 3);
};
Эта функция принимает массив строк и возвращает новый массив, содержащий только те строки, длина которых меньше или равна 3 символа.

Запуск

Для использования функции filterArray() необходимо импортировать ее в свой код:

javascript
Copy code
const filterArray = require('./filterArray');

console.log(filterArray(["hello", "2", "world", "-)"]));
console.log(filterArray(["1234", "1567", "-2", "computer science"]));
console.log(filterArray(["Russia", "Denmark", "Kazan"]));
Затем можно использовать эту функцию для фильтрации массивов строк.