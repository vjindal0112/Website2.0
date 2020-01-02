import React, { Component } from "react"
import { rhythm } from "../utils/typography"

export default class projectEntry extends Component {
  constructor(props, context) {
    super(props, context)
    this.lightenText = this.lightenText.bind(this)
    this.darkenText = this.darkenText.bind(this)
    this.state = {
      textColor: "black",
    }
  }

  lightenText() {
    this.setState(state => ({
      textColor: "#666",
    }))
  }

  darkenText() {
    this.setState(state => ({
      textColor: "black",
    }))
  }

  render() {
    const { title, description, link } = this.props

    var linkStyle = {
      textDecoration: "none",
      color: "black",
    }

    var wrapperStyle = {
      minHeight: rhythm(5),
      padding: "0",
    }
    return (
      <div
        style={wrapperStyle}
        onMouseOver={this.lightenText}
        onMouseOut={this.darkenText}
      >
        <a style={linkStyle} href={link}>
          <div style={{ color: this.state.textColor }}>
            <h3>{title}</h3>
          </div>
          <div style={{ color: this.state.textColor }}>{description}</div>
        </a>
      </div>
    )
  }
}
