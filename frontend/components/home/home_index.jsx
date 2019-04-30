import React from 'react';
import SearchContainer from '../search/search_container';

class HomeIndex extends React.Component {componentDidMount() {
    this.props.fetchAllHomes();
    window.scrollTo(0, 0);
  }

  render() {
    const { homes, search } = this.props;

    if (homes.length == 0) {
      return (<p>empty</p>)
    }

    let results;
    if (search == "") {
      results = homes;
    } else {
      results = homes.filter(home => {
        if (home.address) return home.address.toLowerCase().includes(search)
      });
    }

    const resultsList = results.map(home => {
      return (<p key={home.id}>{home.address}</p>)
    });

    return (
      <div>
        <SearchContainer />
        {resultsList}
      </div>
    )
  }
}

export default HomeIndex;