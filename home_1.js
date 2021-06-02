let x = prompt('Введите число');
let y = +x;
if (typeof y == 'number' && !isNaN(y)) {
  console.log(typeof y);
  if (y % 2 === 0) {
    console.log('Четное');
  } else {
    console.log('Нечётное');
  }
} else {
  console.log('Упс, это не число');
}
