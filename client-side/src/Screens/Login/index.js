import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setUser, isLoggedIn } from '../../Action'
import Axios from '../../api'
import "../../global-css/css/styles.min.css"
class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }
    submit = (Event) => {
        Event.preventDefault()

        const { email, password } = this.state
        if (!!email && !!password) {
            Axios.post('/auth/login', { email, password })
                .then(({ data }) => {
                    console.log(data)
                    alert(data.message)
                    if (!!data.token) {
                        this.props.setUser(data)
                        this.props.isLoggedIn(true)
                        window.location.replace('/addTask')
                    }

                }).catch(err => {
                    console.log(err);
                    alert('Error occured')

                })
        } else {
            alert("all fields are required")
        }
    }
    render() {
        return (
            <div className="login-card">
                <img className="profile-img-card" src={require("../../assets/img/logo.png")} />
                <form className="form-signin" onSubmit={this.submit}><span className="reauth-email"> </span>
                    <input className="form-control" type="email" id="inputEmail" required="" placeholder="Email" autoFocus="" onChange={(email) => this.setState({ email: email.target.value })} />
                    <input className="form-control" type="password" id="inputPassword" required="" placeholder="Password" onChange={(password) => this.setState({ password: password.target.value })} />
                    <div className="checkbox"></div>
                    <button onClick={this.submit} className="btn btn-primary btn-block btn-lg btn-signin" type="submit">&nbsp;Login

                    </button>
                </form>
                <a className="d-lg-flex justify-content-lg-center" href="/signup" style={{ fontFamily: "Acme", fontFamily: "sans-serf" }}>Don't &nbsp;have an account yet? SIGNUP
                    </a>

            </div>

        )
    }
}



const mapDispatchToProps = {
    setUser,
    isLoggedIn
}


export default connect(null, mapDispatchToProps)(Login)