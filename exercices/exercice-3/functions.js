export function averageComputer(numbers){
    let sum = 0;
    
    for(let number of numbers){
        sum = sum + number;
    }
    let average = sum / numbers.length;
    return average;
}