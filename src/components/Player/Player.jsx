import React, { useState } from "react";
import './style/player.css'

const Radio = ({ mp3List }) => {
  // Declare state to store the selected mp3
  const [selectedMp3, setSelectedMp3] = useState(mp3List[0]);

  // Render the radio player UI
  return (
    <div className="radio-container">
      {/* Title of the radio */}
      <div className="title">ChylMusic Radio</div>
      {/* Container for all mp3 elements */}
      <div className="mp3-list">
        {/* Map through each mp3 in the list */}
        {mp3List.map((mp3) => (
          <div key={mp3.src} className="mp3">
            {/* Radio input for selecting mp3 */}
            <input
              type="radio"
              name="mp3"
              id={mp3.src}
              value={mp3.src}
              // Check if the current mp3 is selected
              checked={selectedMp3 === mp3}
              // Set the selected mp3 when the input is changed
              onChange={() => setSelectedMp3(mp3)}
            />
            {/* Label for the mp3 */}
            <label htmlFor={mp3.src}>
              {/* Cover of the mp3 */}
              <div className="cover">
                <img src={mp3.cover} alt={mp3.title} />
              </div>
              {/* Title of the mp3 */}
              <div className="title">{mp3.title}</div>
            </label>
          </div>
        ))}
      </div>
      {/* Audio player for the selected mp3 */}
      <audio src={selectedMp3.src} controls />
    </div>
  );
};

// Export the component
export default Radio;
