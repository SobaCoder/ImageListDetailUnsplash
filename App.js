import React from 'react';
import SearchBar from './SearchBar';
import nasa from '../apis/nasa'
import ImageDetail from './ImageDetail';
import ImageList from './ImageList';


class App extends React.Component {

    state = { images: [], selectedImage: null};
    componentDidMount() {
        this.onTermSubmit('today');
    }

    onTermSubmit = async (term) => {
        const response = await nasa.get('/search', {
            params: {
                query: term,
                page: 1,
                per_page: 5
            }
        });
        console.log(response.data.photos.results)
        this.setState({
            images : response.data.photos.results,
            selectedImage: response.data.photos.results[0],
        })
    };

    onImageSelect = (image) => {
        this.setState({selectedImage : image});
    } 

    render() {
        return (
            <React.Fragment>
            <div className="ui container">
            <SearchBar onSubmit={this.onTermSubmit}/>
            <div className="ui grid">
            <div className="ui row">
            <div className="ten wide column">
                <ImageDetail selectedImage = {this.state.selectedImage}/>
            </div>
            <div className="six wide column">
            <ImageList imageResults = {this.state.images} onImageSelect = {this.onImageSelect}/>
            </div>
            </div>
            </div>
            </div>
 
            </React.Fragment>
            
        );
    }
}

export default App;