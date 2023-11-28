import SweetAlert from "react-bootstrap-sweetalert";
function SweetAlertComponent({ confirm, cancle, title, subtitle, type }) {
  return (
    <SweetAlert
      style={{ zIndex: "1" }}
      title={title}
      onConfirm={confirm}
      // type="danger"
      type={type !== undefined ? type : "danger"}
      showCancel={true}
      confirmBtnStyle={{ backgroundColor: "#024b98" }}
      onCancel={cancle}
    >
      <h5> {subtitle} </h5>
    </SweetAlert>
  );
}

export default SweetAlertComponent;
