import React,{Component} from 'react'


export default class Counter extends Component {
    constructor(props) {
        super();
    }

    render(){
        return(
            <span>{this.props.value}</span>
        )
    }
}