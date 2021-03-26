export const rokket = (array_one, array_two) => {

    const intersection = array_one.filter( 
        element => array_two.includes(element)
    );

    return intersection;

}