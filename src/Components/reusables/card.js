import React from 'react'

const card = () => {
//   const productName = "";

  return (
		<div className="card">
			<div className="card-image">
				<div className="discount"></div>
			</div>
			<div className="title">{ }</div>
			<div className="description">{ }</div>
			<div className="footer">
				<div className="price">
					{}
					<div className="original">{}</div>
				</div>
				<div className="buy">
					<button>Buy Now</button>
				</div>
			</div>
		</div>
	);
}

export default card