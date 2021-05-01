import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, Table } from 'react-bootstrap';
import { closeSkillsManager } from '../../redux/skillManager/skillManagerActions';

export default function SkillsManager(props) {

  const dispatch = useDispatch();

  const showSkillManager = useSelector(state => state.SkillManagerState.showSkillsManager);

  const tbody = props.skillsToShow.map(item => (
    <tr key={item.id}>
      <td>
        <label>{item.name}</label>
      </td>
      <td>
        <input type="checkbox"></input>
      </td>
      <td>
        <input type="text"></input>
      </td>
    </tr>
  ));

  const skillManagerModal = showSkillManager && (

    <Modal show={showSkillManager} onHide={() => dispatch(closeSkillsManager)}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar tiempo de experiencia</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>
                Habilidad
              </th>
              <th>
                Es mandatorio?
              </th>
              <th>
                Años requeridos
              </th>
            </tr>
          </thead>
          <tbody>
            {tbody}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => dispatch(closeSkillsManager)}>Descartar</Button>
        <Button variant="primary">Aceptar</Button>
      </Modal.Footer>
    </Modal>
  )

  return skillManagerModal;
}