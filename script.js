function display(val){
    let d = document.getElementById('result')
    d.value=d.value+val
}
function ClearDisplay(){
    window.location='index.html'
}
function Result(){
    let inp=document.getElementById('result')
    let res = document.getElementById('result').value
    inp.value=eval(res)
}