import React, { useState, useRef } from "react";
import makeStyles from '@mui/styles/makeStyles';
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import IconButton from "@material-ui/core/IconButton";
import ReactPlayer from "react-player";

const useStyles = makeStyles((theme) => ({
  playerContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(2),
    "& .MuiIconButton-root": {
      animation: "$pulse 1s ease-in-out infinite",
    },
  },
  "@keyframes pulse": {
    "0%": {
      transform: "scale(1)",
    },
    "50%": {
      transform: "scale(1.1)",
    },
    "100%": {
      transform: "scale(1)",
    },
  },
}));

function App() {
  const classes = useStyles();
  const [url, setUrl] = useState(null);
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef(null);

  const handleClick = (event) => {
    setUrl(URL.createObjectURL(event.target.files[0]));
  };

  const handlePlayPause = () => {
    setPlaying(!playing);
    if (playing) {
      playerRef.current.pause();
    } else {
      playerRef.current.play();
    }
  };

  return (
    <div>
      <input type="file" accept="audio/*" onChange={handleClick} />
      {url ? (
        <div className={classes.playerContainer}>
          <ReactPlayer
            ref={playerRef}
            url={url}
            playing={playing}
            width="0"
            height="0"
          />
          <IconButton onClick={handlePlayPause}>
            {playing ? (
              <PauseCircleOutlineIcon fontSize="large" />
            ) : (
              <PlayCircleOutlineIcon fontSize="large" />
            )}
          </IconButton>
        </div>
      ) : null}
    </div>
  );
}

export default App;
