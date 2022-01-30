(() => {
    const combobox = document.querySelector('#combobox_1');
    const comboboxTitle = combobox.querySelector('.combobox-title');
    const comboboxItems = combobox.querySelectorAll('.combobox-item');

    function onSelectedItem() {
        [comboboxTitle.dataset.lang, this.dataset.lang] = [this.dataset.lang, comboboxTitle.dataset.lang];
        [comboboxTitle.innerHTML, this.innerHTML] = [this.innerHTML, comboboxTitle.innerHTML];

        setLanguage(comboboxTitle.dataset.lang);
    }

    async function setLanguage(lang) {
        console.log(lang + ' language is used');
    }

    comboboxItems.forEach(item => {
        item.addEventListener('click', onSelectedItem)
    });

})()