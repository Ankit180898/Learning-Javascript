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
    for(let i =0;i<arr.length;i++){
        arr[i] += 1;

    }
    console.log(arr);
}
addOne([1,2,3]);

// 11i
function addNum(array,num){
    for(let i =0;i<array.length;i++){
        array[i]=array[i]+num;
    }
    console.log(array);
}
addNum([1,2,3],5);

// 11j
function addArrays(array1,array2){
    for(let i =0;i<array1.length;i++){
        array1[i] += array2[i];
    }
    console.log(array1);
}
addArrays([1,2,3],[4,5,6]);

// 11k
function countPositive(nums){
    let count =0;
    for(let i =0;i<nums.length;i++){
        if(nums[i]>0){
            count++;
        }
    }
    console.log(count);

}
countPositive([1,-2,3,-4,5]);

// 11l 11m
function minMax(nums){
    const result = {
        min: nums[0],
        max: nums[0]
     }
    if(nums.length===0){
        result.min = null;
        result.max = null;
        console.log(result);
        return;
    }
    else if(nums.length===1){
        result.min = nums[0];
        result.max = nums[0];
        console.log(result);
        return;
    }
   
     for(let i =0;i<nums.length;i++){
        if(nums[i]<result.min){
            result.min = nums[i];
        }
        else if(nums[i]>result.max){
            result.max = nums[i];
        }
     }
        console.log(result);
}
minMax([3]);

// 11n
function countWords(words){
    const result = {};
    for(let i =0;i<words.length;i++){
        if(result[words[i]]){
            result[words[i]]++;
        }
    
        else{
            result[words[i]] = 1;
        }
    }
    console.log(result);
}
countWords(['apple', 'banana', 'apple', 'orange', 'banana', 'apple']);

