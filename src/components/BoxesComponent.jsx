import React from "react";

function SmallBox() {
  return (
    <div style={{ backgroundColor: "salmon", height: "50px", width: "50px" }}>
      Small box
    </div>
  );
}

const BigBox = (props) => {
  let { customBgColor = "green", customHeight = "150px" } = props;

  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: customBgColor,
        height: customHeight,
        width: "150px",
      }}
    >
      Big Box
      <SmallBox />
    </div>
  );
};

class ParagraphBox extends React.Component {
  render() {
    let { p1Color, p2Color = "pink", p3Color } = this.props;
    return (
      <div style={{ backgroundColor: "gray" }}>
        <h1>created with class component:</h1>
        <p style={{ color: p1Color }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus hic
          eveniet ea perspiciatis animi earum inventore quas aliquam laboriosam
          dolorem, aut consequuntur qui corporis odit rerum error dolor aperiam
          minus.
        </p>
        <p style={{ color: p2Color }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus hic
          eveniet ea perspiciatis animi earum inventore quas aliquam laboriosam
          dolorem, aut consequuntur qui corporis odit rerum error dolor aperiam
          minus.
        </p>
        <p style={{ color: p3Color }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus hic
          eveniet ea perspiciatis animi earum inventore quas aliquam laboriosam
          dolorem, aut consequuntur qui corporis odit rerum error dolor aperiam
          minus.
        </p>
      </div>
    );
  }
}

//named exports

export { SmallBox, BigBox, ParagraphBox };
