import { useEffect, useState } from 'react';
import HomeView from './views/HomeView.jsx';
import RoomsView from './views/RoomsView.jsx';
import GalleryView from './views/GalleryView.jsx';
import LocationView from './views/LocationView.jsx';
import ContactView from './views/ContactView.jsx';

const VIEWS = ['home', 'rooms', 'gallery', 'location', 'contact'];

function getInitialView() {
  const hash = window.location.hash.replace('#', '');
  return VIEWS.includes(hash) ? hash : 'home';
}

export default function App() {
  const [view, setView] = useState(getInitialView);

  // синхронизираме със hash в URL
  useEffect(() => {
    function onHashChange() {
      const hash = window.location.hash.replace('#', '');
      if (VIEWS.includes(hash)) {
        setView(hash);
      } else {
        setView('home');
      }
    }

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // при промяна на view обновяваме hash-а
  useEffect(() => {
    const newHash = `#${view}`;
    if (window.location.hash !== newHash) {
      window.location.hash = newHash;
    }
  }, [view]);

  const handleNavClick = (targetView) => (e) => {
    e.preventDefault();
    setView(targetView);
  };

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <div className="logo">
            <span className="logo-main">Сияна</span>
            <span className="logo-sub">Семеен хотел · Равда</span>
          </div>
          <nav className="main-nav">
            <a
              href="#home"
              onClick={handleNavClick('home')}
              className={view === 'home' ? 'active-nav' : ''}
            >
              Начало
            </a>
            <a
              href="#rooms"
              onClick={handleNavClick('rooms')}
              className={view === 'rooms' ? 'active-nav' : ''}
            >
              Стаи
            </a>
            <a
              href="#gallery"
              onClick={handleNavClick('gallery')}
              className={view === 'gallery' ? 'active-nav' : ''}
            >
              Галерия
            </a>
            <a
              href="#location"
              onClick={handleNavClick('location')}
              className={view === 'location' ? 'active-nav' : ''}
            >
              Локация
            </a>
            <a
              href="#contact"
              onClick={handleNavClick('contact')}
              className={view === 'contact' ? 'active-nav' : ''}
            >
              Контакти
            </a>
          </nav>
        </div>
      </header>

      <main id="app">
        {view === 'home' && <HomeView onSeeRooms={() => setView('rooms')} />}
        {view === 'rooms' && <RoomsView />}
        {view === 'gallery' && <GalleryView />}
        {view === 'location' && <LocationView />}
        {view === 'contact' && <ContactView />}
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>
            © {new Date().getFullYear()} Семеен хотел „Сияна“, Равда. Всички права запазени.
          </p>
        </div>
      </footer>
    </>
  );
}
