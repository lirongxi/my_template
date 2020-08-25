    // const { header, Footer } = this.$slots
    // const body = this.$slots.default
export default {
	data(){
		return{
			_slots:'',
			body:'',
		}
	},
	props:['myData'],
    render: function(createElement) {
        return createElement('div', [
            createElement('header', this._slots.header),
            createElement('main', this.body,this.myData),
            createElement('footer', this._slots.Footer)
        ])
    },
    created(){
    	this._slots = this.$slots;
    	this.body = this.$slots.default;
    	// console.log(this.$slots)
    }
}