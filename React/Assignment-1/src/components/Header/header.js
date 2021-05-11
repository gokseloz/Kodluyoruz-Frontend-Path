import "./header.css";

const header = (props) => {
  const { author, item } = props;

  return (
    <header className="card-header">
      <div className="profile">
        <span className="letter">{author[0]}</span>
      </div>
      <div className="card-title-group">
        <h5 className="card-title">{item.title}</h5>
        <div className="card-date">
          <time dateTime={item.date}>{item.date}</time>
        </div>
      </div>
    </header>
  );
};

export default header;
