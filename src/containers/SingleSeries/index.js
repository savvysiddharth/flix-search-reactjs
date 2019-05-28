import React, {Component} from 'react';
import './index.css';
import Loading from '../../components/Loading/loading.js';
import {Link} from 'react-router-dom';

class SingleSeries extends Component {

  state = {
    show:null
  };

  componentDidMount() {
    const {id} = this.props.match.params;
    fetch("http://api.tvmaze.com/shows/"+id+"?embed=episodes")
      .then(response => response.json())
      .then(data => {this.setState({show:data})})
      .catch(e=>{
        console.log(e);
      });
  }

  render() {
    const {show} = this.state;
    console.log(show);
    return (
      <div>
        {show === null && <Loading />}
        {show !== null
          &&
          <div>
            <h1>{show.name}</h1>
            <div className="wrapper">
              <div className="grid-item">
                <a href={show.image.original}><img className="show-art" src={show.image.medium} alt="Show art" /></a>
              </div>
              <div className="grid-item">
              <p dangerouslySetInnerHTML={{ __html: show.summary }} className='show-info'></p>
                <ul className="info-list">
                  <li><b>Name</b> : {show.name}</li>
                  <li><b>Language</b> : {show.language}</li>
                  <li><b>Premiered</b> : {show.premiered}</li>
                  <li><b>Status</b> : {show.status}</li>
                  <li><b>Genre</b> : {show.genres.join(' | ')}</li>
                </ul>
              </div>
            </div>
            Show id : <a href={show.url}>{this.props.match.params.id}</a>
          </div>
        }
        <br />
        <Link to={`/`} className="test">
          &larr; Go back to search
        </Link>
        <br /><br />
      </div>
    );
  }
}

export default SingleSeries;