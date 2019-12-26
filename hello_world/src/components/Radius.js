import React,{Component} from 'react';

export default class Radius extends Component{
    constructor(props){
        super(props);
        this.state={
            area: 0,
            perimeter: 0
        }
    }

    calcArea = ()=>{
        let {props} = this, {radius}= props;
        this.setState({
            area: Math.PI * radius * radius
        })
    };

    calcPerimeter =()=>{
        let {props} = this, {radius}= props;
        this.setState({
            perimeter: 2 * Math.PI * radius
        })
    };



    render(){
        let {state, props, calcArea, calcPerimeter} = this, {area, perimeter} = state, {radius} = props;
        return(
            <div>
                <button onClick={calcArea}>{`Calculate area`}</button>
                <button onClick={calcPerimeter}>{`Calculate perimeter`}</button>
               {
                   area > 0 ?
                   <div>
                       Area of circle is: {area}
                   </div>
                   :
                   ''
               }
               {
                   perimeter > 0 ?
                   <div>
                       Perimeter of circle is: {perimeter}
                   </div>
                   :
                   ''
               } 
            </div>
        );
    }
}