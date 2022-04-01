// catch H1 ( the)
const h1Elem = document.querySelector('h1')

// catch the Parent of H1 (Header)
const closestHeader = h1Elem.closest('header')

// add border to the (closest) Parent
closestHeader.style.border = '5px solid violet'

//-------------------------------------------------

// select all package-title ( section.info فقط التي تقع ضمن )
const allH1PkgTitles = document.querySelectorAll('section.info section.info-package .package-title')

allH1PkgTitles.forEach(element=>{
    let preElement = element.previousElementSibling;
    preElement.style.border = '8px solid lightblue'
})


//---------------------------------------------------

const labelElements = document.querySelectorAll('label')
labelElements.forEach(element=>{
    if(element.className.indexOf('mild') != -1){ // ممكن نكتب : (>= 0)
        element.style.borderBottom = '3px solid yellow'
    }
    // andere Methode :
    // if(element.matches('.mild')) element.style.borderBottom = '3px solid yellow'
    // حلي انا :
    // if (element.className == 'mild') element.style.borderBottom = '3px solid orange'
    else if (element.className == "intense") element.style.borderBottom = '3px solid orange'
    else element.style.borderBottom = '3px solid red'  
})
//-----------------------------------------------------
// اضافة عناصر جديدة الئ قائمة site-map 
// مأخوذين من قائمة nav
let siteMapElem = document.querySelector('.site-map')
let navListElem = document.querySelector('.nav-list')
let navKinder = navListElem.children // navKinder is an Array

for(let i=0 ; i<= navKinder.length ; i++){
    //  اصنع لي ثلاث عناصر Li
    let newLi = document.createElement('li')
    // ضمن كل عنصر جديد منهم ضع المحتوئ من قائمة nav
    newLi.innerText = navKinder[i].innerText

    // الصقهم ضمن قائمة site-map
    siteMapElem.appendChild(newLi)
}

//-----------------------END------------------------