let arr = [];
arr[0] = [2,3,4,5,7];
arr[1] = [4,5,4,1,7];
arr[2] = [2,1,6,2,7];
arr[3] = [2,3,3,7,7];
arr[4] = [1,5,4,7,9];

// Hiển thị mảng 2 chiều
let str = "";
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
       str += arr[i][j];
    }
    str += "\n";
}
console.log(str);