let x = false;
let y = typeof x;

switch (y) {
  case 'string':
    console.log('X - строка');
    break;
  case 'number':
    console.log('X - число');
    break;
  case 'boolean':
    console.log('X - логический тип');
    break;
  default:
    console.log('Тип неопределён');
}