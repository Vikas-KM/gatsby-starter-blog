import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Vikas KM`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Vikas KM</strong>coder and film phorograher who loves to shoot with his Canon AE-01 and Nikon FM2.{' '}
          <a href="https://twitter.com/Vikas_KM">
            You should follow him on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
