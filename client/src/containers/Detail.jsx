import React, { Component } from 'react';
import PlayerVideo from '../components/PlayerVideo';

import 'video-react/dist/video-react.css';

class Detail extends Component {
  render() {
    return (
      <div>
        <PlayerVideo />
      </div>
    );
  }
}

export default Detail;
