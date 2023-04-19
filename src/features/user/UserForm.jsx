import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserLoginForm from '../../components/User/UserLoginForm';
import UserSignupForm from '../../components/User/UserSignupForm';
import styles from '../../styles/Header.module.css';
import s from '../../styles/User.module.css';
import { toggleForm, toggleFormType } from './userSlice';
const UserForm = () => {
  const dispatch = useDispatch();
  const { showForm, formType } = useSelector(({ user }) => user);

  const handleClick = () => {
    dispatch(toggleForm(false));
    document.body.classList.remove(styles['modal-open']);
  };
  const toggleCurrentFormType = (type) => dispatch(toggleFormType(type));
  return showForm ? (
    <>
      <div className={s.overlay} onClick={() => handleClick()} />
      {formType === 'signup' ? (
        <UserSignupForm toggleCurrentFormType={toggleCurrentFormType} closeForm={handleClick} />
      ) : (
        <UserLoginForm toggleCurrentFormType={toggleCurrentFormType} closeForm={handleClick} />
      )}
    </>
  ) : (
    <></>
  );
};

export default UserForm;
