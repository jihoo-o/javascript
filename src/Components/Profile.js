export default class Profile {
    constructor($target) {
        this.$target = $target;
        this.render();
    }

    render() {
        this.$target.innerHTML = "***Profile***";
    }
}
