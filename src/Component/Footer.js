import React,{Component } from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component{
    render(){
        return(
            <div>
                /*site footer*/
                <footer class="site-footer">
				   <div class="container">
					    <div class="row">
						    <div class="col-md-8">
							    <form action="#" class="subscribe-form">
								   <input type="text" placeholder="Enter your email to subscribe..."/>
								   <input type="submit" value="Subscribe"/>
							    </form>
						    </div>
						    <div class="col-md-3 col-md-offset-1">
							    <div class="social-links">
								    <Link to='/'><i class="fa fa-facebook"></i></Link>
								    <Link to='/'><i class="fa fa-twitter"></i></Link>
								    <Link to='/'><i class="fa fa-google-plus"></i></Link>
								    <Link to='/'><i class="fa fa-pinterest"></i></Link>
							    </div>
						    </div>
					    </div>

					    <p class="colophon">Copyright 2014 Company name. Designed by Themezy. All rights reserved</p>
				    </div>
			    </footer>

            </div>
        )
    }

}

export default Footer