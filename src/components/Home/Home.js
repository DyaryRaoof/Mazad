import React from 'react';
import Header from './Header';
import HeroPlusTopFreelancers from './HeroPlusTopFreelancers';
import CategoriesList from './CategoriesList';
// import LoggedInHeader from './LoggedInHeader';
import Chat from '../Chat';
import { useState } from 'react';
import SearchModal from '../SearchModal';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const doShowModal = (value) => {
    setShowModal(value);
    document.querySelector('.modal-backdrop').remove();
  };
  return (
    <div>
      <Header setShowModal={setShowModal} />
      <HeroPlusTopFreelancers />,
      <CategoriesList />
      <Chat />
      <SearchModal show={showModal} onHide={() => doShowModal(false)} />
    </div>
  );
};

export default Home;
