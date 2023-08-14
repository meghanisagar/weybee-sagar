function specialRomanNumericRules(romanNum) {
    if(romanNum == 900){
        return 'CM';
    } else if(romanNum == 400){
        return 'CD';
    } else if(romanNum == 90){
        return 'XC';
    } else if(romanNum == 40){
        return 'XL';
    } else if(romanNum == 9){
        return 'IX';
    } else if(romanNum == 4){
        return 'IV';
    }
}

function toRomanNumber(inputNumber){
    let finalRomanNumber = inputNumber;
    let mString = '';
    if(inputNumber < 1 || inputNumber > 3999){
        return 'invalid Number';
    }
    // 1000
    if(finalRomanNumber / 1000 >= 1){
        let mRoman = finalRomanNumber / 1000 ;
        for(i = 1;i<=mRoman;i++){
            mString += 'M';
            finalRomanNumber = finalRomanNumber - 1000;
        }       
    }
    // 900
     if(finalRomanNumber / 900 >= 1){
        let mRoman = finalRomanNumber / 900 ;
        for(i = 1;i<=mRoman;i++){
             mString += specialRomanNumericRules(900);
            finalRomanNumber -= 900;
        }       
    }
    // 500
    if(finalRomanNumber / 500 >= 1){
        let mRoman = finalRomanNumber / 500;
        for(i = 1;i<=mRoman;i++){
            mString += 'D';
            finalRomanNumber = finalRomanNumber - 500;
        }   
    }
    // 400
    if(finalRomanNumber / 400 >= 1){
        let mRoman = finalRomanNumber / 400 ;
        for(i = 1;i<=mRoman;i++){
            mString += specialRomanNumericRules(400);
            finalRomanNumber -= 400;
        }       
    }
    // 100
    if(finalRomanNumber / 100 >= 1){
        let mRoman = finalRomanNumber / 100;
        for(i = 1;i<=mRoman;i++){
            mString += 'C';
            finalRomanNumber = finalRomanNumber - 100;
        }   
    }
    // 90
    if(finalRomanNumber / 90 >= 1){
        let mRoman = finalRomanNumber / 90 ;
        for(i = 1;i<=mRoman;i++){
            mString += specialRomanNumericRules(90);
            finalRomanNumber -= 90;
        }       
    }
    // 50
    if(finalRomanNumber / 50 >= 1){
        let mRoman = finalRomanNumber / 50;
        for(i = 1;i<=mRoman;i++){
            mString += 'L';
            finalRomanNumber = finalRomanNumber - 50;
        }   
    }
    // 40
    if(finalRomanNumber / 40 >= 1){
        let mRoman = finalRomanNumber / 40;
        for(i = 1;i<=mRoman;i++){
            mString += specialRomanNumericRules(40);
            finalRomanNumber -= 40;
        }   
    }
    // 10
    if(finalRomanNumber / 10 >= 1){
        let mRoman = finalRomanNumber / 10;
        for(i = 1;i<=mRoman;i++){
            mString += 'X';
            finalRomanNumber = finalRomanNumber - 10;
        }   
    }
    // 9
    if(finalRomanNumber / 9 >= 1){
        let mRoman = finalRomanNumber / 9;
        for(i = 1;i<=mRoman;i++){
            mString += specialRomanNumericRules(9);
            finalRomanNumber -= 9;
        }   
    }
    // 5
    if(finalRomanNumber / 5 >= 1){
        let mRoman = finalRomanNumber / 5;
        for(i = 1;i<=mRoman;i++){
            mString += 'V';
            finalRomanNumber = finalRomanNumber - 5;
        }   
    }
    // 4
    if(finalRomanNumber / 4 >= 1){
        let mRoman = finalRomanNumber / 4;
        for(i = 1;i<=mRoman;i++){
            mString += specialRomanNumericRules(4);
            finalRomanNumber -= 4;    
        }   
    }
    // 3,2,1
    if(finalRomanNumber < 4){
        let mRoman = finalRomanNumber;
        for(let i = 1 ; i <= mRoman ; i++){
            mString += 'I';
            finalRomanNumber -= 1;
        }     
    }
    return mString;
}
// all cases are covcered...

console.log(toRomanNumber(1994));

