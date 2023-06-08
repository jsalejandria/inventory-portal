import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import trash from "../images/trash.svg";
import edit from "../images/edit.svg";

const Items = ({
  items,
  idEdit,
  handleDelete,
  triggerEdit,
  editItem,
  showEdit,
  setShowEdit,
  handleNewName,
  handleNewUnit,
  handleNewPrice,
  handleNewExpiry,
  handleNewStocks,
  handleItemPic,
}) => {
  const holder = {
    name: "",
    unit: "",
    price: "",
    expiry: "",
    stocks: "",
    totalValue: "",
    photo: "",
    id: "",
  };

  const itemToChange =
    idEdit !== "" ? items.find((item) => item.id === idEdit) : holder;

  const handleCloseEdit = () => setShowEdit(false);

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
                <div id={item.id} className="iconWrapper">
                  <div className="newItem">
                    <div id="newItemBtn">
                      <Button
                        variant="dark"
                        size="sm"
                        onClick={triggerEdit}
                        id={item.id}
                      >
                        EDIT
                      </Button>
                    </div>
                    <Modal show={showEdit} onHide={handleCloseEdit}>
                      <Modal.Header closeButton>
                        <Modal.Title>Edit Item</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form onSubmit={editItem}>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Item Name:</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder={itemToChange.name}
                              onChange={handleNewName}
                              required
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput2"
                          >
                            <Form.Label>Unit of Measure:</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder={itemToChange.unit}
                              onChange={handleNewUnit}
                              required
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput3"
                          >
                            <Form.Label>Price:</Form.Label>
                            <Form.Control
                              type="number"
                              placeholder={itemToChange.price}
                              onChange={handleNewPrice}
                              required
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput4"
                          >
                            <Form.Label>Expiry Date:</Form.Label>
                            <Form.Control
                              type="date"
                              //value={itemToChange.expiry}
                              onChange={handleNewExpiry}
                              required
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput5"
                          >
                            <Form.Label>Stocks:</Form.Label>
                            <Form.Control
                              type="number"
                              placeholder={itemToChange.stocks}
                              onChange={handleNewStocks}
                              required
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput6"
                          >
                            <Form.Label>Image URL:</Form.Label>
                            <Form.Control
                              type="url"
                              placeholder={itemToChange.photo}
                              onChange={handleItemPic}
                            />
                          </Form.Group>
                          <div id="buttonWrapper">
                            <Button variant="primary" type="submit">
                              Save Changes
                            </Button>
                            <Button
                              variant="secondary"
                              onClick={handleCloseEdit}
                            >
                              Close
                            </Button>
                          </div>
                        </Form>
                      </Modal.Body>
                      <Modal.Footer></Modal.Footer>
                    </Modal>
                  </div>
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
