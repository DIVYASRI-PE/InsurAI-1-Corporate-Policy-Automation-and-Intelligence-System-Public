// src/pages/Reports.js

import React, { useEffect, useState } from 'react'
import { fetchReports } from '../api/reportApi' // Ensure reportApi.js has fetchReports function

export default function Reports() {
const [reports, setReports] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState('')

useEffect(() => {
const loadReports = async () => {
try {
const { data } = await fetchReports()
setReports(data || [])
} catch (err) {
console.error(err)
setError('Failed to load reports.')
} finally {
setLoading(false)
}
}
loadReports()
}, [])

if (loading) return <div style={{ padding: '20px' }}>Loading reports...</div>
if (error) return <div style={{ color: '#b00020', padding: '20px' }}>{error}</div>

return (
<div style={{ padding: '20px' }}> <h2>System Reports</h2>
{reports.length === 0 ? ( <p>No reports available.</p>
) : (
<table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '12px' }}> <thead> <tr>
<th style={{ borderBottom: '1px solid #ccc', padding: '8px' }}>Report Name</th>
<th style={{ borderBottom: '1px solid #ccc', padding: '8px' }}>Generated On</th>
<th style={{ borderBottom: '1px solid #ccc', padding: '8px' }}>Type</th>
<th style={{ borderBottom: '1px solid #ccc', padding: '8px' }}>Action</th> </tr> </thead> <tbody>
{reports.map(r => ( <tr key={r.id}>
<td style={{ padding: '8px' }}>{r.name}</td>
<td style={{ padding: '8px' }}>{new Date(r.generatedAt).toLocaleDateString()}</td>
<td style={{ padding: '8px' }}>{r.type}</td>
<td style={{ padding: '8px' }}>
<button onClick={() => window.open(r.downloadUrl, '_blank')} style={{ padding: '6px 10px', background: '#0b5', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
onMouseOver={e => e.currentTarget.style.background = '#094'}
onMouseOut={e => e.currentTarget.style.background = '#0b5'}>
Download </button> </td> </tr>
))} </tbody> </table>
)} </div>
)
}
