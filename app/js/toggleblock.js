function ToggleBlock(param) {
    var elem = param.elem,
        trigger = param.trigger,
        hideClass = param.hideClass,
        showClass = param.showClass,
        self = this;

    function hideEnd(e) {
        if (e.target.classList.contains(hideClass)) {
            e.target.style.display = 'none';
        }
    }

    function init(elem, trigger) {
        if (elem) {
            elem.addEventListener('transitionend', hideEnd);
            elem.addEventListener('animationend', hideEnd);
            if (trigger) {
                trigger.addEventListener('click', self.toggle);
            }
        } else {
            console.warn('Не указан целевой элемент')
        }
    }

    this.show = function() {
        elem.style.display = '';
        setTimeout(function() {
            if (showClass) {
                console.log(showClass);
                elem.classList.add(showClass);
            }
            setTimeout(function() {
                console.log(hideClass);
                elem.classList.remove(hideClass);
            }, 0)
        }, 50)
    }
    this.hide = function() {
        setTimeout(function() {
            if (showClass) {
                elem.classList.remove(showClass);
            }
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