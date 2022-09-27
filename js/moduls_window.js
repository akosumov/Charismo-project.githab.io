const burgerBtn = document.querySelector('.burger');
const menuAdaptiveBlock = document.querySelector('.menu_adaptive_block');
const closeMenuAdaptiveBlock = document.querySelector('.close_menu');
const modal = document.querySelector('.wrapper_module');
const modalOpenBtn = document.querySelector('.sub_header_wrapper_feedback');
const modalCloseBtn = document.querySelector('.close_btn');
const modalInputValue = document.querySelectorAll('.modal_input_value');

burgerBtn.addEventListener('click',()=>{
    menuAdaptiveBlock.classList.add('menu_adaptive_block_active');
});

closeMenuAdaptiveBlock.addEventListener('click',()=>{
    menuAdaptiveBlock.classList.remove('menu_adaptive_block_active');
});

const closeModal = (target)=>{
    modal.classList.remove(target);
    document.body.style.overflow = 'visible';
};
const openModal = (target)=>{
    modal.classList.add(target);
    document.body.style.overflow = 'hidden';
};

const deleteValueFromModal = ()=>{
    modalInputValue.forEach(item=>{
        item.value = '';
    });
};

modalOpenBtn.addEventListener('click',(e)=>{
    openModal('wrapper_module_active');
});

modal.addEventListener('click',(e)=>{
    if(e.target === modal){
        deleteValueFromModal();
        closeModal('wrapper_module_active');
    }
});

modalCloseBtn.addEventListener('click',()=>{
    deleteValueFromModal();
    closeModal('wrapper_module_active');
});

document.addEventListener('keydown',(e)=>{
    if(e.code === 'Escape'){
        deleteValueFromModal();
        closeModal('wrapper_module_active'); 
    }
});
