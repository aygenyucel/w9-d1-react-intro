function SmallBox() {
  return (
    <div style={{ backgroundColor: "salmon", height: "50px", width: "50px" }}>
      Small box
    </div>
  );
}

const BigBox = () => {
  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: "blue",
        height: "150px",
        width: "150px",
      }}
    >
      Big Box
    </div>
  );
};

//named exports

export { SmallBox, BigBox };
