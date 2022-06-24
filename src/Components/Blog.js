import "../Styles/components/Blog.scss"
import { FiChevronRight } from 'react-icons/fi';

const Blog = () => {
    return (
			<div className="blog-section">
				<div className="topic">
					<div className="topic__title">Read our Blog Posts</div>
					<div className="topic__button">
						<button className="topic__button__text">
							Go to Blog
							<FiChevronRight className="topic__button__text__icon" />
						</button>
					</div>
				</div>
				<div className="cards">
					<div className="cards__large">
						<div className="cards__large__mini">Dinner tips</div>
						<div className="cards__large__topic">
							Our chef tips for a great and tasty dinner ready in 20 minutes
						</div>
						<div className="cards__large__minors">
							<div className="cards__large__minors__avatar"></div>
							<div className="cards__large__minors__author">Author</div>
							<div className="cards__large__minors__date">12.02.2022</div>
						</div>
					</div>
					<div className="cards__medium">
						<div className="cards__medium__image"></div>
						<div className="cards__medium__category">Vegetables</div>
						<div className="cards__medium__title">
							Which vegetable your family will love and want’s eat each day
						</div>
						<div className="cards__medium__bottom">
							<div className="cards__medium__bottom__author">Author</div>
							<div className="cards__medium__bottom__date">12.02.2022</div>
						</div>
					</div>
					<div className="cards__small">
						<div className="cards__small__one">
							<div className="cards__small__one__details">
								<div className="cards__small__one__details__title">
									Salad is kinda good start to your morning routines
								</div>
								<div className="cards__small__one__details__bottom">
									<div className="cards__small__one__details__bottom__author">
										Author
									</div>
									<div className="cards__small__one__details__bottom__date">
										12.02.2022
									</div>
								</div>
							</div>
							<div className="cards__small__one__image"></div>
						</div>
						<div className="cards__small__one">
							<div className="cards__small__one__details">
								<div className="cards__small__one__details__title">
									Salad is kinda good start to your morning routines
								</div>
								<div className="cards__small__one__details__bottom">
									<div className="cards__small__one__details__bottom__author">
										Author
									</div>
									<div className="cards__small__one__details__bottom__date">
										12.02.2022
									</div>
								</div>
							</div>
							<div className="cards__small__one__image"></div>
						</div>
						<div className="cards__small__one">
							<div className="cards__small__one__details">
								<div className="cards__small__one__details__title">
									Salad is kinda good start to your morning routines
								</div>
								<div className="cards__small__one__details__bottom">
									<div className="cards__small__one__details__bottom__author">
										Author
									</div>
									<div className="cards__small__one__details__bottom__date">
										12.02.2022
									</div>
								</div>
							</div>
							<div className="cards__small__one__image"></div>
						</div>
					</div>
				</div>
			</div>
		);
}
 
export default Blog;