import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import api from '../../services/api';
import '../Boxes/styles.css'
import TopHeader from '../TopHeader';

export default class Boxes extends Component {
  state = {
      boxes : []
  }

  async componentDidMount(){    
    const response = await api.get('boxes');

    this.setState({boxes: response.data});
  }

  mandaMensagem = (box_id) => {
    this.props.history.push(`box/${box_id}`);
  }

  goToInitialPage = () => {
    this.props.history.push('/');
  }
  
  render() {
    return (
    <div>
    <TopHeader />
      <div id="boxes-container">
          <header>
              <img src={logo} alt="" onClick={() => this.goToInitialPage()}/>
              <h1>Boxes Disponíveis</h1>
          </header>
          <ul>
              { this.state.boxes && this.state.boxes.map(box => (
                <li key={box._id}>
                    <button key={box._id} onClick={() => this.mandaMensagem(box._id)}>{box.title}</button>
                </li>
              )) }
          </ul>
      </div>
    </div>
    );
  }
}
