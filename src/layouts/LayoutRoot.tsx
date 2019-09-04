import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {  Paper,  Typography,  TextField,  Button, AppBar, Toolbar, IconButton, Link } from '@material-ui/core'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors'
import { dark } from '@material-ui/core/styles/createPalette';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './assets/logo_change.png';
import { BrowserRouter } from 'react-router-dom';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const LayoutRoot: React.FC = () => {
  // const { title } = this.state
  // const handleChange = ({ target: { name, value } }) =>    this.setState({      [name]: value    })

  return (
    <MuiThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />

        <AppBar position="fixed">
          <Toolbar>
            {/* <Link to='/'>
              <img src={logo} alt="domino's pizza" height="36" width="auto"/>
            </Link> */}

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>        
        {/* The rest of your application */}
        <Typography variant='h1' align='center' gutterBottom>Exercises</Typography>
        <Paper style={{ margin: '50px', padding: '50px' }}>
          <form>
            <TextField/>
            <Button type='submit' color='primary' variant='contained'>Create</Button>
          </form>
        </Paper>
      </React.Fragment>
    </MuiThemeProvider>
  );
}

export default LayoutRoot;
