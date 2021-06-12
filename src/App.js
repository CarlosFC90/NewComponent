import './App.css';
import Grid from '@material-ui/core/Grid';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function App() {

  return (
    <div className="App">
      <Grid className='card' sx={{ maxWidth: 700 }}>
        <Grid container spacing={1}>
          <Grid item xs={3} className='items' style={{paddingTop: '15px'}}>
            <b>Subturno n</b>
          </Grid>
          <p style={{color: 'grey'}}>|</p>
          <Grid item xs={2} className='items'>
            <Grid container spacing={0}>
                <Grid item xs={10} style={{paddingTop: '8px', textAlign: 'center'}}>
                  Inicio &nbsp;
                  <b style={{color: '#0fb5fa'}}>9:00</b>
                </Grid>
                <Grid item xs={2} style={{textAlign: 'left', display: 'none'}}>
                  <ExpandLessIcon style={{color: '#0fb5fa'}}/><br/>
                  <ExpandMoreIcon style={{color: '#0fb5fa'}}/>
                </Grid>
              </Grid>
          </Grid>
          <p style={{color: 'grey'}}>|</p>
          <Grid item xs={2} className='items'>
            <Grid container spacing={0}>
              <Grid item xs={10} style={{paddingTop: '8px'}}>
                Fin &nbsp;&nbsp;&nbsp;
                <b style={{color: '#0fb5fa'}}>11:30</b>
              </Grid>
              <Grid item xs={2} style={{display: 'none'}}>
                <div>
                  <ExpandLessIcon style={{color: '#0fb5fa'}}/><br/>
                  <ExpandMoreIcon style={{color: '#0fb5fa'}}/>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <p style={{color: 'grey'}}>|</p>
          <Grid item xs={4} className='items' style={{paddingTop: '15px'}}>
            <Grid container spacing={0}>
              <Grid item xs={10} style={{ textAlign: 'left'}}>
                <input type='radio'/>&nbsp;&nbsp;
                <label>Subturno fijo</label>
              </Grid>
              <Grid item xs={2} style={{paddingTop: '2px', textAlign: 'right'}}>
                <a className='button' href='/' >Editar</a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br/>
      <Grid className='card' sx={{ maxWidth: 700 }}>
        <Grid container spacing={1}>
          <Grid item xs={3} className='items' style={{paddingTop: '15px'}}>
            <b>Subturno n</b>
          </Grid>
          <p style={{color: 'grey'}}>|</p>
          <Grid item xs={2} className='items'>
            <Grid container spacing={0}>
                <Grid item xs={10} style={{paddingTop: '8px', textAlign: 'center'}}>
                  Inicio &nbsp;
                  <b style={{color: '#0fb5fa'}}>11:30</b>
                </Grid>
                <Grid item xs={2} style={{display: 'none'}}>
                  <ExpandLessIcon style={{color: '#0fb5fa'}}/><br/>
                  <ExpandMoreIcon style={{color: '#0fb5fa'}}/>
                </Grid>
              </Grid>
          </Grid>
          <p style={{color: 'grey'}}>|</p>
          <Grid item xs={2} className='items'>
            <Grid container spacing={0}>
              <Grid item xs={10} style={{paddingTop: '8px'}}>
                Fin &nbsp;&nbsp;&nbsp;
                <b style={{color: '#0fb5fa'}}>14:30</b>
              </Grid>
              <Grid item xs={2}>
                <div style={{display: 'none'}}>
                  <ExpandLessIcon style={{color: '#0fb5fa'}}/><br/>
                  <ExpandMoreIcon style={{color: '#0fb5fa'}}/>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <p style={{color: 'grey'}}>|</p>
          <Grid item xs={4} className='items' style={{paddingTop: '15px'}}>
            <Grid container spacing={0}>
              <Grid item xs={10} style={{ textAlign: 'left'}}>
                <input type='radio'/>&nbsp;&nbsp;
                <label>Subturno fijo</label>
              </Grid>
              <Grid item xs={2} style={{paddingTop: '2px', textAlign: 'center'}}>
                <a className='button' href='/'>Editar</a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br/>
      <Grid className='card' sx={{ maxWidth: 700 }}>
        <Grid container spacing={1}>
          <Grid item xs={3} className='items' style={{paddingTop: '15px'}}>
            <b>Subturno n</b>
          </Grid>
          <p style={{color: 'grey'}}>|</p>
          <Grid item xs={2} className='items'>
            <Grid container spacing={0}>
                <Grid item xs={10} style={{paddingTop: '8px', textAlign: 'center'}}>
                  Inicio &nbsp;
                  <b style={{color: '#0fb5fa'}}>14:30</b>
                </Grid>
                <Grid item xs={2} styel={{textAlign: 'left'}}>
                  <ExpandLessIcon style={{color: '#0fb5fa'}}/><br/>
                  <ExpandMoreIcon style={{color: '#0fb5fa'}}/>
                </Grid>
              </Grid>
          </Grid>
          <p style={{color: 'grey'}}>|</p>
          <Grid item xs={2} className='items'>
            <Grid container spacing={0}>
              <Grid item xs={10} style={{paddingTop: '8px'}}>
                Fin &nbsp;&nbsp;&nbsp;
                <b style={{color: '#0fb5fa'}}>15:30</b>
              </Grid>
              <Grid item xs={2}>
                <div >
                  <ExpandLessIcon style={{color: '#0fb5fa'}}/><br/>
                  <ExpandMoreIcon style={{color: '#0fb5fa'}}/>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <p style={{color: 'grey'}}>|</p>
          <Grid item xs={4} className='items' style={{paddingTop: '15px'}}>
            <Grid container spacing={0}>
              <Grid item xs={10} style={{ textAlign: 'left'}}>
                <input type='radio'/>&nbsp;&nbsp;
                <label>Subturno fijo</label>
              </Grid>
              <Grid item xs={2} style={{paddingTop: '2px', textAlign: 'right'}}>
                <a className='button' href='/' style={{color: '#45ab4f'}}>Listo!</a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
