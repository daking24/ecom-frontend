import { FiChevronRight } from "react-icons/fi"
import "./../Styles/components/Section.scss"

const Section = () => {
  return (
		<div className="Section">
			<div className="header">
				<div className="header__title">Section Headline</div>
				<button className="header__button">
					Button
					<FiChevronRight className="header__button__icon" />
				</button>
			</div>
			<div className="products">
				<div className="card">
					<div className="card-image">
						<div className="discount"></div>
					</div>
					<div className="title">Product Title</div>
					<div className="description">
						Space for a small product description.
					</div>
					<div className="footer">
						<div className="price">
							1.12 USD
							<div className="original"></div>
						</div>
						<div className="buy">
							<button>Buy Now</button>
						</div>
					</div>
				</div>
				<div className="card">
					<div className="card-image">
						<div className="discount"></div>
					</div>
					<div className="title">Product Title</div>
					<div className="description">
						Space for a small product description.
					</div>
					<div className="footer">
						<div className="price">
							1.12 USD
							<div className="original"></div>
						</div>
						<div className="buy">
							<button>Buy Now</button>
						</div>
					</div>
				</div>
				<div className="card">
					<div className="card-image">
						<span className="discount">-36%</span>
					</div>
					<div className="title">Product Title</div>
					<div className="description">
						Space for a small product description.
					</div>
					<div className="footer">
						<div className="price">
							1.12 USD
							<div className="original">1.25</div>
						</div>
						<div className="buy">
							<button>Buy Now</button>
						</div>
					</div>
				</div>
				<div className="card">
					<div className="card-image">
						<span className="discount">-36%</span>
					</div>
					<div className="title">Product Title</div>
					<div className="description">
						Space for a small product description.
					</div>
					<div className="footer">
						<div className="price">
							1.12 USD
							<div className="original">1.25</div>
						</div>
						<div className="buy">
							<button>Buy Now</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Section