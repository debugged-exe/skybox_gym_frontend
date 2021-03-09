import React from 'react';

const WorkOutForm = () =>{
    return(
        <div>
            <p className='f2 b black ma0'>
            Tanmay Jagtap
            </p>
            <form class="pa4 black-80">
                <div class="measure flex items-center">
                    <label for="name" class="f4 b db mb2 mr2">Monday</label>
                    <textarea id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
                </div>
                <div class="measure flex items-center">
                    <label for="name" class="f4 b db mb2 mr2">Tuesday</label>
                    <textarea id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
                </div>
                <div class="measure flex items-center">
                    <label for="name" class="f4 b db mb2 mr2">Wedday</label>
                    <textarea id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
                </div>
                <div class="measure flex items-center">
                    <label for="name" class="f4 b db mb2 mr2">Thursday</label>
                    <textarea id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
                </div>
                <div class="measure flex items-center">
                    <label for="name" class="f4 b db mb2 mr2">Friday</label>
                    <textarea id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
                </div>
                <div class="measure flex items-center">
                    <label for="name" class="f4 b db mb2 mr2">Satday</label>
                    <textarea id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
                </div>
                <div class="measure flex items-center">
                    <label for="name" class="f4 b db mb2 mr2">Sunday</label>
                    <textarea id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"/>
                </div>
                <a class="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue" href="#0">Set Workout</a>
            </form>
        </div>
    );
}

export default WorkOutForm;