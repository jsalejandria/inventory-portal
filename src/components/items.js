import Card from "react-bootstrap/Card";

import trash from "../images/trash.svg";
import edit from "../images/edit.svg";

const Items = ({ items, handleDelete }) => {
  return (
    <div id="itemWrapper">
      {items.map((item) => {
        return (
          <div className="item" key={item.id}>
            <Card style={{ width: "18rem" }}>
              <div id="photoWrapper">
                <Card.Img variant="top" src={item.photo} id="productPhoto" />
              </div>
              <Card.Body>
                <div id="nameWrapper">
                  <Card.Title>
                    <b>{item.name}</b>
                  </Card.Title>
                </div>
                <br></br>
                <Card.Text>
                  <b>Unit of Measure:&nbsp;</b> {item.unit}
                </Card.Text>
                <Card.Text>
                  <b>Price:&nbsp;</b>₱ {item.price}
                </Card.Text>
                <Card.Text>
                  <b>Expiry Date:&nbsp;</b> {item.expiry}
                </Card.Text>
                <Card.Text>
                  <b>Stocks:&nbsp;</b> {item.stocks}
                </Card.Text>
                <Card.Text>
                  <b>Total Value:&nbsp;</b> ₱ {item.totalValue}
                </Card.Text>
                <div id="iconWrapper">
                  <img
                    src={edit}
                    alt=""
                    className="edit"
                    id={item.id}
                    name={item.name}
                    //onClick={editItem}
                  />
                  <img
                    src={trash}
                    alt=""
                    className="trash"
                    id={item.id}
                    name={item.name}
                    onClick={handleDelete}
                  />
                </div>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Items;
