import React from 'react';
import {Link} from 'react-router-dom';

class Photos extends React.Component{
    render(){
        return(
            <div>

               <main class="main-content">
	     			<div class="container">
		     			<div class="breadcrumb">
						    <Link to='/'>Home</Link>
				    		<span>Photos</span>
					    </div>
				    </div>

				    <div class="fullwidth-block">
					    <div class="container">
						    <div class="row">
							    <div class="col-md-6">
								    <div class="photo">
									    <div class="photo-preview photo-detail" data-bg-image="Container/images/photo-1.jpg"></div>
									    <div class="photo-details">
										    <h3 class="photo-title">Neque porro quisquam</h3>
										    <p>Atatem accusantium aperiam eaque quae quasi architecto beatae vitae dicta sunt explicabo nemo enim.</p>
										    <div class="star-rating" title="Rated 1 out of 5"><span ><strong class="rating">1</strong> out of 5</span></div>
	                      				</div>
						    		</div>
							    	<div class="photo">
								    	<div class="photo-preview photo-detail" data-bg-image="Container/images/photo-2.jpg"></div>
									    <div class="photo-details">
										    <h3 class="photo-title">Neque porro quisquam</h3>
										    <p>Atatem accusantium aperiam eaque quae quasi architecto beatae vitae dicta sunt explicabo nemo enim.</p>
										    <div class="star-rating" title="Rated 1 out of 5"><span ><strong class="rating">1</strong> out of 5</span></div>
									    </div>
								    </div>
								    <div class="photo">
									    <div class="photo-preview photo-detail" data-bg-image="Container/images/photo-3.jpg"></div>
									    <div class="photo-details">
										    <h3 class="photo-title">Neque porro quisquam</h3>
										    <p>Atatem accusantium aperiam eaque quae quasi architecto beatae vitae dicta sunt explicabo nemo enim.</p>
										    <div class="star-rating" title="Rated 1 out of 5"><span ><strong class="rating">1</strong> out of 5</span></div>
									    </div>
								    </div>
								    <div class="photo">
									    <div class="photo-preview photo-detail" data-bg-image="Container/images/photo-4.jpg"></div>
									    <div class="photo-details">
										    <h3 class="photo-title">Neque porro quisquam</h3>
										    <p>Atatem accusantium aperiam eaque quae quasi architecto beatae vitae dicta sunt explicabo nemo enim.</p>
										    <div class="star-rating" title="Rated 1 out of 5"><span ><strong class="rating">1</strong> out of 5</span></div>
									    </div>
								    </div>
								    <div class="photo">
									    <div class="photo-preview photo-detail" data-bg-image="Container/images/photo-5.jpg"></div>
									    <div class="photo-details">
										    <h3 class="photo-title">Neque porro quisquam</h3>
										    <p>Atatem accusantium aperiam eaque quae quasi architecto beatae vitae dicta sunt explicabo nemo enim.</p>
										    <div class="star-rating" title="Rated 1 out of 5"><span><strong class="rating">1</strong> out of 5</span></div>
									    </div>
								    </div>
							    </div>
							    <div class="col-md-6">
								    <div class="photo">
									    <div class="photo-preview photo-detail" data-bg-image="Container/images/photo-4.jpg"></div>
									    <div class="photo-details">
										    <h3 class="photo-title">Neque porro quisquam</h3>
										    <p>Atatem accusantium aperiam eaque quae quasi architecto beatae vitae dicta sunt explicabo nemo enim.</p>
										    <div class="star-rating" title="Rated 1 out of 5"><span><strong class="rating">1</strong> out of 5</span></div>
									    </div>
								    </div>
								    <div class="photo">
									    <div class="photo-preview photo-detail" data-bg-image="Container/images/photo-7.jpg"></div>
									    <div class="photo-details">
										    <h3 class="photo-title">Neque porro quisquam</h3>
										    <p>Atatem accusantium aperiam eaque quae quasi architecto beatae vitae dicta sunt explicabo nemo enim.</p>
										   <div class="star-rating" title="Rated 1 out of 5"><span><strong class="rating">1</strong> out of 5</span></div>
									    </div>
								    </div>
								    <div class="photo">
								     	<div class="photo-preview photo-detail" data-bg-image="Container/images/photo-8.jpg"></div>
									    <div class="photo-details">
										    <h3 class="photo-title">Neque porro quisquam</h3>
										    <p>Atatem accusantium aperiam eaque quae quasi architecto beatae vitae dicta sunt explicabo nemo enim.</p>
										    <div class="star-rating" title="Rated 1 out of 5"><span><strong class="rating">1</strong> out of 5</span></div>
									    </div>
								    </div>
								    <div class="photo">
									    <div class="photo-preview photo-detail" data-bg-image="Container/images/photo-9.jpg"></div>
									    <div class="photo-details">
										    <h3 class="photo-title">Neque porro quisquam</h3>
										    <p>Atatem accusantium aperiam eaque quae quasi architecto beatae vitae dicta sunt explicabo nemo enim.</p>
										    <div class="star-rating" title="Rated 1 out of 5"><span><strong class="rating">1</strong> out of 5</span></div>
									    </div>
								    </div>
								    <div class="photo">
									    <div class="photo-preview photo-detail" data-bg-image="Container/images/photo-10.jpg"></div>
									    <div class="photo-details">
										    <h3 class="photo-title">Neque porro quisquam</h3>
										    <p>Atatem accusantium aperiam eaque quae quasi architecto beatae vitae dicta sunt explicabo nemo enim.</p>
										    <div class="star-rating" title="Rated 1 out of 5"><span><strong class="rating">1</strong> out of 5</span></div>
									    </div>
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

export default Photos