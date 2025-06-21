import React, { useState } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import config from '../../config/config';
import { toTitleCase } from '../../utils/formatFunctions';

interface IModalProps {
  theme: string;
}

const DangerModal: React.FC<IModalProps> = ({ theme }) => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Modal
        size={'sm'}
        show={true}
        onHide={() => setShow(show)}
        dialogClassName="standard-modal-dialog"
        className="standard-modal"
        aria-labelledby="example-custom-modal-styling-title "
        style={{ zIndex: 9999999999 }}
        backdrop="static"
        centered
      >
        <Modal.Header className={theme === 'dark' ? 'bg-dark' : ''}>
          <Modal.Title id="example-custom-modal-styling-title">
            <span role="img" aria-label="waving-hand">
              👋
            </span>{' '}
            Welcome!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={`align-items-center justify-content-center ${theme === 'dark' ? 'bg-dark' : ''}`}>
          <p>
            <small>Please log in using your Tesla credentials to start collecting data from your vehicles.</small>
          </p>
          <hr />
          <p>
            <small>Need to log into a different {toTitleCase(config.appName)} account?</small>
          </p>
          <Row className="d-flex justify-space-between m-0 p-0">
            <Col className="m-0 p-0">
              <Link to="/logout">
                <Button size={'sm'} variant={theme === 'light' ? 'outline-dark' : 'outline-light'}>
                  Log Out
                </Button>
              </Link>
            </Col>
            <Col className="m-0 p-0">
              <Link to="/settings">
                <Button size={'sm'} variant={'link'} className={'float-end'} style={{ color: 'var(--app-primary)' }}>
                  Go to settings
                </Button>
              </Link>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DangerModal;
