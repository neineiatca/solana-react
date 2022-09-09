export const Msg = ({ txt }) => {
  return (
    <div
      style={{
        height: "50px",
        width: "500px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "50px",
        marginBottom: "50px",
        backgroundColor: "#ffecec",
        textAlign: "left",
        display: "flex",
        borderRadius: "66px",
      }}
    >
      <span style={{ marginLeft: "17px", marginTop: "10px" }}>{txt}</span>
    </div>
  );
};
