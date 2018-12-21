import React from 'react';
import './list.css';
// import Item from './Item';

class List extends React.Component {
  removeItem = (i) => {
    this.props.onClick(i)
  }

  render() {
    return (
    this.props.items.map((listValue, i) => {
      return (
        <div className="List">
        <li key={i}>{listValue}</li>
        <button onClick={this.removeItem} />
        </div>
      )})
      )

  }



}
export default List;

//          <Item value={this.props.items[i]} />
