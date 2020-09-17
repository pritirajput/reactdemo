import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <div>
                 
                <div class="site-header">
				    <div class="container">
					    <a class="branding"> 
						    <Link to='/assests/Home'>
							    <img src="public/assests/images/logo.png" alt="" class="logo"/>
						        <div class="logo-type">
							       <h1 class="site-title">Company name</h1>
							       <small class="site-description">tagline goes here</small>
						        </div>
							</Link>
					    </a>

					       {/*!-- Default snippet for navigation -->*/}
					    <div class="main-navigation">
						    <button type="button" class="menu-toggle"><i class="fa fa-bars"></i></button>
						    <ul class="menu">
							   <li class="menu-item current-menu-item"><Link to='/'>Home</Link></li>
							   <li class="menu-item"><Link to='/'>News</Link></li>
							   <li class="menu-item"><Link to='/'>Live_cameras</Link></li>
							   <li class="menu-item"><Link to='/'>Photos</Link></li>
							   <li class="menu-item"><Link to='/'>Contact</Link></li>
						    </ul> {/*<!-- .menu -->*/}
					    </div> {/*<!-- .main-navigation -->*/}

					    <div class="mobile-navigation"></div>

				    </div>
			    </div> {/*<!-- .site-header -->*/}

			    <div class="hero" data-bg-image="public/assests/images/banner.png">
				    <div class="container">
					    <form action="#" class="find-location">
						    <input type="text" placeholder="Find your location..."/>
						    <input type="submit" value="Find"/>
					    </form>

				    </div>
			    </div>
			    <div class="forecast-table">
				     <div class="container">
					    <div class="forecast-container">
						    <div class="today forecast">
							    <div class="forecast-header">
								    <div class="day">Monday</div>
								    <div class="date">6 Oct</div>
							    </div> {/*<!-- .forecast-header -->*/}
							    <div class="forecast-content">
								    <div class="location">New York</div>
								    <div class="degree">
									   <div class="num">23<sup>o</sup>C</div>
									    <div class="forecast-icon">
										   <img src="public/assests/images/icons/icon-1.svg" alt="" width='90'/>
									    </div>	
								    </div>
								    <span><img src="public/assests/images/icon-umberella.png" alt=""/>20%</span>
								    <span><img src="public/assests/images/icon-wind.png" alt=""/>18km/h</span>
								    <span><img src="public/assests/images/icon-compass.png" alt=""/>East</span>
							    </div>
						    </div>
						    <div class="forecast">
							    <div class="forecast-header">
								    <div class="day">Tuesday</div>
							    </div> {/*<!-- .forecast-header -->*/}
							    <div class="forecast-content">
								    <div class="forecast-icon">
									    <img src="public/assests/images/icons/icon-3.svg" alt="" width='48'/>
								    </div>
								    <div class="degree">23<sup>o</sup>C</div>
								        <small>18<sup>o</sup></small>
							        </div>
						        </div>
						        <div class="forecast">
							        <div class="forecast-header">
								        <div class="day">Wednesday</div>
							        </div> {/*<!-- .forecast-header -->*/}
							    <div class="forecast-content">
								    <div class="forecast-icon">
									    <img src="public/assests/images/icons/icon-5.svg" alt="" width='48'/>
								    </div>
								    <div class="degree">23<sup>o</sup>C</div>
								    <small>18<sup>o</sup></small>
							    </div>
						    </div>
						    <div class="forecast">
							    <div class="forecast-header">
								    <div class="day">Thursday</div>
							    </div> {/*<!-- .forecast-header -->*/}
							    <div class="forecast-content">
								    <div class="forecast-icon">
									    <img src="public/assests/images/icons/icon-7.svg" alt="" width='48'/>
								    </div>
								    <div class="degree">23<sup>o</sup>C</div>
								    <small>18<sup>o</sup></small>
							    </div>
						    </div>
						    <div class="forecast">
							    <div class="forecast-header">
								   <div class="day">Friday</div>
							    </div> {/*<!-- .forecast-header -->*/}
							    <div class="forecast-content">
								    <div class="forecast-icon">
									    <img src="public/assests/images/icons/icon-12.svg" alt="" width='48'/>
								    </div>
								    <div class="degree">23<sup>o</sup>C</div>
								        <small>18<sup>o</sup></small>
							        </div>
						        </div>
						        <div class="forecast">
							        <div class="forecast-header">
								        <div class="day">Saturday</div>
							        </div> {/*<!-- .forecast-header -->*/}
							        <div class="forecast-content">
								        <div class="forecast-icon">
									        <img src="public/assests/images/icons/icon-13.svg" alt="" width='48'/>
								        </div>
								        <div class="degree">23<sup>o</sup>C</div>
								        <small>18<sup>o</sup></small>
							        </div>
						        </div>
						        <div class="forecast">
							        <div class="forecast-header">
								        <div class="day">Sunday</div>
							        </div> {/*<!-- .forecast-header -->*/}
							        <div class="forecast-content">
								        <div class="forecast-icon">
									        <img src="public/assests/images/icons/icon-14.svg" alt="" width='48'/>
								        </div>
								        <div class="degree">23<sup>o</sup>C</div>
								        <small>18<sup>o</sup></small>
							        </div>
						        </div>
					       </div>
				        </div>   
                    
			    </div>
            </div>
        )
    }
}
export default Header