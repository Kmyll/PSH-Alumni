import React, { Component } from 'react';
import ProcesVerbal2018 from '../../assets/img/ProcesVerbal2018.png';
import ProcesVerbal2018DOc from '../../assets/documents/2018 - 12 - Procès verbal 1ère AG - 17 déc.pdf';

class ag extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="container">
				<h1>Assemblées Générales</h1>
				<section className="agSection">
					<ul>
						<li>
							<a href="#">
								<img className="pvImgOpacity" src={ProcesVerbal2018} />
								<legend className="legend">Assemblée générale 2020, a venir</legend>
							</a>
						</li>
						<li>
							<a href="#">
								<img className="pvImgOpacity" src={ProcesVerbal2018} />
								<legend className="legend">
									Assemblée générale 2019,<br /> annulée pour cause de COVID-19
								</legend>
							</a>
						</li>
						<li>
							<a href={ProcesVerbal2018DOc} target="_blank">
								<img className="pvImg" src={ProcesVerbal2018} />
								<legend className="legend">Assemblée générale 2018</legend>
							</a>
						</li>
					</ul>
				</section>
			</div>
		);
	}
}

export default ag;
