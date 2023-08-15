import React, { Component } from 'react'

export class NewsComponent extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, source, date, author } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1'}}>
              {source}</span>
            </h5>
            <p className="card-text">{description}</p>
            <p class="card-text"><small>By {author ? author : "Unknown"} on {new Date(date).toTimeString()}</small></p>
            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-primary">Read Full Article</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsComponent