import { useEffect,useState } from "react";
import ReactPaginate from "react-paginate";
import "./pagination.css"

export default function Pagination(props){


  const [coursesToShow, setCoursesToShow] = useState(8);
  const toggleShowMore = () => {
    setCoursesToShow(coursesToShow + 8);
 };

 
  const Item = (props) => {
    const handleSchoolClick = () => {
      window.location.href = props.link;
    };
  
    return (
      <div className="box-school">
        <div className="school" onClick={handleSchoolClick}>
          <div className="inner">
            <figure className="inner-pics">
              <img className="inner-pic" src={props.link} alt="hihi"></img>
            </figure>
            <div className="inner-content">
              <h4>{props.ten}</h4>
              <p>Ma san pham: {props.ma}</p>
              <p>Gia san pham: {props.gia}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const {data} = props;
  const [currentItems,setCurrentItems] = useState(null);
  const [pageCount,setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 4;


  const endOffset = itemOffset + itemsPerPage;
  // const currentItems = data.slice(itemOffset, endOffset);
  // const pageCount = Math.ceil(data.length / itemsPerPage);
  
  useEffect(()=>{
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage))
  },[itemOffset,itemsPerPage.data])


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;

    setItemOffset(newOffset);
  };
  const items = data.map((item, index) => (
    <Item
      key={index}
      link={item.link}
      ten={item.ten}
      ma={item.ma}
      gia={item.gia}
    />
  ));

  return (
    <>
    <div>
    {items}
    </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName = "pagination"
        pageLinkClassName="page-num"
        previousClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );
}