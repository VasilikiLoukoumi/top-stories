import React, {Component} from 'react';

class Article extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            requestLinks:["https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=",
            "https://newsapi.org/v2/top-headlines?sources=the-washington-post&apiKey=",
            "https://newsapi.org/v2/top-headlines?sources=rt&apiKey=",
        "https://newsapi.org/v2/top-headlines?sources=le-monde&apiKey=",
    "https://newsapi.org/v2/top-headlines?sources=la-repubblica&apiKey=",
"https://newsapi.org/v2/top-headlines?sources=al-jazeera-english&apiKey=",
"https://newsapi.org/v2/top-headlines?sources=news-com-au&apiKey=",
"https://newsapi.org/v2/top-headlines?sources=xinhua-net&apiKey=",
"https://newsapi.org/v2/top-headlines?sources=spiegel-online&apiKey=",
"https://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=",
"https://newsapi.org/v2/top-headlines?sources=el-mundo&apiKey=",
"https://newsapi.org/v2/top-headlines?sources=globo&apiKey=",
"https://newsapi.org/v2/top-headlines?sources=goteborgs-posten&apiKey=",
"https://newsapi.org/v2/top-headlines?sources=the-irish-times&apiKey=",
"https://newsapi.org/v2/top-headlines?sources=rtl-nieuws&apiKey="],                       
            articleData:{
                author:"",
                requestLink:"",
                key:"d53f3c56193a4bbc9a6cefbe515fe235",
                title:"",
                description:"",
                content:"",
                url:"",
                publishedAt:""
            }
        };
      }

    


    render(){
        return(
            <div className="article">
            <ul className="articleData list-group">                
                <li className="list-group-item"><h2>{this.state.articleData.title}</h2></li>
                <li className="list-group-item"><em>Published at {this.state.articleData.publishedAt}</em></li>
                <li className="list-group-item"><em><strong>Summary:</strong> {this.state.articleData.description}</em></li>
                <li className="list-group-item">{this.state.articleData.content}</li>
                <li className="list-group-item"><a target ="_blank" rel="noopener noreferrer" href={this.state.articleData.url}>Read more...</a></li>
                </ul>
            </div>

        )
    }

    componentDidMount() {

        fetch(this.state.requestLinks[this.props.mediaNumber] + this.state.articleData.key)
          .then(response => response.json())
          .then(
              data => this.setState({ articleData:data.articles[this.props.articleNumber]} ))
        }
    }



export default Article;