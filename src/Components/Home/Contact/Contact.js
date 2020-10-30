import { Email, PhoneAndroid } from '@material-ui/icons';
import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Twitter } from '@material-ui/icons';

const Contact = () => {
    return (
        <div style={{ backgroundColor: '#94d3d3', padding: '30px' }} >
            <h1 className="text-center pb-4">Get In Touch</h1>
            <div className="container">
                <div className="row d-flex">
                    <div className="col-md-6">
                        <div className="d-flex p-4">
                            <PhoneAndroid></PhoneAndroid>
                            <p className="pl-3">+8801920915832(Call/WhatsApp)</p>
                        </div>
                        <div className="d-flex p-4">
                            <Email></Email>
                            <p className="pl-3">alamin.iium2017@gmail.com</p>

                        </div>
                        <div className="d-flex p-4">
                            <LocationOnIcon></LocationOnIcon>
                            <p className="pl-3">Dhaka, Bangladesh</p>
                        </div>
                        <div className="d-flex text-center">
                            <a href="https://www.linkedin.com/in/mdalamin-2020/"><p className="pl-4"><LinkedInIcon></LinkedInIcon></p></a>
                            <a href="https://github.com/alaminiium2019"><p className="pl-4"><GitHubIcon></GitHubIcon></p></a>
                            <a href="https://www.facebook.com/alamin.iium"><p className="pl-4"><FacebookIcon></FacebookIcon></p></a>
                            <a href="https://twitter.com/MdAlaminiium"><p className="pl-4"><Twitter></Twitter></p></a>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Email address" />
                            </div>
                            <div className="form-group">
                                <textarea name="" className="form-control" id="" cols="30" rows="8" placeholder="Message *"></textarea>
                            </div>
                            <div className="form-group text-left">
                                <button style={{ backgroundColor: '#111430', borderRadius: '5px' }} className="btn text-white pr-5 pl-5"> Send </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <p className="text-center">&copy; mdalamin {(new Date()).getFullYear()}</p>
        </div>
    );
};

export default Contact;