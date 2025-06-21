import React from 'react';
// import { useFormik } from 'formik';
import { Row, Col, Button } from 'react-bootstrap';

import { State as UIState } from '../../ducks/ui/ui.index';

interface ITeslaFormProps {
  email?: string;
  theme: UIState['theme'];
}

export const TeslaLoginForm: React.FC<ITeslaFormProps> = () => {
  const baseRedirectUri = process.env.NODE_ENV === 'production' ? 'https://app.tesalate.io' : 'http://localhost:3000';
  const redirectUri = baseRedirectUri + '/auth/callback';
  return (
    <>
      <Row>
        <Col>
          <Row>
            <Col>
              <p style={{ fontWeight: 'bold' }}>Log in to your Tesla account</p>
            </Col>
          </Row>
          <Row>
            <a
              href={`https://auth.tesla.com/oauth2/v3/authorize?&client_id=d1d227174299-433e-bda1-7be5328318f7&locale=en-US&prompt=login&redirect_uri=${redirectUri}&response_type=code&scope=openid%20vehicle_device_data%20offline_access%20user_data%20vehicle_location&state=${Math.floor(
                Math.random() * 10000
              )}`}
            >
              <Button>Sign In via Tesla</Button>
            </a>
          </Row>
        </Col>
      </Row>
    </>
  );
};
