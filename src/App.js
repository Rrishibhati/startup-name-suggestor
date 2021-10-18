import React from "react";
import ReactDom from "react-dom";
import Header from "./header/Header";
import ResultBox from './result-box/ResultBox';

import './App.css';
import SearchBox from "./search-box/SearchBox";

const name = require('@rstacruz/startup-name-generator')

class App extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      app_name : 'NameIt !',
      head_img_expanded : true,
      search_result : [],
    }

  }
  
  searchHandler = (keyword) => {
    this.setState({
      head_img_expanded : !keyword,
      search_result : keyword ? name(keyword) : [],
    });
  }

  render(){
    return (
      <div className="app-container">
        <Header app_name={this.state.app_name} is_img_expanded={this.state.head_img_expanded} />
        <SearchBox searchHandler={this.searchHandler} />
        <ResultBox search_result={this.state.search_result} />
      </div>
    )
  }
}

export default App;