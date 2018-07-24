import React from 'react'

const Playlist = ({ playlist }) =>
  <div className="tile" key={playlist.id}>
    <h4>{playlist.name}</h4>
  </div>

export default Playlist