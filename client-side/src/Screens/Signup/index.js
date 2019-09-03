import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUser } from '../../Action'
import Axios from '../../api'



 class SignUp extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              userName:'',
              email:'',
              password:''
         }
     }
     submit = () => {
        const { userName,email, password } = this.state
        if (!!userName &&!!email && !!password) {
            Axios.post('/auth/signup', {userName, email, password })
                .then(({ data }) => {
                    console.log(data)
                    alert(data.message)
                    if (!!data.token) {
                        this.props.setUser(data)
                        // window.location.replace('/home')
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
            <div>
                <input type='name' placeholder='user name ' onChange={(userName)=>this.setState({userName:userName.target.value})} />
                <input type='email' placeholder='email' onChange={(email)=>this.setState({email:email.target.value})}/>
                <input type='password' placeholder='password ' onChange={(password)=>this.setState({password:password.target.value})}/>

                <button onClick={this.submit}></button>
            </div>
        )
    }
}


const mapDispatchToProps = {
    setUser
}
export default connect(null, mapDispatchToProps) (SignUp);


