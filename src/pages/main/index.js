import React, { Component } from 'react';
import api from '../../services/api';

import logo from '../../assets/logo.svg';
import './styles.css';

export default class main extends Component {
  state = {
    newBox : ''
  };
  
  handleSubmit = async e => {
    e.preventDefault();
    if(this.state.newBox === '') return false;
    const response = await api.post('boxes', {
      title: this.state.newBox,
    });

    this.props.history.push(`box/${response.data._id}`);
  }

  handleInputChange = (e) => {
    this.setState({
      newBox: e.target.value
    });
  }

  handleBoxes = (e) => {
    e.preventDefault();

    this.props.history.push('boxes');

  }
  
  render() {
    return (
        <div id="main-container">
              <form onSubmit={this.handleSubmit} >
                  <img src={logo} alt="" />
                  <input placeholder="Criar um Box" value={this.state.newBox} onChange={this.handleInputChange} />
                  <button type="submit" id="formButton">Criar Nova Box</button>

                  <button type="submit" onClick={this.handleBoxes} id="listarBoxes">Listar Boxes</button>
              </form>
          </div>      
    );
  }
}
