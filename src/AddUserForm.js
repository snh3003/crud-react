import React, { useState } from 'react'
import { Button } from 'reactstrap';
const AddUserForm = ({ addUser }) => {

  const initialFormState = { id: null, name: '', username: '' }
  
  const [user, setUser] = useState(initialFormState)	

  const handleInputChange = (event) => {
	  const { name, value } = event.target

	  setUser({ ...user, [name]: value })
	}
  
  return (
    <form
	  onSubmit={event => {
	    event.preventDefault()
	    if (!user.name || !user.username) return

	    addUser(user)
	    setUser(initialFormState)
	  }}
	>
	  <label>Name</label>
	  <input
	    type="text"
	    name="name"
	    value={user.name}
	    onChange={handleInputChange}
	  />
	  <label>Username</label>
	  <input
	    type="text"
	    name="username"
	    value={user.username}
	    onChange={handleInputChange}
	  />
	  <Button color="danger">Add new user</Button>
	</form>
  )
}

export default AddUserForm