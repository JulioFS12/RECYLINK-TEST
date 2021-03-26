export const rokket = (string, number) => {
    if(!string || number <= 0 || !number){
        return 'empty';
    }
    
    return string.repeat(number);
}