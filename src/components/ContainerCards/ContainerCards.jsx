import { useState } from "react";
import CardTaskList from "../CardTaskList/CardTaskList";
import Modal from "../Modals/Modal";
import AddCard from "../Modals/AddCard/AddCard";
import { Button } from "./ContainerCards.styled";

export default function ContainerCards() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const onSave = (values) => {
    console.log(values.title);
    console.log(values.description);
    console.log(values.priority);
    console.log(values.dedline);
  };

  return (
    <>
      <CardTaskList />
      <Button onClick={openModal}>Add another card</Button>
      {showModal && (
        <Modal close={closeModal}>
          <AddCard onSave={onSave} closeForm={closeModal} />
        </Modal>
      )}
    </>
  );
}
