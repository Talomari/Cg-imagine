import React, { Component } from 'react'
import { connect } from 'react-redux'
import "../../global-css/css/styles.min.css"
import Axios from '../../api';
import {Link} from "react-router-dom";

class completedTask extends Component {
    constructor(props) {
        super(props)

        this.state = {
            completedTask: [],
            todayTask: []
        }
    }

    componentWillMount() {

        this.getCompletedTask();
    }

    getCompletedTask = () => {
        const { user } = this.props;
        let today = new Date().getDate()

        Axios.get(`/todo/fetch/completed/${user.user._id}`, { headers: { Authorization: `Bearer ${user.token}` } }).then(({ data }) => {
            let todayArray = data.length ? data.filter(elem => {
                let date = parseInt(elem.date.split('-')[2])
                return date === today
            }) : null

            this.setState({ completedTask: data, todayTask: todayArray })
        })
            .catch(err => {
                console.log(err);
                alert('Error occured')

            })
    }

    render() {
        const { completedTask, todayTask } = this.state;
        return (
            <div>
              
                <h2 className="text-center" style={{ marginTop: "24px" }}>Your Completed Tasks</h2>
                
                <div className="container" style={{ marginTop: "82px" }}>
                <Link to='/addTask'>
                <form style={{display:'flex',alignItems:"flex-end",justifyContent:'flex-end'}}>
                <input type="button"  style={{color:"white",borderColor:"rgb(248,117,62",backgroundColor:"rgb(248,117,62)"}} value="Go back!"  />
                </form>
                </Link>
                    <div className="row">
                        <div className="col-md-12">
                            <div>
                                <ul className="nav nav-tabs">
                                    <li className="nav-item"><a className="nav-link active" role="tab" data-toggle="tab" href="#tab-1">Today <span className="badge badge-pill badge-primary">{todayTask.length}</span></a></li>
                                    <li className="nav-item"><a className="nav-link" role="tab" data-toggle="tab" href="#tab-4">All <span className="badge badge-pill badge-primary">{completedTask.length}</span></a></li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane active" role="tabpanel" id="tab-1">
                                        <ul className="thread-list">
                                            {todayTask.length ? todayTask.map((elem, index) => {
                                                return <li className="thread" key={index}><span className="time" style={{width:'100px'}}>{elem.date}</span><span className="title">{elem.todo} </span></li>

                                            }) : null}

                                        </ul>
                                    </div>
                                    <div className="tab-pane" role="tabpanel" id="tab-4">
                                        <ul className="thread-list">
                                            {completedTask.length ? completedTask.map((elem, index) => {
                                                return <li className="thread" key={index}><span className="time"style={{width:'100px'}} >{elem.date}</span><span className="title">{elem.todo}</span></li>

                                            }) : null}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = ({ userReducer }) => {
    const { user } = userReducer;
    return { user }
}


export default connect(mapStateToProps)(completedTask)