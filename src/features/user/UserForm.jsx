import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserSignupForm from '../../components/User/UserSignupForm';
import styles from '../../styles/Header.module.css';
import s from '../../styles/User.module.css';
import { toggleForm } from './userSlice';
const UserForm = () => {
  const dispatch = useDispatch();
  const { showForm } = useSelector(({ user }) => user);

  const handleClick = () => {
    dispatch(toggleForm(false));
    document.body.classList.remove(styles['modal-open']);
  };
  return showForm ? (
    <>
      <div className={s.overlay} onClick={() => handleClick()} />
      <UserSignupForm closeForm={handleClick} />
    </>
  ) : (
    <></>
  );
};

export default UserForm;
