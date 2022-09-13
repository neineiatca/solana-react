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
        justifyContent: "space-between"
      }}
    >
      <span style={{ marginLeft: "17px", marginTop: "10px" }}>{txt}</span>
      <span style={{
        marginLeft: "auto", marginRight: "17px", marginTop: "auto", marginBottom: "10px",
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '16px'
      }}>{txt}</span>
    </div>
  );
};
