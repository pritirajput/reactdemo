import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component{
    render(){
        return(
            
            <div>
                <main class="main-content">
				   <div class="fullwidth-block">
					   <div class="container">
						   <h2 class="section-title">Live cameras</h2>
						    <div class="row">
							    <div class="col-md-3 col-sm-6">
								    <div class="live-camera">
									   <figure class="live-camera-cover">
                                       <img src="public/assests/images/live-camera-1.jpg" alt=""/></figure>
									    <h3 class="location">New York</h3>
									    <small class="date">8 oct, 8:00AM</small>
								    </div>  
							    </div>
							    <div class="col-md-3 col-sm-6">
								    <div class="live-camera">
									   <figure class="live-camera-cover">
                                       <img src="public/assests/images/live-camera-2.jpg" alt=""/></figure>
									   <h3 class="location">Los Angeles</h3>
									   <small class="date">8 oct, 8:00AM</small>
								    </div>
							    </div>
							    <div class="col-md-3 col-sm-6">
								    <div class="live-camera">
								    	<figure class="live-camera-cover">
                                        <img src="public/assests/images/live-camera-3.jpg" alt=""/></figure>
									    <h3 class="location">Chicago</h3>
									    <small class="date">8 oct, 8:00AM</small>
								    </div>
							    </div>
							    <div class="col-md-3 col-sm-6">
								    <div class="live-camera">
									   <figure class="live-camera-cover">
                                       <img src="public/assests/images/live-camera-4.jpg" alt=""/></figure>
									   <h3 class="location">London</h3>
									   <small class="date">8 oct, 8:00AM</small>
								    </div>
							    </div>
						    </div>
					    </div>
				    </div>

				    <div class="fullwidth-block" data-bg-color="#262936">
					    <div class="container">
						    <div class="row">
							    <div class="col-md-4">
								    <div class="news">
									    <div class="date">06.10</div>
									    <h3><a href="#">Doloremque laudantium totam sequi </a></h3>
									    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo saepe assumenda dolorem modi, expedita voluptatum ducimus necessitatibus. Asperiores quod reprehenderit necessitatibus harum, mollitia, odit et consequatur maxime nisi amet doloremque.</p>
								    </div>
							    </div>
							    <div class="col-md-4">
								    <div class="news">
									    <div class="date">06.10</div>
									    <h3><a href="#">Doloremque laudantium totam sequi </a></h3>
									    <p>Nobis architecto consequatur ab, ea, eum autem aperiam accusantium placeat vitae facere explicabo temporibus minus distinctio cum optio quis, dignissimos eius aspernatur fuga. Praesentium totam, corrupti beatae amet expedita veritatis.</p>
								    </div>
							    </div>
							    <div class="col-md-4">
								    <div class="news">
									    <div class="date">06.10</div>
									    <h3><a href="#">Doloremque laudantium totam sequi </a></h3>
									    <p>Enim impedit officiis placeat qui recusandae doloremque possimus, iusto blanditiis, quam optio delectus maiores. Possimus rerum, velit cum natus eos. Cumque pariatur beatae asperiores, esse libero quas ad dolorem. Voluptates.</p>
								    </div>
							    </div>
						    </div>
					    </div>
				    </div>

				    <div class="fullwidth-block">
					    <div class="container">
						    <div class="row">
							    <div class="col-md-4">
								    <h2 class="section-title">Application features</h2>
								    <ul class="arrow-feature">
									    <li>
										    <h3>Natus error sit voluptatem accusantium</h3>
										    <p>Doloremque laudantium totam rem aperiam Inventore veritatis et quasi architecto beatae vitae.</p>
									    </li>
									    <li>
										    <h3>Natus error sit voluptatem accusantium</h3>
										    <p>Doloremque laudantium totam rem aperiam Inventore veritatis et quasi architecto beatae vitae.</p>
									    </li>
									    <li>
										    <h3>Natus error sit voluptatem accusantium</h3>
										    <p>Doloremque laudantium totam rem aperiam Inventore veritatis et quasi architecto beatae vitae.</p>
									    </li>
								    </ul>
							    </div>
							    <div class="col-md-4">
								    <h2 class="section-title">Weather analyssis</h2>
								    <ul class="arrow-list">
								        <li><a href="#">Accusantium doloremque laudantium rem aperiam</a></li>
								        <li><a href="#">Eaque ipsa quae ab illo inventore veritatis quasi</a></li>
							            <li><a href="#">Architecto beatae vitae dicta sunt explicabo</a></li>
									    <li><a href="#">Nemo enim ipsam voluptatem quia voluptas</a></li>
									    <li><a href="#">Aspernatur aut odit aut fugit, sed quia consequuntur</a></li>
									    <li><a href="#">Magni dolores eos qui ratione voluptatem sequi</a></li>
									    <li><a href="#">Neque porro quisquam est qui dolorem ipsum quia</a></li>
								    </ul>
							    </div>
							    <div class="col-md-4">
								    <h2 class="section-title">Awesome Photos</h2>
								    <div class="photo-grid">
									    <a href="#"><img src="public/ssests/images/thumb-1.jpg" alt="#"/></a>
									    <a href="#"><img src="public/assests/images/thumb-2.jpg" alt="#"/></a>
									    <a href="#"><img src="public/assestsimages/thumb-3.jpg" alt="#"/></a>
									    <a href="#"><img src="public/assests/images/thumb-4.jpg" alt="#"/></a>
									    <a href="#"><img src="public/assests/images/thumb-5.jpg" alt="#"/></a>
									    <a href="#"><img src="public/assests/images/thumb-6.jpg" alt="#"/></a>
									    <a href="#"><img src="public/assests/images/thumb-7.jpg" alt="#"/></a>
									    <a href="#"><img src="public/assests/images/thumb-8.jpg" alt="#"/></a>
									    <a href="#"><img src="public/assests/images/thumb-9.jpg" alt="#"/></a>
								    </div>
							    </div>
						    </div>
					    </div>
				    </div>
			    </main>

            </div>
        )
    }

}
export default Home