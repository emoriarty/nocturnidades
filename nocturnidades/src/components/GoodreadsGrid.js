import React from 'react';
import Helmet from 'react-helmet';

class GoodreadsGrid extends React.Component {
	render() {
		const { classes } = this.props;
		return ([
			<Helmet key='gooreadStyle'>
				<style>{`
					.gr_grid_container {
						display: flex;
						flex-flow: row wrap;
						align-items: stretch;
					}

					.gr_grid_book_container {
						flex-basis: 50%;
						text-align: center;
					}

					.gr_grid_book_container img {
						height: 175px;
						width: 114px;
						padding: 0.36rem;
						margin: 0;
					}

					@media (min-width: 380px) {
						.gr_grid_book_container {
							flex-basis: 33%;
						}
					}

					@media (min-width: 500px) {
						.gr_grid_book_container {
							flex-basis: 25%;
						}
					}

					@media (min-width: 620px) {
						.gr_grid_book_container {
							flex-basis: 20%;
						}
					}
				`}</style>
				<script src="https://www.goodreads.com/review/grid_widget/64896106.Enrique's%20currently-reading%20book%20montage?cover_size=medium&hide_link=true&hide_title=true&num_books=20&order=a&shelf=currently-reading&sort=date_added&widget_id=1531935697"></script>
			</Helmet>,
			<div key='grid' id='gr_grid_widget_1531935697'>
				<div className='gr_grid_container'>
					<div className='gridBookContainer'><a title='Ola de Crímenes' rel='nofollow' href='https://www.goodreads.com/book/show/13411453-ola-de-cr-menes'><img alt='Ola de Crímenes' border='0' src='https://images.gr-assets.com/books/1326387497m/13411453.jpg' /></a></div>
					<div className='gridBookContainer'><a title='Grokking Algorithms An Illustrated Guide For Programmers and Other Curious People' rel='nofollow' href='https://www.goodreads.com/book/show/22847284-grokking-algorithms-an-illustrated-guide-for-programmers-and-other-curio'><img alt='Grokking Algorithms An Illustrated Guide For Programmers and Other Curious People' border='0' src='https://images.gr-assets.com/books/1458747997m/22847284.jpg' /></a></div>
					<div className='gridBookContainer'><a title='Erecciones, eyaculaciones, exhibiciones' rel='nofollow' href='https://www.goodreads.com/book/show/70911.Erecciones_eyaculaciones_exhibiciones'><img alt='Erecciones, eyaculaciones, exhibiciones' border='0' src='https://images.gr-assets.com/books/1420640101m/70911.jpg' /></a></div>
					<div className='gridBookContainer'><a title='Tu mente extiende cheques que tu cuerpo no puede pagar' rel='nofollow' href='https://www.goodreads.com/book/show/18480191-tu-mente-extiende-cheques-que-tu-cuerpo-no-puede-pagar'><img alt='Tu mente extiende cheques que tu cuerpo no puede pagar' border='0' src='https://images.gr-assets.com/books/1378849875m/18480191.jpg' /></a></div>
					<div className='gridBookContainer'><a title='Invasiones' rel='nofollow' href='https://www.goodreads.com/book/show/34743027-invasiones'><img alt='Invasiones' border='0' src='https://images.gr-assets.com/books/1507278398m/34743027.jpg' /></a></div>
					<noscript><br/>Share <a rel='nofollow' href='/'>book reviews</a> and ratings with Enrique, and even join a <a rel='nofollow' href='/group'>book club</a> on Goodreads.</noscript>
				</div>
			</div>
		]);
	}
};

export default GoodreadsGrid;
