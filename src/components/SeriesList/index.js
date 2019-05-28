import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';

const SeriesListItem = ({series}) => {
  return (
  <div className="result-item">
    <Link to={`series/${series.show.id}`} className="item-link">
      <li className="result-item-title">{series.show.name}</li>
    </Link>
    {
      series.show.summary === null || series.show.summary.trim() === ''
    }
    {
      series.show.summary !== null
      &&
      <div dangerouslySetInnerHTML={{ __html: series.show.summary.substr(0,100)+".." }} className="result-item-brief"></div>
    }
  </div>
  );
};

const SeriesList = props => {
  return(
    <div>
      <ul className="series-list">
        {props.list.map(series => (
          <SeriesListItem key={series.show.id} series={series} />
          ))}
      </ul>
    </div>
  )
};

export default SeriesList;