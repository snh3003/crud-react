import React from 'react'
import { Button } from 'reactstrap';

const UserTable = ({ users, deleteUser, editRow }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {users.length > 0 ? (
        users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <Button
                 color="danger"
                 className="button muted-button"
                 onClick={() => {
                    editRow(user)
                  }}
                 > Edit
              </Button>
              <Button
                 color="danger"
                 className="button muted-button"
                 onClick = { () => deleteUser(user.id)}
                 > Delete
              </Button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable