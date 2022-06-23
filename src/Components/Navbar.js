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
				<div className="nav__top">
					<div className="nav__top__left">
						<a className="nav__top__left__link" href="/chat">
							Chat With Us
						</a>
						<div className="nav__top__left__number">+2347069154328</div>
						<div className="nav__top__left__email">info@freshnescom.com</div>
					</div>
					<div className="nav__top__right">
						<a href="/blog">Blog</a>
						<a href="/about">About Us</a>
						<a href="/careers">Careers</a>
					</div>
				</div>
				<hr />
				<div className="nav__bottom">
					<div className="nav__bottom__left">
						<img className="nav__bottom__left__logo" src={Logo} alt="Logo" />
					</div>
					<div className="nav__bottom__searchBar">
						<div className="nav__bottom__searchBar__dropdown">
							<button className="nav__bottom__searchBar__dropdown-text">
								All Categories
								<div className="nav__bottom__searchBar__dropdown-text__icon">
									<FiChevronDown />
								</div>
							</button>
						</div>
						<input
							className="nav__bottom__searchBar__search"
							type="text"
							placeholder="Search Products, Categories"
						/>
						<a href="/search">
							<VscSearch className="nav__bottom__searchBar__sIcon" />
						</a>
					</div>
					<div className="nav__bottom__button">
						<div className="nav__bottom__button__profile">
							<a href="/profile">
								<AiOutlineUser className="nav__bottom__button__profile__icon" />
							</a>
						</div>
						<div className="nav__bottom__button__cart">
							<a href="/cart">
								<HiOutlineShoppingBag className="nav__bottom__button__cart__icon" />
								<div className="nav__bottom__button__cart__counter">
									<span className="nav__bottom__button__cart__counter__number">5</span>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar