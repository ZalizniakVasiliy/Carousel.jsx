import React from "react";
import cn from "classnames";

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: this.props.images,
            indexImg: 0
        };
    }

    switchImg = (arrowSwitch) => () => {
        let {indexImg, images} = this.state;

        arrowSwitch === `next` ?
            this.setState({indexImg: indexImg === images.length - 1 ? 0 : ++indexImg}) :
            this.setState({indexImg: indexImg === 0 ? images.length - 1 : --indexImg})
    };

    switchNextImg = this.switchImg(`next`);
    switchPrevImg = this.switchImg(`prev`);

    renderList() {
        const {indexImg, images} = this.state

        return images.map((item, index) => {
                const activeImg = cn('carousel-item',
                    {'active': indexImg === index}
                );

                return (
                    <div className={activeImg} key={index}>
                        <img className="d-block w-100 " src={item} alt="image of slider"></img>
                    </div>
                );
            }
        )
    }

    render() {
        return (
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {this.renderList()}
                </div>

                <button
                    className="carousel-control-prev"
                    data-bs-target="#carousel"
                    type="button"
                    data-bs-slide="prev"
                    onClick={this.switchPrevImg}
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button
                    className="carousel-control-next"
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