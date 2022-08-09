import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import authentication from '../../assets/images/authentication-animate.svg'
import Image from 'next/image'
import {
  Box,
  FormControl,
  Grid,
  Hidden,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography
} from '@mui/material'
import logo from '../../assets/images/logo.svg'
import { Visibility, VisibilityOff } from '@mui/icons-material'

interface State {
  email: string
  password: string
  showPassword: boolean
}

const Home: NextPage = () => {
  const [values, setValues] = React.useState<State>({
    email: '',
    password: '',
    showPassword: false
  })

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value })
    }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    })
  }

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>

      <Box>
        <Grid
          container
          spacing={8}
          alignItems="center"
          justifyContent="center"
          sx={{
            height: '100vh'
          }}
        >
          <Hidden mdDown>
            <Grid item xs={5}>
              <Paper
                elevation={3}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 8
                }}
              >
                <Grid>
                  <Box
                    sx={{
                      m: 3
                    }}
                  >
                    <Box
                      sx={{
                        mt: 7,
                        mb: 5
                      }}
                    >
                      <Image width={40} height={40} src={logo}></Image>
                    </Box>
                    <Typography variant="h3">Hi, Welcome Back</Typography>
                  </Box>
                  <Image src={authentication} />
                </Grid>
              </Paper>
            </Grid>
          </Hidden>
          <Grid
            container
            item
            xs={7}
            alignItems="center"
            justifyContent="center"
            sx={{
              height: '100vh'
            }}
          >
            <Paper
              elevation={3}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 8
              }}
            >
              <Grid>
                <Box
                  sx={{
                    m: 3
                  }}
                >
                  <TextField
                    label="Email / Username"
                    variant="outlined"
                    sx={{
                      width: '450px'
                    }}
                  />
                </Box>
                <FormControl sx={{ m: 3, width: '450px' }}>
                  <InputLabel>Password</InputLabel>
                  <OutlinedInput
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                      <InputAdornment position="end" sx={{ mr: 1 }}>
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Home
