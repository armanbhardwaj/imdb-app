import React, { Component } from 'react';
import './style/style.css';
import './style/custom.css';
import { connect } from 'react-redux';
import Button from './Components/Button.js';
import Input from './Components/Input.js';
import { InputAC, ClickAC } from './container/Actions/Actions';
import { createStructuredSelector } from 'reselect';
import {
  makeselectsearch,
  makeselecturl,
  makeselecttitle,
  makeselectinput,
  makeselectactors,
  makeselectplot,
  makeselectgenre
} from './container/selectors';

import Image from './images/IMDb_Header_Page.jpg';

class App extends Component {
  changeHandler = (e) => {
    var str = e.target.value
    var i = 0, strLength = str.length;
    for (i; i < strLength; i++) {
      str = str.replace(" ", "+");
    }
    this.props.handleChange(e.target.value, str)
  }
  _handleKeyPress = (e) => {
    alert();
    console.log(e);
    console.log("e");

    if (e.key === 'Enter') {
      this.changeHandler(e);
    }
  }
  
  handleClick =()=>{
    var hr = document.getElementById('line');
    if(hr.style.visibility === "hidden")
      hr.style.visibility = "visible";
      this.props.handleClick();
  }
  render() {
    console.log(this.props);
    return (
      <div className="header">
        <img alt="header" className="rounded IMDb_Header_Page" src={Image} />
        <div className="container">
          <p className="h1 heading">Search Movies Here...</p>
          <Input className='col-9 field' placeholder="Search Movies here.." onChange={this.changeHandler} type="text" onKeyPress={(e)=>this._handleKeyPress(e)} value={this.props.input} />
          <Button id="buttonID" className='col-2 btn btn-primary ml2' onClick={this.handleClick}>Search</Button>
          <hr className="hr" id="line"/>
          <p className="h1">{this.props.title}</p>
          <div className="show">

           <div className="img-div" >
             <img alt="" className="rounded" src={this.props.url} />
             </div>
          <div className="details-div">
          <div className="col-mg-3"></div>
          <div className="col-mg-3"><p className="h2 maroon">{this.props.actors}</p></div>
          
          <p className="h4 navy">{this.props.plot}</p>
          <p className="h3">{this.props.genre}</p>
          </div>
          
          
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => createStructuredSelector({

  search: makeselectsearch(),
  url: makeselecturl(),
  title: makeselecttitle(),
  input: makeselectinput(),
  actors:makeselectactors(),
  plot:makeselectplot(),
  genre:makeselectgenre()
})


const mapDispatchToProps = (dispatch) => ({
  handleChange: (input, value) => dispatch(InputAC(input, value)),
  handleClick: () => dispatch(ClickAC())
})




export default connect(mapStateToProps, mapDispatchToProps)(App);

