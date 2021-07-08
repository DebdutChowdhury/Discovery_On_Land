import { Component } from "react";
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import '../Css/Experiences.css'

export default class Experiences extends Component {
    render() {
        return (
            <div>
                <div className="header-main">
                    <video src="https://player.vimeo.com/external/504987430.hd.mp4?s=5887082673ab2d83fe3c560bb10ba8b39d36d865&amp;profile_id=175" muted loop autoPlay playsInline></video>
                    <Header />
                    <div className="c-site-head__logo">
                        <h1 class="c-hero-slider__title o-h0">
                            <div class="c-line c-line--1 | js-transition-line" >
                                <div data-aos="fade-up" className="dis-main">
                                    <div className="dis-sub">Unforgettable</div>
                                    <div className="dis-subb">experiences</div>
                                </div>
                            </div>
                        </h1>
                    </div>
                </div>
                <div id="expdescandexculsiveworld">
                    <div id="expintro">
                        <p id="expstory">
                            Memorable days. Exceptional nights. We believe it’s our mission to make every minute matter. So you can live your life to the fullest, with the people closest to you.
                        </p>
                    </div>
                    <div id="yourworld">
                        <div id="yourworlddesc">
                            <div id="headingoneyworld">
                                Exclusive to
                            </div>
                            <div id="headingtwoworld">
                                your world
                            </div>

                            <div id="yourworldpara">
                                Our worlds are designed to offer you endless opportunities to share incredible once-in-a-lifetime experiences and adventures every single minute of the day. Each of our settings offers a relaxed sense of community through exceptional clubhouses, world-class golf courses, welcoming staff and an extensive Outdoor Pursuits program. Create moments of joy and wonder, unforgettable memories and cherished times, together with those who matter most.
                            </div>
                        </div>
                        <div id="yourworldimg">
                            <img src="https://dxaurk9yhilm4.cloudfront.net/images/899/Scuba_5ae402c9837860cd6e4f65e304b3a5fa.jpg" alt="" id="yimg"></img>

                        </div>
                    </div>
                </div>
                <div id="experienceall">
                    <div id="golf">
                        <img src="https://dxaurk9yhilm4.cloudfront.net/images/533/Golf3_4d32d1f061062da257f8ac1083a047ac.jpg" alt=""
                            class="imgexp"></img>

                        <div class="aboutexp">
                            <div class="headingexp">
                                Golf
                            </div>
                            <div class="expdescfull">

                                We commission the world’s most renowned course architects to design spectacular golf experiences on challenging yet incredibly playable 18-hole courses. Our trademark comfort stations also set new standards in on-course amenities.

                            </div>
                            <div className="explorebtn3">
                                <button className="btn3-text" aria-hidden="true">Explore</button>
                            </div>

                        </div>
                        <div class="greybox">

                        </div>
                        <div class="greyboxlinear">

                        </div>

                    </div>
                    <div id="pursuits">
                        <img src="https://dxaurk9yhilm4.cloudfront.net/images/144/OD_image_4d32d1f061062da257f8ac1083a047ac.jpg" alt=""
                            class="imgexp" id="pimg"></img>


                        <div class="aboutexp" id="pexp">
                            <div class="headingexp" id="phead">
                                Outdoor Pursuits
                            </div>
                            <div class="expdescfull">

                                We commission the world’s most renowned course architects to design spectacular golf experiences on challenging yet incredibly playable 18-hole courses. Our trademark comfort stations also set new standards in on-course amenities.

                            </div>
                            <div className="explorebtn3">
                                <button className="btn3-text" aria-hidden="true">Explore</button>
                            </div>

                        </div>
                        <div class="greybox" id="pg">

                        </div>
                        <div class="greyboxlinear" id="pl">

                        </div>

                    </div>
                    <div id="wellness">
                        <img src="https://dxaurk9yhilm4.cloudfront.net/images/145/Wellness_image_4d32d1f061062da257f8ac1083a047ac.jpg" alt=""
                            class="imgexp" id="wimg"></img>



                        <div class="aboutexp" id="wexp">
                            <div class="headingexp">
                                Wellness
                            </div>
                            <div class="expdescfull">

                                We commission the world’s most renowned course architects to design spectacular golf experiences on challenging yet incredibly playable 18-hole courses. Our trademark comfort stations also set new standards in on-course amenities.

                            </div>
                            <div className="explorebtn3">
                                <button className="btn3-text" aria-hidden="true">Explore</button>
                            </div>

                        </div>
                        <div class="greybox" id="wg">

                        </div>
                        <div class="greyboxlinear" id="wl">

                        </div>
                    </div>
                    <div id="ourworldscard">
                        <img src="https://dxaurk9yhilm4.cloudfront.net/images/139/img_5dabbd1a34149dcaed83515ff1526a0f.jpg" alt="" id="imgourworld"></img>
                        <h1 class="c-cta__title o-h2 o-sans u-txt-center u-color-white" id="ourworldsimghead">Our Worlds</h1>
                        {/* <button id="exploreourworld">Explore</button> */}
                        {/* <div className="explorebtn3">
                        <button className="btn3-text" aria-hidden="true">Explore</button>
                    </div> */}
                        <div className="exploreworld">
                            <div className="btn3-text">Explore</div>
                        </div>
                    </div>



                    <Footer />
                </div>

            </div>





        )
    }
}