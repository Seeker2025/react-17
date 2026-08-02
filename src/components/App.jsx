import { Component } from "react";

import { Search } from './Search/Search';
import { ContentInfo } from "./ContentInfo/ContentInfo";

export class App extends Component{

    state ={
      searchText: '',
    };

    handleSearch = (searchText) =>{
        this.setState({ searchText })
    }

  render(){

          return (
                <div>
                
                  <Search/>
                  
                  <ContentInfo searchText={this.state.searchText}/>


                </div>
          );      
}
}
