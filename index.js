let preResults = document.querySelector('.pre-results')
let calculations = document.querySelector('.calculations')
let num =[]


function btnfunction(){
    document.querySelectorAll('button').forEach(function(btn){
        btn.addEventListener('click',function(e){
            if(e.target.id === 'clear'){
                calculations.innerHTML = ''
            }
            else if(e.target.id === 'equal'){
                readnum()
            }
            else if(e.target.id === 'percent'){
                calculations.innerHTML +='%'
            }
            else if(e.target.id === 'delete'){
                backspace()
            }
            else{
                calculations.innerHTML += e.target.id
            }
        })
    })
    document.getElementById('clear').addEventListener('dblclick',function(){
        preResults.innerHTML=''
    })
}
    document.addEventListener('keydown',function(e){
        switch(e.key){
            case '1':{
                calculations.innerHTML += e.key
                break
            }
            case '2':{
                calculations.innerHTML += e.key
                break
            }
            case '3':{
                calculations.innerHTML += e.key
                break
            }
            case '4':{
                calculations.innerHTML += e.key
                break
            }
            case '5':{
                calculations.innerHTML += e.key
                break
            }
            case '6':{
                calculations.innerHTML += e.key
                break
            }
            case '7':{
                calculations.innerHTML += e.key
                break
            }
            case '8':{
                calculations.innerHTML += e.key
                break
            }
            case '9':{
                calculations.innerHTML += e.key
                break
            }
            case '0':{
                calculations.innerHTML += e.key
                break
            }
            case '-':{
                calculations.innerHTML += e.key
                break
            }
            case '+':{
                calculations.innerHTML += e.key
                break
            }
            case '/':{
                calculations.innerHTML += e.key
                break
            }
            case 'shiftKey' && '5':{
                calculations.innerHTML+= '%'
                break
            }
            case '*':{
                calculations.innerHTML+= e.key
                break
            }
            case 'Enter':{
                readnum()
                break
            }
            case 'Backspace':{
                backspace()
                break
            }
        }
    })

function readnum (){
    num=document.querySelector('.calculations').innerHTML.split('')
    if(evaluate(num)){
        if(Math.round(evaluate(num))-evaluate(num)){
            preResults.innerHTML = evaluate(num).toFixed(2)
        }
        else{
            preResults.innerHTML = evaluate(num)
        }
    }
}

function evaluate(num){
    let arr=num.join('')
    return eval(arr)
}

function backspace(){
    let string = calculations.innerHTML.split('')
    string.pop()
    calculations.innerHTML = string.join('')
}

btnfunction()
