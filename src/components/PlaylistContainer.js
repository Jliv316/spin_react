import React from 'react';
import axios from 'axios';
import Playlist from './Playlist';

class PlaylistContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {playlists: []};
  }

  componentDidMount(){
    axios.get('http://localhost:3001/api/v1/playlists')
    .then(response => {
      console.log(response)
      this.setState({ playlists: response.data })
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        {this.state.playlists.map((playlist) => {
          return (<Playlist playlist={playlist} key={playlist.id} />)
        })}
      </div>
    );
  }




};

export default PlaylistContainer;