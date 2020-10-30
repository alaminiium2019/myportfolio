import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import Creative from '../../../images/creative.PNG';
import Panda from '../../../images/panda.PNG';
import volnet from '../../../images/volnet.PNG';
import travelGuru from '../../../images/travelGuru.PNG';
import Emajohn from '../../../images/emasimple.PNG';
import Eschool from '../../../images/eschool.PNG';

const Projects = () => {
    return (
        <div className="container text-center mt-4">
            <h1>My Latest Projects</h1>
            <div className="row">
                <div className="col-md-4 mt-4">
                    <Card>
                        <CardActionArea>
                            <img src={Creative} alt="" className="pt-3" style={{ height: '200px' }} />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Creative Agency
                                    <hr></hr>
                                </Typography>
                                <Typography variant="body2" className="text-left" component="p">
                                    <b>Key Technology:</b> React js, React Router, Bootstrap, CSS, Firebase Hosting, Authentication, Payment, Node js, Express and MongoDB
                        </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className="justify-content-center">
                            <a href="https://github.com/alaminiium2019/creative-agency-client">
                                <Button color="primary" className="pr-5">
                                    GITHUB
                            </Button>
                            </a>
                            <a href="https://creative-agency-f358d.web.app/">
                                <Button color="primary">
                                    WEBSITE
                            </Button>
                            </a>
                        </CardActions>
                    </Card>
                </div>

                <div className="col-md-4 mt-4">
                    <Card>
                        <CardActionArea>
                            <img src={volnet} alt="" className="pt-3" style={{ height: '200px' }} />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    VOLUNTEER NETWORK
                                    <hr></hr>
                                </Typography>
                                <Typography variant="body2" className="text-left" component="p">
                                    <b>Key Technology:</b> React js, React Router, Bootstrap, CSS, Firebase Hosting, Authentication,JWT, Material UI, Node js, Express and MongoDB
                        </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className="justify-content-center">
                            <a href="https://github.com/alaminiium2019/volunteer-net-frontend">
                                <Button color="primary" className="pr-5">
                                    GITHUB
                            </Button>
                            </a>
                            <a href="https://volunteer-network-8af21.web.app/">
                                <Button size="small" color="primary">
                                    WEBSITE
                                </Button>
                            </a>
                        </CardActions>
                    </Card>
                </div>
                <div className="col-md-4 mt-4">
                    <Card>
                        <CardActionArea>
                            <img src={travelGuru} alt="" className="pt-3" style={{ height: '200px' }} />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    TRAVEL GURU
                                    <hr></hr>
                                </Typography>
                                <Typography variant="body2" className="text-left" component="p">
                                    <b>Key Technology:</b> React js, React Router, Bootstrap, CSS, Firebase Hosting,JWT, Material UI, Node js, Express and MongoDB
                        </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className="justify-content-center">
                            <a href="https://github.com/alaminiium2019/travel-guru">
                                <Button color="primary" className="pr-5">
                                    GITHUB
                            </Button>
                            </a>
                            <a href="https://travel-guru-b6c38.web.app/">
                                <Button size="small" color="primary">
                                    WEBSITE
                            </Button>
                            </a>
                        </CardActions>
                    </Card>
                </div>
                <div className="col-md-4 mt-4">
                    <Card>
                        <CardActionArea>
                            <img src={Emajohn} alt="" className="pt-3" style={{ height: '200px' }} />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Ema-john simple ecommerce
                                    <hr></hr>
                                </Typography>
                                <Typography variant="body2" className="text-left" component="p">
                                    <b>Key Technology:</b> React js, React Router, Bootstrap, CSS, Firebase Hosting,JWT,Payment, Material UI, Node js, Express and MongoDB
                        </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className="justify-content-center">
                            <a href="https://github.com/alaminiium2019/ema-john-simple">
                                <Button color="primary" className="pr-5">
                                    GITHUB
                            </Button>
                            </a>
                            <Button size="small" color="primary">
                                WEBSITE
                            </Button>
                        </CardActions>
                    </Card>
                </div>
                <div className="col-md-4 mt-4">
                    <Card>
                        <CardActionArea>
                            <img src={Eschool} alt="" className="pt-3" style={{ height: '200px' }} />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    E-SCHOOL
                        </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <b>Key Technology:</b> HTML, CSS, Bootstrap, JavaScript
                        </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className="justify-content-center">
                            <a href="https://github.com/alaminiium2019/E-learning-school">
                                <Button color="primary" className="pr-5">
                                    GITHUB
                            </Button>
                            </a>
                            <a href="https://alaminiium2019.github.io/E-learning-school/">
                            <Button size="small" color="primary">
                                WEBSITE
                            </Button>
                            </a>
                        </CardActions>
                    </Card>
                </div>
                <div className="col-md-4 mt-4">
                    <Card>
                        <CardActionArea>
                            <img src={Panda} alt="" className="pt-3" style={{ height: '200px' }} />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    PANDA Ecommerce
                        </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <b>Key Technology:</b> HTML, CSS, Bootstrap
                        </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className="justify-content-center">
                            <a href="https://github.com/alaminiium2019/panda-commerce">
                            <Button color="primary" className="pr-5">
                                GITHUB
                            </Button>
                            </a>
                            <a href="https://alaminiium2019.github.io/panda-commerce/">
                            <Button size="small" color="primary">
                                WEBSITE
                            </Button>
                            </a>
                        </CardActions>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Projects;