// --- Самое простое применение ---
var block_1 = document.querySelector('.block.block_1'),
    button_1 = document.querySelector('button.block_1');

window.toggleBlock = new ToggleBlock({
    elem: block_1,
    trigger: button_1,
    hideClass: 'hide_class',
    showClass: 'show_class'
});

// --- Расширенное применение (вызов методов экземпляра)  ---
var block_1_hide = document.querySelector('button.block_1_hide'),
    block_1_show = document.querySelector('button.block_1_show');

block_1_hide.addEventListener('click', toggleBlock.hide);
block_1_show.addEventListener('click', toggleBlock.show);

// Также для режима переключения можно вызывать
// публичный метод: toggleBlock.toggle()