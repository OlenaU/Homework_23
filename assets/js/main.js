 
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
        tryleft.innerHTML = (`Ваши попытки закончились. К сожалению, вы не угадали число <br> <span style="color: #3FBF5F; font-size: 28px;"> ${y} <br> <span style="color: #67014A; font-size: 16px;">  Нажмите F5, чтобы сыграть снова.`);
        tryleft.style.color = '#67014A';
        return;
        }
       
        else if (x == y)
        {    
        result.innerHTML = (`Поздравляем! Вы угадали число за ${count} раз \\ раза. Нажмите F5, чтобы сыграть снова.`); 
        result.style.color = '#2C49AD'; 
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
    
    
    

    
     
    
   
   
    
    
    
   
    

    