import '../Styles/components/CatMenu.scss'
import { FiChevronRight } from "react-icons/fi";


import React from 'react'

const CatMenu = () => {
  return (
		<div className="CatMenu">
			<div className="category">
				<div className="menu">
					<div className="title">Category Menu</div>
					<div className="links">
						<a href="/Bakery">Bakery</a>
						<a href="/Bakery">Bakery</a>
						<a href="/Bakery">Bakery</a>
						<a href="/Bakery">Bakery</a>
						<a href="/Bakery">Bakery</a>
					</div>
					<div className="button">
						<button>
							More Categories
							<FiChevronRight className="__icon" />
						</button>
					</div>
				</div>
				<div className="banner">
					<div className="sub-heading">Banner subfocus</div>
					<div className="heading">Space for heading</div>
					<div className="banner-button">
						<button>
							Read Recipes
							<FiChevronRight className="__icon" />
						</button>
					</div>
				</div>
				<div className="banner">
					<div className="sub-heading">Banner subfocus</div>
					<div className="heading">Space for heading</div>
					<div className="banner-button">
						<button>
							Read Recipes
							<FiChevronRight className="__icon" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CatMenu

