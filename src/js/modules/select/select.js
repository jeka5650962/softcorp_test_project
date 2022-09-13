const getTemplate = (data = [], placeholder, selectedId) => {
    let text = placeholder ?? 'placeholder по умолчанию';

    const items = data.map(item => {
        let cls = '';
        if (item.id === selectedId) {
            text = item.value;
            cls = 'selected';
        }
        return `
            <li class="dropdown__item ${cls}" data-type="item" data-id="${item.id}">${item.value}</li>
        `
    })

    return `
        <div class="form__backdrop" data-type="backdrop"></div>
        <div class="form__input" data-type="input">
            <span data-type="value">${text}</span>
            <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.93375 1.51079C8.93375 1.43936 8.89803 1.359 8.84446 1.30543L8.39803 0.859C8.34446 0.805429 8.2641 0.769714 8.19268 0.769714C8.12125 0.769714 8.04089 0.805429 7.98732 0.859L4.47839 4.36793L0.969462 0.859C0.91589 0.805429 0.835533 0.769714 0.764105 0.769714C0.683748 0.769714 0.612319 0.805429 0.558748 0.859L0.112319 1.30543C0.0587475 1.359 0.0230331 1.43936 0.0230331 1.51079C0.0230331 1.58221 0.0587475 1.66257 0.112319 1.71614L4.27303 5.87686C4.3266 5.93043 4.40696 5.96614 4.47839 5.96614C4.54982 5.96614 4.63018 5.93043 4.68375 5.87686L8.84446 1.71614C8.89803 1.66257 8.93375 1.58221 8.93375 1.51079Z" fill="black"/>
            </svg>
        </div>
        <div class="form__dropdown dropdown">
            <ul class="dropdown__list">
                ${items.join('')}
            </ul>
        </div>
    `
}

export class Select {
    constructor(selector, options) {
        this.$el = document.querySelector(selector);
        this.options = options;
        this.selectedId = options.selectedId;

        this.#render();
        this.#setup();
    }

    #render() {
        const {placeholder, data} = this.options;
        this.$el.classList.add('form__select');
        this.$el.innerHTML = getTemplate(data, placeholder, this.selectedId);
    }

    #setup() {
        this.clickHandler = this.clickHandler.bind(this);
        this.$el.addEventListener('click', this.clickHandler);
        this.$value = this.$el.querySelector('[data-type="value"]');
    }

    clickHandler(event) {
        const {type} = event.target.dataset;

        if (type === 'input') {
            this.toggle();
        } else if (type === 'item') {
            const id = event.target.dataset.id;
            this.select(id);
        } else if (type === 'backdrop') {
            this.close();
        } else {
            this.toggle();
        }
    }

    get isOpen() {
        return this.$el.classList.contains('open');
    }

    get current() {
        return this.options.data.find(item => item.id === this.selectedId);
    }

    select(id) {
        this.selectedId = id;
        this.$value.textContent = this.current.value;

        const form = document.getElementById('form');

        this.$el.querySelectorAll('[data-type="item"]').forEach(el => {
            el.classList.remove('selected');
        })

        const oldInputSelect = document.getElementById('input-select');

        if (oldInputSelect != null) {
            form.removeChild(oldInputSelect);
        }

        const element = this.$el.querySelector(`[data-id="${id}"]`);
        element.classList.add('selected');

        var input = document.createElement("input");
        input.type = "hidden";
        input.name = "userSelect";
        input.id = "input-select";
        input.value = this.current.value;

        form.appendChild(input);

        this.options.onSelect ? this.options.onSelect(this.current) : null;

        this.close();
    }

    toggle() {
        this.isOpen ? this.close() : this.open();
    }

    open() {
        this.$el.classList.add('open');
    }

    close() {
        this.$el.classList.remove('open');
    }

    destroy() {
        this.$el.removeEventListener('click', this.clickHandler);
        this.$el.innerHTML = '';
    }
}