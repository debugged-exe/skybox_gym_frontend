import React from 'react';
import RightBg from '../../Assets/callback_bg.png';
import './ContactUs.css';
const ContactUs = () => {
    return (
        <section id="contactus" style={{background:'', color:''}} className='flex justify-around items-start mt3 flex-wrap'>
            <span className='pv3'>
                <div  data-aos='fade-up'>
                    <div>

                        <div>
                            <p className='f3 b'>Address :</p>
                            <a href='https://goo.gl/maps/ZAvvpLFfzfbWX7gNA' className='f4'>Ashtavinayak Nagar, Pratik Nagar,</a> <br/>
                            <a href='https://goo.gl/maps/ZAvvpLFfzfbWX7gNA' className='f4'>Chandan Nagar, Pune, Maharashtra 411014</a>
                        </div>
                    </div>
                    <div>

                        <div>
                            <p className='f3 b'>Contact Details :</p>
                            <p className='f4'>+91 9168894490, +91 7006616995</p>
                        </div>
                    </div>
                    <div>

                        <div>
                            <p className='f3 b'>Mail :</p>
                            <a href='mailto:skyboxathlete@gmail.com' className='f4'>skyboxathlete@gmail.com</a>
                        </div>
                    </div>
                </div>
            </span>
            <span className='flex items-center pv4 justify-center'>
                <div className='w-100'>
                    <form style={{ backgroundImage: `url()` }} className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph4 mh0">
                            <legend  data-aos='fade-up' className="f2 fw6 ph0 mh0 tc">Session Enquiry Form</legend>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f4" htmlFor="email-address"  data-aos='fade-up' >Name</label>
                                <input
                                     data-aos='fade-up'
                                    className="form-input-bg pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                />
                                <div className="f4 red">{``}</div>
                            </div>
                            <div className="mv3">
                                <label  data-aos='fade-up' className="db fw6 lh-copy f4" htmlFor="email-address">Phone</label>
                                <input
                                    data-aos='fade-up'
                                    className="form-input-bg pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text" />
                                <div className="f4 red">{``}</div>
                            </div>
                            <div className="mv3">
                                <label  data-aos='fade-up' className="db fw6 lh-copy f4" htmlFor="email-address">Email</label>
                                <input
                                    data-aos='fade-up'
                                    className="form-input-bg pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="text"
                                />
                                <div className="f4 red">{``}</div>
                            </div>
                        </fieldset>
                        <div className="flex justify-center items-center">
                        <input 
                        style={{backgroundColor:'#00D0FF'}}
                        data-aos='fade-up'
                        className=".form-input-bg b ph3 pv2 input-reset ba br2 b--black bg-transparent grow pointer f4 dib mb3" 
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