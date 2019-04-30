import React from 'react';
import { css } from '@emotion/core';
import SearchContainer from '../search/search_container';
import HomeIndexItem from './home_index_item';
import BeatLoader from 'react-spinners/BeatLoader';

const override = css`
    display: block;
    margin: auto;
`;

class HomeIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllHomes();
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  getResults() {
    const { homes, search } = this.props;
    let results;

    if (search == "") {
      results = homes;
    } else {
      results = homes.filter(home => {
        if (home.address) return home.address.toLowerCase().includes(search.toLowerCase());
      });
    }

    if (results.length == 0) {
      return (<p className="no-results">{`Sorry, we couldn't find anything for that :(`}</p>);
    } else {
      return results.map(home => (
        <HomeIndexItem
          key={home.id}
          home={home} />
      ));
    }
  }

  render() {
    const { homes } = this.props;

    if (homes.length == 0) {
      return <div className="loading">
        <BeatLoader
          css={override}
          color={'#58accb'} />
      </div>
    }

    const results = this.getResults();
    const resultHeaders = (
      <div className="result-headers">
        <p className="home-category-30">Address</p>
        <p className="home-category-15">Price</p>
        <p className="home-category-15">Beds</p>
        <p className="home-category-15">Baths</p>
        <p className="home-category-25">Location</p>
      </div>
    )

    return (
      <div className="home-index-container">
        <div className="sticky-bar">
          <SearchContainer />
          {resultHeaders}
        </div>
        <div>
          {results}
        </div>
      </div>
    )
  }
}

export default HomeIndex;