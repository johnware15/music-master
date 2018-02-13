import React, { Component } from 'react'
import './app.css'

class Profile extends Component {
  render() {
    console.log('this.props', this.props)
    let artist = {name: '', followers: {total: ''}, images: [{url: ''}], genres: []}
    artist = this.props.artist !== null ? this.props.artist : artist

    return(
      <div className="profile">
        <img
          alt="Profile"
          className="profile-img"
          src={artist.images[0].url}
        />
        <div className="profile-info">
          <div className="profile-name">{artist.name}</div>
          <div className="profile-followers">{artist.followers.total} Followers</div>
          <div className="profile-genres">
            {
              artist.genres.map((genre, index) => {
                genre = genre !== artist.genres[artist.genre.length - 1]
                  ? ` ${genre},`
                  : ` & ${genre}`
                return(
                  <span key={index}>{genre}</span>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
