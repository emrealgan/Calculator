let input = document.querySelector(".space");
let buttons = document.querySelectorAll("button");
let preinput = document.querySelector(".pre");

let string ="";
let numb = "";

let dizi = Array.from(buttons);

dizi.forEach(button => 
{
    button.addEventListener('click', (e) =>
    {   
        if(e.target.innerHTML == '=')
        {   
            string = preinput.innerHTML + string; 
            string = eval(string);
            preinput.innerHTML = "";
            input.value = string.toFixed(2);
        }
        else if(e.target.innerHTML == 'C')
        {   
            numb = "";
            string = "";
            input.value = string;
            preinput.innerHTML = string;
        }
        else if(e.target.classList[0] == "Del")
        {  
            string = string.substring(0,string.length - 1);
            input.value = string;
        }
        else if (e.target.innerHTML == '/' || e.target.innerHTML == '*' 
            || e.target.innerHTML == '-'|| e.target.innerHTML == '+' || e.target.innerHTML == '%')
        {
            if (string === "")
            {
              input.value = "0";
            }
            else
            {
              string += e.target.innerHTML;
              preinput.innerHTML = string;
              string = "";
              input.value = string;
            }
        }
        else if(e.target.innerHTML == '²')
        {   
            string = Number(string);
            string = string ** 2;
            input.value = string.toFixed(2);
        }
        else if(e.target.innerHTML == '√')
        {
            string = Number(string);
            string = Math.sqrt(string);
            input.value = string.toFixed(2);
        }
        else if(input.value[input.value.length - 1] != '.'
             && e.target.innerHTML == '.')
        {
            string += e.target.innerHTML;
            input.value = string;
        }
        else if(e.target.className == "nu")
        {
            string += e.target.innerHTML;
            input.value = string;
        }       
    });
});
document.addEventListener("keydown", (e) => 
{   
    if(e.key == "Enter")
    {    
        numb = preinput.innerHTML + numb; 
        numb = eval(numb);
        preinput.innerHTML = "";
        input.value = numb.toFixed(2);
    }
    else if(e.key == 'C' || e.key == 'c')
    {   
        string = "";
        numb = "";
        input.value = numb;
        preinput.innerHTML = numb;
    }
    else if(e.key == "Backspace")
    {
        numb = numb.substring(0, numb.length-1);
        input.value = numb;
    }
    else if (e.key == '/' || e.key == '*' 
            || e.key == '-' || e.key == '+' || e.key == '%')
    { 
        numb += e.key;
        preinput.innerHTML = numb;
        numb = "";
        input.value = numb;
        
    }
    else if(e.key == '²')
    {   
        numb = Number(numb);
        numb = numb ** 2;
        input.value = numb.toFixed(2);
    }
    else if(e.key == '√')
    {   
        numb = Number(numb);
        numb = Math.sqrt(numb);
        input.value = numb.toFixed(2);
    }
    else if(input.value[input.value.length - 1] != '.' && 
         e.key == '.')
    {
        numb += e.key;
        input.value = numb;
    }
    else if( e.key == '0' || e.key == '1' || e.key == '2' || e.key == '3' || e.key == '4' 
    || e.key == '5' || e.key == '6' || e.key == '7' || e.key == '8' || e.key == '9' )
    {
        numb += e.key;
        input.value = numb;
    }        
});
