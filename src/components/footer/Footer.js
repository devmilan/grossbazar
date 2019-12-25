import React from 'react';
import css from './Footer.module.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className={css.page_footer}>
			<div className="container">
				<div className="row pt-5 mb-3 text-center d-flex justify-content-center">
					<div className="col-md-2 mb-3">
						<h6 className="title font-bold">
              <Link to='/about'>About Us</Link>
						</h6>
					</div>

					<div className="col-md-2 mb-3">
						<h6 className="title font-bold">
							<Link to='/terms-and-conditions'>Terms & Conditions</Link>
						</h6>
					</div>

					<div className="col-md-2 mb-3">
						<h6 className="title font-bold">
							<Link to='/privacy-policy'>Privacy Policy</Link>
						</h6>
					</div>

					<div className="col-md-2 mb-3">
						<h6 className="title font-bold">
							<Link to='/career'>Career</Link>
						</h6>
					</div>

					<div className="col-md-2 mb-3">
						<h6 className="title font-bold">
							<Link to='/contact'>Contact Us</Link>
						</h6>
					</div>
				</div>

				<hr className={css.rgba_white_light} />

				<div className="row d-flex text-center justify-content-center mb-md-0 mb-4">
					<div className="col-md-8 col-12 mt-5">
						<p>
							Grossbazar.com is an online store where one can get all his needs in one store. We have 15000 products and 1000 brands where you will find everything what you are looking for.
						</p>
					</div>
				</div>

				<div className="row pb-3">
					<div className="col-md-12">
						<div className={css.footer_socials}>
							<a  className="icons-sm" href="https://devmilan.com" target="_blank" rel="noopener noreferrer">
								<i className="fab fa-facebook-f fa-lg white-text mr-md-4"> </i>
							</a>

							<a  className="icons-sm" href="https://devmilan.com" target="_blank" rel="noopener noreferrer">
								<i className="fab fa-twitter fa-lg white-text mx-md-4"> </i>
							</a>

							<a  className="icons-sm" href="https://devmilan.com" target="_blank" rel="noopener noreferrer">
								<i className="fab fa-linkedin fa-lg white-text mx-md-4"> </i>
							</a>

							<a  className="icons-sm" href="https://devmilan.com" target="_blank" rel="noopener noreferrer">
								<i className="fab fa-instagram fa-lg white-text mx-md-4"> </i>
							</a>

							<a className="icons-sm" href="https://devmilan.com" target="_blank" rel="noopener noreferrer">
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
					<a href="https://devmilan.com" target="_blank" rel="noopener noreferrer">
						Milan
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
