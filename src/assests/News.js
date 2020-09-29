import React from 'react';
import {Link} from 'react-router-dom';

class News extends React.Component{
    render(){
        return (
		    <div>

                <main class="main-content">
				    <div class="container">
					    <div class="breadcrumb">
						   <Link to='/'>Home</Link>
						   <span>News</span>
					    </div>
				    </div>
				
				    <div class="fullwidth-block">
					    <div class="container">
						    <div class="row">
							    <div class="content col-md-8">
								    <div class="post">
									    <h2 class="entry-title">Nemo enim ipsam voluptatem quia voluptas</h2>
									    <div class="featured-image"><img src="Container/images/featured-image-1.jpg" alt=""/></div>
									    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nulla rem dolores unde et cum illum odio, enim quis odit eveniet quaerat non libero, consequatur voluptatem harum ad veritatis necessitatibus.</p>
									    <a href="single.html" class="button">Read more</a>
								    </div>

								    <div class="post">
									    <h2 class="entry-title">Nemo enim ipsam voluptatem quia voluptas</h2>
									    <div class="featured-image"><img src="Container/images/featured-image-2.jpg" alt=""/></div>
									    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nulla rem dolores unde et cum illum odio, enim quis odit eveniet quaerat non libero, consequatur voluptatem harum ad veritatis necessitatibus.</p>
									    <a href="single.html" class="button">Read more</a>
								    </div>

								    <div class="post">
									    <h2 class="entry-title">Nemo enim ipsam voluptatem quia voluptas</h2>
									    <div class="featured-image"><img src="Container/images/featured-image-3.jpg" alt=""/></div>
									    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nulla rem dolores unde et cum illum odio, enim quis odit eveniet quaerat non libero, consequatur voluptatem harum ad veritatis necessitatibus.</p>
									    <a href="single.html" class="button">Read more</a>
								    </div>
							    </div>
							    <div class="sidebar col-md-3 col-md-offset-1">
								    <div class="widget">
									    <h3 class="widget-title">Hot News</h3>
									    <ul class="arrow-list">
										    <li>Accusamus dignissimos</li>
										    <li>Ducimus praesentium</li>
										    <li>Voluptatum deleniti corrupti</li>
										    <li>Wuos dolores excepturi sint</li>
										    <li>Occaecati provident dolor</li>
									    </ul>
								    </div>

								    <div class="widget">
									    <h3 class="widget-title">Categories</h3>
									    <ul class="arrow-list">
										    <li>Nemo enim ipsam</li>
										    <li>Voluptatem voluptas</li>
										    <li>Aspernatur aut odit</li>
										    <li>Consequuntur magni</li>
										    <li>Dolores ratione</li>
										    <li>Voluptatem nesciunt</li>
										    <li>Neque porro quisquam</li>
										    <li>Dolorem ipsum quia</li>
									    </ul>
								    </div>

								    <div class="widget top-rated">
									    <h3 class="widget-title">Top rated posts</h3>
									    <ul>
										    <li><h3 class="entry-title">Doloremque laudantium lorem</h3><div class="rating"><strong>5.5</strong> (759 rates)</div></li>
										    <li><h3 class="entry-title">Doloremque laudantium lorem</h3><div class="rating"><strong>5.5</strong> (759 rates)</div></li>
										    <li><h3 class="entry-title">Doloremque laudantium lorem</h3><div class="rating"><strong>5.5</strong> (759 rates)</div></li>
										    <li><h3 class="entry-title">Doloremque laudantium lorem</h3><div class="rating"><strong>5.5</strong> (759 rates)</div></li>
									    </ul>
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
export default News