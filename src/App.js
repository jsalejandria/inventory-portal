import { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import itemServices from "./services/itemServices";

import Items from "./components/items";
import ItemForm from "./components/itemForm";

/* --- --- --- --- --- VARIABLES --- --- --- --- --- --- */

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    itemServices.getAll().then((response) => {
      setItems(response.data);
    });
  }, []);

  const [newName, setNewName] = useState("");
  const [newUnit, setNewUnit] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newExpiry, setNewExpiry] = useState("");
  const [newStocks, setNewStocks] = useState("");
  const [itemPic, setItemPic] = useState("");
  const [idEdit, setIdEdit] = useState("");
  const [showEdit, setShowEdit] = useState(false);

  /* --- --- --- --- --- EVENT HANDLERS --- --- --- --- --- --- */

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewUnit = (event) => {
    setNewUnit(event.target.value);
  };

  const handleNewPrice = (event) => {
    setNewPrice(event.target.value);
  };

  const handleNewExpiry = (event) => {
    setNewExpiry(event.target.value);
  };

  const handleNewStocks = (event) => {
    setNewStocks(event.target.value);
  };

  const handleItemPic = (event) => {
    setItemPic(event.target.value);
    console.log(event.target.value);
  };

  /* --- --- --- --- --- FUNCTIONS --- --- --- --- --- --- */

  const generateId = () => {
    return Math.floor(Math.random() * 9999999999999999);
  };

  const addNewItem = (event) => {
    const newPriceConv = Number(newPrice).toFixed(2);
    const newExpiryConv = new Date(newExpiry);
    const dateOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const newStocksConv = Math.floor(Number(newStocks));
    const totalValueConv = Number(newPriceConv * newStocksConv).toFixed(2);
    const numberOptions = {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    };

    const newItem = {
      name: newName,
      unit: newUnit,
      price: Number(newPriceConv).toLocaleString("en", numberOptions),
      expiry: newExpiryConv.toLocaleDateString("en-us", dateOptions),
      stocks: newStocksConv.toLocaleString(),
      totalValue: Number(totalValueConv).toLocaleString("en", numberOptions),
      photo: itemPic,
      id: generateId(),
    };
    event.preventDefault();

    setItems(items.concat(newItem));

    itemServices.create(newItem).then((response) => {
      setItems(items.concat(response.data));
    });
    setNewName("");
    setNewUnit("");
    setNewPrice("");
    setNewExpiry("");
    setNewStocks("");
    setItemPic("");
  };

  const handleDelete = (event) => {
    const idDelete = Number(event.target.id);
    const itemDelete = event.target.name;
    console.log(itemDelete);
    event.preventDefault();

    if (
      window.confirm(
        `Are you sure you want to delete the entry for ${itemDelete}?`
      )
    ) {
      itemServices.deleteItem(idDelete).then((response) => {
        return response.data;
      });
      itemServices.getAll().then((response) => {
        setItems(response.data);
      });
      setItems(items.filter((item) => item.id !== idDelete));
    }
  };

  const triggerEdit = (event) => {
    setIdEdit(Number(event.target.id));
    setShowEdit(true);

    console.log(showEdit, idEdit);
  };

  const editItem = (event) => {
    const newPriceConv = Number(newPrice).toFixed(2);
    const newExpiryConv = new Date(newExpiry);
    const dateOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const newStocksConv = Math.floor(Number(newStocks));
    const totalValueConv = Number(newPriceConv * newStocksConv).toFixed(2);
    const numberOptions = {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    };

    const changedItem = {
      name: newName,
      unit: newUnit,
      price: Number(newPriceConv).toLocaleString("en", numberOptions),
      expiry: newExpiryConv.toLocaleDateString("en-us", dateOptions),
      stocks: newStocksConv.toLocaleString(),
      totalValue: Number(totalValueConv).toLocaleString("en", numberOptions),
      photo: itemPic,
      id: generateId(),
    };
    event.preventDefault();

    itemServices.update(idEdit, changedItem).then((response) => {
      return response.data;
    });
    itemServices.getAll().then((response) => {
      setItems(response.data);
    });
    setItems(items.filter((item) => item.id !== idEdit).concat(changedItem));

    setNewName("");
    setNewUnit("");
    setNewPrice("");
    setNewExpiry("");
    setNewStocks("");
    setItemPic("");
    setIdEdit("");
    setShowEdit(false);
  };

  /* --- --- --- --- --- APP RENDER --- --- --- --- --- --- */

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand id="title">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INVENTORY PORTAL
        </Navbar.Brand>
      </Navbar>
      <Items
        items={items}
        idEdit={idEdit}
        handleDelete={handleDelete}
        triggerEdit={triggerEdit}
        editItem={editItem}
        showEdit={showEdit}
        setShowEdit={setShowEdit}
        handleNewName={handleNewName}
        handleNewUnit={handleNewUnit}
        handleNewPrice={handleNewPrice}
        handleNewExpiry={handleNewExpiry}
        handleNewStocks={handleNewStocks}
        handleItemPic={handleItemPic}
      />
      <ItemForm
        addNewItem={addNewItem}
        newName={newName}
        newUnit={newUnit}
        newPrice={newPrice}
        newExpiry={newExpiry}
        newStocks={newStocks}
        itemPic={itemPic}
        handleNewName={handleNewName}
        handleNewUnit={handleNewUnit}
        handleNewPrice={handleNewPrice}
        handleNewExpiry={handleNewExpiry}
        handleNewStocks={handleNewStocks}
        handleItemPic={handleItemPic}
      />
    </div>
  );
};

export default App;
