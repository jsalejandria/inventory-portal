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

/*
<div className="form-popup" id="itemForm">
        <form
          action="/action_page.php"
          className="form-container"
          onSubmit={props.addNewItem}
        >
          <p>New Item</p>
          <div className="nameWrapper">
            <label htmlFor="name">
              <b>Item Name:&nbsp;&nbsp;&nbsp;</b>
            </label>
            <input
              type="text"
              value={props.newName}
              onChange={props.handleNewName}
              id="itemName"
              name="itemName"
              required
            />
          </div>
          <div className="uomWrapper">
            <label htmlFor="uom">
              <b>Unit of Measure:&nbsp;&nbsp;&nbsp;</b>
            </label>
            <input
              type="text"
              value={props.newUnit}
              onChange={props.handleNewUnit}
              id="uom"
              name="uom"
              required
            />
          </div>
          <div className="priceWrapper">
            <label htmlFor="price">
              <b>Price:&nbsp;&nbsp;&nbsp;</b>
            </label>
            <input
              type="number"
              value={props.newPrice}
              onChange={props.handleNewPrice}
              id="uom"
              name="uom"
              required
            />
          </div>
          <div className="expiryWrapper">
            <label htmlFor="expiry">
              <b>Expiry Date:&nbsp;&nbsp;&nbsp;</b>
            </label>
            <input
              type="Date"
              value={props.newExpiry}
              onChange={props.handleNewExpiry}
              id="expiryDate"
              name="expiryDate"
            />
          </div>
          <div className="stockWrapper">
            <label htmlFor="soh">
              <b>Available Stocks:&nbsp;&nbsp;&nbsp;</b>
            </label>
            <input
              type="number"
              value={props.newStocks}
              onChange={props.handleNewStocks}
              id="soh"
              name="soh"
              required
            />
          </div>
          <div className="imageWrapper">
            <label htmlFor="image">
              <b>Upload Image:&nbsp;&nbsp;&nbsp;</b>
            </label>
            <input
              type="file"
              //value={props.newDate}
              //onChange={props.handleNewDate}
              id="image"
              name="image"
            />
          </div>
          <br />
          <div className="buttonWrapper">
            <button type="submit" className="btn">
              Add
            </button>
            <button type="button" className="btn cancel">
              Cancel
            </button>
          </div>
        </form>
      </div>
      */
