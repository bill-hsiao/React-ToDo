import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import ListEntry from './components/ListEntry';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ' ',
      list: ['talk', 'yay']
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const list = this.state.list;
    this.setState({
      value: event.target.value,
      list: list
    });
  }
  handleSubmit(event) {
    const item = this.state.value;
    let updatedList = this.state.list.slice();
    updatedList.push(item)
    this.setState({
      value: '',
      list: updatedList
    });
    alert('A name was submitted: ' + this.state.list);
    event.preventDefault();
  }
  removeItem(i) {
    const value = this.state.value.slice();
    const list = this.state.list.slice();
    list.splice(i, 1);

    this.setState({
      value: value,
      list: list
    })


  }


  render() {
    const myItems = this.state.list;
    return (
      <div>
      <div className="App">

      <div className="App_Header">"Get Things Done ! Do Something !"</div>
      <div className="App_Body">
      <ul>
      <List items={myItems} onClick={this.removeItem}/>
      </ul>
      <ListEntry onSubmit={this.handleSubmit} value={this.state.value} onChange={this.handleChange} />
      </div>
      </div>
      </div>
    );
  }
}



export default App;
