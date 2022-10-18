let string='';
let buttons=document.getElementsByTagName('button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='C'){
            string="";
            document.querySelector('input')=string;
        }
        else if(e.target.innerHTML=="X"){
            string=string.slice(0,string.length-1);
            document.querySelector('input')=string;
        }
        else{
        console.log(e.target);
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
        }
    });
});