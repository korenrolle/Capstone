import React, { useState } from "react";
import './style/player.css'

const Radio = ({ mp3List }) => {
  const [selectedMp3, setSelectedMp3] = useState(mp3List[0]);

  return (
    <div className="radio-container">
      <div className="title">Radio</div>
      <div className="mp3-list">
        {mp3List.map((mp3) => (
          <div key={mp3.src} className="mp3">
            <input
              type="radio"
              name="mp3"
              id={mp3.src}
              value={mp3.src}
              checked={selectedMp3 === mp3}
              onChange={() => setSelectedMp3(mp3)}
            />
            <label htmlFor={mp3.src}>
              <div className="cover">
                <img src={mp3.cover} alt={mp3.title} />
              </div>
              <div className="title">{mp3.title}</div>
            </label>
          </div>
        ))}
      </div>
      <audio src={selectedMp3.src} controls />
    </div>
  );
};

export default Radio;

