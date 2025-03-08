import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = () => {
    const images = [
        "https://images.unsplash.com/photo-1737190292587-603e3857876f?w=1920&auto=format&fit=crop&q=100",
        "https://images.unsplash.com/photo-1607936854279-55e8a4c64888?w=1920&auto=format&fit=crop&q=100",
        "https://images.unsplash.com/photo-1680491840707-f084314523fb?w=1920&auto=format&fit=crop&q=100",
        "https://images.unsplash.com/photo-1695048132832-b41495f12eb4?w=1920&auto=format&fit=crop&q=100"
    ];

    return (
        <div style={{
            width: '100%', // Ensures it matches the image width
            maxWidth: '1000px', // Matches the image resolution
            margin: 'auto',
            borderRadius: '15px',
            boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)',
            background: '#fff'
        }}>
            <Carousel fade interval={2000}>
                {images.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={image}
                            alt={`Slide ${index + 1}`}
                            style={{
                                borderRadius: '15px',
                                height: 'auto', // Auto height to match image aspect ratio
                                objectFit: 'contain', // Ensures full image is visible
                            }}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default Banner;
