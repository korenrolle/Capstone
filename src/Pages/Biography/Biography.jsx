/* eslint-disable jsx-a11y/img-redundant-alt */

import React, { Fragment } from 'react';
import './style/biography.css';
import profilePicture from './photos/B8D652F1-1C2A-4B1A-AC68-2A87EF8F9B1D.JPG';
import coverPicture from './photos/IMG_0882.JPEG';

const Biography = (props) => {
    <i class="fas fa-music"></i>
return <>
<h1 id="bio">ChylMusic - The Soulful Storyteller</h1>
<div className="bio-pictures">
<img src={profilePicture} className="bio-picture rounded" alt="Profile Picture"/>
<img src={coverPicture} className="bio-picture rounded" alt="Cover Picture"/>
</div>
<p>ChylMusic is a unique and captivating artist hailing from Winston Salem, North Carolina. Growing up singing in church, he has always had a deep love for God and music. With a voice that is both soulful and powerful, ChylMusic's music is a reflection of his own experiences and emotions.</p>
<p>Despite the struggles of growing up in a tough environment, ChylMusic never let his circumstances define him. He has faced homelessness and financial struggles, but through hard work and determination, he has risen above it all. He has even taken the bus for three hours to get to work, just to make ends meet.</p>
<p>But ChylMusic's struggles have only made him stronger. He has turned his past into a source of inspiration for his music, which speaks of real love and positivity. He writes his own music and consider himself to be very unique, with a style that is all his own.</p>
<p>ChylMusic is not just a singer, but also a talented actor and a lover of chess and video games. He is also a software engineer, who has survived a fully immersive boot-camp. He is known for his sense of humor and his love for family.</p>
<p>ChylMusic currently resides in Los Angeles, California and is working on new music and shows for 2023. He is an artist who truly does it all and will stop at nothing to share his message of hope and positivity with the world.</p>
<div className="social-media">
<a href="https://twitter.com/chylmusic"><i class="fa fa-twitter fa-2x"></i></a>
<a href="https://www.instagram.com/chylmusic/"><i class="fa fa-instagram fa-2x"></i></a>
<a href="https://www.facebook.com/chylmusic"><i class="fa fa-facebook fa-2x"></i></a>
<a href="https://soundcloud.com/chylmusic"><i class="fa fa-soundcloud fa-2x"></i></a>
</div>
</>;
};

export default Biography



