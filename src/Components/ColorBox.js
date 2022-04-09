import React, { Component } from 'react'
import "./ColorBox.css"
import {colorDecider} from "../Helper"

export class ColorBox extends Component {
    static defaultProps={
        color:["red","green","blue","magenta","tomato","yellow"]
    }
    constructor(props){
        super(props);
        this.state={
            currentColor:colorDecider(this.props.color)
        }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
    let newColor;
    // jab tak condition satisfy nhe rehte tab tak l baar chal ke bahar aa jayega jab satisfy hoge toh chalta rahega loop means agar same color he toh tab tak krte raho jab tak color alag nhe ho jate jese hee color alag hoga loop se bahar
    do{
        newColor=colorDecider(this.props.color)
        console.log("newColor",newColor);
        console.log("stateColor",this.state.currentColor);
    }while(newColor===this.state.currentColor)
        
            this.setState({
                currentColor:newColor
            })
        

    }
  render() {
    return (
      <div className='ColorBox'style={{backgroundColor:this.state.currentColor}} onClick={this.handleClick}></div>
    )
  }
}

export default ColorBox

