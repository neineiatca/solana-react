import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export const Msg = ({ txt }) => {
  return (
    <div
      style={{
        height: "129px",
        width: "516px",
        border: "solid 1px #e8e4e4",
        backgroundColor: "#ffecec",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <span style={{ display: "flex", height: "100px" }}>
        <span style={{ marginLeft: "20px", marginTop: "20px" }}>{txt}</span>
        <span
          style={{
            marginLeft: "auto",
            marginRight: "20px",
            marginTop: "auto",
            marginBottom: "20px",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 300,
            fontSize: "16px",
          }}
        >
          {txt}
        </span>
      </span>
      <span
        style={{
          marginLeft: "auto",
          marginRight: "20px",
          marginTop: "auto",
          marginBottom: "20px",
          height: "29px",
          display: "flex",
          justifyContent: "end",
          color: "red",
        }}
      >
        <div style={{ marginLeft: "auto", marginRight: "10px" }}>
          <FontAwesomeIcon icon={faCoffee} />
        </div>
        <div style={{ marginLeft: "10px", marginRight: "10px" }}>
          <FontAwesomeIcon icon={faCoffee} />
        </div>
      </span>
    </div>
  );
};
