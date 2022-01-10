export default class Home {
    constructor($target) {
        this.$target = $target;
        this.render();
    }

    render() {
        this.$target.innerHTML = "***Home***";
    }
}
