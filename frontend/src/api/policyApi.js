import api from './api'


export const fetchPolicies = () => api.get('/policies')
export const fetchPolicyById = (id) => api.get(`/policies/${id}`)
export const enrollPolicy = (payload) => api.post('/policies/enroll', payload)