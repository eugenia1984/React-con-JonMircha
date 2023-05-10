import React, { Component } from 'react'

function Login() {
  return (
    <div>
      <button>Login</button>
    </div>
  )
}

function LoginOut() {
  return (
    <div>
      <button>Login out</button>
    </div>
  )
}

export default class RenderizadoCondicional extends Component {
  constructor(props) {
    super(props)
    this.state = {
      session: true
    }
  }

  render() {
    return (
      <div>
        <h2>Conditional rendering</h2>
        {this.state.session ? <Login /> : <LoginOut />}
        <hr />
      </div>
    )
  }
}
