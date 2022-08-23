import React, { useEffect } from 'react';
import Header from './sections/header';
import Footer from './sections/footer';
import Router from './routes';
import './App.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { en } from './languages/en';
import { vn } from './languages/vn';
import { useDispatch } from 'react-redux';
import { changeLang } from './store/actions/appActions';

const langs = {vn, en};

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const localLangCode = localStorage.getItem('langCode')
    if (localLangCode !== 'en') {
      dispatch(
        changeLang({
          langCode: localLangCode,
          langLibrary: langs[localLangCode],
        })
      );
    }
  }, [dispatch]);

  return (
    <React.Fragment>
      <Header />
      <Router />
      <Footer />
    </React.Fragment>
  );
}

export default App;
