

import React, { Component } from 'react';

import './App.css';
import AddForm from './components/AddForm';
import Item from './components/Item';
import ListContainer from './components/ListContainer';

//stateless functional component
function Header(props){
    return(
        <h1>Design Stores</h1>    
    )
}


class App extends Component {
	constructor(){
		super();
		this.state = {
		   list:[ 
				{ id:1234, name:"Shelfridges", desc:"tops"},
				{ id:1567, name:"Furla", desc:"bags"},
				{ id:1265, name:"Laura", desc:"dresses"}
			]
		}
	}
	addLists=()=>{
		
	}
    updateLists=()=>{

	}
    editedLists=()=>{
		
	}

	render() {
		return (
		  <div className="App">
			  
			<main>
				
			 <AddForm changeParentState={this.addList} list={this.state.list}/>
             <ListContainer changeParentState={this.updateLists} list={this.state.list}/>
			
			</main>
		  </div>
		);
	}
}

export default App;
