import "../Styles/components/Menubar.scss";
import { FiChevronDown } from "react-icons/fi";


function Menubar() {
  return (
		<div className="Menubar">
			<div className="categories">
				<div className="option">
					<span>Bakery</span>
					<FiChevronDown className="__icon" />
				</div>
				<div className="option">
					<span>Fruit and vegetables</span>
					<FiChevronDown className="__icon" />
				</div>
				<div className="option">
					<span>Meat and fish</span>
					<FiChevronDown className="__icon" />
				</div>
				<div className="option">
					<span>Drinks</span>
					<FiChevronDown className="__icon" />
				</div>
				<div className="option">
					<span>Kitchen</span>
					<FiChevronDown className="__icon" />
				</div>
                <div className="option">
                    <span>Special nutrition</span>
                    <FiChevronDown className="__icon" />
                </div>
			</div>
		</div>
	);
}

export default Menubar