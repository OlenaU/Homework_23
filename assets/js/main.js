 
 let count = 1;
 let maxtries = 10;
 let y = Math.floor(Math.random() * 100 + 1);
 console.log(y);
 
 function guessnum()
  {  
    let tries = maxtries - count; 
    tryleft.innerHTML = (`${tries}`);
    
   
    if (count >= maxtries) 
    {
        tryleft.innerHTML = (`Ваши попытки закончились. Нажмите F5, чтобы сыграть снова.`);
    
    }

    let x = document.getElementById(xvar.value);
    
    if (x == y)
    {    
    result.innerHTML = (`Ваш вариант ${xvar} является загаданным числом. Поздравяем Вас!`);  
    result.innerHTML = (` It took you ${count} attempts to guess the correct number`);
   
    }

    else if(x > y) 

    {    
    result.innerHTML = (`Вы не угадали. Попробуйте меньшее число`);
    count++;
    return;

    }

    else if (x < y)
    {
    result.innerHTML = (`Вы не угадали.  Попробуйте большее число`);
    count++;  
    return;

    }
    

}
 