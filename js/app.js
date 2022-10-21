"use strict";


const elSelect = $(".bread")
const size = $('.item')
const input = $('form-check-input')


elSelect.addEventListener('change', (e) => {
    $(".demo").innerHTML = e.target.value;
})
// console.log(elSize);

size.addEventListener('click', (e) => {
    $('.item').classList.add('bg-danger', 'text-white')
    $(".size").innerHTML = `25,`;
})
const size2 = $('.item2')
size2.addEventListener('click', (e) => {
    $('.item2').classList.add('class', 'bg-danger', 'text-white')
    $(".size2").innerHTML = `30,`;
})
const size3 = $('.item3')
size3.addEventListener('click', (e) => {
    $('.item3').classList.add('class', 'bg-danger', 'text-white')
    $(".size3").innerHTML = `35`;
})

//  !btn modal 
$('.btn').addEventListener('click', (e) => {
    if ($('.form-check-input').checked === true) {
        $('.modal__fade').style.display = "flex";
    } else {
        $('.modal__fade-danger').style.display = "flex";
    }
})

$('.btn-success').addEventListener('click', (e) => {
    $('.modal__fade').style.display = "none";
})
$('.danger').addEventListener('click', (e) => {
    $('.modal__fade-danger').style.display = "none";
})



//  !btn modal menu
$('.hamburger').addEventListener('click', (e) => {
    // $('.modal-menu').classList.add('class','d-flex');
    $('.modal-menu').style.display = "flex"
    console.log($('.hamburger '));
})
$('.close').addEventListener('click', (evt) => {
    $('.modal-menu').style.display = "none"
    console.log($('.close'));
})

//  checkbox 
$('.form-check-input').addEventListener('change', (e) => {
    if ($('.form-check-input').checked === true) {
        $('.inner-item').classList.add('class', 'd-block');
    } else {
        $('.inner-item').style.display = "none";
    }
})
$('.check-2').addEventListener('change', (e) => {
    if ($('.check-2').checked === true) {
        $('.inner-item-2').style.display = "block";
    } else {
        $('.inner-item-2').style.display = "none";
    }
})
$('.check-3').addEventListener('change', (e) => {
    if ($('.check-3').checked === true) {
        $('.inner-item-3').style.display = "block";
    } else {
        $('.inner-item-3').style.display = "none";
    }
})
$('.check-4').addEventListener('change', (e) => {
    if ($('.check-4').checked === true) {
        $('.inner-item-4').style.display = "block";
    } else {
        $('.inner-item-4').style.display = "none";
    }
})
$('.check-5').addEventListener('change', (e) => {
    if ($('.check-5').checked === true) {
        $('.inner-item-5').style.display = "block";
    } else {
        $('.inner-item-5').style.display = "none";
    }
})
$('.check-6').addEventListener('change', (e) => {
    if ($('.check-6').checked === true) {
        $('.inner-item-6').style.display = "block";
    } else {
        $('.inner-item-6').style.display = "none";
    }
})

$('.label-order').addEventListener('change', (e) => {
    if ($('.check-8').checked === true) {
        $('.inner-items').style.display = "block";
    } else {
        $('.inner-items').style.display = "none";
    }
})
$('.check-9').addEventListener('change', (e) => {
    if ($('.check-9').checked === true) {
        $('.inner-items-2').style.display = "block";
    } else {
        $('.inner-items-2').style.display = "none";
    }
})