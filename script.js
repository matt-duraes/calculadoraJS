let teclas = {

}
document.querySelectorAll('.item').forEach(item =>{
    item.addEventListener('click',itemClick);
});

function itemClick(e){
    let item = e.target.getAttribute('data-item');
    document.querySelector('#resultado').innerHTML= item;

}