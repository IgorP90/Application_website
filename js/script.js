const etext = document.querySelector('#inputText_textarea')
const wtext = document.querySelector('.findText_input')
const qtext = document.querySelector('.replacementText_input')
 
document.querySelector('.find_btn').onclick = function(){
    etext.value = etext.textContent.replace(new RegExp(wtext.value,'gi'), `<${wtext.value}>`)
}

document.querySelector('.select_all_btn').onclick = function(){  //+
    etext.select()
}

document.querySelector('.replace_btn').onclick = function(){ //+
    etext.value = etext.textContent.replace(new RegExp(wtext.value,'gi'), qtext.value)
}

document.querySelector('.countAllChars_btn').onclick = function(){ //+
    const check = document.querySelector('#spaceCheckbox_input')
    if(!check.checked){
        let s = etext.value.match(/\S/g).length
        console.log('Число символов - ' + s)
    }
    else{
        let s = etext.value.length
        console.log('Число символов - ' + s)
    }  
}

document.querySelector('.cut_btn').onclick = function(){ //+
etext.value = etext.textContent.replace(new RegExp(wtext.value,'gi'),"")
}