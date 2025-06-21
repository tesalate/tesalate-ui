import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { RootState } from '../../redux/reducers';
import { actions as teslaActions } from '../../ducks/teslaAccount/teslaAccount.index';
import { useDispatch, useSelector } from 'react-redux';
import LoadingComp from '../../components/LoadingComp/LoadingComp';
import { Button } from 'react-bootstrap';

const TeslaCallback = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const code = urlParams.get('code');

  const { loading, linked, error } = useSelector(({ uiState, teslaAccountState }: RootState) => ({
    loading: uiState.loading?.SendCode?.length > 0,
    linked: teslaAccountState.account?.linked,
    error: teslaAccountState.teslaAccountError,
  }));

  useEffect(() => {
    if (!linked && code) {
      dispatch(teslaActions.sendCode(code));
    }
  }, [dispatch, code, linked]);

  if (linked) {
    return <Redirect to="/settings/tesla-account" />;
  }
  if (error) return <>ERrOR</>;
  if (loading) return <LoadingComp body="Linking Tesla Account..." />;
  return (
    <>
      <div>
        Tesla Account Linked{' '}
        <span role="img" aria-label="check mark">
          ✔️
        </span>
      </div>
      <Link to="/settings/tesla-account">
        <Button>Return to Tesla Account Settings</Button>
      </Link>
    </>
  );
};

export default TeslaCallback;
