import React from 'react';

class ListEntry extends React.Component {
  handleSubmit = (event) => {
    this.props.onSubmit(event)
  }

  handleChange = (event) => {
    this.props.onChange(event)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.props.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="add" />
      </form>
    );
  }
}


export default ListEntry;
