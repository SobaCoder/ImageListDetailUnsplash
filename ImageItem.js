import React from 'react';

const ImageItem = ({image, onImageSelect}) => {
    return <div  className="item" >
        <img className="ui image" src={image.urls.thumb} onClick={()=>onImageSelect(image)} alt={image.alt_description}/>
        </div>
};

export default ImageItem;