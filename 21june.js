//21 june assignments of class
//assignment#1
function checkevenodd(alg) {
    var nm = 2;
    console.log('Result of Assignment#1 that checks even/odd', '\n');
    console.log('The given number is ', alg, '\n');
    if (alg % nm == 1) {
        console.log('the number is odd');
    }
    if (alg % nm == 0) {
        console.log('the number is even');
    }
}
checkevenodd(5);
checkevenodd(8);
console.log('==============================================================================================');
//assignment#2
function arrayoperations(arr) {
    console.log('\n', 'Result of assignment#2 with operation of elements in array task', '\n');
    console.log('Original Array', arr, '\n');
    console.log('Adding to last of array,New length of array', arr.push(6), '\n');
    console.log('After adding, array becomes', arr, '\n');
    console.log('Removing first item of ARRAY,the number is', arr.shift(), '\n');
    console.log('After removing, the array is modified and here it is', arr, '\n');
}
arrayoperations([1, 2, 4, 5]);
console.log('\n', '==============================================================================================');
//assignment#3
function multiplyarray(ar) {
    var p = ar.map(function (d) { return d * 2; });
    console.log('\n', 'Result of assignment 3 that multplies array with a number', '\n', 'Given array', ar);
    console.log('Modified array', p);
}
multiplyarray([1, 3, 5, 4]);
console.log('\n', '==============================================================================================');
//assignment#4
function findlargest(large) {
    console.log('\n', 'Result of assignment#4 that finds largest number in array ');
    console.log('\n', 'The original array is', large);
    var largest1 = large.sort();
    var largest = largest1.reverse();
    console.log('\n', 'The sorted array is ', largest1, '\n', 'The largest number in this array is ', largest[0]);
}
findlargest([6, 2, 9, 3]);
console.log('\n', '==============================================================================================');
//assignment#5
function reversestring(mine) {
    console.log('\n', 'Result of assignment#5 of accepting a string and revesing that string', '\n', '\n', 'Original string: ', mine);
    var leng = mine.length;
    var q = mine.split("", leng);
    var q2 = q.reverse();
    var s = "";
    var q3 = q2.forEach(function (f) { return s += f; });
    console.log('\n', 'Result: The string is reversed: ', s);
}
reversestring("samiya");
