import React, {Component} from 'react'
import './style.css'

export default class <%= componentName %> extends Component{
	constructor(props){
		super(props)

		this.state = {}
	}

	componentDidMount(){

	}

	render(){
		return(
			<div className="component_<%= componentName %>">
				
			</div>
		)
	}
}