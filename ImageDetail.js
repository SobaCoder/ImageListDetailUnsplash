import React from 'react';

const ImageDetail = ({selectedImage}) => {

    console.log(selectedImage.urls.full)
    const url = selectedImage.urls.small;
    return (
    <div className="ui fluid card">
        <div className="image">
            <img src={url} alt={selectedImage.alt_description}/>
        </div>
        <div className="content">
            {selectedImage.description}
        </div>
        </div>)
}

export default ImageDetail;