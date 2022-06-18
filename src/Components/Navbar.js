import "../Styles/components/Navbar.scss";
import Logo from "../Assets/img/logo1.svg";
import { VscSearch } from "react-icons/vsc";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FiChevronDown } from "react-icons/fi";


function Navbar() {
  return (
		<div className="Navbar">
			<div className="nav">
				<div className="__top">
					<div className="__left">
						<a className="__link" href="/chat">
							Chat With Us
						</a>
						<div className="__number">+2347069154328</div>
						<div className="__email">info@freshnescom.com</div>
					</div>
					<div className="__right">
						<a href="/blog">Blog</a>
						<a href="/about">About Us</a>
						<a href="/careers">Careers</a>
					</div>
				</div>
				<hr />
				<div className="__bottom">
					<div className="__left">
						<img className="__logo" src={Logo} alt="Logo" />
					</div>
					<div className="__searchBar">
						<div className="__dropdown">
							<button className="__dropdown-text">
								All Categories
								<div className="__icon">
									<FiChevronDown />
								</div>
							</button>
						</div>
						<input
							className="__search"
							type="text"
							placeholder="Search Products, Categories"
						/>
						<a href="/search">
							<VscSearch className="__sIcon" />
						</a>
					</div>
					<div className="__button">
						<div className="__profile">
							<a href="/profile">
								<AiOutlineUser className="__icon" />
							</a>
						</div>
						<div className="__cart">
							<a href="/cart">
								<HiOutlineShoppingBag className="__icon" />
								<div className="__counter"><span className="__number">5</span></div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar