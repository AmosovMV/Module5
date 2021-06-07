let arr = [1,1,2,4,10,11,15,10,'er',0,];
let evenArr = 0;
let oddArr = 0;
let zeroArr = 0;
for (i=0; i<arr.length; i++ ) {
 if (typeof arr[i] != 'number') {
   i++;
 }
    if (arr[i] %2 === 0) {
    evenArr++;
  } else oddArr++;
  if (arr[i] === 0) {
    zeroArr++;
    console.log('нулей - ' + zeroArr); 
  } 
}
console.log('четные - ' + evenArr, 'нечетные - ' + oddArr);