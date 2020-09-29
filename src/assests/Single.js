import React from 'react';
import {Link} from 'react-router-dom';

class Single extends React.Component{
    render(){
        return(
            <div>

                <main class="main-content">
				    <div class="container">
					    <div class="breadcrumb">
						    <Link to='/'>Home</Link>
						    <Link to='/news'>News</Link>
						    <span>Nemo enim ipsam voluptatem quia voluptas</span>
					    </div>
				    </div>
				
				    <div class="fullwidth-block">
					    <div class="container">
						    <div class="row">
							    <div class="content col-md-8">
								    <div class="post single">
									    <h2 class="entry-title">Nemo enim ipsam voluptatem quia voluptas</h2>
									    <div class="featured-image"><img src="Container/images/featured-image-1.jpg" alt=""/></div>
									
									    <div class="entry-content">
										    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores.</p>
     										<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>

										    <blockquote>
    											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati iusto minima, iste doloremque culpa blanditiis mollitia nisi aliquid illum accusantium numquam. Pariatur, velit. Sapiente ipsum excepturi sunt, eveniet eaque, qui?</p>
	     									</blockquote>

		    								<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum.</p>

			    							<p>Dlorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit beatae vitae dicta sunt explicabo e veritatis et quasi architecto beatae vitae dicta sunt explicabo earum rerum.</p>
				    					</div>

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

export default Single