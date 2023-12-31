import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import './Gallery.css';

const Gallery = () => {
    return (
        <div className='gallery-main-div'>
            <div className='gallery-title'>
                <h2 className='gallery-title-h'>GALLERY</h2>
            </div>
            <div className='gallery-cards'>
                <Card className='gallery-for-shadow' sx={{ maxWidth: 300 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="300"
                            image="https://images.nightcafe.studio//assets/tdraw-girl.jpg?tr=w-1200,c-at_max"
                            alt="pic"
                        />
                    </CardActionArea>
                </Card>
                <Card className='gallery-for-shadow' sx={{ maxWidth: 300 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="300"
                            image="https://img.freepik.com/free-photo/man-wearing-smart-glasses-touching-virtual-screen-futuristic-technology-digital-remix_53876-104247.jpg"
                            alt="pic"
                        />
                    </CardActionArea>
                </Card>
                <Card className='gallery-for-shadow' sx={{ maxWidth: 300 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="300"
                            image="https://img.freepik.com/premium-photo/businessman-using-computer-data-management-paperless-document-control-dashboard-analysis-information-project_10541-8901.jpg"
                            alt="pic"
                        />
                    </CardActionArea>
                </Card>
            </div>,
        </div>
        
    );
}
 
export default Gallery;