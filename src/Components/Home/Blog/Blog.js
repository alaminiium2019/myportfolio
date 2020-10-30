import React from 'react';
import './Blog.css';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import Creative from '../../../images/creative.PNG';
import Panda from '../../../images/panda.PNG';
import volnet from '../../../images/volnet.PNG';
import travelGuru from '../../../images/travelGuru.PNG';
import Emajohn from '../../../images/emasimple.PNG';
import Eschool from '../../../images/eschool.PNG';

const Blog = () => {
    return (
        <div className="blogBg">
            <div className="container text-center">
                <h1 className="pt-4">BLOGS</h1>
                <h1>Blog coming soon.........</h1>
                <div className="row">
                <div className="col-md-4 mt-4">
                    <Card>
                        <CardActionArea>
                            <img src={Creative} alt="" className="pt-3" style={{ height: '200px' }} />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    JavaScript
                                    <hr></hr>
                                </Typography>
                                <Typography variant="body2" className="text-left" component="p">
                                   
                        </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className="justify-content-center">
                            <a href="https://creative-agency-f358d.web.app/">
                                <Button color="primary">
                                    Click >>
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
                                    React JS
                                    <hr></hr>
                                </Typography>
                                <Typography variant="body2" className="text-left" component="p">
                                    
                        </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className="justify-content-center">

                            <a href="https://volunteer-network-8af21.web.app/">
                            <Button color="primary">
                                    Click >>
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
                                    Node
                                    <hr></hr>
                                </Typography>
                                <Typography variant="body2" className="text-left" component="p">
                                    
                        </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className="justify-content-center">
                            <a href="https://travel-guru-b6c38.web.app/">
                            <Button color="primary">
                                    Click >>
                            </Button>
                            </a>
                        </CardActions>
                    </Card>
                </div>
                </div>
            </div>
                        
        </div>
    );
};

export default Blog;