import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { useFetch } from '../../shared/hooks/useFetch'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid'
import { LinearProgress, Paper } from '@mui/material'
import { CustomNoRowsOverlay, Notify } from '../../shared/components'

interface User {
  id: number
  name: string
  email: string
}

const Users: NextPage = () => {
  const [open, setOpen] = useState(false)
  const { data, error, isValidating } = useFetch<User[]>('users')

  useEffect(() => {
    if (error) {
      setOpen(true)
    }
  }, [error])

  const rows: GridRowsProp = data || []
  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'E-mail', width: 150 }
  ]

  return (
    <Paper>
      <div>
        {/* <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          open={open}
          autoHideDuration={6000}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            {error?.message}
          </Alert>
        </Snackbar> */}
        <Notify
          open={open}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          autoHideDuration={10}
        >
          {error?.message}
        </Notify>
      </div>
      <div style={{ height: '50vh' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          loading={isValidating}
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
