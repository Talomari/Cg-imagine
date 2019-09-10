import React, { Component } from 'react'
import { connect } from 'react-redux'
import "../../global-css/css/styles.min.css"
import Axios from '../../api'

class addTask extends Component {

    constructor(props) {
        super(props)

        this.state = {
            todo: '',
            date: '',
            isCompleted: false,
            tasks: [],
            taskId:''
        }
    }

    componentWillMount() {
        this.fetchtasks()
    }
    fetchtasks = () => {
        const { user } = this.props;
        Axios.get(`/todo/all/${user.user._id}`, { headers: { Authorization: `Bearer ${user.token}` } }).then(({ data }) => {
            console.log(data)
            this.setState({ tasks: data })
        })
            .catch(err => {
                console.log(err);
                alert('Error occured')

            })
    }

    submitTask = () => {
        const { todo, date } = this.state
        const { user } = this.props;
        if (!!todo && !!date) {
            Axios.post(`/todo/add/${user.user._id}`, { todo, date }, { headers: { Authorization: `Bearer ${user.token}` } })
                .then(({ data }) => {

                    this.setState({ todo: '', date: '' });
                    alert(data.message);
                    this.fetchtasks();


                }).catch(err => {
                    console.log(err);
                    alert('Error occured')

                })
        } else {
            alert("Task and date fields are required")
        }
    }

    isCompleted = async (taskId) => {
        const { user } = this.props;
        await this.setState({ isCompleted: !this.state.isCompleted })
        Axios.post(`/todo/iscompleted/${taskId}`, { isCompleted: this.state.isCompleted }, { headers: { Authorization: `Bearer ${user.token}` } })
            .then(({ data }) => {
                this.fetchtasks();
            })
            .catch(err => {
                console.log(err);
                alert('Error occured')

            })
    }

    delete = (deleteId) => {
        const { user } = this.props;

        Axios.get(`/todo/delete/${deleteId}`, { headers: { Authorization: `Bearer ${user.token}` } })
            .then(({ data }) => {
                alert(data.message);
                this.fetchtasks();
            })
            .catch(err => {
                console.log(err);
                alert('Error occured')

            })
    }




    update = () => {
        const { todo, date,taskId } = this.state
        const { user } = this.props;
        if (!!todo || !!date) {
            Axios.post(`/todo/update/${taskId}`, { todo, date }, { headers: { Authorization: `Bearer ${user.token}` } })
                .then(({ data }) => {

                    this.setState({ todo: '', date: '' });
                    alert(data.message);
                    this.fetchtasks();


                }).catch(err => {
                    console.log(err);
                    alert('Error occured')

                })
        } else {
            alert("Please choose an input")
        }
    }

