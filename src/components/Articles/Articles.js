import { useState } from 'react';
import './Articles.css'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Articles = () => {
    const [articles, setArticles] = useState([
        { title: "Roblox coming to PlayStation 4 and PS5", desc: "The launch was announced at Robloxs annual Developers Conference. Roblox also said that an open beta version released on Meta Quest earlier this year had been well-received...", pic: "https://ichef.bbci.co.uk/news/976/cpsprodpb/2A79/production/_131037801_gettyimages-1408858615.jpg.webp", id: 0 },
        { title: "Apple shares slide after China government iPhone ban reports", desc: "Shares in Apple have fallen for a second day in a row after reports that Chinese government workers have been banned from using iPhones. The firms...", pic: "https://ichef.bbci.co.uk/news/976/cpsprodpb/6901/production/_131018862_gettyimages-1597810532.jpg.webp", id: 1 },
        { title: "Elon Musk says he withheld Starlink over Crimea to avoid escalation", desc: "Elon Musk says he refused to give Kyiv access to his Starlink communications network over Crimea to avoid complicity in a major act of war...", pic: "https://ichef.bbci.co.uk/news/976/cpsprodpb/128A6/production/_131024957_musk.png.webp", id: 2},
        { title: "Period trackers to be reviewed over data concerns", desc: "The Information Commissioner's Office (ICO) is reviewing period and fertility trackers over data security concerns. The apps work by plotting menstrual cycles, based on user information. They...", pic: "https://ichef.bbci.co.uk/news/976/cpsprodpb/FF79/production/_131010456_gettyimages-1519453198.jpg.webp", id: 3 }
    ])

    return (
        <div className='main-container'>
            <div className='article-title'>
                <h2 className='article-title-h'>ARTICLES</h2>
            </div>
            <div className='bottom-container'>
                {articles.map((article) => (
                    <Card className='card' sx={{ width: 250 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height={"140"}
                                image ={article.pic}
                                alt="pic"
                            />
                            <CardContent className='card-content'>
                            <Typography gutterBottom variant="h5" component="div">
                                {article.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {article.desc}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className='articles-button'>
                            <Button size="small" color="primary" fullWidth>
                                Read More
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </div>
    );
}
 
export default Articles;