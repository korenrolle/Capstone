import * as React from 'react';
// import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
// import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
// import { Umbrella } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';


function MainFeaturedPost(props) {
  // const { post } = props;

  return (
    <div>
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: '#aa9989',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url("https://i.ibb.co/wR6gZyt/pexels-janko-ferlic-590478.jpg")`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      <img style={{ display: 'none' }} src={"https://i.ibb.co/wR6gZyt/pexels-janko-ferlic-590478.jpg"} alt="umbrella"/>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              CHYLMUSIC
            </Typography>
            {/* <Typography variant="h5" color="inherit" paragraph>
            Lorem ipsum
            </Typography> */}
            {/* <Link variant="subtitle1" href="#">
              link
            </Link> */}
          </Box>
        </Grid>
      </Grid>
    </Paper>
                    <Toolbar>
                    <div className="home-links">
                    <Link to="/" className="home-link">
                        <div className="link-text">
                          <h3>Home</h3>
                        </div>
                      </Link>
                      <Link to="/biography" className="home-link">
                        <div className="link-text">
                          <h3>Biography</h3>
                        </div>
                      </Link>
                    
                      <Link to="/music" className="home-link">
                        <div className="link-text">
                          <h3>Forum</h3>
                          {/* <p>Listen to ChylMusic's latest tracks and albums</p> */}
                        </div>
                      </Link>
                      <Link to="/gallery" className="home-link">
                        <div className="link-text">
                          <h3>Contact Me</h3>
                          {/* <p>View photos of ChylMusic's performances and events</p> */}
                        </div>
                      </Link>
                      </div>
                              </Toolbar></div>
  );
}


export default MainFeaturedPost;