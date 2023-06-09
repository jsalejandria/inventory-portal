import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const ItemForm = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="newItem">
      <div id="newItemBtn">
        <Button variant="dark" size="lg" onClick={handleShow}>
          +&nbsp;&nbsp;&nbsp;ADD NEW ITEM
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={props.addNewItem}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Item Name:</Form.Label>
              <Form.Control
                type="text"
                value={props.newName}
                onChange={props.handleNewName}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Unit of Measure:</Form.Label>
              <Form.Control
                type="text"
                value={props.newUnit}
                onChange={props.handleNewUnit}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Price:</Form.Label>
              <Form.Control
                type="number"
                value={props.newPrice}
                min="0"
                onChange={props.handleNewPrice}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Expiry Date:</Form.Label>
              <Form.Control
                type="date"
                value={props.newExpiry}
                onChange={props.handleNewExpiry}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>Stocks:</Form.Label>
              <Form.Control
                type="number"
                value={props.newStocks}
                min="0"
                onChange={props.handleNewStocks}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
              <Form.Label>Image URL:</Form.Label>
              <Form.Control type="url" onChange={props.handleItemPic} />
            </Form.Group>
            <div id="buttonWrapper">
              <Button variant="primary" type="submit" onClick={handleClose}>
                Add Item
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default ItemForm;
