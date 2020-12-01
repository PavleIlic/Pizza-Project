
class SearchView {
    #parrentEl = document.querySelector('.search');

    getQuery() {
        const query =  this.#parrentEl.querySelector('.search__field').value;
        this.#clearInput();
        return query;
    }

    #clearInput() {
        return this.#parrentEl.querySelector('.search__field').value = '';
    }

    addHeandlerSearch(handler){
        this.#parrentEl.addEventListener('submit', function (e) {
            e.preventDefault();
            handler();
        })
    }
}

export default new SearchView();