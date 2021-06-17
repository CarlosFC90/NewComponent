import './App.css';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import Paper from '@material-ui/core/Paper';
import { useState } from 'react';
import { styled } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

//SVGs
import DeleteSVG from './svgs/DeleteSVG';

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: 30,
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
  backgroundImage:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
      : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background:
      theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#137cbd',
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  'input:hover ~ &': {
    backgroundColor: '#106ba3',
  },
});

  
function App(props) {
  return (
    <div className="App">
      <Paper elevation={0}>
        <Grid className='card-back' style={{position: 'absolute'}}>
          <div style={{paddingTop: '10px', textAlign: 'right', paddingRight: '8px'}}>
            <DeleteSVG />
          </div>
        </Grid>
      </Paper>
      <Paper className='card' style={{width: '920px', borderRadius: '16px'}} elevation={3}>
        <Grid container spacing={1}>
          <Grid item xs={3} className='items' style={{paddingTop: '15px'}}>
            <b>Subturno n</b>
          </Grid>
          <p style={{color: 'grey'}}>|</p>
          <Grid item xs={2} className='items'>
            <Grid container spacing={0}>
                <Grid item xs={12} style={{paddingTop: '8px', textAlign: 'center'}}>
                  Inicio &nbsp;
                  <input 
                    type='time' 
                    size='small' 
                    style={{color: '#0fb5fa', 
                            width: '80px', 
                            border: 'none', 
                            fontSize: '16px', 
                            fontWeight: 'bold'}}
                  />
                </Grid>
                {/* <Grid item xs={2} styel={{textAlign: 'left'}}>
                  <ExpandLessIcon style={{color: '#0fb5fa'}}/><br/>
                  <ExpandMoreIcon style={{color: '#0fb5fa'}}/>
                </Grid> */}
              </Grid>
          </Grid>
          <p style={{color: 'grey'}}>|</p>
          <Grid item xs={2} className='items'>
            <Grid container spacing={0}>
              <Grid item xs={12} style={{paddingTop: '8px'}}>
                Fin &nbsp;&nbsp;&nbsp;
                <input 
                  type='time' 
                  size='small' 
                  style={{color: '#0fb5fa', 
                          width: '80px', 
                          border: 'none', 
                          fontSize: '16px', 
                          fontWeight: 'bold'}}
                />
              </Grid>
              {/* <Grid item xs={2}>
                <div >
                  <ExpandLessIcon style={{color: '#0fb5fa'}}/><br/>
                  <ExpandMoreIcon style={{color: '#0fb5fa'}}/>
                </div>
              </Grid> */}
            </Grid>
          </Grid>
          <p style={{color: 'grey'}}>|</p>
          <Grid item xs={4} className='items' style={{paddingTop: '15px'}}>
            <Grid container spacing={0}>
              <Grid item xs={10} style={{ textAlign: 'left'}}>
                <FormControlLabel
                  control={
                    <Checkbox
                    sx={{
                      '&:hover': { bgcolor: 'transparent' },
                    }}
                    disableRipple
                    color="default"
                    checkedIcon={<BpCheckedIcon />}
                    icon={<BpIcon />}
                    inputProps={{ 'aria-label': 'Checkbox demo' }}
                    {...props}
                  />
                  }
                  label="Subturno fijo"
                />
              </Grid>
              <Grid item xs={2} style={{paddingTop: '3px', textAlign: 'right'}}>
                <a className='button' href='/' style={{color: '#45ab4f'}}>Listo!</a>
              </Grid>
            </Grid>
          </Grid>
          </Grid>
      </Paper>
      <br/>
      <Paper elevation={0}>
        <Grid className='card-back' style={{position: 'absolute'}}>
          <div style={{paddingTop: '10px', textAlign: 'right', paddingRight: '8px'}}>
            <DeleteSVG fontSize='large' style={{color: 'red'}}/>
          </div>
        </Grid>
      </Paper>
      <Paper className='card' style={{width: '920px', borderRadius: '16px'}} elevation={3}>
        <Grid container spacing={1}>
          <Grid item xs={3} className='items' style={{paddingTop: '15px'}}>
            <b>Subturno n</b>
          </Grid>
          <p style={{color: 'grey'}}>|</p>
          <Grid item xs={2} className='items'>
            <Grid container spacing={0}>
                <Grid item xs={12} style={{paddingTop: '8px', textAlign: 'center'}}>
                  Inicio &nbsp;
                  <input 
                    type='time' 
                    size='small' 
                    style={{color: '#0fb5fa', 
                            width: '80px', 
                            border: 'none', 
                            fontSize: '16px', 
                            fontWeight: 'bold'}}
                  />
                </Grid>
                {/* <Grid item xs={2} styel={{textAlign: 'left'}}>
                  <ExpandLessIcon style={{color: '#0fb5fa'}}/><br/>
                  <ExpandMoreIcon style={{color: '#0fb5fa'}}/>
                </Grid> */}
              </Grid>
          </Grid>
          <p style={{color: 'grey'}}>|</p>
          <Grid item xs={2} className='items'>
            <Grid container spacing={0}>
              <Grid item xs={12} style={{paddingTop: '8px'}}>
                Fin &nbsp;&nbsp;&nbsp;
                <input 
                  type='time' 
                  size='small' 
                  style={{color: '#0fb5fa', 
                          width: '80px', 
                          border: 'none', 
                          fontSize: '16px', 
                          fontWeight: 'bold'}}
                />
              </Grid>
              {/* <Grid item xs={2}>
                <div >
                  <ExpandLessIcon style={{color: '#0fb5fa'}}/><br/>
                  <ExpandMoreIcon style={{color: '#0fb5fa'}}/>
                </div>
              </Grid> */}
            </Grid>
          </Grid>
          <p style={{color: 'grey'}}>|</p>
          <Grid item xs={4} className='items' style={{paddingTop: '15px'}}>
            <Grid container spacing={0}>
              <Grid item xs={10} style={{ textAlign: 'left'}}>
                <FormControlLabel
                    control={
                      <Checkbox
                      sx={{
                        '&:hover': { bgcolor: 'transparent' },
                      }}
                      disableRipple
                      color="default"
                      checkedIcon={<BpCheckedIcon />}
                      icon={<BpIcon />}
                      inputProps={{ 'aria-label': 'Checkbox demo' }}
                      {...props}
                    />
                    }
                    label="Subturno fijo"
                />
              </Grid>
              <Grid item xs={2} style={{paddingTop: '3px', textAlign: 'right'}}>
                <a className='button' href='/' style={{color: '#45ab4f'}}>Listo!</a>
              </Grid>
            </Grid>
          </Grid>
          </Grid>
      </Paper>
      <br/>
      <Paper elevation={0}>
        <Grid className='card-back' style={{position: 'absolute'}}>
          <div style={{paddingTop: '10px', textAlign: 'right', paddingRight: '8px'}}>
            {/* <DeleteOutlineOutlinedIcon fontSize='large' style={{color: 'red'}}/> */}
            <DeleteSVG/>
          </div>
        </Grid>
      </Paper>
      <Paper className='card' style={{width: '920px', borderRadius: '16px'}} elevation={3}>
        <Grid container spacing={1}>
          <Grid item xs={3} className='items' style={{paddingTop: '15px'}}>
            <b>Subturno n</b>
          </Grid>
          <p style={{color: 'grey'}}>|</p>
          <Grid item xs={2} className='items'>
            <Grid container spacing={0}>
                <Grid item xs={12} style={{paddingTop: '8px', textAlign: 'center'}}>
                  Inicio &nbsp;
                  <input 
                    type='time' 
                    size='small' 
                    style={{color: '#0fb5fa', 
                            width: '80px', 
                            border: 'none', 
                            fontSize: '16px', 
                            fontWeight: 'bold'}}
                    />
                </Grid>
                {/* <Grid item xs={2} styel={{textAlign: 'left'}}>
                  <ExpandLessIcon className='arrows-icons'/><br/>
                  <ExpandMoreIcon className='arrows-icons'/>
                </Grid> */}
              </Grid>
          </Grid>
          <p style={{color: 'grey'}}>|</p>
          <Grid item xs={2} className='items'>
            <Grid container spacing={0}>
              <Grid item xs={12} style={{paddingTop: '8px'}}>
                Fin &nbsp;&nbsp;&nbsp;
                <input 
                  type='time' 
                  size='small' 
                  style={{color: '#0fb5fa', 
                          width: '80px', 
                          border: 'none', 
                          fontSize: '16px', 
                          fontWeight: 'bold'}}
                  />
              </Grid>
              {/* <Grid item xs={2}>
                <div >
                  <ExpandLessIcon style={{color: '#0fb5fa'}}/><br/>
                  <ExpandMoreIcon style={{color: '#0fb5fa'}}/>
                </div>
              </Grid> */}
            </Grid>
          </Grid>
          <p style={{color: 'grey'}}>|</p>
          <Grid item xs={4} className='items' style={{paddingTop: '15px'}}>
            <Grid container spacing={0}>
              <Grid item xs={10} style={{ textAlign: 'left'}}>
                <FormControlLabel
                    control={
                      <Checkbox
                      sx={{
                        '&:hover': { bgcolor: 'transparent' },
                      }}
                      disableRipple
                      color="default"
                      checkedIcon={<BpCheckedIcon />}
                      icon={<BpIcon />}
                      inputProps={{ 'aria-label': 'Checkbox demo' }}
                      {...props}
                    />
                    }
                    label="Subturno fijo"
                  />
              </Grid>
              <Grid item xs={2} style={{paddingTop: '3px', textAlign: 'right'}}>
                <a 
                  className='button' 
                  href='/' 
                  style={{color: '#45ab4f'}}
                  >Listo!</a>
              </Grid>
            </Grid>
          </Grid>
          </Grid>
      </Paper>
    </div>
  );
}

export default App;
