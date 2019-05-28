import React, {Component} from 'react';
import Intro from '../../components/Intro';
import SeriesList from '../../components/SeriesList';
import './series.css';
import Loading from '../../components/Loading/loading.js';

class Series extends Component {
  state = {
    series: [],
    seriesName:'',
    isFetching:false
  }

  onSeriesInputChange = e => {
    this.setState({seriesName:e.target.value, isFetching:true});
    fetch("http://api.tvmaze.com/search/shows?q="+e.target.value)
      .then(response => response.json())
      .then(data => {this.setState({series:data, isFetching:false});});
  }

  render() {
    const {series,seriesName,isFetching} = this.state;

    return(
      <div>
        <Intro message="Here you can find all tv series and web series!" />
        {/* We have total of {series.length} series!! */}
        <div>
          <input
          value={seriesName}
          type="text"
          onChange={this.onSeriesInputChange}
          placeholder="Search here..."
          className="search-box"
          />
        </div>
        {
          series.length === 0 && seriesName.trim() === ''
          &&
          <p>Enter a series..</p>
        }
        {
          !isFetching && series.length === 0 && seriesName.trim() !== ''
          &&
          <p>No TV series found</p>
        }
        {
          isFetching
          &&
          <Loading />
        }
        {
          !isFetching
          &&
          <SeriesList list={series} />
        }
      </div>
    )
  }
}

export default Series;