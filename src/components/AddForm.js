import React, { Component } from 'react';


class AddForm extends Component {
    
    constructor(){
        super();
		this.state={
}
        
    }
	changId=()=>{
		
	}
    saveItem=(ev)=>{
        ev.preventDefault();
       
        let id=Date.now();
        let name=this.name.current.value;
        let desc=this.desc.current.value;
		console.log(name);
        console.log(desc);
        
		
        let listItems=this.props.info.list;
	    let data ={id,name,desc};
       
		listItems.push(data);
        this.setState({list:listItems});
        this.props.changeParentState(this.state);
        console.log(listItems);
    }
    
  render() {
    return (
      <div>
        <form onSubmit={this.sendItUp}>
		<h1>Design Stores</h1>
<h2>Add New Store</h2>
<input type="text" placeholder="Name"
onChange={this.updateName}/>

<input type="desc" placeholder="Description"
onChange={this.updateDescription}/>

<input type="number" value={this.state.id} onChange={this.changeId} />

<button onClick={this.addItems}>Add</button>
</form>
        </div>
    );
  }
}

export default AddForm;
