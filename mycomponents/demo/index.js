Component({
	props: {
		onHello: () => {
			console.log('inner hello');
		}
	},
	didMount(){
		console.log(this.props);
		this.props.onHello();
	}
})