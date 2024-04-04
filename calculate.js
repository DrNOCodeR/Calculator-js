const resultElement = document.getElementById("result")
const v1=document.getElementById("v1")
const v2=document.getElementById("v2")
const plus2 = document.getElementById("plus")
const minus2 = document.getElementById("minus")
const multiple2 = document.getElementById("multiple")
const del2 = document.getElementById("del")
const submitBtn2 = document.getElementById("submit")
plus2.onclick = function(){
    action="+"
}
minus2.onclick = function(){
    action="-"
}
multiple2.onclick = function(){
    action="*"
}
del2.onclick = function(){
    action="/"
}
submitBtn2.onclick = function() {
    if (action=="+"){
        resultElement.textContent = Number(v1.value)+Number(v2.value)
        resultElement.style.color = "green"
    }
    if (action=="-"){
        resultElement.textContent = Number(v1.value)-Number(v2.value)
        resultElement.style.color = "red"
    }
    if (action=="*"){
        resultElement.textContent = Number(v1.value)*Number(v2.value)
        resultElement.style.color = "blue"
    }
    if (action=="/"){
        resultElement.textContent = Number(v1.value)/Number(v2.value)
        resultElement.style.color = "orange"
    }
}
