// src/pages/Settings.js

import React, { useState, useEffect } from 'react'
import { getUserProfile, updateProfile, changePassword } from '../api/userApi' // Ensure userApi.js has these functions

export default function Settings() {
const [profile, setProfile] = useState({ name: '', email: '' })
const [passwords, setPasswords] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' })
const [loading, setLoading] = useState(true)
const [error, setError] = useState('')
const [success, setSuccess] = useState('')

useEffect(() => {
const loadProfile = async () => {
try {
const { data } = await getUserProfile()
setProfile({ name: data.name, email: data.email })
} catch (err) {
console.error(err)
setError('Failed to load profile.')
} finally {
setLoading(false)
}
}
loadProfile()
}, [])

const handleProfileUpdate = async (e) => {
e.preventDefault()
try {
await updateProfile(profile)
setSuccess('Profile updated successfully!')
setError('')
} catch (err) {
console.error(err)
setError('Failed to update profile.')
setSuccess('')
}
}

const handlePasswordChange = async (e) => {
e.preventDefault()
if (passwords.newPassword !== passwords.confirmPassword) {
setError('New password and confirm password do not match.')
return
}
try {
await changePassword(passwords.currentPassword, passwords.newPassword)
setSuccess('Password changed successfully!')
setError('')
setPasswords({ currentPassword: '', newPassword: '', confirmPassword: '' })
} catch (err) {
console.error(err)
setError('Failed to change password.')
setSuccess('')
}
}

if (loading) return <div style={{ padding: '20px' }}>Loading settings...</div>
if (error) return <div style={{ color: '#b00020', padding: '20px' }}>{error}</div>

return (
<div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}> <h2>Profile Settings</h2>
<form onSubmit={handleProfileUpdate} style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
<input type="text" value={profile.name} onChange={e => setProfile({ ...profile, name: e.target.value })} placeholder="Name" style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
<input type="email" value={profile.email} onChange={e => setProfile({ ...profile, email: e.target.value })} placeholder="Email" style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
<button type="submit" style={{ padding: '10px', background: '#0b5', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
onMouseOver={e => e.currentTarget.style.background = '#094'}
onMouseOut={e => e.currentTarget.style.background = '#0b5'}>Update Profile</button> </form>

```
  <h2>Change Password</h2>
  <form onSubmit={handlePasswordChange} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
    <input type="password" value={passwords.currentPassword} onChange={e => setPasswords({ ...passwords, currentPassword: e.target.value })} placeholder="Current Password" style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
    <input type="password" value={passwords.newPassword} onChange={e => setPasswords({ ...passwords, newPassword: e.target.value })} placeholder="New Password" style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
    <input type="password" value={passwords.confirmPassword} onChange={e => setPasswords({ ...passwords, confirmPassword: e.target.value })} placeholder="Confirm New Password" style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
    <button type="submit" style={{ padding: '10px', background: '#0b5', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            onMouseOver={e => e.currentTarget.style.background = '#094'}
            onMouseOut={e => e.currentTarget.style.background = '#0b5'}>Change Password</button>
  </form>
  {success && <div style={{ color: '#0b5', marginTop: '12px' }}>{success}</div>}
  {error && <div style={{ color: '#b00020', marginTop: '12px' }}>{error}</div>}
</div>
```

)
}
