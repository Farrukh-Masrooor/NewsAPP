import React, { Component } from 'react'
import NewsComponent from './NewsComponent'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export class News extends Component {
  static defaultProps={
    pageSize:12,
    country:'in',
    category:'general',
    apiKey:'84258988aded4ba7b1ce3ee074621cfe'
  }

  static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apiKey: PropTypes.string
    
  }

  
  
  constructor(){
    super()
    console.log('this is a constrructor in js');
    this.state= {articles:[],
                    loading:false
    };
  }
  
  async componentDidMount(){
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=1&apiKey=${this.props.apiKey}`
    // this.setState({loading:true})
    // let data= await fetch(url)
    // let parsedData= await data.json()
    // this.setState({articles:parsedData.articles,
    //           page:1,
    //           loading:false,
    //         totalArticles:parsedData.totalResults});
    this.loadNews(false,false);
          
  }

  handleNextClick = async()=>{
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page+1}&apiKey=${this.props.apiKey}`;
    //   this.setState({loading:true})
    //   let data= await fetch(url)
    //   let parsedData= await data.json()
    //   console.log(parsedData.totalResults);

    //   this.setState({articles:parsedData.articles,
    //               loading: false,
    //               page:this.state.page+1
    //             });
    this.loadNews(false, true);
    }
  handlePrevClick = async ()=>{
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${this.state.page-1}&apiKey=${this.props.apiKey}`;
    // this.setState({loading:true})
    // let data= await fetch(url)
    // let parsedData= await data.json()
    // console.log(parsedData.totalResults);

    // this.setState({articles:parsedData.articles,
    //             page:this.state.page-1,
    //             loading:false
    //           });
    this.loadNews(true, false);
  }

  loadNews = async(prev,next)=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&page=${prev?this.state.page-1:next?this.state.page+1:1}&apiKey=${this.props.apiKey}`;
    this.setState({loading:true})
    let data= await fetch(url)
    let parsedData= await data.json()
    this.setState({articles:parsedData.articles,
      page:prev?this.state.page-1:next?this.state.page+1:1,
      loading:false
    });
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>This is the top news of today</h2>
        {this.state.loading &&<Spinner/>}
        <div className='row my-2 my-2'>
          {!this.state.loading&&
            this.state.articles.map(
              (element)=>{
                return <div className='col-md-4 my-2' key={element.url}>
                  <NewsComponent  title={element.title} description={element.description}
                    imageUrl={!element.urlToImage?
                    "https://images.macrumors.com/t/5qniIh0ci_t8vWfp7RjUzVXQI2I=/2500x/article-new/2023/08/Apple-Watch-Series-9-Pink-Aluminum-Feature.jpg":element.urlToImage}
                     newsUrl={element.url} date={element.publishedAt} author={element.author} source={element.source.name}/>
                </div>
              }
            )
          } 
        </div> 
        <div className='my-2 d-flex justify-content-between'>
          <button disabled={this.state.page<=1?true:false} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={Math.ceil(this.state.totalArticles/12)<=this.state.page} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
