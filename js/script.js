const etext = document.querySelector('.inputText_p')
const wtext = document.querySelector('.findText_input')
const qtext = document.querySelector('.replacementText_input')
 
document.querySelector('.findText_input').oninput = function(){ //-
    etext.innerHTML = etext.innerHTML.replace( /(<([^>]+)>)/ig, '')
    if(wtext.value != ''){
        etext.innerHTML = etext.innerHTML.replace(RegExp(wtext.value,'ig'),'<mark>$&</mark>')
    }
    else if(wtext.value == '/[К]/'){
        console.log('это рег выражение')
    }
}

document.querySelector('.select_all_btn').onclick = function(){ //+
    const range = document.createRange()
    range.selectNodeContents(etext)
    const sel = window.getSelection()
    sel.removeAllRanges()
    sel.addRange(range)
}

document.querySelector('.replace_btn').onclick = function(){ //+
    etext.innerHTML = etext.innerHTML.replace(new RegExp(wtext.value,'gi'), qtext.value)
    backup()
}

document.querySelector('.countAllChars_btn').onclick = function(){ //+
    const check = document.querySelector('#spaceCheckbox_input')
    let s
    
    if(!check.checked){
        s = etext.innerHTML.match(/\S/g).length
    }
    else{
        s = etext.innerHTML.length
    }
    output(s)
}

document.querySelector('.cut_btn').onclick = function(){ //+
    etext.innerHTML = etext.innerHTML.replace(new RegExp(wtext.value,'gi'),"")
    backup()
}

document.querySelector('.toLetterCase_btn').onclick = function(){ //-
    let check = document.getElementsByName('toLetterCase')
    for(const c of check){
        if(c.value == 'toLetterCaseHeadwords' && c.checked){
            let r = /\w/g   
            etext.innerHTML = etext.innerHTML.replace(r,r.toUpperCase) 
        }
        else if(c.value == 'toLetterCaseUppercase' && c.checked){
            etext.innerHTML = etext.innerHTML.toUpperCase()
        }  
        else if(c.value == 'toLetterCaseLowercase' && c.checked){
            etext.innerHTML = etext.innerHTML.toLowerCase()
        } 
    }
    backup()
}

document.querySelector('.cleanRadio_btn').onclick = () =>{ //+
    let check = document.getElementsByName('toLetterCase')
    check.forEach(element => {
        element.checked = false
    })
}

document.querySelector('.fontFamily_select').oninput = function(){ //+
    const fontFamilies = document.querySelector('.fontFamily_select')
    if(fontFamilies.options[fontFamilies.selectedIndex].value == 'josephina_FlourishesC'){
        etext.style.fontFamily = 'Josephina FlourishesC'
    }
    else if(fontFamilies.options[fontFamilies.selectedIndex].value == 'theano_Didot'){
        etext.style.fontFamily = 'Theano Didot'
    }
    
}

document.querySelector('.fontSize_input').oninput = function(){ //+
    etext.style.fontSize = document.querySelector('.fontSize_input').value+"px"
}

document.querySelector('.deleteExtraSpaces_btn').onclick = function(){ //+
    let r = /\s{2,}/g
    etext.innerHTML = etext.innerHTML.replace(r,' ')
}
//#region Backup
let ar= [] //-
let i = 0

document.querySelector('.back_btn').onclick = function(){
    i--
    if(i<=0)i=0
    etext.innerHTML = ar[i]
    console.log('i = '+i)
}

document.querySelector('.forward_btn').onclick = function(){
    i++
    if(i>ar.length)i=ar.length
    etext.innerHTML = ar[i]
    console.log('i = '+i)
}

function backup(){   
    if(i == ar.length){
        ar.push(etext.innerHTML)
        i = ar.length
    }
    else{
        ar[i] = etext.innerHTML
        for (let j = i; j < ar.length; j++) {
            ar.splice(j+1)
        }
    }
    // console.log('ar = '+ar)
    // console.log('длинна ar = '+ar.length)
    // console.log('i = '+i)
}
backup()
//#endregion

//#region Save
let extension = '.txt' //-

document.querySelector('.extension_select').oninput = function(){
    const extensions = document.querySelector('.extension_select')
    const opt = extensions.options[extensions.selectedIndex].value
    if(opt == 'txt'){
        console.log('txt')    
        extension = '.txt'
    }
    else if(opt == 'pdf'){
        console.log('pdf')
        extension = '.pdf'
    }
    else if(opt == 'rtf'){
        console.log('rtf')
        extension = '.rtf'
    }
}

// function save(){
//     window.showSaveFilePicker(etext.innerHTML);
// }

document.querySelector('.save_btn').onclick = async function getNewFileHandle(){ //-
    try {
        const [fileHandle] = await window.showSaveFilePicker(
        {
            suggestedName: 'name' + extension,
            types: [
                {
                    description: "Text file",
                    accept: { "text/plain": [extension] },
                },
            ],
            excludeAcceptAllOption: true
        });

        let blob = new Blob([etext.innerHTML], {type: "text/plain"})

        let file = await fileHandle.getFile()
        let contents = await file.text()
        etext.innerHTML = contents

        const writable = await fileHandle.createWritable().write(blob)
        await writable.close();
    } 
    catch (e) {
        output(e)
        console.log('Error= '+e)
    }
  }
//#endregion

function output(str){ //+
    const out = document.querySelector('.outConsole_output')
    out.innerHTML = ">> "+str
}

document.querySelector('.inputText_p').oninput =()=> backup()
    
