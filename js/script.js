const etext = document.querySelector('.inputText_p')
const wtext = document.querySelector('.findText_input')
const qtext = document.querySelector('.replacementText_input')
 
document.querySelector('.findText_input').oninput = function(){
    //let r = new RegExp(wtext.value,'gi')    
    etext.innerHTML = etext.innerHTML.replace(new RegExp(wtext.value,'gi','<mark>'+wtext.value+'</mark>'))
}

document.querySelector('.select_all_btn').onclick = function(){  //+
    etext.select()
}

document.querySelector('.replace_btn').onclick = function(){ //+
    etext.innerHTML = etext.innerHTML.replace(new RegExp(wtext.value,'gi'), qtext.value)
}

document.querySelector('.countAllChars_btn').onclick = function(){ //+
    const check = document.querySelector('#spaceCheckbox_input')
    if(!check.checked){
        let s = etext.innerHTML.match(/\S/g).length
        console.log('Число символов - ' + s)
    }
    else{
        let s = etext.innerHTML.length
        console.log('Число символов - ' + s)
    }  
}

document.querySelector('.cut_btn').onclick = function(){ //+
    etext.innerHTML = etext.innerHTML.replace(new RegExp(wtext.value,'gi'),"")
}

document.querySelector('.toLetterCase_btn').onclick = function(){
    let check = document.getElementsByName('toLetterCase')
    for(const c of check){
        if(c.value == 'toLetterCaseHeadwords' && c.checked){
            
        }
        else if(c.value == 'toLetterCaseUppercase' && c.checked){
            etext.innerHTML = etext.innerHTML.toUpperCase();
        }  
        else if(c.value == 'toLetterCaseLowercase' && c.checked){
            etext.innerHTML = etext.innerHTML.toLowerCase();
        } 
    }
}


