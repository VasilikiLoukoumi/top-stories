import React, {Component} from 'react';
import Heading from './components/Heading';
import Articles from './components/Articles';

class App extends Component{
render(){
    return(
        <React.Fragment>
            <Heading></Heading>
            <Articles></Articles>
        </React.Fragment>


    )
}
};


export default App;