import "../../assets/css/Pagination.css"

const Pagination = ({currentPage, totalPages, onPageChange}) => {
	return (
		<div className="pagination">
			{[...Array(totalPages)].map((_, index) => (
				<button
					key={index}
					onClick={() => onPageChange(index + 1)}
					className={currentPage === index ? "active" : ""}
				>
					{index + 1}
				</button>
			))}
		</div>
	)
}
export default Pagination;