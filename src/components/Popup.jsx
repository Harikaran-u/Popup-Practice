import "./popup.css";
const Popup = (props) => {
  const { trigger, updateStatus } = props;
  const changeStatus = () => {
    updateStatus();
  };
  return (
    trigger && (
      <div className="popup-container">
        <div className="inner-popup-message">
          <button className="close-btn" onClick={changeStatus}>
            x
          </button>
          {props.children}
        </div>
      </div>
    )
  );
};

export default Popup;
