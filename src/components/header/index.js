import { h } from 'preact';


function Header () {
	console.log(this.props)
	return (
	<header>
		<h1>Preact App</h1>
	</header>
	)
}

export default Header;
