let etext = document.querySelector('#inputText_textarea')
let wtext = document.querySelector('.findText_input')
let qtext = document.querySelector('.replacementText_input')
 
document.querySelector('.find_btn').onclick = function(){
    etext.value = etext.textContent.replace(new RegExp(wtext.value,'gi'), wtext.innerHTML = /!/+wtext.value+/!/)

}

document.querySelector('.b2').onclick = function(){
    etext.select()
}

document.querySelectorAll('replace_btn').onclick = function(){
    etext.value = etext.textContent.replace(new RegExp(wtext.value,'gi'), wtext.innerHTML = qtext.value)
}

// b1.onclick = function(){
//     console.log(etext.value)
//      console.log(f1())
//  }

// b2.onclick = function(){
//     etext.select()
//  }

// b3.onclick = function(){
    
//  } 

// const f1 = function(){
//     let regexp = new RegExp(wtext.value, 'gi')
//     regexp.select()
//     return regexp
// }



 

