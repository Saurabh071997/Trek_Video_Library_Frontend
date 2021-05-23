// import { useLibrary } from "../context/LibraryProvider";
// import { ACTIONS } from "../context/libraryReducer";

export function VideoCard({
  video: { _id, name, date, thumbnailUrl, authorImgUrl }
}) {
  // const { dispatch } = useLibrary();

  return (
    <div
      className="card-layout"
      // onClick={() => {
      //   dispatch({ TYPE: ACTIONS.SELECT_VIDEO, payload: { id: _id } });
      // }}
    >
      <div className="card-container">
        <img src={thumbnailUrl} className="card-img" alt="img" />
        <div className="card-flex">
          <img src={authorImgUrl} className="card-logo-img" alt="img" />
          <div className="card-detail">
            <div className="card-title">{name}</div>
            <div className="card-info">{date}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
