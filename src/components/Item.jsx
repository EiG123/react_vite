import "./Item.css";
import { useState } from "react";
export default function Item(props) {
  const { id, title, description } = props;
  const [show, setShow] = useState(false);
  return (
    <section>
      <div className="content">
        <h4>{title}</h4>
        <button onClick={()=>setShow(!show)}>
          {show ? "Hide" : "Show"}
        </button>
      </div>
      {show && <p>{description}</p>}
    </section>
  );
}
