import React, { Component } from 'react';
import api from '../../services/api';

import logo from '../../assets/logo.svg';
import './styles.css';

export default class main extends Component {
	state = {
		headings: '',
		contents: ''
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		if (this.state.headings === '' || this.state.contents === '') return false;
		var headers = {
			'Content-Type': 'application/json'
		};

		const response = await api.post(
			'https://ferramentas-api.herokuapp.com/notification',
			{
				app_id: '5dfe89e6-bc6c-4d6d-b780-c61ebb680a57',
				headings: this.state.headings,
				contents: this.state.contents,
				priority: 10
			},
			{ headers: headers }
		);
		console.log(response);
	};

	handleInputChange = (e, campo) => {
		if (campo === 'headings') {
			this.setState({
				headings: e.target.value
			});
		}

		if (campo === 'contents') {
			this.setState({
				contents: e.target.value
			});
		}
	};

	render() {
		return (
			<div id="main-container">
				<form onSubmit={this.handleSubmit}>
					<img src={logo} alt="" />
					<input
						placeholder="Cabeçalho da Notificação"
						value={this.state.headings}
						onChange={(text) => this.handleInputChange(text, 'headings')}
					/>

					<input
						placeholder="Mensagem da Notificação"
						value={this.state.contents}
						onChange={(text) => this.handleInputChange(text, 'contents')}
					/>
					<button type="submit" id="formButton">
						Enviar Notificação
					</button>
				</form>
			</div>
		);
	}
}
