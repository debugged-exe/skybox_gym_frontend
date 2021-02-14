import React from 'react';
import RightBg from '../../Assets/callback_bg.png';
const ContactUs = () => {
    return (
        <section id="enquire" style={{background:'', color:''}} className='flex justify-around items-center flex-wrap'>
            <span>
                <div>
                    <img src={RightBg} alt='bumbell' />
                </div>
            </span>
            <span className='flex items-center pv4 justify-center'>
                <div className='w-100'>
                    <form style={{ backgroundImage: `url()` }} className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph4 mh0">
                            <legend className="f2 fw6 ph0 mh0 tc">Session Enquiry Form</legend>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f4" htmlFor="email-address">Name</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                />
                                <div className="f4 red">{``}</div>
                            </div>

                            <div className="mv3">
                                <label className="db fw6 lh-copy f4" htmlFor="email-address">Phone</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text" />
                                <div className="f4 red">{``}</div>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f4" htmlFor="email-address">Email</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                />
                                <div className="f4 red">{``}</div>
                            </div>
                        </fieldset>
                        <div className="flex justify-center items-center">
                        <input 
                        style={{backgroundColor:'#00D0FF'}}
                        className="b ph3 pv2 input-reset ba br2 b--black bg-transparent grow pointer f4 dib mb3" 
                        type="button" 
                        value="Expect a Call Back"/>
                        <div className="f4 red">{``}</div>
                </div>
                    </form>
                </div>
            </span>
        </section>
    );
}

export default ContactUs;