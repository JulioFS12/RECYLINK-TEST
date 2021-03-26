// 5. Unique numbers
// Write a function called "rokket" which receives two number arrays of any size. Return a list containing the intersection of the two arrays (all unique numbers in both
// arrays).
// Example:
// console.log(rokket([1, 2, 5], [2, 1, 6])) // this outputs [1, 2]
// console.log(rokket([1, 2, 3], [4, 5, 6])) // this outputs []

export const rokket = (array_one, array_two) => {

    const intersection = array_one.filter( 
        element => array_two.includes(element)
    );

    return intersection;

}