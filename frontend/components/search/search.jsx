import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "" };
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    }
  }

  handleSubmit() {
    return (e) => {
      e.preventDefault();
      this.props.receiveSearch(this.state.query);
    }
  }

  render() {
    return (
      <form className="search-bar" onSubmit={this.handleSubmit()}>

        <input className="search-field"
          type="text"
          placeholder="Search for an address"
          value={this.state.query}
          onChange={this.update('query')} />

        <input className="search-form-submit"
          type="submit"
          value="Search" />

      </form>
    )
  }
}

export default Search;