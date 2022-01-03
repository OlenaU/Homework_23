 
    let y = Math.floor(Math.random() * 100 + 1);
    console.log(y);
    let count = 1;
    let maxtries = 10;


    function guessnum()
    {   
        let x = document.getElementById('xvar').value;
        console.log(x); 
        let tries = maxtries - count;
        console.log(tries);
        tryleft.innerHTML = (`${tries}`);
        if (isNaN(x)) {
            tryleft.innerHTML = (`Пожалуйста, введите число`);
            return ;
          }
    
          
        if (tries <= 0 ) 
        {
        tryleft.innerHTML = (`Ваши попытки закончились. Нажмите F5, чтобы сыграть снова.`);
        return;
        }
       
        else if (x == y)
        {    
        result.innerHTML = (`Ваш вариант ${x} является загаданным числом. Поздравяем Вас!`);  
        result.innerHTML = (`Вы угадали число за ${count} попытки \\ попыток. Нажмите F5, чтобы сыграть снова.`); 
        return;
        
        }
    
        else if(x > y) 
    
        {    
        count++;
        result.innerHTML = (`Вы не угадали. Попробуйте меньшее число`);
        return;
    
        }
    
        else  (x < y)
        {
        count++; 
        result.innerHTML = (`Вы не угадали. Попробуйте большее число`);
    
        }
        
    } 
    
    
    

    
     
    
   
   
    
    
    
   
    

    