


'use client'

import useSWR from 'swr'
import { api } from '../lib/api'

export default function ManageProfile() {
  const { data, error, isLoading } = useSWR(
  ['https://jsonplaceholder.typicode.com/users/1', { }], 
  ([url, params]) => api.get(url, params)
)
  
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading user</div>

  return (
     <div className="p-10">
      <h1 className="text-black font-bold mb-4">View manage-profile</h1>
    <div>
      <h1>User Profile</h1>
      <p>Name: {data?.name}</p>
      <p>Email: {data?.email}</p>
    </div>
    </div>
  )
}