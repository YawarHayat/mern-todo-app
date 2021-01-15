import React, { Component } from 'react';
import axious from 'axios';
import Axios from 'axios';

export default class CreateTodo extends Component {
    constructor(props){
        super(props)

        this.onChangeToDoDiscription=this.onChangeToDoDiscription.bind(this);
        this.onChangeToDoResponsible=this.onChangeToDoResponsible.bind(this);
        this.onChangeToDopriority=this.onChangeToDopriority.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            todo_description:'',
            todo_responsible:'',
            todo_priority:'',
            todo_completed:false

        }
    }
    onChangeToDoDiscription(e){
        this.setState({
           todo_description:e.target.value 
        });
    }

    onChangeToDoResponsible(e){
        this.setState({
            todo_responsible:e.target.value 
        });
    }

    onChangeToDopriority(e){
        this.setState({
            todo_priority:e.target.value 
        });
    }

    onSubmit(e){
        e.preventDefault();
        console.log('submitted');

        console.log(`Todo Description ${this.state.todo_description}`);
        console.log(`Todo Responsible ${this.state.todo_responsible}`);
        console.log(`Todo Priorirty ${this.state.todo_priority}`);
        console.log(`Todo Completed ${this.state.todo_completed}`);

        const newTodo={
            todo_description: this.state.todo_description,
            todo_responsible:this.state.todo_responsible,
            todo_priority:this.state.todo_priority,
            todo_completed:this.state.todo_completed
        }
        Axios.post('http://localhost:4000/todos/add',newTodo)
        .then(res=> console.log(res.data))

        this.setState({
            todo_description:'',
            todo_responsible:'',
            todo_priority:'',
            todo_completed:false
        })

    }


    
    render() {
        return (
            <div style={{marginTop:20}}>
                <h3>Create Todo Component!!</h3>
                <form onSubmit={this.onSubmit}>
                    
                    <div className="form-group">
                    <label>Description: </label>
                    <input type="text"
                            className="form-control"
                            value={this.state.todo_description}
                            onChange={this.onChangeToDoDiscription} />
                    </div>
                    <div className="form-group">
                    <label>Responsible: </label>
                    <input type="text"
                            className="form-control"
                            value={this.state.todo_responsible}
                            onChange={this.onChangeToDoResponsible} />
                    </div>
                    <div className="form-group">
                        
                        <div className="form-check form-check-inline">
                        <input className="form-check-input"
                                type="radio"
                                name="priority"
                                id="priorityLow"
                                value="Low"
                                checked={this.state.todo_priority==='Low'}
                                onChange={this.onChangeToDopriority}
                                />
                                <label className="form-check-label">Low</label>
                        </div>


                        <div className="form-check form-check-inline">
                        <input className="form-check-input"
                                type="radio"
                                name="priority"
                                id="priorityMedium"
                                value="Medium"
                                checked={this.state.todo_priority==='Medium'}
                                onChange={this.onChangeToDopriority}
                                />
                                <label className="form-check-label">Medium</label>
                        </div>

                        <div className="form-check form-check-inline">
                        <input className="form-check-input"
                                type="radio"
                                name="priority"
                                id="priorityHight"
                                value="High"
                                checked={this.state.todo_priority==='High'}
                                onChange={this.onChangeToDopriority}
                                />
                                <label className="form-check-label">High</label>
                        </div>


                    </div>

                    <div className="form-group">
                    <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>


                </form>
            </div>
        )
    }
}