import ReactPaginate from 'react-paginate';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setRoutesParam } from '../../store/slices/routesParams';
import { ReactComponent as ArrowSvg } from '../../images/icons/svg/pagination_arrow.svg';
let Scroll = require('react-scroll');

export default function RoutesPagination({ total_count }) {
  console.log(total_count);
  const params = useSelector((state) => state.routesParams.routes.params);
  const dispatch = useDispatch();
  // const [rangeDisplayed, setRangeDisplayed] = useState(3);
  const [pageCount, setPageCount] = useState(0);

  let scroll = Scroll.animateScroll;

  const handlePageClick = (event) => {
    const { selected } = event;

    // if (selected === 3) setRangeDisplayed(2);
    // else if (rangeDisplayed !== 3) setRangeDisplayed(3);

    let limit = 5;
    if (params.limit !== null) limit = params.limit;
    if (selected === 0) {
      dispatch(setRoutesParam({ param: 'offset', value: null }));
    } else {
      dispatch(setRoutesParam({ param: 'offset', value: selected * limit }));
    }
    scroll.scrollToTop();
  };

  useEffect(() => {
    let limit = 5;
    if (params.limit !== null) limit = params.limit;
    const pageCount = Math.ceil(total_count / limit);
    setPageCount(pageCount);
  }, [params.limit, total_count]);
  useEffect(() => {
    let limit = 5;
    if (params.limit !== null) limit = params.limit;
    const pageCount = Math.ceil(total_count / limit);
    setPageCount(pageCount);
  }, []);

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<ArrowSvg />}
        previousLabel={<ArrowSvg />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        breakClassName="pagination__dots"
        pageClassName="pagination__item"
        pageLinkClassName="pagination__btn"
        breakLinkClassName="pagination__btn"
      />
    </>
  );
}
