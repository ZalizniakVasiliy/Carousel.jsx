import React from "react";

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: this.props.images,
            indexImg: 0
        }
    }

    switchNextImg = () => {
        this.setState(({indexImg, images}) => (
                {indexImg: indexImg === images.length - 1 ? 0 : ++indexImg}
            )
        );
    };

    switchPrevImg = () => {
        this.setState(({indexImg, images}) => (
                {indexImg: indexImg === 0 ? images.length - 1 : --indexImg}
            )
        );
    };

    render() {
        let {images, indexImg} = this.state;

        return (
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className='carousel-item active'>
                        <img alt="" className="d-block w-100" src={images[indexImg]}/>
                    </div>
                    <div className='carousel-item'>
                        <img alt="" className="d-block w-100" src={images[++indexImg]}/>
                    </div>
                    <div className='carousel-item'>
                        <img alt="" className="d-block w-100" src={images[++indexImg]}/>
                    </div>
                </div>
                <button className="carousel-control-prev"
                        data-bs-target="#carousel"
                        type="button"
                        data-bs-slide="prev"
                        onClick={this.switchPrevImg}
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next"
                        data-bs-target="#carousel"
                        type="button"
                        data-bs-slide="next"
                        onClick={this.switchNextImg}
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        );
    }
}

export default Carousel;
