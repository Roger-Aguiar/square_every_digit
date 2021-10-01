export class SquareEveryDigit
{
    static squareDigits(num: number): number 
    {
        let digits = num.toString().split('');
        let squareDigitsConcatened = '';
        
        digits.forEach(digit => 
        {
            squareDigitsConcatened += (Math.pow(Number(digit), 2));
        });
        
        return Number(squareDigitsConcatened.trim());      
    }
}