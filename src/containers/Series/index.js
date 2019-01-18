import React, {Component} from 'react';
import SeriesList from '../../components/SeriesList';

class Series extends Component {
  state = {
    series: []
  }

  componentDidMount() {
    fetch("http://api.tvmaze.com/search/shows?q=Vikings")
      .then(response => response.json())
      .then(data => {this.setState({series:data});});
  }

  render() {
    return(
      <div>
        We have total of {this.state.series.length} series!!
        <SeriesList list={this.state.series} />
      </div>
    )
  }
}

export default Series;