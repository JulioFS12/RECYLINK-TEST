// 2. Longest string
// Write a function called "rokket" which receives an array with several strings. It must output the longest (character length) string in the array.
// Example:
// const list = ['best', 'company', 'ever']
// console.log(rokket(list)) // this outputs 'company'

export const rokket = (array) => {
    let higherString = 0;
    let elementHigherPosition = 0;

    if (array.length <= 0) return 'empty';

    array.forEach(element => {
        
        if(element.length > higherString){
            higherString = element.length;
            elementHigherPosition = array.indexOf(element);
        }

    });

    return array[elementHigherPosition];

}