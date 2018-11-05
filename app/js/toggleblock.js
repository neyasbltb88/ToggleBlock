function ToggleBlock(param) {
    var elem = param.elem,
        trigger = param.trigger,
        hideClass = param.hideClass,
        self = this;

    function hideEnd(e) {
        if (e.target.classList.contains(hideClass)) {
            e.target.style.display = 'none';
        }
    }

    function init(elem, trigger) {
        if (elem) {
            elem.addEventListener('transitionend', hideEnd);
            elem.addEventListener('animation', hideEnd);
            if (trigger) {
                trigger.addEventListener('click', self.toggle);
            }
        } else {
            console.warn('Не указан целевой элемент')
        }
    }

    this.show = function() {
        if (elem.classList.contains(hideClass)) {
            elem.style.display = '';
        }
        setTimeout(function() {
            elem.classList.remove(hideClass);
        }, 0)
    }
    this.hide = function() {
        setTimeout(function() {
            elem.classList.add(hideClass);
        }, 0)
    }
    this.toggle = function() {
        if (elem.classList.contains(hideClass)) {
            self.show();
        } else {
            self.hide();
        }
    }

    init(elem, trigger);
}