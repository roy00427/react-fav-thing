import React, { Component } from 'react';
import Item from './Item';


export default class ListContainer extends Component {
	render() {  
		let dataList=this.props.list;
		console.log(dataList);
		return (
			<div className="main-div">
				<h2>Store List</h2>
				<ul>

				{ dataList.map( (item, index) => (
					<Item key={item.id} info={item}/>
				))
				}

				</ul>
			</div>
		);
	}
}