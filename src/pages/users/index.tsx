import React from 'react'
import type { NextPage } from 'next'
import { useFetch } from '../../hooks/useFetch'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid'
import { LinearProgress, Paper } from '@mui/material'
import CustomNoRowsOverlay from '../../components/table/CustomNoRowsOverlay'

interface User {
  id: number
  name: string
  email: string
}

const Users: NextPage = () => {
  const { data, error } = useFetch<User[]>('http://localhost:3333/posts')

  let loading = true

  if (data || error) {
    loading = false
  }

  const rows: GridRowsProp = data || []
  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'E-mail', width: 150 }
  ]

  return (
    <Paper>
      <div style={{ height: '50vh' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          loading={loading}
          checkboxSelection
          disableSelectionOnClick
          components={{
            LoadingOverlay: LinearProgress,
            NoRowsOverlay: CustomNoRowsOverlay
          }}
        />
      </div>
    </Paper>
  )
}

export default Users
