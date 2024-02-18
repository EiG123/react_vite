export default function Item(props) {
  const {id, title, description} = props
  return (
    <section>
      <div className="content">
        <h4>{title}</h4>
        <button>Show</button>
      </div>
      <p>{description}</p>
      <hr/>
    </section>
  );
}
