import React,{useState, useEffect} from 'react';

class WorkOutForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {mon:this.props.det.workout.mon,tue:this.props.det.workout.tue,wed:this.props.det.workout.wed,thu:this.props.det.workout.thu,fri:this.props.det.workout.fri,sat:this.props.det.workout.sat,sun:this.props.det.workout.sun}
        this.handleChange = this.handleChange.bind(this) 
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){ 
        this.setState({
          [event.target.name] : event.target.value 
        }) 
      }

    handleSubmit(){
        const id = this.props.det._id;
        fetch('https://skybox-athlete.herokuapp.com/update-workout/'+id, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                mon:this.state.mon,
                tue:this.state.tue,
                wed:this.state.wed,
                thu:this.state.thu,
                fri:this.state.fri,
                sat:this.state.sat,
                sun:this.state.sun
            })
            })
            .then(response => response.json())
            .then(res=>{
                console.log(res);
                if(res.status==="success"){
                   console.log('donee')
                   alert("Data updated");
                }
                else if(res.status==="failed"){
                   alert("could not save the data");
                }
            })
    }  
    
    render(){  
    return(
        <div>
            <p className='f2 b black ma0'>
            {this.props.det.name}
            </p>
            {this.props.det.workout!==undefined?
            <form class="pa4 black-80">
                <div class="measure flex items-center">
                    <label for="name" class="f4 b db mb2 mr2">Monday</label>
                    <textarea id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" name="mon" value={this.state.mon} onChange={this.handleChange}/>
                </div>
                <div class="measure flex items-center">
                    <label for="name" class="f4 b db mb2 mr2">Tuesday</label>
                    <textarea id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" name="tue" value={this.state.tue} onChange={this.handleChange}/>
                </div>
                <div class="measure flex items-center">
                    <label for="name" class="f4 b db mb2 mr2">Wednesday</label>
                    <textarea id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" name="wed" value={this.state.wed} onChange={this.handleChange}/>
                </div>
                <div class="measure flex items-center">
                    <label for="name" class="f4 b db mb2 mr2">Thursday</label>
                    <textarea id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" name="thu" value={this.state.thu} onChange={this.handleChange}/>
                </div>
                <div class="measure flex items-center">
                    <label for="name" class="f4 b db mb2 mr2">Friday</label>
                    <textarea id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" name="fri" value={this.state.fri} onChange={this.handleChange}/>
                </div>
                <div class="measure flex items-center">
                    <label for="name" class="f4 b db mb2 mr2">Saturday</label>
                    <textarea id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" name="sat" value={this.state.sat} onChange={this.handleChange}/>
                </div>
                <div class="measure flex items-center">
                    <label for="name" class="f4 b db mb2 mr2">Sunday</label>
                    <textarea id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" name="sun" value={this.state.sun} onChange={this.handleChange}/>
                </div>
                <a class="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue" onClick={this.handleSubmit}>Set Workout</a>
            </form>
            :
            <form class="pa4 black-80">
                <div class="measure flex items-center">
                    <label for="name" class="f4 b db mb2 mr2">Monday</label>
                    <textarea id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" name="mon" value={this.state.mon} onChange={this.handleChange}/>
                </div>
                <div class="measure flex items-center">
                    <label for="name" class="f4 b db mb2 mr2">Tuesday</label>
                    <textarea id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" name="tue" value={this.state.tue} onChange={this.handleChange}/>
                </div>
                <div class="measure flex items-center">
                    <label for="name" class="f4 b db mb2 mr2">Wednesday</label>
                    <textarea id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" name="wed" value={this.state.wed} onChange={this.handleChange}/>
                </div>
                <div class="measure flex items-center">
                    <label for="name" class="f4 b db mb2 mr2">Thursday</label>
                    <textarea id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" name="thu" value={this.state.thu} onChange={this.handleChange}/>
                </div>
                <div class="measure flex items-center">
                    <label for="name" class="f4 b db mb2 mr2">Friday</label>
                    <textarea id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" name="fri" value={this.state.fri} onChange={this.handleChange}/>
                </div>
                <div class="measure flex items-center">
                    <label for="name" class="f4 b db mb2 mr2">Saturday</label>
                    <textarea id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" name="sat" value={this.state.sat} onChange={this.handleChange}/>
                </div>
                <div class="measure flex items-center">
                    <label for="name" class="f4 b db mb2 mr2">Sunday</label>
                    <textarea id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" name="sun" value={this.state.sun} onChange={this.handleChange}/>
                </div>
                <a class="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue" onClick={this.handleSubmit}>Set Workout</a>
            </form>
            }
        </div>
    );
        }
}

export default WorkOutForm;