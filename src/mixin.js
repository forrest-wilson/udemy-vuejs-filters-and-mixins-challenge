export const mixin = {
    data () {
        return {
            text: 'Hello'
        }
    },
    computed: {
        revComp () {
            return this.text.split('').reverse('').join('');
        },
        countComp () {
            return `${this.text} (${this.text.length})`
        }
    }
}
