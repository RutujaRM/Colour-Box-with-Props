//Here we create div function with props(Properties)means parameter and argument
import "./Div.css";
const Div = (props) => {
  return (
    <div style={{ backgroundColor: `${props.color}` }}>
      <h1>Colour Boxes </h1>
    </div>
  );
};

export default Div;
