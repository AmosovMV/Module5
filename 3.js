//
let string = 'Hello';
let len = string.length;
console.log(string[len-1] + string[len-2] + string[len-3] + string[len-4] + string[len-5]);


// Немного усоверщенствовал добавив цикл и ввод слова.
let string = prompt('Введите слово');
let len = string.length;
let str = '';
for (let i = len; i !== 0; i--) {
  len--;
  str += string[len];
}
console.log(str);