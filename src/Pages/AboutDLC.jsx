import { Component, useEffect } from "react";
import '../Css/AboutDLC.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Slide from '../Components/Slide'
import Aos from 'aos'
import 'aos/dist/aos.css'


const AboutDLC = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    },[])
    
        
        return (
            <div>
                <div id="header-main1">
                    <div id="headerimgcontainer1">
                        <img src="https://dxaurk9yhilm4.cloudfront.net/images/806/YC-DSC_0007-2_2cbd80a0345be3b5a0b7649a1a2d057f.jpg" aos="fade-zoom-in"
                            alt="" id="headerimg1"></img>
                    </div>
                    <Header />
                    <div className="c-site-head__logo">
                        <h1 class="c-hero-slider__title o-h0">
                            <div class="c-line c-line--1 | js-transition-line" >
                                <div data-aos="fade-up" className="dis-main">
                                    <div className="dis-sub">Creating Your
                                </div>
                                    <div className="dis-subb">Perfect world</div>
                                </div>
                            </div>
                        </h1>
                    </div>
                </div>
                <div id="story">
                    <div id="storydesc">
                        <p class="c-intro__text o-h3 u-color-black" data-scroll="staggerLines">
                            <div className="storypara"> Founded in 1994 by Mike Meldman, Discovery Land Company is </div>
                            <div className="storypara">a US-based real estate developer and operator of private </div>
                            <div className="storypara">residential club communities and resorts with a world-renowned </div>
                            <div className="storypara">portfolio of domestic and international properties. </div>
                        </p>
                    </div>
                    <div id="mission">
                        <div id="missionheadinganddesc">
                            <div id="head">
                                <h3>Our Mission</h3>
                            </div>
                            <div id="descmission">
                                <div class="o-txt" data-scroll="staggerLinesP">
                                    <p>
                                        <div className="missionpara">We don’t build buildings, but rather we build settings </div>
                                        <div className="missionpara">where families can create intergenerational memories </div>
                                        <div className="missionpara">and enrich their lives in exquisite and untouched </div>
                                        <div className="missionpara">sanctuaries. Everything we do is driven by the </div>
                                        <div className="missionpara">fundamental desire to create spaces where families can </div>
                                        <div className="missionpara">be together.</div>
                                    </p>
                                    <p>
                                        <div className="missionpara">These settings offer a relaxed and comfortable sense of </div>
                                        <div className="missionpara">community featuring outstanding clubhouses, </div>
                                        <div className="missionpara">incredible residential offerings, premier golf courses, </div>
                                        <div className="missionpara">welcoming staff, world-class culinary offerings and our </div>
                                        <div className="missionpara">custom Outdoor Pursuits program; all offering the </div>
                                        <div className="missionpara">highest of service standards to enrich your experience. </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id="onlyimgmission">
                            <div class="missionimgcontainer">
                                <img src="https://dxaurk9yhilm4.cloudfront.net/images/163/What_we_do_intro_5ae402c9837860cd6e4f65e304b3a5fa.jpg"
                                    alt="" id="missionimg" ></img>
                            </div>
                        </div>
                    </div>
                    <div id="bayimg">
                        <img data-lazy-src="https://dxaurk9yhilm4.cloudfront.net/images/696/Bakers_Carousel3_62018727b9e8103a3d5d6c0701991eca.jpg" alt="" src="https://dxaurk9yhilm4.cloudfront.net/images/696/Bakers_Carousel3_62018727b9e8103a3d5d6c0701991eca.jpg"
                            id="imgbay" data-aos="zoom-in"></img>
                    </div>

                    <div id="differencecarousel">
                        <div className="dis-but">
                            <div id="carouseldiffheading">
                                <h3 id="diffheading">The Dicovery Difference</h3>

                            </div>
                            <div id="carouselbuttonsexplore">
                                <button>
                                    <div id="leftbutton">
                                        <svg id="leftarrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.06 20.91"><path d="M28.06 9.81H2.2l8.89-8.9c.01-.03-.9-.91-.9-.91l-10 10c0 .01-.01.01-.02.02l-.04.04c-.01.01-.02.02-.02.03-.01.01-.02.03-.03.05-.01.01-.01.03-.02.04 0 .01-.01.02-.01.03v.02c-.01.01-.01.03-.01.04 0 .02-.01.03-.01.05 0 .01 0 .03-.01.04 0 .02 0 .03-.01.05v.1c0 .02 0 .03.01.05 0 .01 0 .03.01.04 0 .02.01.03.01.05 0 .01.01.03.01.04 0 .01 0 .01.01.02 0 .01.01.02.02.03.01.01.01.03.02.04.01.02.02.03.03.05.01.01.02.02.02.03.01.01.02.03.04.04l.02.02 10 10c0 .01.91-.91.91-.91L2.2 11.1h25.86V9.81z"></path></svg>
                                    </div>
                                </button>
                                <button>
                                    <div id="rightbutton">
                                        <svg xmlns="http://www.w3.org/2000/svg" id="rightarrow" viewBox="0 0 28.06 20.91"><path d="M28.06 9.81H2.2l8.89-8.9c.01-.03-.9-.91-.9-.91l-10 10c0 .01-.01.01-.02.02l-.04.04c-.01.01-.02.02-.02.03-.01.01-.02.03-.03.05-.01.01-.01.03-.02.04 0 .01-.01.02-.01.03v.02c-.01.01-.01.03-.01.04 0 .02-.01.03-.01.05 0 .01 0 .03-.01.04 0 .02 0 .03-.01.05v.1c0 .02 0 .03.01.05 0 .01 0 .03.01.04 0 .02.01.03.01.05 0 .01.01.03.01.04 0 .01 0 .01.01.02 0 .01.01.02.02.03.01.01.01.03.02.04.01.02.02.03.03.05.01.01.02.02.02.03.01.01.02.03.04.04l.02.02 10 10c0 .01.91-.91.91-.91L2.2 11.1h25.86V9.81z"></path></svg>
                                    </div>
                                </button>
                            </div>


                        </div>

                        <div id="diffcarousel">
                            
                        </div>
                        
                    </div>
                    <Slide />
                </div>
                <div id="design">
                    <div id="designimg">
                        <img data-lazy-src="https://dxaurk9yhilm4.cloudfront.net/images/159/What_we_do_design_hero_62018727b9e8103a3d5d6c0701991eca.jpg" alt="" data-parallax="{&quot;scale&quot;: &quot;[1, 1.25]&quot;}" data-parallax-mobile="" src="https://dxaurk9yhilm4.cloudfront.net/images/159/What_we_do_design_hero_62018727b9e8103a3d5d6c0701991eca.jpg" id="imgd" data-aos="zoom-out"></img>
                    </div>
                    <div id="discoverydesign">
                        <div id="onlyimgdesign">
                            <img src="https://dxaurk9yhilm4.cloudfront.net/images/157/What_we_do_design_1_2e8d9b92b1b20afb1d0f8d6550777aa2.jpg" alt="" data-parallax="{&quot;yPercent&quot;: &quot;[0, 0.1]&quot;}" id="imgd1"></img>
                        </div>
                        <div id="imgandescdesign">
                            <div id="dcon">
                                <div id="designheading">
                                    <h3>Discovery Design</h3>
                                </div>
                                <div id="designdesc">
                                    <p>See the beauty in every corner of your new, bespoke home away from home. From fabrics and furniture pieces to floorplans, our professional designers will collaborate closely with you to create an interior living space which reflects your style and unique tastes as well as perfectly complementing your lifestyle.</p>
                                </div>
                                <div id="imgdesign">
                                    <img src="https://dxaurk9yhilm4.cloudfront.net/images/158/What_we_do_design_2_2ab4534b0a2984e07d7caeca8808129f.jpg"

                                        id="imgd2"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="imgd3con">
                    <img data-lazy-src="https://dxaurk9yhilm4.cloudfront.net/images/890/YCGolfClubHouse0916_1288_62018727b9e8103a3d5d6c0701991eca.jpg" alt="" data-parallax="{&quot;scale&quot;: &quot;[1, 1.25]&quot;}" data-parallax-mobile="" src="https://dxaurk9yhilm4.cloudfront.net/images/890/YCGolfClubHouse0916_1288_62018727b9e8103a3d5d6c0701991eca.jpg" id="imgd3"></img>
                </div>
                <div id="discoverybuilders">
                    <div id="buildersdescandimg">
                        <div id="buildercon">
                            <div id="headingbuilder">
                                <h3 id="buildheading">Discovery Builders</h3>
                            </div>
                            <div id="builderdesc">
                                <p>Every Discovery property is wonderfully in-tune with its natural surroundings - a harmonious blend of the architecturally impressive with the environmentally sensitive. And your every expectation will be met, with our meticulous eye for detail matching outstanding levels of craftsmanship and master building.</p>
                            </div>
                            <div id="builderimg">
                                <img src="https://dxaurk9yhilm4.cloudfront.net/images/155/What_we_do_builders_2_2ab4534b0a2984e07d7caeca8808129f.jpg" alt=""
                                    id="imgd4"></img>
                            </div>
                        </div>
                    </div>
                    <div id="buildersimg">
                        <img src="https://dxaurk9yhilm4.cloudfront.net/images/153/What_we_do_builders_1_2e8d9b92b1b20afb1d0f8d6550777aa2.jpg" alt="" data-parallax="{&quot;yPercent&quot;: &quot;[0, 0.1]&quot;}"
                            id="imgd5"></img>
                    </div>
                </div>
                <div id="ourworldscard">
                    <img src="https://dxaurk9yhilm4.cloudfront.net/images/160/What_we_do_footer_2_5dabbd1a34149dcaed83515ff1526a0f.jpg" alt="" id="imgourworld"></img>
                    <h1 class="c-cta__title o-h2 o-sans u-txt-center u-color-white" id="ourworldsimghead">Our Worlds</h1>
                    <button id="exploreourworld">Explore</button>
                </div>

                <Footer />

            </div>
        )
    
}

export default AboutDLC