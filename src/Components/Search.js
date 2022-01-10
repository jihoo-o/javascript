export default class Search {
    constructor($target) {
        this.$target = $target;
        this.render();
    }

    render() {
        this.$target.innerHTML = "***Search***";
    }
}
