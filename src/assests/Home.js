import React from 'react';
//import {Link} from 'react-router-dom';

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
                                       <img src="Container/images/live-camera-1.jpg" alt=""/></figure>
									    <h3 class="location">New York</h3>
									    <small class="date">8 oct, 8:00AM</small>
								    </div>  
							    </div>
							    <div class="col-md-3 col-sm-6">
								    <div class="live-camera">
									   <figure class="live-camera-cover">
                                       <img src="Container/images/live-camera-2.jpg" alt=""/></figure>
									   <h3 class="location">Los Angeles</h3>
									   <small class="date">8 oct, 8:00AM</small>
								    </div>
							    </div>
							    <div class="col-md-3 col-sm-6">
								    <div class="live-camera">
								    	<figure class="live-camera-cover">
                                        <img src="Container/images/live-camera-3.jpg" alt=""/></figure>
									    <h3 class="location">Chicago</h3>
									    <small class="date">8 oct, 8:00AM</small>
								    </div>
							    </div>
							    <div class="col-md-3 col-sm-6">
								    <div class="live-camera">
									   <figure class="live-camera-cover">
                                       <img src="Container/images/live-camera-4.jpg" alt=""/></figure>
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
									    <h3>Doloremque laudantium totam sequi </h3>
									    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo saepe assumenda dolorem modi, expedita voluptatum ducimus necessitatibus. Asperiores quod reprehenderit necessitatibus harum, mollitia, odit et consequatur maxime nisi amet doloremque.</p>
								    </div>
							    </div>
							    <div class="col-md-4">
								    <div class="news">
									    <div class="date">06.10</div>
									    <h3>Doloremque laudantium totam sequi </h3>
									    <p>Nobis architecto consequatur ab, ea, eum autem aperiam accusantium placeat vitae facere explicabo temporibus minus distinctio cum optio quis, dignissimos eius aspernatur fuga. Praesentium totam, corrupti beatae amet expedita veritatis.</p>
								    </div>
							    </div>
							    <div class="col-md-4">
								    <div class="news">
									    <div class="date">06.10</div>
									    <h3>Doloremque laudantium totam sequi </h3>
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
								        <li>Accusantium doloremque laudantium rem aperiam</li>
								        <li>Eaque ipsa quae ab illo inventore veritatis quasi</li>
							            <li>Architecto beatae vitae dicta sunt explicabo</li>
									    <li>Nemo enim ipsam voluptatem quia voluptas</li>
									    <li>Aspernatur aut odit aut fugit, sed quia consequuntur</li>
									    <li>Magni dolores eos qui ratione voluptatem sequi</li>
									    <li>Neque porro quisquam est qui dolorem ipsum quia</li>
								    </ul>
							    </div>
							    <div class="col-md-4">
								    <h2 class="section-title">Awesome Photos</h2>
								    <div class="photo-grid">
									    <img src="public/ssests/images/thumb-1.jpg" alt="#"/>
									    <img src="Container/images/thumb-2.jpg" alt="#"/>
									    <img src="public/assestsimages/thumb-3.jpg" alt="#"/>
									    <img src="Container/images/thumb-4.jpg" alt="#"/>
									    <img src="Container/images/thumb-5.jpg" alt="#"/>
									    <img src="Container/images/thumb-6.jpg" alt="#"/>
									    <img src="Container/images/thumb-7.jpg" alt="#"/>
									    <img src="Container/images/thumb-8.jpg" alt="#"/>
									    <img src="Container/images/thumb-9.jpg" alt="#"/>
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