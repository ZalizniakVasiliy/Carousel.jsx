import Carousel from './components/Carousel';
import firstImg from './images/first.jpg';
import secondImg from './images/second.jpg';
import thirdImg from './images/third.jpg';

function App() {
    const imagesList =
        [
            firstImg,
            secondImg,
            thirdImg
        ];

    return (
        <div className="App">
            <Carousel images={imagesList}/>
        </div>
    );
}

export default App;