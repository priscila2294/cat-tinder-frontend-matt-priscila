import React, { Component } from "react"
import { Jumbotron, Container } from "reactstrap"

class Header extends Component {
  render() {
    return (
      <>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Cat Tinder</h1>
            <p className="lead">A place where we Meow together</p>
          </Container>
        </Jumbotron>
      </>
    )
  }
}

export default Header