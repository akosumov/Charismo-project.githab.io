const burgerBtn = document.querySelector('.burger');
const menuAdaptiveBlock = document.querySelector('.menu_adaptive_block');
const closeMenuAdaptiveBlock = document.querySelector('.close_menu');

burgerBtn.addEventListener('click',()=>{
    menuAdaptiveBlock.classList.add('menu_adaptive_block_active');
});

closeMenuAdaptiveBlock.addEventListener('click',()=>{
    menuAdaptiveBlock.classList.remove('menu_adaptive_block_active');
}); 