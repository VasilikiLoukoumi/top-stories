import React, {Component} from 'react';
import Article from './Article'

class Articles extends Component {

    state= {
        newsApiLink:"https://newsapi.org/"
    };

    render(){
        return (
            <div id="Articles">
            <div className="bbc-articles">
            <h3 className="text-center">BBC</h3>
           
            <div className="row">
            <div className="col-4"><Article articleNumber = {0} mediaNumber= {0}></Article></div>
            <div className="col-4"><Article articleNumber = {1} mediaNumber= {0}></Article></div>
            <div className="col-4"><Article articleNumber = {2} mediaNumber= {0}></Article></div>  
            </div>
            <div className="row">
            <div className="col-4"><Article articleNumber = {3} mediaNumber= {0}></Article></div>            
            <div className="col-4"><Article articleNumber = {4} mediaNumber= {0}></Article></div>
            <div className="col-4"><Article articleNumber = {5} mediaNumber= {0}></Article></div>
            </div> 
             
            </div>

            <div className="wp-articles">
            <h3 className="text-center">Washington Post</h3>
           
            <div className="row">
            <div className="col-4"><Article articleNumber = {0} mediaNumber= {1}></Article></div>
            <div className="col-4"><Article articleNumber = {1} mediaNumber= {1}></Article></div>
            <div className="col-4"><Article articleNumber = {2} mediaNumber= {1}></Article></div>  
            </div>
            <div className="row">
            <div className="col-4"><Article articleNumber = {3} mediaNumber= {1}></Article></div>            
            <div className="col-4"><Article articleNumber = {4} mediaNumber= {1}></Article></div>
            <div className="col-4"><Article articleNumber = {5} mediaNumber= {1}></Article></div>
            </div> 
                
            </div>
           
            <div className="rt-articles">
            <h3 className="text-center">Russia Today</h3>
           
            <div className="row">
            <div className="col-4"><Article articleNumber = {0} mediaNumber= {2}></Article></div>
            <div className="col-4"><Article articleNumber = {1} mediaNumber= {2}></Article></div>
            <div className="col-4"><Article articleNumber = {2} mediaNumber= {2}></Article></div>  
            </div>
            <div className="row">
            <div className="col-4"><Article articleNumber = {3} mediaNumber= {2}></Article></div>            
            <div className="col-4"><Article articleNumber = {4} mediaNumber= {2}></Article></div>
            <div className="col-4"><Article articleNumber = {5} mediaNumber= {2}></Article></div>
            
            </div>    
            </div>

            <div className="le-monde-articles">
            <h3 className="text-center">Le Monde</h3>
           
            <div className="row">
            <div className="col-4"><Article articleNumber = {0} mediaNumber= {3}></Article></div>
            <div className="col-4"><Article articleNumber = {1} mediaNumber= {3}></Article></div>
            <div className="col-4"><Article articleNumber = {2} mediaNumber= {3}></Article></div>  
            </div>
            <div className="row">
            <div className="col-4"><Article articleNumber = {3} mediaNumber= {3}></Article></div>            
            <div className="col-4"><Article articleNumber = {4} mediaNumber= {3}></Article></div>
            <div className="col-4"><Article articleNumber = {5} mediaNumber= {3}></Article></div>
            
            </div>    
            </div>

             <div className="la-republica-articles">
            <h3 className="text-center">La Republica</h3>
           
            <div className="row">
            <div className="col-4"><Article articleNumber = {0} mediaNumber= {4}></Article></div>
            <div className="col-4"><Article articleNumber = {1} mediaNumber= {4}></Article></div>
            <div className="col-4"><Article articleNumber = {2} mediaNumber= {4}></Article></div>  
            </div>
            <div className="row">
            <div className="col-4"><Article articleNumber = {3} mediaNumber= {4}></Article></div>            
            <div className="col-4"><Article articleNumber = {4} mediaNumber= {4}></Article></div>
            <div className="col-4"><Article articleNumber = {5} mediaNumber= {4}></Article></div>
            
            </div>    
            </div>


                <div className="aj-articles">
            <h3 className="text-center">Al Jazeera</h3>
           
            <div className="row">
            <div className="col-4"><Article articleNumber = {0} mediaNumber= {5}></Article></div>
            <div className="col-4"><Article articleNumber = {1} mediaNumber= {5}></Article></div>
            <div className="col-4"><Article articleNumber = {2} mediaNumber= {5}></Article></div>  
            </div>
            <div className="row">
            <div className="col-4"><Article articleNumber = {3} mediaNumber= {5}></Article></div>            
            <div className="col-4"><Article articleNumber = {4} mediaNumber= {5}></Article></div>
            <div className="col-4"><Article articleNumber = {5} mediaNumber= {5}></Article></div>
            
            </div>    
            </div>


            <div className="newsDotcom-articles">
            <h3 className="text-center">News.com</h3>
           
            <div className="row">
            <div className="col-4"><Article articleNumber = {0} mediaNumber= {6}></Article></div>
            <div className="col-4"><Article articleNumber = {1} mediaNumber= {6}></Article></div>
            <div className="col-4"><Article articleNumber = {2} mediaNumber= {6}></Article></div>  
            </div>
            <div className="row">
            <div className="col-4"><Article articleNumber = {3} mediaNumber= {6}></Article></div>            
            <div className="col-4"><Article articleNumber = {4} mediaNumber= {6}></Article></div>
            <div className="col-4"><Article articleNumber = {5} mediaNumber= {6}></Article></div>
            
            </div>    
            </div>

             <div className="xinhua-articles">
            <h3 className="text-center">Xinhua Net</h3>
           
            <div className="row">
            <div className="col-4"><Article articleNumber = {0} mediaNumber= {7}></Article></div>
            <div className="col-4"><Article articleNumber = {1} mediaNumber= {7}></Article></div>
            <div className="col-4"><Article articleNumber = {2} mediaNumber= {7}></Article></div>  
            </div>
            <div className="row">
            <div className="col-4"><Article articleNumber = {3} mediaNumber= {7}></Article></div>            
            <div className="col-4"><Article articleNumber = {4} mediaNumber= {7}></Article></div>
            <div className="col-4"><Article articleNumber = {5} mediaNumber= {7}></Article></div>
            
            </div>    
            </div>


               <div className="sp-articles">
            <h3 className="text-center">Spiegel</h3>
           
            <div className="row">
            <div className="col-4"><Article articleNumber = {0} mediaNumber= {8}></Article></div>
            <div className="col-4"><Article articleNumber = {1} mediaNumber= {8}></Article></div>
            <div className="col-4"><Article articleNumber = {2} mediaNumber= {8}></Article></div>  
            </div>
            <div className="row">
            <div className="col-4"><Article articleNumber = {3} mediaNumber= {8}></Article></div>            
            <div className="col-4"><Article articleNumber = {4} mediaNumber= {8}></Article></div>
            <div className="col-4"><Article articleNumber = {5} mediaNumber= {8}></Article></div>
            
            </div>    
            </div>

                <div className="toi-articles">
            <h3 className="text-center">The Times of India</h3>
           
            <div className="row">
            <div className="col-4"><Article articleNumber = {0} mediaNumber= {9}></Article></div>
            <div className="col-4"><Article articleNumber = {1} mediaNumber= {9}></Article></div>
            <div className="col-4"><Article articleNumber = {2} mediaNumber= {9}></Article></div>  
            </div>
            <div className="row">
            <div className="col-4"><Article articleNumber = {3} mediaNumber= {9}></Article></div>            
            <div className="col-4"><Article articleNumber = {4} mediaNumber= {9}></Article></div>
            <div className="col-4"><Article articleNumber = {5} mediaNumber= {9}></Article></div>
            
            </div>    
            </div>
            
            
            <div className="el-mundo-articles">
            <h3 className="text-center">El Mundo</h3>
           
            <div className="row">
            <div className="col-4"><Article articleNumber = {0} mediaNumber= {10}></Article></div>
            <div className="col-4"><Article articleNumber = {1} mediaNumber= {10}></Article></div>
            <div className="col-4"></div>
            </div>
             
            </div>

               <div className="globo-articles">
            <h3 className="text-center">Globo</h3>
           
            <div className="row">
            <div className="col-4"><Article articleNumber = {0} mediaNumber= {11}></Article></div>
            <div className="col-4"><Article articleNumber = {1} mediaNumber= {11}></Article></div>
            <div className="col-4"><Article articleNumber = {2} mediaNumber= {11}></Article></div>
            </div>
             <div className="row">
            <div className="col-4"><Article articleNumber = {3} mediaNumber= {11}></Article></div>
            <div className="col-4"><Article articleNumber = {4} mediaNumber= {11}></Article></div>
            <div className="col-4"><Article articleNumber = {5} mediaNumber= {11}></Article></div>
            </div>

            </div>

                  <div className="g-posten-articles">
            <h3 className="text-center">Göteborgs-Posten</h3>
           
            <div className="row">
            <div className="col-4"><Article articleNumber = {0} mediaNumber= {12}></Article></div>
            <div className="col-4"><Article articleNumber = {1} mediaNumber= {12}></Article></div>
            <div className="col-4"><Article articleNumber = {2} mediaNumber= {12}></Article></div>
            </div>
             <div className="row">
            <div className="col-4"><Article articleNumber = {3} mediaNumber= {12}></Article></div>
            <div className="col-4"><Article articleNumber = {4} mediaNumber= {12}></Article></div>
            <div className="col-4"><Article articleNumber = {5} mediaNumber= {12}></Article></div>
            </div>

            </div>


                  <div className="irish-times-articles">
            <h3 className="text-center">The Irish Times</h3>
           
            <div className="row">
            <div className="col-4"><Article articleNumber = {0} mediaNumber= {13}></Article></div>
            <div className="col-4"><Article articleNumber = {1} mediaNumber= {13}></Article></div>
            <div className="col-4"><Article articleNumber = {2} mediaNumber= {13}></Article></div>
            </div>
             <div className="row">
            <div className="col-4"><Article articleNumber = {3} mediaNumber= {13}></Article></div>
            <div className="col-4"><Article articleNumber = {4} mediaNumber= {13}></Article></div>
            <div className="col-4"><Article articleNumber = {5} mediaNumber= {13}></Article></div>
            </div>

            </div>

                       <div className="rtl-articles">
            <h3 className="text-center">RTL Nieuws</h3>
           
            <div className="row">
            <div className="col-4"><Article articleNumber = {0} mediaNumber= {14}></Article></div>
            <div className="col-4"><Article articleNumber = {1} mediaNumber= {14}></Article></div>
            <div className="col-4"><Article articleNumber = {2} mediaNumber= {14}></Article></div>
            </div>
             <div className="row">
            <div className="col-4"><Article articleNumber = {3} mediaNumber= {14}></Article></div>
            <div className="col-4"><Article articleNumber = {4} mediaNumber= {14}></Article></div>
            <div className="col-4"><Article articleNumber = {5} mediaNumber= {14}></Article></div>
            </div>

            </div>

            </div>
           
        )
    }
};

export default Articles;