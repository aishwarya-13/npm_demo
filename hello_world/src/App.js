import React, {Component} from 'react';
import Radius from './components/Radius.js';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      radius:0
    }
  }

  render(){
    let {state} = this,{radius} = state;

    return(
      <div>
        <div>
          <label>Enter radius:</label>
          <input type='text' value={radius > 0 ? radius : ''} placeholder={'Enter radius'} onChange={(event)=>{
            this.setState({
              radius: event.target.value
            })
          }}/>
        </div>
        <Radius radius={radius}/>
      </div>
    )
  }
};
