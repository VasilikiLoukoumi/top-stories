import React, {Component} from 'react';

class Navbar extends Component{
   state={

   };

    render(){
        return(
            <div id="navbar">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
 
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <p class="nav-item nav-link">Europe</p>
      <p class="nav-item nav-link">America</p>
      <p class="nav-item nav-link" >Africa</p>
      <p class="nav-item nav-link">Asia</p>
      <p class="nav-item nav-link">Australia</p>
    </div>
  </div>
</nav>
            </div>

        )
    }
};

export default Navbar;