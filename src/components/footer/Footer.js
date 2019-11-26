import React from 'react';
import css from './Footer.module.scss';

const Footer = () => {
	return (
		<footer className={css.page_footer}>
			<div className="container">
				<div className="row pt-5 mb-3 text-center d-flex justify-content-center">
					<div className="col-md-2 mb-3">
						<h6 className="title font-bold">
							<a href="#!">About us</a>
						</h6>
					</div>

					<div className="col-md-2 mb-3">
						<h6 className="title font-bold">
							<a href="#!">Products</a>
						</h6>
					</div>

					<div className="col-md-2 mb-3">
						<h6 className="title font-bold">
							<a href="#!">Awards</a>
						</h6>
					</div>

					<div className="col-md-2 mb-3">
						<h6 className="title font-bold">
							<a href="#!">Help</a>
						</h6>
					</div>

					<div className="col-md-2 mb-3">
						<h6 className="title font-bold">
							<a href="#!">Contact</a>
						</h6>
					</div>
				</div>

				<hr className={css.rgba_white_light} />

				<div className="row d-flex text-center justify-content-center mb-md-0 mb-4">
					<div className="col-md-8 col-12 mt-5">
						<p>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
							quae ab illo inventore veritatis et quasi architecto beatae vitae
							dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
							aspernatur aut odit aut fugit, sed quia consequuntur.
						</p>
					</div>
				</div>

				<div className="row pb-3">
					<div className="col-md-12">
						<div className={css.footer_socials}>
							<a className="icons-sm">
								<i className="fab fa-facebook-f fa-lg white-text mr-md-4"> </i>
							</a>

							<a className="icons-sm">
								<i className="fab fa-twitter fa-lg white-text mx-md-4"> </i>
							</a>

							<a className="icons-sm">
								<i className="fab fa-linkedin fa-lg white-text mx-md-4"> </i>
							</a>

							<a className="icons-sm">
								<i className="fab fa-instagram fa-lg white-text mx-md-4"> </i>
							</a>

							<a className="icons-sm">
								<i className="fab fa-pinterest fa-lg white-text ml-md-4"> </i>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className={css.footer_copyright}>
				<div className="container-fluid">
					Copyright &copy; {new Date().getFullYear()} GrossBazar | Build with
					&#10084; by{' '}
					<a
						href="https://devmilan.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						Milan
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
