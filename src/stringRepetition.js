// 3. String repetition
// Write a function called "rokket" which receives a string A and an integer N and returns a new string with A repeated N times.
// Example:
// console.log(rokket('node', 5)) // this outputs 'nodenodenodenodenode'
// console.log(rokket('abc', 2)) // this outputs 'abcabc'

export const rokket = (string, number) => {
    if(!string || number <= 0 || !number){
        return 'empty';
    }
    
    return string.repeat(number);
}