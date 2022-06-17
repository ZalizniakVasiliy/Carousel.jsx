import Carousel from './components/Carousel';

function App() {
    const imagesList =
        [
            '/images/first.jpg',
            '/images/second.jpg',
            '/images/third.jpg'
        ];

    return (
        <div className="App">
            <Carousel images={imagesList}/>
        </div>
    );
}

export default App;