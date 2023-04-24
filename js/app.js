//FUNCION PARA INICIO.HTML BARRA DESPLEGABLE

const btnToggle = document.querySelector('.toggle-btn');
btnToggle.addEventListener('click',function(){
    document.getElementById('sidebar').classList.toggle('active');
})