    render() {
        const { tasks } = this.state;
        return (
            <div>
                <div className="carousel slide" data-ride="carousel" id="carousel-1">
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img className="w-100 d-block" src={require("../../assets/img/pic11.jpg")} alt="Slide Image" style={{ height: "auto", width: "100%" }} />
                        </div>

                        <div className="carousel-item"><img className="w-100 d-block" src={require("../../assets/img/pic2.jpg")} alt="Slide Image" />

                        </div>
                        <div className="carousel-item">
                            <img className="w-100 d-block" src={require("../../assets/img/pic3.jpg")} alt="Slide Image" style={{ width: "100%", height: "auto" }} />

                        </div>
                    </div>
                    <div>
                        <a className="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span><span className="sr-only">Previous</span></a>

                        <a className="carousel-control-next" href="#carousel-1" role="button" data-slide="next"><span className="carousel-control-next-icon"></span><span className="sr-only">Next</span></a>

                    </div>
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-1" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-1" data-slide-to="1"></li>
                        <li data-target="#carousel-1" data-slide-to="2"></li>
                    </ol>
                </div>

                <ul className="list-group" style={{ marginTop: "1px" }}>
                    <li className="list-group-item">
                        <div>
                            <h1 className="text-left" style={{ marginTop: "18px", fontSize: "22px" }}>Things To Do:</h1>
                        </div>
                        <div className="media">

                            <div className="media-body">
                                <div className="media" style={{ overflow: "visible" }}>

                                    <div className="media-body" style={{ overflow: "visible" }}>
                                        <div className="row">
                                            <div className="col-10">
                                                <div className="input-group" style={{ marginLeft: "11px", marginTop: "8px" }}>
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text icon-container"
                                                            style={{ backgroundColor: "rgb(248,117,62)" }} onClick={this.submitTask}>
                                                            <i className="fa fa-plus-square-o" style={{ color: "#f7f7f7" }}>
                                                            </i>
                                                        </span>
                                                    </div>
                                                    <input type="text" className="form-control" placeholder="Add Your Task"
                                                        value={this.state.todo}
                                                        style={{ backgroundColor: "#f7f7f7" }}
                                                        onChange={(todo) => this.setState({ todo: todo.target.value })} />

                                                </div>

                                            </div>
                                            <div className="col" style={{ marginTop: "11px" }}>
                                                <input type="date" style={{
                                                    width: "152px", marginLeft: "15px", backgroundColor: "rgb(247,247,247)", color: "rgb(73,80,87)"
                                                }}
                                                    value={this.state.date}
                                                    onChange={(date) => this.setState({ date: date.target.value })} />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>

                <div style={{ marginTop: "83px" }}>
                    <h1 className="text-left" style={{ marginTop: "47px", fontSize: "22px", marginLeft: "26px" }}>All Things To DO:</h1>
                </div>

                <div className="datagrid" style={{ marginTop: "7px" }}>

                    <table className="table">
                        <thead>
                            <tr>
                                <th style={{ backgroundColor: "rgb(248,117,62)", width: "100px" }}>Complete Task&nbsp;</th>
                                <th style={{ width: "500px", }}>Task
                                </th>   <th style={{ width: "500px", }}>Date
                                </th>

                                <th style={{ width: "500px", }}>Action
                                </th>  



                            </tr>
                        </thead>
                        <tbody>
                            {tasks.length ? tasks.map((elem, index) => {
                                return <tr key={index}>
                                    <td style={{ width: "100px" }}>
                                        <input type="checkbox" style={{ width: "69px", height: "25px", marginTop: "12px", marginLeft: "24px" }} onChange={() => this.isCompleted(elem._id)} checked={elem.isCompleted} />

                                    </td>
                                    {/* <td style={{ width: "629px" }}> */}
                                       
                                        <td> {elem.todo}</td>
                                        <td>{elem.date}</td>
                                        <td>
                                        <div className="row">
                                            <div className="col">

                                                <div className="modal fade centro" role="dialog" tabindex="-1" id="modal">
                                                    <div className="modal-dialog" role="document">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h6 className="modal-title txtsGrises">
                                                                    Edit Your Task</h6>
                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">
                                                                        ×
                                                                                    </span>
                                                                </button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <h2 className="titulos">Task</h2>
                                                                <input type="text" style={{ height: "78px", width: "300px" }} value={this.state.todo} placeholder='Edit your task'
                                                                    onChange={(todo) => this.setState({ todo: todo.target.value })}
                                                                />
                                                            </div>
                                                            <div className="col" style={{ marginTop: "11px" }}>
                                                                <input type="date" style={{
                                                                    width: "152px", marginLeft: "15px", backgroundColor: "rgb(247,247,247)", color: "rgb(73,80,87)"
                                                                }}
                                                                    value={this.state.date}
                                                                    onChange={(date) => this.setState({ date: date.target.value })} />

                                                            </div>
                                                            <div className="modal-footer"><button className="btn btn-primary border-white btn-Oscuro" type="button" style={{ backgroundColor: "#5cb85c" }} onClick={this.update}>Edit</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="text-center d-inline-flex">
                                            <div className="row">
                                                <div className="col">
                                                    <button onClick={()=>this.setState({taskId:elem._id})} className="btn btn-primary border-white btn-Oscuro" data-bs-hover-animate="tada" data-toggle="modal" data-target="#modal" type="button" style={{ width: " 90px", backgroundColor: "#5cb85c" }}>
                                                        <i className="fa fa-edit"></i>&nbsp;Edit
                                                                       </button>

                                                </div>
                                                <div className="col">
                                                    <button className="btn btn-primary border-white pull-right" type="button" style={{ backgroundColor: "#d9534f", width: "90px" }} onClick={() => this.delete(elem._id)}><i className="fa fa-remove"></i>&nbsp;Delete</button>

                                                </div>
                                            </div>
                                        </div>
                                        </td>

                                    {/* </td> */}
                                </tr>

                            }) : null}


                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="4">
                                    <div className="paging">
                                        <ul style={{ backgroundColor: "#f7f7f7" }}>
                                            <li>
                                                <a href="#" style={{ backgroundColor: "rgb(248,117,62)" }}>
                                                    <span>Previous </span></a>
                                            </li>
                                            <li><a className="active" href="#" style={{ backgroundColor: "rgb(248,117,62)" }}> <span>1 </span></a>
                                            </li>
                                            <li><a href="#"> <span>2 </span></a></li>
                                            <li><a href="#"> <span>3</span></a></li>
                                            <li><a href="#"> <span>Next </span></a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                
                <button className="btn btn-primary border-white float-right" data-toggle="modal" data-target="#modal1" type="button" style={{ marginTop: "35px", backgroundColor: "rgb(248,117,62)" }} onClick={() => window.location.replace('/completedTask')}>Click here to See Your Completed Tasks</button>
              
            </div>

        )
    }
}

const mapStateToProps = ({ userReducer }) => {
    const { user } = userReducer;
    return { user }
}


export default connect(mapStateToProps)(addTask)