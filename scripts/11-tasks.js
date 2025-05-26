const nums=[10,20,30];

// 11a
nums[2]= 99;
console.log(nums);

// 11b
function getLastValue(arr){
    console.log(arr[arr.length-1]);
}

getLastValue([1,2,3,4,5]);


// 11c
function arraySwipe(array){
    let temp = array[0];
    array[0] = array[array.length-1];
    array[array.length-1] = temp;
    console.log(array);
}

arraySwipe([1,2,3,4,5]);
 
// 11d 
for(let i =0;i<=10;i=i+2){
    console.log(i);
}

// 11e
for(let i =5;i>=0;i--){
    console.log(i);
}

// 11g
const nums2=[1,2,3];
let increaseNums =[];
for(let i =0;i<nums2.length;i++){
    increaseNums.push(nums2[i]+1);
}
console.log(increaseNums);

// 11h
function addOne(arr){
    
}