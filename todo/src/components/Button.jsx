import React from 'react'

function Button({onClick, type, className , buttonName}) {
	
	return <button  onClick={onClick} type={type} className={className}> {buttonName}</button>
	
		
		
		

		
	
}

export default Button
