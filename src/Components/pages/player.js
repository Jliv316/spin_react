import React, { Component } from 'react';
import Playlist from '../playlistComponent/Playlist';
import { getQueryParams } from '../../utils';
import SpotifyPlayer from 'react-spotify-player';

class Player extends Component {
  constructor(props) {
    super(props);
    const params = getQueryParams();
    this.state = { 
      token: params.token,
      access_token: 'BQDwPYe2UpdMiPbkD8QnxOhvlRiNbVVt9wd0tzSWBMq2_0iEwuahhql486sme3F3jiHB7YbvFBm7QPl0J3h38Y2WH-wdMtrKoTQstoU06tJfPfnQoFN_STn4N75rx363WkEg-MmrrrrxdQqhRLgR7gIQCfZR'
    };
    this.playerCheckInterval = null;
  }

  render() {
    const size = {
      width: '100%',
      height: 1000,
    };
    const view = 'list'; // or 'coverart'
    const theme = 'black'; // or 'white'
    return (
      <div className="container-fluid">
        <SpotifyPlayer
          uri="spotify:album:7oibvoJKJp8KecLeA86yjc"
          size={size}
          view={view}
          theme={theme}
        />

      </div>
    );
  }
}

export default Player;
