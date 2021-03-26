
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