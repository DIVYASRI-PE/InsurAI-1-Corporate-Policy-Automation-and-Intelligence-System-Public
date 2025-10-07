// src/pages/users/Users.js

import React, { useEffect, useState } from 'react'
import { fetchUsers, updateUserRole } from '../../api/userApi' // Ensure userApi.js has these functions

export default function Users() {
const [users, setUsers] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState('')
const [success, setSuccess] = useState('')

useEffect(() => {
const loadUsers = async () => {
try {
const { data } = await fetchUsers()
setUsers(data || [])
} catch (err) {
console.error(err)
setError('Failed to load users.')
} finally {
setLoading(false)
}
}
loadUsers()
}, [])

const handleRoleChange = async (userId, newRole) => {
try {
await updateUserRole(userId, newRole)
setSuccess('Role updated successfully!')
setUsers(prev => prev.map(u => u.id === userId ? { ...u, role: newRole } : u))
setError('')
} catch (err) {
console.error(err)
setError('Failed to update role.')
setSuccess('')
}
}

if (loading) return <div style={{ padding: '20px' }}>Loading users...</div>
if (error) return <div style={{ color: '#b00020', padding: '20px' }}>{error}</div>

return (
<div style={{ padding: '20px' }}> <h2>User Management</h2>
<table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '12px' }}> <thead> <tr>
<th style={{ borderBottom: '1px solid #ccc', padding: '8px' }}>Name</th>
<th style={{ borderBottom: '1px solid #ccc', padding: '8px' }}>Email</th>
<th style={{ borderBottom: '1px solid #ccc', padding: '8px' }}>Role</th>
<th style={{ borderBottom: '1px solid #ccc', padding: '8px' }}>Action</th> </tr> </thead> <tbody>
{users.map(u => ( <tr key={u.id}>
<td style={{ padding: '8px' }}>{u.name}</td>
<td style={{ padding: '8px' }}>{u.email}</td>
<td style={{ padding: '8px' }}>{u.role}</td>
<td style={{ padding: '8px' }}>
<select value={u.role} onChange={e => handleRoleChange(u.id, e.target.value)} style={{ padding: '6px', borderRadius: '4px' }}> <option value="Admin">Admin</option> <option value="Employee">Employee</option> <option value="PolicyManager">Policy Manager</option> </select> </td> </tr>
))} </tbody> </table>
{success && <div style={{ color: '#0b5', marginTop: '12px' }}>{success}</div>}
{error && <div style={{ color: '#b00020', marginTop: '12px' }}>{error}</div>} </div>
)
}
