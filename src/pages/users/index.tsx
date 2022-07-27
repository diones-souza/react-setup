import React from 'react'
import type { NextPage } from 'next'
import { useFetch } from '../../hooks/useFetch'

interface User {
  id: number
  name: string
  email: string
}

const Users: NextPage = () => {
  const { data } = useFetch<User[]>('users')

  return (
    <ul>
      {data?.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
}

export default Users
