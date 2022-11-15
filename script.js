let d = document;

const h1 = d.querySelector('h1');
let calcular1 = d.querySelector('#Calculo1');
let formcalculo = d.querySelector('.form-calculo');
let calcular2 = d.querySelector('#Calculo2');
let btnCalcular = d.querySelector('#btn-calcular');

formcalculo.addEventListener('submit', function (e){
    e.preventDefault();
        let res; 
        res = parseInt(calcular1.value) + parseInt(calcular2.value);
        console.log (res);
        formcalculo.reset();
});
