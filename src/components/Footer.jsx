import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

function Footer(props) {


  function Copyright() {
    return (
      <Typography variant="body2" color="white" align="center">
        {'Copyright © '}
        <Link color="white" href="https://mui.com/">
          ChylMusic
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


  return <div>
  <Box sx={{ bgcolor: 'black', p: 6 }} component="footer">
  <Typography variant="h6" align="center" gutterBottom sx={{color: "white"}}>
    
  </Typography>
  <Typography
    variant="subtitle1"
    align="center"
    color="white"
    component="p"
  >
    Something here to give the footer a purpose!
  </Typography>
  <Copyright />
</Box></div>;
}

export default Footer;