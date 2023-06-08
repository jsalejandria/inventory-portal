import axios from "axios";

const baseUrl = "http://localhost:3001/items";

const getAll = () => {
  return axios.get(baseUrl);
};

const create = (newItem) => {
  return axios.post(baseUrl, newItem);
};

const deleteItem = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

const update = (id, changedItem) => {
  return axios.put(`${baseUrl}/${id}`, changedItem);
};

export default { getAll, create, deleteItem, update };
