import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = () => {
    return (
        <div style={{
            width: '95%', // Adjust width of the slideshow
            maxWidth: '1000000px', // Prevent it from getting too large on bigger screens
            margin: 'auto', // Center it
            padding: '40px',
            borderRadius: '50px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Adds a subtle shadow
            overflow: 'hidden', // Ensures rounded corners apply properly
            background: '#fff' // Optional: Adds a background
        }}>
            <Carousel fade interval={3000}>
                {[
                    "https://images.unsplash.com/photo-1616353071588-708dcff912e2?w=1920&auto=format&fit=crop&auto=enhance&q=80",
                    "https://images.unsplash.com/photo-1612646088910-a88392a688a7?w=1920&auto=format&fit=crop&auto=enhance&q=80",
                    "https://images.unsplash.com/photo-1585790054762-36743f4b07ff?w=1920&auto=format&fit=crop&auto=enhance&q=80",
                    "https://images.unsplash.com/photo-1533310266094-8898a03807dd?w=1920&auto=format&fit=crop&auto=enhance&q=80"
                ].map((item, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={item}
                            alt={`Slide ${index + 1}`}
                            style={{
                                borderRadius: '15px', // Rounded corners
                                height: '300px', // Adjust height
                                objectFit: 'cover' // Ensures the image fits well
                            }}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default Slider;
