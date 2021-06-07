let myArr = new Map();
myArr.set('key1', 1);
myArr.set('key2', 'str');
myArr.set('key3', true);

for (let key of myArr.keys()) {
  console.log(`Ключ - ${key}, значение - ${myArr.get(key)}`)
}