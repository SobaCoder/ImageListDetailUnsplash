import React from 'react';
import ImageItem from './ImageItem';


const ImageList = ({imageResults, onImageSelect}) => {
    const renderedImages = imageResults.map((image) => {
        return (
            <div className="card">
            <div className="image">
        <ImageItem key={image.id} image={image} onImageSelect={onImageSelect}/></div>
        <div className="content">
            {image.description}
        </div></div>);
    });
    return <div className="ui link cards">{renderedImages}</div>
}

export default ImageList;   