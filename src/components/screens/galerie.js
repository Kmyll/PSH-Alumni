import React, { Component } from 'react';
import Picture1 from '../../assets/img/galerie/pic1.JPG';
import Picture4 from '../../assets/img/galerie/pic4.JPG';
import Picture5 from '../../assets/img/galerie/pic5.JPG';
import Picture7 from '../../assets/img/galerie/pic7.JPG';
import Picture8 from '../../assets/img/galerie/pic8.JPG';
import Picture9 from '../../assets/img/galerie/pic9.JPG';
import Picture10 from '../../assets/img/galerie/pic10.JPG';
import Picture14 from '../../assets/img/galerie/pic14.JPG';
import Picture15 from '../../assets/img/galerie/pic15.JPG';
import Picture16 from '../../assets/img/galerie/pic16.JPG';
import Picture17 from '../../assets/img/galerie/pic17.JPG';
import Picture18 from '../../assets/img/galerie/pic18.JPG';
import Picture19 from '../../assets/img/galerie/pic19.JPG';
import Picture20 from '../../assets/img/galerie/pic20.JPG';
import Picture21 from '../../assets/img/galerie/pic21.JPG';
import Picture22 from '../../assets/img/galerie/pic22.JPG';
import Picture24 from '../../assets/img/galerie/pic24.JPG';
import Picture26 from '../../assets/img/galerie/pic26.JPG';
import Picture27 from '../../assets/img/galerie/pic27.JPG';
import Picture28 from '../../assets/img/galerie/pic28.JPG';
import Picture29 from '../../assets/img/galerie/pic29.JPG';
import Picture30 from '../../assets/img/galerie/pic30.JPG';
import Picture31 from '../../assets/img/galerie/pic31.JPG';
import Picture32 from '../../assets/img/galerie/pic32.JPG';
import Picture33 from '../../assets/img/galerie/pic33.JPG';
import Picture34 from '../../assets/img/galerie/pic34.JPG';
import Picture35 from '../../assets/img/galerie/pic35.JPG';
import Picture36 from '../../assets/img/galerie/pic36.JPG';
import Picture37 from '../../assets/img/galerie/pic37.JPG';
import Picture38 from '../../assets/img/galerie/pic38.JPG';
import Picture39 from '../../assets/img/galerie/pic39.JPG';
import Picture40 from '../../assets/img/galerie/pic40.JPG';
import Picture41 from '../../assets/img/galerie/pic41.JPG';

class galerie extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="container">
				<h1>Galerie</h1>
				<h3>1ère rencontre - Les parcours après PSH</h3>
				<section className="flexImg">
					<img src={Picture1} />
					<img src={Picture4} />
					<img src={Picture5} />
					<img src={Picture7} />
					<img src={Picture8} />
					<img src={Picture9} />
					<img src={Picture10} />
					<img src={Picture14} />
					<img src={Picture15} />
					<img src={Picture16} />
					<img src={Picture17} />
					<img src={Picture18} />
				</section>
				<h3>2e rencontre - Les métiers après un Bac ST2S</h3>
				<section className="flexImg">
					<img src={Picture19} />
					<img src={Picture20} />
					<img src={Picture21} />
					<img src={Picture22} />
					<img src={Picture24} />
					<img src={Picture26} />
					<img src={Picture27} />
					<img src={Picture28} />
					<img src={Picture29} />
					<img src={Picture30} />
					<img src={Picture31} />
					<img src={Picture32} />
				</section>
				<h3>2018 - Anciens élèves et Créateurs d'entreprise</h3>
				<section className="flexImg">
					<img src={Picture33} />
					<img src={Picture34} />
					<img src={Picture35} />
					<img src={Picture36} />
					<img src={Picture37} />
					<img src={Picture38} />
					<img src={Picture39} />
					<img src={Picture40} />
					<img src={Picture41} />
				</section>
			</div>
		);
	}
}

export default galerie;
