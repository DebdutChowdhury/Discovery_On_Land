import '../Css/Dashboard.css'
import video from '../Asset/DLC web hero 1.5min organized by property.mov.mp4'
import Slide from '../Components/Slide'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { withRouter } from 'react-router'
import down from '../Asset/down.svg'
import down1 from '../Asset/down1.svg'
import arrow from '../Asset/down-arrow.png'


const Dashboard = () => {

    return (
        <div>
            <div className="header-main">
                <video src={video} muted loop autoPlay playsInline></video>
                <Header />
                <div className="c-site-head__logo">
                    <h1 class="c-hero-slider__title o-h0">
                        <div class="c-line c-line--1 | js-transition-line" >
                            <div data-aos="fade-up" className="dis-main">
                                <div className="dis-sub">Discover
                                </div>
                                <div className="dis-subb">your world</div>
                            </div>

                        </div>
                    </h1>
                </div>
                <button type="button" className="hero-scroll | js-hero-scroll">
                    <div className="hero-scroll__arrows">
                        <span className="hero-scroll__arrow-1">
                        <img src={arrow} alt="" className="arrow1"></img>
                        </span>
                        
                    </div>
                </button>


                <div className="c-hero__ctas">
                    <div className="c-hero__text">
                        <div className="c-hero-labels">
                            <div className="c-hero-labels__inner">

                                <div className="c-hero-labels__label | js-stamp" data-start="1" >El Dorado Beach Club</div>
                                <div className="c-hero-labels__label | js-stamp" data-start="8" >Yellowstone Club</div>
                                <div className="c-hero-labels__label | js-stamp" data-start="16" >Baker's Bay Golf &amp; Ocean Club</div>
                                <div className="c-hero-labels__label | js-stamp" data-start="24" >Kukio Golf &amp; Beach Club</div>
                                <div className="c-hero-labels__label | js-stamp" data-start="35.5" >Madison Club</div>
                                <div className="c-hero-labels__label | js-stamp" data-start="45" >Mākena Golf &amp; Beach Club</div>
                                <div className="c-hero-labels__label | js-stamp" data-start="52" >Summit Club</div>
                                <div className="c-hero-labels__label | js-stamp" data-start="58" >Playa Grande Golf &amp; Ocean Club</div>
                                <div className="c-hero-labels__label | js-stamp" data-start="69" >Chileno Bay Golf &amp; Beach Club</div>
                                <div className="c-hero-labels__label | js-stamp" data-start="79" >Silo Ridge Field Club</div>
                                <div className="c-hero-labels__label | js-stamp" data-start="87" >CostaTerra Golf &amp; Ocean Club</div>
                                <div className="c-hero-labels__label | js-stamp" data-start="94" >Gozzer Ranch Golf &amp; Lake Club</div>
                                <div className="c-hero-labels__label | js-stamp" data-start="101" >Barbuda Ocean Club</div>
                                <div className="c-hero-labels__label | js-stamp" data-start="114" >Troubadour Golf &amp; Field Club</div>
                                <div className="c-hero-labels__label | js-stamp" data-start="121" >North Shore Preserve</div>
                                <div className="c-hero-labels__label | js-stamp" data-start="133" >Driftwood Golf Club</div>

                            </div>
                        </div>
                    </div>
                </div>



            </div>
            <div id="ourworld">
                <div id="text-image-ourworld">
                    <div id="ourworld-heading">
                        <div id="headingone">
                            <h3>Welcome to</h3>
                            <h4 id="headingtwo">our worlds</h4>
                        </div>
                    </div>
                    <div className="" id="ourworlds-desc">
                        <p>
                            Discover the unique atmosphere of our private residential club communities. Once experienced. Never forgotten. This is classic, comfortable, modern living in nature’s most spectacular settings worldwide. Reassuringly exclusive. Generously welcoming. Find your unique world – a place where families love to be; creating unforgettable moments, together.
                        </p>
                    </div>
                    <div id="ourworld-image-container">
                        <img src="http://staging.discoverylandco.com/imager/images/27/DriftwoodDevelopment_JessicaJohnson_March2019_52_df8586bb4c14d18f77324f7452f392cd.jpg" alt="" id="imageourworld"></img>
                    </div>
                </div>
                <div id="onlyimage-ourworld">
                    <img src="http://staging.discoverylandco.com/imager/images/275/Home_76fe09b415dcada4f46ba4114338562c.jpg" alt="" id="onlyimgcontainerimg"></img>
                </div>
            </div>
            {/* <div id="expolreworlds">
                <div id="explorecontainerone">
                    <div id="headingoneexplore">
                        <h3 id="exploreheadingone">Explore</h3>
                    </div>
                    <div id="headingtwoexplore">

                        <h4 id="exploreheadingtwo">our worlds</h4>
                    </div>

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

            </div> */}
            <Slide />

            <div id="lands">
                <div id="landstext">
                    <div id="heading">
                        <h2>Lands of</h2>
                    </div>
                    <div id="headingtwo">
                        <h2>Discovery</h2>
                    </div>
                    <div id="landsdesc">
                        <p><div>A world away from the day-to-day. Your escape. Your haven. Your world.</div>
                            <div>Explore the map below and take a journey to our communities.</div>
                        </p>
                    </div>
                </div>
                <div id="continentsbuttons">
                    <div className="buttoncontainer">
                        <button id="north">North America & Caribbean</button>
                    </div>
                    <div className="buttoncontainer">
                        <button id="hawii">Hawaii</button>
                    </div>
                    <div className="buttoncontainer">
                        <button id="europe">Europe</button>
                    </div>
                </div>
                <div id="continentcontent">

                    <div id="northamerica">
                        <div className="panel">
                            <div id="locationdesc">
                                <div id="locationbuttons">
                                    <div id="locationleftbuttoncontainer">
                                        <button id="locationleftbutton"> <svg id="leftarrow" className="leftarrow1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.06 20.91"><path d="M28.06 9.81H2.2l8.89-8.9c.01-.03-.9-.91-.9-.91l-10 10c0 .01-.01.01-.02.02l-.04.04c-.01.01-.02.02-.02.03-.01.01-.02.03-.03.05-.01.01-.01.03-.02.04 0 .01-.01.02-.01.03v.02c-.01.01-.01.03-.01.04 0 .02-.01.03-.01.05 0 .01 0 .03-.01.04 0 .02 0 .03-.01.05v.1c0 .02 0 .03.01.05 0 .01 0 .03.01.04 0 .02.01.03.01.05 0 .01.01.03.01.04 0 .01 0 .01.01.02 0 .01.01.02.02.03.01.01.01.03.02.04.01.02.02.03.03.05.01.01.02.02.02.03.01.01.02.03.04.04l.02.02 10 10c0 .01.91-.91.91-.91L2.2 11.1h25.86V9.81z"></path></svg></button>
                                    </div>
                                    <div id="locationrightbuttoncontainer">
                                        <button id="locationrightbutton"> <svg xmlns="http://www.w3.org/2000/svg" className="rightarrow1" id="rightarrow" viewBox="0 0 28.06 20.91"><path d="M28.06 9.81H2.2l8.89-8.9c.01-.03-.9-.91-.9-.91l-10 10c0 .01-.01.01-.02.02l-.04.04c-.01.01-.02.02-.02.03-.01.01-.02.03-.03.05-.01.01-.01.03-.02.04 0 .01-.01.02-.01.03v.02c-.01.01-.01.03-.01.04 0 .02-.01.03-.01.05 0 .01 0 .03-.01.04 0 .02 0 .03-.01.05v.1c0 .02 0 .03.01.05 0 .01 0 .03.01.04 0 .02.01.03.01.05 0 .01.01.03.01.04 0 .01 0 .01.01.02 0 .01.01.02.02.03.01.01.01.03.02.04.01.02.02.03.03.05.01.01.02.02.02.03.01.01.02.03.04.04l.02.02 10 10c0 .01.91-.91.91-.91L2.2 11.1h25.86V9.81z"></path></svg></button>
                                    </div>
                                </div>
                                <div id="locationattri">
                                    <div id="sun">
                                        <svg id="icon-sun" viewBox="0 0 32 32">
                                            <title>sun</title>
                                            <path d="M15.761 27.317c-6.244 0-11.321-5.077-11.321-11.321s5.077-11.321 11.321-11.321 11.321 5.077 11.321 11.321-5.077 11.321-11.321 11.321zM15.761 6.353c-5.321 0-9.643 4.33-9.643 9.643s4.33 9.643 9.643 9.643 9.643-4.33 9.643-9.643-4.322-9.643-9.643-9.643z"></path>
                                            <path d="M14.099 31.992v0 0c-0.579-0.059-0.999-0.571-0.94-1.15v0c0.059-0.579 0.579-0.999 1.15-0.94v0c0.579 0.059 0.999 0.579 0.94 1.15v0c-0.050 0.546-0.512 0.948-1.041 0.948v0c-0.034 0-0.076 0-0.109-0.008zM19.42 30.615c-0.176-0.546 0.117-1.141 0.671-1.318v0c0.554-0.185 1.141 0.117 1.326 0.671v0c0.176 0.554-0.126 1.141-0.671 1.318v0c-0.109 0.042-0.218 0.059-0.327 0.059v0c-0.445 0-0.856-0.285-0.999-0.73zM7.738 29.935c-0.504-0.285-0.671-0.932-0.386-1.435v0c0.294-0.504 0.932-0.671 1.435-0.386v0c0.504 0.294 0.671 0.932 0.386 1.435v0c-0.193 0.336-0.546 0.529-0.915 0.529v0c-0.176 0-0.352-0.050-0.52-0.143zM25.043 27.863c-0.386-0.428-0.352-1.091 0.076-1.477v0c0.436-0.386 1.099-0.352 1.485 0.076v0c0.386 0.428 0.352 1.091-0.076 1.485v0c-0.201 0.176-0.453 0.269-0.705 0.269v0c-0.285 0-0.571-0.117-0.78-0.352zM2.769 25.471c-0.344-0.47-0.243-1.125 0.227-1.469v0c0.47-0.336 1.125-0.235 1.469 0.235v0c0.336 0.462 0.235 1.125-0.227 1.46v0c-0.193 0.143-0.411 0.201-0.621 0.201v0c-0.327 0-0.646-0.143-0.848-0.428zM29.071 23.071c-0.529-0.235-0.764-0.856-0.529-1.385v0c0.235-0.529 0.848-0.772 1.385-0.537v0c0.529 0.243 0.764 0.856 0.529 1.385v0c-0.176 0.394-0.562 0.629-0.957 0.629v0c-0.143 0-0.294-0.034-0.428-0.092zM0.042 19.37c-0.126-0.562 0.235-1.125 0.806-1.242v0c0.562-0.117 1.116 0.235 1.242 0.806v0c0.118 0.562-0.243 1.125-0.806 1.242v0c-0.076 0.017-0.151 0.025-0.218 0.025v0c-0.487 0-0.923-0.336-1.024-0.831zM29.742 15.996v0 0c0-0.017 0-0.034 0-0.059v0c0-0.579 0.462-1.049 1.041-1.049v0c0.579 0 1.057 0.462 1.057 1.041v0c0 0.017 0 0.025 0 0.042v0c0 0.008 0 0.017 0 0.025v0 0 0c0 0.579-0.47 1.049-1.049 1.049v0c-0.579 0-1.049-0.47-1.049-1.049zM0.839 13.931c-0.571-0.117-0.932-0.671-0.814-1.242v0c0.117-0.571 0.671-0.932 1.242-0.814v0c0.562 0.117 0.932 0.68 0.806 1.242v0c-0.101 0.495-0.537 0.839-1.024 0.839v0c-0.067 0-0.143-0.008-0.21-0.025zM28.517 10.264c-0.243-0.529-0.008-1.15 0.52-1.385v0c0.529-0.243 1.15-0.008 1.393 0.52v0c0.235 0.529 0 1.15-0.529 1.393v0c-0.134 0.059-0.285 0.092-0.428 0.092v0c-0.403 0-0.789-0.235-0.957-0.621zM2.962 8.040c-0.47-0.336-0.571-0.99-0.235-1.46v0c0 0 0 0 0.008 0v0c0.336-0.47 0.99-0.579 1.46-0.235v0c0.47 0.344 0.571 0.999 0.235 1.469v0c-0.21 0.277-0.529 0.428-0.856 0.428v0c-0.21 0-0.42-0.067-0.613-0.201zM25.076 5.572c-0.428-0.386-0.462-1.049-0.076-1.477v0c0.386-0.428 1.049-0.47 1.477-0.084v0c0.428 0.386 0.47 1.049 0.084 1.485v0c-0.21 0.227-0.495 0.344-0.78 0.344v0c-0.252 0-0.504-0.084-0.705-0.269zM7.301 3.525c-0.285-0.495-0.117-1.141 0.378-1.427v0 0 0c0.504-0.294 1.15-0.126 1.435 0.378v0c0.294 0.495 0.126 1.141-0.378 1.435v0c-0.168 0.092-0.344 0.143-0.529 0.143v0c-0.361 0-0.705-0.193-0.906-0.529zM20.041 2.686c-0.554-0.176-0.856-0.772-0.68-1.318v0c0.176-0.554 0.764-0.856 1.318-0.68v0c0.554 0.176 0.856 0.764 0.68 1.318v0c-0.143 0.445-0.554 0.73-0.999 0.73v0c-0.109 0-0.21-0.017-0.319-0.050zM13.1 1.167c-0.059-0.579 0.361-1.091 0.932-1.158v0c0.579-0.059 1.091 0.361 1.158 0.932v0c0.059 0.579-0.361 1.099-0.932 1.158v0c-0.042 0-0.076 0.008-0.117 0.008v0c-0.529 0-0.982-0.403-1.041-0.94z"></path>
                                        </svg>
                                        <p id="suntext">49F</p>
                                    </div>

                                </div>
                                <div id="smalllocation">
                                    <p id="area">Scillicon Valley, California</p>
                                </div>
                                <div id="largelocation">
                                    <h3 id="mainlocation">Carode Valle</h3>
                                </div>

                                <div id="locicon">
                                    <div id="iconloc">
                                        <svg id="icon-pip" viewBox="0 0 26 32">
                                            <title>pip</title>
                                            <path d="M13.182 32.011c-0.25-0.002-0.479-0.089-0.66-0.235l0.002 0.002c-1.284-1.061-12.524-10.178-12.524-18.595 0-7.28 5.902-13.182 13.182-13.182s13.182 5.902 13.182 13.182v0c0 8.576-12.28 18.584-12.842 18.765-0.101 0.040-0.217 0.063-0.339 0.064h-0zM13.182 2.123c-6.106 0.006-11.053 4.954-11.059 11.059v0.001c0 5.721 6.888 12.917 11.049 16.387 2.452-2.070 11.070-9.828 11.070-16.387-0.006-6.106-4.954-11.053-11.059-11.059h-0.001z"></path>
                                            <path d="M13.182 19.296c-3.382 0-6.124-2.742-6.124-6.124s2.742-6.124 6.124-6.124c3.382 0 6.124 2.742 6.124 6.124 0 0.004 0 0.007 0 0.011v-0.001c-0.006 3.378-2.746 6.113-6.124 6.113 0 0 0 0 0 0v0zM13.182 9.181c-2.21 0-4.001 1.791-4.001 4.001s1.791 4.001 4.001 4.001c2.21 0 4.001-1.791 4.001-4.001v0c0-2.21-1.791-4.001-4.001-4.001v0z"></path>
                                        </svg>
                                    </div>
                                    <p id="latlongtext">37.127758/-121.507351</p>
                                </div>
                            </div>
                            <div id="locationslider">

                                <div id="imageshow">
                                    <div id="iamgescontainerland">
                                        <img data-lazy-src="https://dxaurk9yhilm4.cloudfront.net/images/188/driftwood-1_397186feb8bd51bb37bc24fc2b9b500f.jpg" alt="" draggable="false" src="https://dxaurk9yhilm4.cloudfront.net/images/188/driftwood-1_397186feb8bd51bb37bc24fc2b9b500f.jpg" className="landimg" id="landone"></img>

                                        <img data-lazy-src="https://dxaurk9yhilm4.cloudfront.net/images/8816/iStock-937940104_carousel_397186feb8bd51bb37bc24fc2b9b500f.jpg" alt="" draggable="false" src="https://dxaurk9yhilm4.cloudfront.net/images/8816/iStock-937940104_carousel_397186feb8bd51bb37bc24fc2b9b500f.jpg" id="landtwo" className="landimg"></img>

                                        <img data-lazy-src="https://dxaurk9yhilm4.cloudfront.net/images/6944/Carousel_500x750_200612_084523_397186feb8bd51bb37bc24fc2b9b500f.jpg" alt="" draggable="false" src="https://dxaurk9yhilm4.cloudfront.net/images/6944/Carousel_500x750_200612_084523_397186feb8bd51bb37bc24fc2b9b500f.jpg" className="landimg" id="landthree"></img>

                                        <img data-lazy-src="https://dxaurk9yhilm4.cloudfront.net/images/6669/Troubadour_Andy-Carlson_Golf_October-2019_DJI_0172-copycrop_397186feb8bd51bb37bc24fc2b9b500f.jpg" alt="" draggable="false" src="https://dxaurk9yhilm4.cloudfront.net/images/6669/Troubadour_Andy-Carlson_Golf_October-2019_DJI_0172-copycrop_397186feb8bd51bb37bc24fc2b9b500f.jpg" className="landimg" id="landfour"></img>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="lifewellexpcards">

                <div id="experience">
                    <img src="https://dxaurk9yhilm4.cloudfront.net/images/728/Expereinces_slider_190716_095517_464875650e0665072829219c2109f3b9.jpg" alt=""
                        class="expimg"
                    ></img>
                    <div class="buttonandtitle">
                        <div class="titlecon">
                            <h3 class="title">Experiences </h3>
                        </div>
                        <div class="buttoncircle">
                            <svg xmlns="http://www.w3.org/2000/svg" class="arrowoncard" viewBox="0 0 28.06 20.91"><path d="M0 11.1h25.86L16.97 20c0 .04.91.92.91.91l10-10c0-.01.01-.01.02-.02l.04-.04c.01-.01.02-.02.02-.03.01-.01.02-.03.03-.05.01-.01.01-.03.02-.04 0-.01.01-.02.01-.03v-.02c.01-.01.01-.03.01-.04 0-.02.01-.03.01-.05 0-.01 0-.03.01-.04 0-.02 0-.03.01-.05v-.05-.05c0-.02 0-.03-.01-.05 0-.01 0-.03-.01-.04 0-.02-.01-.03-.01-.05 0-.01-.01-.03-.01-.04 0-.01 0-.01-.01-.02 0-.01-.01-.02-.02-.03-.01-.01-.01-.03-.02-.04-.01-.02-.02-.03-.03-.05-.01-.01-.02-.02-.02-.03-.01-.01-.02-.03-.04-.04.01 0 0-.01 0-.01l-10-10c0-.01-.91.91-.91.91l8.89 8.9H0v1.29z"></path></svg>
                        </div>
                    </div>
                </div>

                <div id="lifestyle">
                    <img src="https://dxaurk9yhilm4.cloudfront.net/images/729/lifestyle_slider_190716_095537_0b2516e730d44c336347c45fc67effd5.jpg" alt="" class="expimg"></img>
                    <div class="buttonandtitle">
                        <div class="titlecon">
                            <h3 class="title">Lifestyle </h3>
                        </div>
                        <div class="buttoncircle">
                            <svg xmlns="http://www.w3.org/2000/svg" class="arrowoncard" viewBox="0 0 28.06 20.91"><path d="M0 11.1h25.86L16.97 20c0 .04.91.92.91.91l10-10c0-.01.01-.01.02-.02l.04-.04c.01-.01.02-.02.02-.03.01-.01.02-.03.03-.05.01-.01.01-.03.02-.04 0-.01.01-.02.01-.03v-.02c.01-.01.01-.03.01-.04 0-.02.01-.03.01-.05 0-.01 0-.03.01-.04 0-.02 0-.03.01-.05v-.05-.05c0-.02 0-.03-.01-.05 0-.01 0-.03-.01-.04 0-.02-.01-.03-.01-.05 0-.01-.01-.03-.01-.04 0-.01 0-.01-.01-.02 0-.01-.01-.02-.02-.03-.01-.01-.01-.03-.02-.04-.01-.02-.02-.03-.03-.05-.01-.01-.02-.02-.02-.03-.01-.01-.02-.03-.04-.04.01 0 0-.01 0-.01l-10-10c0-.01-.91.91-.91.91l8.89 8.9H0v1.29z"></path></svg>
                        </div>
                    </div>

                </div>

                <div id="wellness1">

                    <img src="https://dxaurk9yhilm4.cloudfront.net/images/730/wellness_slider_190716_095551_7a63ac04cea98219d28754079427d015.jpg" alt="" class="expimg"></img>
                    <div class="buttonandtitle">
                        <div class="titlecon">
                            <h3 class="title">Wellness</h3>
                        </div>
                        <div class="buttoncircle">
                            <svg xmlns="http://www.w3.org/2000/svg" class="arrowoncard" viewBox="0 0 28.06 20.91"><path d="M0 11.1h25.86L16.97 20c0 .04.91.92.91.91l10-10c0-.01.01-.01.02-.02l.04-.04c.01-.01.02-.02.02-.03.01-.01.02-.03.03-.05.01-.01.01-.03.02-.04 0-.01.01-.02.01-.03v-.02c.01-.01.01-.03.01-.04 0-.02.01-.03.01-.05 0-.01 0-.03.01-.04 0-.02 0-.03.01-.05v-.05-.05c0-.02 0-.03-.01-.05 0-.01 0-.03-.01-.04 0-.02-.01-.03-.01-.05 0-.01-.01-.03-.01-.04 0-.01 0-.01-.01-.02 0-.01-.01-.02-.02-.03-.01-.01-.01-.03-.02-.04-.01-.02-.02-.03-.03-.05-.01-.01-.02-.02-.02-.03-.01-.01-.02-.03-.04-.04.01 0 0-.01 0-.01l-10-10c0-.01-.91.91-.91.91l8.89 8.9H0v1.29z"></path></svg>
                        </div>
                    </div>
                </div>
            </div>



            <Footer />





        </div>
    );
}

export default Dashboard