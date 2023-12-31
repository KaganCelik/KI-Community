import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Button } from '@mui/material';

import { useState } from 'react';

import './About.css';

const About = () => {
    const [employers, setEmployers] = useState([
        { name: "Bilge Kağan Çelik", department: 'Frontend Developer', photo: "https://static.vecteezy.com/system/resources/previews/021/877/748/non_2x/man-advanture-people-character-illustration-ai-generated-free-photo.jpg", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet urna egestas, elementum leo.", id: 0 },
        { name: "İrem Kocahan", department: 'Frontend Developer', photo: "https://cdn.pixabay.com/photo/2023/04/23/14/23/ai-generated-7945805_1280.jpg" , desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam dui, aliquam eget ultrices vel, maximus nec velit. Fusce bibendum.", id: 1 }
    ])

    return (
        <div className='main-about-container'>
            <div className='about-title'>
                <h2 className='about-title-h'>About Us</h2>
            </div>
            <div className='about-cards'>
                {employers.map((employer) => (
                    <Card className='about-card-container' sx={{ maxWidth: 280 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="280"
                                image={employer.photo}
                                alt="employer"
                            />
                            <CardContent>
                                <Typography className='emp-name' gutterBottom variant="h5" component="div">
                                    {employer.name}
                                </Typography>
                                <Typography className='emp-department' gutterBottom variant="body2" component="div">
                                    {employer.department}
                                </Typography>
                                <Typography className='emp-desc' variant="body1" color="text.secondary">
                                    {employer.desc}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className='about-button-container'>
                            <Button className='about-button' size="small" color="primary">
                                <p className='about-button-text'>Contact Me!</p>
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </div>
    );
}
 
export default About;