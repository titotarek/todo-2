import React from 'react'
import Button from './Button'

function card(props) {
	return (
		<div>
			
    {props.list.map( (user,index )=> {
  return(
<div className="card" style={{width: "18rem"}} key={index} >
  <div className="card-body">
    <h5 className="card-title">{user.todo}</h5>
    <p className="card-text">{user.description}</p>
    {/* <button type="button" onClick={()=> props.delTodo(index)} className="btn btn-danger">Delete</button> */}
    <Button type={"button"} onClick={()=> props.delTodo(index)} className={"btn btn-danger"} buttonName={"Delete"}  />
  </div>
</div>
  )
})}
		</div>
	)
}

export default card
