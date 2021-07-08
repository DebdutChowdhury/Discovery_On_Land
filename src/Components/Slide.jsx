import React, { Component } from "react";
import Slider from "react-slick";
// import img_cor from '../constant.js'
import '../Css/Dashboard.css'
import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'
import { withRouter } from "react-router";



class Slide extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }

    render() {
        const settings = {

            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 5,
            autoplay: 9000,
            speed: 9000,
            autoplaySpeed: 8000,
            cssEase: "linear",
            initialSlide: 1

        };
        return (
            <div>
             <div id="expolreworlds">
                <div id="explorecontainerone">
                    <div id="headingoneexplore">
                        <h3 id="exploreheadingone">Explore</h3>
                    </div>
                    <div id="headingtwoexplore">

                        <h4 id="exploreheadingtwo">our worlds</h4>
                    </div>

                </div>
                <div id="carouselbuttonsexplore">
                    <button onClick={this.previous}>
                        <div id="leftbutton" onClick={this.previous}>
                            <svg onClick={this.previous} id="leftarrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.06 20.91"><path d="M28.06 9.81H2.2l8.89-8.9c.01-.03-.9-.91-.9-.91l-10 10c0 .01-.01.01-.02.02l-.04.04c-.01.01-.02.02-.02.03-.01.01-.02.03-.03.05-.01.01-.01.03-.02.04 0 .01-.01.02-.01.03v.02c-.01.01-.01.03-.01.04 0 .02-.01.03-.01.05 0 .01 0 .03-.01.04 0 .02 0 .03-.01.05v.1c0 .02 0 .03.01.05 0 .01 0 .03.01.04 0 .02.01.03.01.05 0 .01.01.03.01.04 0 .01 0 .01.01.02 0 .01.01.02.02.03.01.01.01.03.02.04.01.02.02.03.03.05.01.01.02.02.02.03.01.01.02.03.04.04l.02.02 10 10c0 .01.91-.91.91-.91L2.2 11.1h25.86V9.81z"></path></svg>
                        </div>
                    </button>
                    <button onClick={this.next}>
                        <div onClick={this.next} id="rightbutton">
                            <svg onClick={this.next} xmlns="http://www.w3.org/2000/svg" id="rightarrow" viewBox="0 0 28.06 20.91"><path d="M28.06 9.81H2.2l8.89-8.9c.01-.03-.9-.91-.9-.91l-10 10c0 .01-.01.01-.02.02l-.04.04c-.01.01-.02.02-.02.03-.01.01-.02.03-.03.05-.01.01-.01.03-.02.04 0 .01-.01.02-.01.03v.02c-.01.01-.01.03-.01.04 0 .02-.01.03-.01.05 0 .01 0 .03-.01.04 0 .02 0 .03-.01.05v.1c0 .02 0 .03.01.05 0 .01 0 .03.01.04 0 .02.01.03.01.05 0 .01.01.03.01.04 0 .01 0 .01.01.02 0 .01.01.02.02.03.01.01.01.03.02.04.01.02.02.03.03.05.01.01.02.02.02.03.01.01.02.03.04.04l.02.02 10 10c0 .01.91-.91.91-.91L2.2 11.1h25.86V9.81z"></path></svg>
                        </div>
                    </button>
                </div>

            </div>
                <div id="carouselandglobe">

                    <div id="carousel-items">
                        <Slider ref={c => (this.slider = c)} {...settings}>
                            <div className="carousel-item" >

                                <img data-lazy-src="https://dxaurk9yhilm4.cloudfront.net/images/6944/Carousel_500x750_200612_084523_397186feb8bd51bb37bc24fc2b9b500f.jpg" alt="" draggable="false" src="https://dxaurk9yhilm4.cloudfront.net/images/6944/Carousel_500x750_200612_084523_397186feb8bd51bb37bc24fc2b9b500f.jpg" className="img-1"></img>

                                <div className="c-slide__content | js-slide__content">
                                    <h1 className="c-slide__title">James Island</h1>
                                    <p className="c-slide__text">Southern Gulf Islands, British Columbia, Canada</p>
                                    <span className="c-slide__link">Explore</span>
                                </div>
                            </div>
                            <div className="carousel-item" id="3">

                                <img data-lazy-src="https://dxaurk9yhilm4.cloudfront.net/images/6894/IMG_00162-copy_397186feb8bd51bb37bc24fc2b9b500f.jpg" alt="" draggable="false" src="https://dxaurk9yhilm4.cloudfront.net/images/6894/IMG_00162-copy_397186feb8bd51bb37bc24fc2b9b500f.jpg" className="img-1"></img>

                                <div className="c-slide__content | js-slide__content">
                                    <h1 className="c-slide__title">CostaTerra</h1>
                                    <p className="c-slide__text">Comporta, Portugal</p>
                                    <span className="c-slide__link">Explore</span>
                                </div>
                            </div>
                            <div className="carousel-item" id="4">

                                <img data-lazy-src="https://dxaurk9yhilm4.cloudfront.net/images/6944/Carousel_500x750_200612_084523_397186feb8bd51bb37bc24fc2b9b500f.jpg" alt="" draggable="false" src="https://dxaurk9yhilm4.cloudfront.net/images/6944/Carousel_500x750_200612_084523_397186feb8bd51bb37bc24fc2b9b500f.jpg" className="img-1"></img>

                                <div className="c-slide__content | js-slide__content">
                                    <h1 className="c-slide__title">James Island</h1>
                                    <p className="c-slide__text">Southern Gulf Islands, British Columbia, Canada</p>
                                    <span className="c-slide__link">Explore</span>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img data-lazy-src="https://dxaurk9yhilm4.cloudfront.net/images/188/driftwood-1_397186feb8bd51bb37bc24fc2b9b500f.jpg" alt="" draggable="false" src="https://dxaurk9yhilm4.cloudfront.net/images/188/driftwood-1_397186feb8bd51bb37bc24fc2b9b500f.jpg" className="img-1"></img>
                                <div className="c-slide__content | js-slide__content">
                                    <h1 className="c-slide__title">Driftwood</h1>
                                    <p className="c-slide__text">Austin, Texas</p>
                                    <span className="c-slide__link">Explore</span>
                                </div>
                            </div>
                        </Slider>
                    </div>

                </div>
            </div>
        )
    }
}

export default withRouter(Slide)