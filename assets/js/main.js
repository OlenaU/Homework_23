 
 let count = 0;
 let maxtries = 10;
 let y = Math.floor(Math.random() * 100 + 1);
 console.log(y);

 
 
 function guessnum()
  {  
    let tries = (maxtries-1) - count; 
    tryleft.innerHTML = (`${tries}`);
    
    let x = document.getElementById("x");
    if (count > maxtries) {console.log(tryleft.innerHTML = 'Попытки кончились');
    return(x);
    }
    
    else if(x > y) 

    {    
    result.innerHTML = (`Вы не угадали. Попробуйте меньшее число`);
    count++;
    return;
    

    }

    else if (x < y)
    {
    result.innerHTML = (`Вы не угадали.`);
    count++;  
    return;

    }
    if (x == y)
    {    
    result.innerHTML = (`Ваш вариант ${guessField} является загаданным числом. Поздравяем Вас!`);  
    result.innerHTML = (` It took you ${count} attempts to guess the correct number`);
   
    }

}
 