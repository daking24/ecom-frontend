import "../Styles/components/BestFarmer.scss"
import { FiChevronRight } from 'react-icons/fi';


const BestSell = () => {
  return (
		<div className="BestSell">
			<div className="grid">
				<div className="menu">
					<div className="title">Best From Farmers</div>
					<div className="links">
						<a href="/carrot">carrot</a>
						<a href="/carrot">carrot</a>
						<a href="/carrot">carrot</a>
						<a href="/carrot">carrot</a>
						<a href="/carrot">carrot</a>
					</div>
					<div className="more">
						<button>
							More Products
							<FiChevronRight className="__icon" />
						</button>
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

export default BestSell