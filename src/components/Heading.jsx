import React, {Component} from 'react';
import Navbar from './Navbar';

class Heading extends Component{
    state= {
        title:"Today's News"
    }


    
    render(){
        return(
            <div id="heading" className="row" >
            <div className="col-12">
            <div className="jumbotron">
            <h1 className="text-center"><a href="#heading">{this.state.title}</a></h1>  
            <blockquote className="text-center"><a className="news-api-link" href={this.state.newsApiLink} target="_blank" rel="noopener noreferrer"><em>Powered by the News API.</em></a></blockquote> 
            </div> 
            <Navbar></Navbar>                 
            </div>
            </div>

        )
    }

};

export default Heading;