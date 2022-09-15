export const Msg = ({ txt }) => {
  return (
    <div
      style={{
        height: "129px",
        width: "516px",
        border: "solid 1px #e8e4e4",
        backgroundColor: "#ffecec",
        textAlign: "left",
        display: "flex",
        justifyContent: "space-between",
        marginLeft: "auto",
        marginRight: "auto"
      }}
    >
      <span style={{ marginLeft: "20px", marginTop: "20px" }}>{txt}</span>
      <span style={{
        marginLeft: "auto", marginRight: "20px", marginTop: "auto", marginBottom: "62px",
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '16px'
      }}>{txt}</span>
    </div>
  );
};
