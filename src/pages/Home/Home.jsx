import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import background from "../../assets/img/background.png";
import menu from "../../assets/img/menu.png";
export default function Home(props) {
	return (
		<div className="home">
			<img src={background} alt="background" />
			<div className="header-home">
				<div className="header-menu">
					<Link
						rel="noopener noreferrer"
						to="/menu"
						className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
					>
						<div className="detail">
							<p>Lĩnh Vực </p>
							<img src={menu} alt="menu" />
						</div>
					</Link>
				</div>

				<div className="header-logo">
					<Link
						rel="noopener noreferrer"
						to="/"
						className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
					>
						<img src={logo} alt="logo" />
						<p>DaiQuocVietCorp</p>
					</Link>
				</div>
			</div>
			<div className="footer-home">
				<div className="contact">
					<div className="contact-list">
						<a href="tel:+123456789">
							<i class="fa fa-phone"></i>
						</a>
						<a href="mailto:m.bluth@example.com">
							<i class="fa fa-envelope"></i>
						</a>
						<a href="https://www.facebook.com/daiquocvietcorp">
							<i class="fab fa-facebook"></i>
						</a>
					</div>
					<div className="contact-menu hover-menu">
					<i class="fa fa-phone phone-1"></i>
					<i class="fa fa-envelope "></i>
				</div>

				</div>
			</div>
		</div>
	);
}
