import React from 'react';
import { useState } from 'react';
import axios from 'axios';

import { Form, Label, Input, Button as FormButton } from '../Styles/FormStyles';

import { Modal, ModalBackground, ModalContent, ModalClose } from 'bloomer';

const EditResourceModal = props => {
  const { editFormActive, setEditFormActive, resource, fetchResourcesData } = props;

  const [editState, setEditState] = useState({
    title: resource.title,
    short_description: resource.short_description,
    full_description: resource.full_description,
    resource_url: resource.resource_url,
    resourceEdited: false
  });

  const handleEdit = e => {
    const { name, value } = e.target;
    setEditState({ ...editState, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const resourceId = resource.id
    const endpoint = `http://localhost:3000/resources/update/${resourceId}`;

    const payload = {
      title: editState.title,
      short_description: editState.short_description,
      full_description: editState.full_description,
      resource_url: editState.resource_url,
      resourceId
    };

    setEditState({ ...editState, resourceEdited: true });
    const response = await axios.put(endpoint, payload);
    setEditFormActive(false)
    fetchResourcesData()
  }

  return (
    <Modal isActive={editFormActive}>
      <ModalBackground />
      <ModalContent style={{ width: '100vw' }}>
        <Form onSubmit={handleUpdate}>
          <Label>
            Resource Title
            <Input
              type="text"
              placeholder="Resource Title"
              name="title"
              value={editState.title}
              onChange={handleEdit}
            ></Input>
          </Label>
          <Label>
            Resource Description (short)
            <textarea
              rows="5"
              cols="33"
              placeholder="Short description of resource"
              name="short_description"
              value={editState.short_description}
              onChange={handleEdit}
            ></textarea>
          </Label>
          <Label>
            Resource Description (full)
            <textarea
              rows="5"
              cols="33"
              placeholder="Full description of resource"
              name="full_description"
              value={editState.full_description}
              onChange={handleEdit}
            ></textarea>
          </Label>
          <Label>
            Resource Link (URL)
            <Input
              type="url"
              placeholder="Link to resource"
              name="resource_url"
              value={editState.resource_url}
              onChange={handleEdit}
            ></Input>
          </Label>
          <FormButton type="submit">Update Resource</FormButton>
        </Form>
      </ModalContent>
      <ModalClose onClick={() => setEditFormActive(false)} />
    </Modal>
  );
};

export default EditResourceModal;
