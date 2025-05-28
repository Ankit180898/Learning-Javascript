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

// 11o 11p - modify if first appearance of 'search' break;
function searchString(arr){
    for(let i =0;i<arr.length;i++){
        if(arr[i]==='search'){
            console.log(i);
            return; // Break the loop if 'search' is found
        }
    }
    console.log(-1); // If 'search' is not found, return -1
}
searchString(['apple', 'search', 'search', 'orange']);

// 11q
function finIndex(array,word){
    for(let i=0;i<array.length;i++){
        if(array[i]===word){
            console.log(i);
            return; // Break the loop if the word is found
        }
    }
    console.log(-1); // If the word is not found, return -1
}
finIndex(['apple', 'banana', 'orange'], 'banana'); // 1

// 11r 11s 11t 11u
function removeEgg(food){
    const result = [];
    const reversedFood = food.slice().reverse(); // Create a reversed copy of the array
    let count =0;
    for(let i =0;i<reversedFood.length;i++){
        if(reversedFood[i]==='egg' && count<2){
            count++;
            continue; // Skip the first two occurrences of 'egg'
        }
        // If it's not 'egg' or if we've already skipped two 'egg's, add to result
        result.push(food[i]);
    }
    return result.reverse(); // Reverse back to maintain original order
}
console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham'])); // ['egg', 'apple', 'ham']

// 11v
function fizzBuzz(){
    for(let i =1;i<=20;i++){
        if(i%3==0){
            console.log('Fizz');
        }
        else if(i%5==0){
            console.log('Buzz');
        }
        else if(i%3==0 && i%5==0){
            console.log('FizzBuzz');
        }
        else{
            console.log(i);
        }
    }
}
fizzBuzz();

// 11w
function finIndex(array,word){
    for(let i=0;i<array.length;i++){
        if(array[i]===word){
            console.log(i);
            return i; // Break the loop if the word is found
        }
    }
    return -1; // If the word is not found, return -1
}
function uniqueArr(array){
    const uniqueArray = [];
    for(let i =0;i<array.length;i++){
        const word = array[i];
        // using finIndex to check if the word is already in 
        // uniqueArray
        if(finIndex(uniqueArray, word) === -1) {
            uniqueArray.push(word);
        }

    }
    return uniqueArray;
}
console.log(uniqueArr(['green', 'red', 'blue', 'red'])); // ['green', 'red', 'blue']



