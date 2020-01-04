import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

import SchoolBag from "../../content/assets/school-bag.svg"
import MirrorBall from "../../content/assets/mirror-ball.svg"
import Laptop from "../../content/assets/laptop.svg"
import OpenBook from "../../content/assets/open-book.svg"
import MusicNotes from "../../content/assets/music-notes.svg"
import { flattenDiagnosticMessageText } from "typescript"

const Currently = () => {
  var SVGStyle = {
    marginTop: "5px",
    width: "20px",
    height: "20px",
    marginBottom: "10px",
  }

  var statement = {
    display: "flex",
    flexFlow: "row nowrap",
    width: "100%",
  }

  var spanStyle = {
    marginLeft: "10px",
  }

  var linkStyle = {
    textDecoration: "none",
    color: "black",
  }

  const [currentSong, setCurrentSong] = useState([])
  const [query, setQuery] = useState(false)

  useEffect(() => {
    if (!query) {
      fetch(
        "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=vjindal&api_key=674c74e489286a89df2b054f676b49f9&format=json"
      )
        .then(res => res.json())
        .then(
          result => {
            setCurrentSong(result.recenttracks.track[0])
            setQuery(true)
          },
          error => {
            console.log("Error fetching recent track.")
          }
        )
    }
  })

  return (
    <div style={{
      maxWidth: "400px",
      margin: "auto",
    }}>
      <h2>Currently</h2>
      <div
        style={{
          display: "flex",
          flexFlow: "column nowrap",
        }}
      >
        <div style={statement}>
          <img src={SchoolBag} style={SVGStyle} />
          <span style={spanStyle}>
            CS and ENTR @ UMich, Ann Arbor
          </span>
        </div>
        <div style={statement}>
          <img src={MirrorBall} style={SVGStyle} />
          <span style={spanStyle}>
            Shift Creator Space and Funktion Dance
          </span>
        </div>
        <div style={statement}>
          <img src={Laptop} style={SVGStyle} />
          <span style={spanStyle}>Working on Reflect.me</span>
        </div>
        <div style={statement}>
          <img src={OpenBook} style={SVGStyle} />
          <span style={spanStyle}>
            Reading <a style={linkStyle} href="https://www.amazon.com/Why-We-Sleep-Unlocking-Dreams-ebook/dp/B06ZZ1YGJ5">Why We Sleep</a> by Matthew Walker
          </span>
        </div>
        <div style={statement}>
          <img src={MusicNotes} style={SVGStyle} />
          <span style={spanStyle}>
            Listening to{" "}
            <a style={linkStyle} href={currentSong.url}>
              {currentSong.name}
            </a>{" "}
            by {currentSong.artist ? currentSong.artist["#text"] : ""}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Currently
