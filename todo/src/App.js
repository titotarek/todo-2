import Form from './components/Form';
import Card from "./components/Card"
import './App.css';

import React, { Component } from 'react'

 class App extends Component {
   constructor(){
     super()
     this.state ={
       todo: '',
       todoError:'',

       description: '',
       descriptionError: '',
       list:[]

     }
   }

   onChange = (e) => {
     this.setState({ [e.target.name] : e.target.value})
   }


   onClick =(e) => {
     e.preventDefault()
     
     this.setState({todoError: "" , descriptionError: ""})
     if(this.state.todo && this.state.description){
       
    const todos = {
        todo: this.state.todo,
        description: this.state.description,
    }
       const timList = this.state.list
      timList.push(todos)
      this.setState({list:timList})
    }
    this.setState({todo: '' , description: '' })
    if(this.state.todoError === "") this.setState({todoError : "please Enter an Todo! "})
    if(this.state.descriptionError === "") this.setState({descriptionError : "please Enter an description "})


}



// first way to delete  value from input//////////////////////////////

// delTodo = (index) => {
// const tim = []
// this.state.list.forEach((tod, i)=>{
//   if(i !== index){
//     tim.push(tod)
//   }
// })
// this.setState({list:tim})
// }



// seconde way to delete  value from input//////////////////////////////
delTodo = (index) => {

  const tim = this.state.list.filter((tod,i) =>  i !== index)
  this.setState({list :tim})
}
   

  render() { 
    return (
      <div>
        <Form  onChange={this.onChange}  todo={this.state.todo} description={this.state.description}  

        onClick={this.onClick} todoError={this.state.todoError} descriptionError={this.state.descriptionError}
        />
        
      <Card  delTodo={ this.delTodo}  list={this.state.list} />

      </div>
    )
  }
}

export default  App