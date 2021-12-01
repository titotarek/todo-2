import React from 'react'
import Button from './Button'

 function Form(props) {
   const {todo, onChange ,onClick,descriptionError, todoError} = props
	
	return (
		<div>
<form style={{margin:'15%'}}> 
  <div className="form-group">
    <label>Takas</label>
    <input value={todo} name="todo" type="text"  onChange={onChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Takas"/>
    <div  className="warning">{todoError}</div>
  </div>
  <div className="form-group">
    <label >Description</label>
    <input value={props.description}   name="description" type="text"   onChange={onChange} className="form-control" id="exampleInputPassword1" placeholder="Enter Description"/>
    <div  className="warning">{descriptionError}</div>
   
  </div>
 
  {/* <button  onClick={props.onClick} type="submit" className="btn btn-primary">Submit</button> */}
  <Button  onClick={onClick} type={"submit"} className={"btn btn-primary"} buttonName={"Submit"}/>
</form>


		</div>
	)
}
export default Form
