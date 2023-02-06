
        import * as React from 'react';
        // import AppBar from '@mui/material/AppBar';
        import Button from '@mui/material/Button';
        // import CameraIcon from '@mui/icons-material/PhotoCamera';
        import Card from '@mui/material/Card';
        import CardActions from '@mui/material/CardActions';
        import CardContent from '@mui/material/CardContent';
        import CardMedia from '@mui/material/CardMedia';
        import Grid from '@mui/material/Grid';
        import Stack from '@mui/material/Stack';
        import Box from '@mui/material/Box';
        // import Toolbar from '@mui/material/Toolbar';
        import Typography from '@mui/material/Typography';
        import Container from '@mui/material/Container';
        import { Link } from 'react-router-dom';
        import { createTheme, ThemeProvider } from '@mui/material/styles';
        import './Home.css'
        // import MusicPlayer from "../Music/MusicPlayer";
        import Radio from '../../components/Player/Player';

                
        const mp3List = [
          {
            title: "Song 1",
            src: "https://file-examples.com/storage/feeb72b10363daaeba4c0c9/2017/11/file_example_MP3_700KB.mp3",
            cover: "https://i.ibb.co/QJMNR18/pexels-miguel-a-padrin-a-n-3391932.jpg",
          },
          {
            title: "Song 2",
            src: "https://file-examples.com/storage/feeb72b10363daaeba4c0c9/2017/11/file_example_WAV_1MG.wav",
            cover: "https://i.ibb.co/yRJs0Md/pexels-meryem-11960199-1.jpg",
          },
          {
            title: "Song 3",
            src: "https://file-examples.com/storage/feeb72b10363daaeba4c0c9/2017/11/file_example_MP3_700KB.mp3", 
            cover: "https://i.ibb.co/xgfxMDh/pexels-anna-holodna-12528815.jpg",
          },
        ];
        
        const cards =
        [
        {
        id: 1,
        artist: 'Chylmusic',
        title: 'Dreams',
        description: 'A dreamy ballad that takes the listener on a journey through emotions',
        mp3: 'Dreams.mp3',
        coverImage: 'https://i.ibb.co/kx0F1x7/pexels-pixabay-260024.jpg',
        backgroundColor: '#645451'
        },
        {
        id: 2,
        artist: 'Chylmusic',
        title: 'Dancing in the Rain',
        description: 'A happy and energetic track about the joys of dancing in the rain',
        mp3: 'Dancing_in_the_Rain.mp3',
        coverImage: 'https://i.ibb.co/ryxQmjd/pexels-lanyjade-mondou-14923853.jpg',
        backgroundColor: '#aa9989'
        },
        {
        id: 3,
        artist: 'Chylmusic',
        title: 'Lonely Nights',
        description: 'A soulful ballad that captures the feeling of loneliness',
        mp3: 'Lonely_Nights.mp3',
        coverImage: 'https://i.ibb.co/QJMNR18/pexels-miguel-a-padrin-a-n-3391932.jpg',
        backgroundColor: '#2d2521'
        },
        {
        id: 4,
        artist: 'Chylmusic',
        title: 'The Ocean',
        description: 'An uplifting track that evokes the feeling of being at the beach',
        mp3: 'The_Ocean.mp3',
        coverImage: 'https://i.ibb.co/680P6xH/pexels-angela-roma-7480273.jpg',
        backgroundColor: '#645451'
        },
        {
        id: 5,
        artist: 'Chylmusic',
        title: 'Lost Without You',
        description: 'A heartfelt ballad about the struggles of being without a loved one',
        mp3: 'Lost_Without_You.mp3',
        coverImage: 'https://i.ibb.co/yRJs0Md/pexels-meryem-11960199-1.jpg',
        backgroundColor: '#aa9989'
        },
        {
        id: 6,
        artist: 'Chylmusic',
        title: 'Happy Together',
        description: 'A joyful track that celebrates love and togetherness',
        mp3: 'Happy_Together.mp3',
        coverImage: 'https://i.ibb.co/xgfxMDh/pexels-anna-holodna-12528815.jpg',
        backgroundColor: '#2d2521'
        },
        ];
        
        const theme = createTheme();
        
        export default function Album() {
          return (
            <ThemeProvider theme={theme}>
              <main>
                <Box
                  sx={{
                    bgcolor: '#2d2521',
                    pt: 8,
                    pb: 6,
                    display: "flex",
                    flexDirection: "row"
                  }}
                >
                  <Container maxWidth="sm" sx={{bgcolor: "#2d2521"}}>
                    <Typography
                      component="h1"
                      variant="h2"
                      align="center"
                      color="text.primary"
                      gutterBottom
                    >
                      Album layout
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                      Something short and leading about the collection below—its contents,
                      the creator, etc. Make it short and sweet, but not too short so folks
                      don&apos;t simply skip over it entirely.
                    </Typography>
                    <Stack
                      sx={{ pt: 4 }}
                      direction="row"
                      spacing={2}
                      justifyContent="center"
                    >
                      <Link to='/music' variant="contained">Check Out Our Forum</Link>
                    </Stack>
                    
                  </Container>
                  <Radio mp3List={mp3List} />
                </Box>
                <Container sx={{ py: 8 }} maxWidth="md">
                  {/* End hero unit */}
                  <Typography
                      component="h1"
                      variant="h2"
                      align="left"
                      color="white"
                      gutterBottom
                    >
                     Music Exhibit
                    </Typography>
                  <Grid container spacing={4}>
                    {cards.map((card) => (
                      <Grid item key={card.id} xs={12} sm={6} md={4}>
                        <Card
                          sx={{ height: '100%', display: 'flex', flexDirection: 'column',justifyContent:'center', backgroundColor: `${card.backgroundColor}`, color: 'white' }}
                        >
                          <CardMedia
                            component="img"
                            sx={{
                              // 16:9
                              width: '175px',
                              height: '125px',
                              pt: '20.25%',
                              pl: '15.25%'
                            }}
                            image={card.coverImage}
                            alt="cover"
                          />
                          <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="h2">
                            {card.title}
                            </Typography>
                            <Typography>
                              {card.description}
                            </Typography>
                          </CardContent>
                          <CardActions>
                            {/* <Button size="small">View</Button>
                            <Button size="small">Edit</Button> */}
                          </CardActions>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Container>
                <Box
                  sx={{
                    bgcolor: '#2d2521',
                    pt: 8,
                    pb: 6,
                    display: "flex",
                    flexDirection: "row"
                  }}
                >
                  <Container maxWidth="sm" sx={{bgcolor: "#2d2521"}}>
                    <Typography
                      component="h1"
                      variant="h2"
                      align="center"
                      color="text.primary"
                      gutterBottom
                    >
                     About Me
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                      Something short and leading about the collection below—its contents,
                      the creator, etc. Make it short and sweet, but not too short so folks
                      don&apos;t simply skip over it entirely.
                    </Typography>
                    <Stack
                      sx={{ pt: 4 }}
                      direction="row"
                      spacing={2}
                      justifyContent="center"
                    >
                    </Stack>
                    
                  </Container>
                  {/* <Container><MusicPlayer/></Container> */}
                </Box>
              </main>
              {/* Footer */}
              
              {/* End footer */}
            </ThemeProvider>
          );
        
                          }
      