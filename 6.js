let arr = [1,1,1,5];
let same;
for (i=1; i<arr.length; i++) {
 if (arr[i-1] == arr[i]) {
     same = true
   } else same = false;
 }
 console.log(same);