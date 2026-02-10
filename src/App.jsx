import { useEffect, useState } from 'react';
import HomeView from './views/HomeView.jsx';
import RoomsView from './views/RoomsView.jsx';
import GalleryView from './views/GalleryView.jsx';
import LocationView from './views/LocationView.jsx';
import ContactView from './views/ContactView.jsx';
import LanguageSwitcher from "./views/LanguageSwitcher.jsx";

import { useTranslation } from 'react-i18next';

const VIEW_PATHS = {
  home: '/',
  rooms: '/rooms',
  gallery: '/gallery',
  location: '/location',
  contact: '/contact',
};

const PATH_VIEWS = Object.fromEntries(
  Object.entries(VIEW_PATHS).map(([view, path]) => [path, view])
);

function normalizePath(pathname) {
  if (!pathname) return '/';
  const normalized = pathname.replace(/\/+$/, '');
  return normalized || '/';
}

function getViewFromPathname(pathname) {
  const path = normalizePath(pathname);
  return PATH_VIEWS[path] || 'home';
}

export default function App() {
  const [view, setView] = useState(() => getViewFromPathname(window.location.pathname));
  const { t } = useTranslation();

  function navigateToView(targetView) {
    const nextPath = VIEW_PATHS[targetView] || '/';
    const currentPath = normalizePath(window.location.pathname);
    setView(targetView);
    if (currentPath !== nextPath) {
      window.history.pushState({}, '', nextPath);
    }
  }

  // синхронизираме със path в URL
  useEffect(() => {
    function onPopState() {
      setView(getViewFromPathname(window.location.pathname));
    }

    const initialPath = normalizePath(window.location.pathname);
    if (!PATH_VIEWS[initialPath]) {
      window.history.replaceState({}, '', '/');
      setView('home');
    }

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const handleNavClick = (targetView) => (e) => {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return;
    }
    e.preventDefault();
    navigateToView(targetView);
  };

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <div className="logo">
            <span className="logo-main">{t('header.logoMain')}</span>
            <span className="logo-sub">{t('header.logoSub')}</span>
          </div>
          <nav className="main-nav">
            <a
              href={VIEW_PATHS.home}
              onClick={handleNavClick('home')}
              className={view === 'home' ? 'active-nav' : ''}
            >
              {t('header.nav.home')}
            </a>
            <a
              href={VIEW_PATHS.rooms}
              onClick={handleNavClick('rooms')}
              className={view === 'rooms' ? 'active-nav' : ''}
            >
              {t('header.nav.rooms')}
            </a>
            <a
              href={VIEW_PATHS.gallery}
              onClick={handleNavClick('gallery')}
              className={view === 'gallery' ? 'active-nav' : ''}
            >
              {t('header.nav.gallery')}
            </a>
            <a
              href={VIEW_PATHS.location}
              onClick={handleNavClick('location')}
              className={view === 'location' ? 'active-nav' : ''}
            >
              {t('header.nav.location')}
            </a>
            <a
              href={VIEW_PATHS.contact}
              onClick={handleNavClick('contact')}
              className={view === 'contact' ? 'active-nav' : ''}
            >
              {t('header.nav.contact')}
            </a>

          </nav>
          <LanguageSwitcher />
        </div>
      </header>

      <main id="app">
        {view === 'home' && <HomeView onSeeRooms={() => navigateToView('rooms')} />}
        {view === 'rooms' && <RoomsView />}
        {view === 'gallery' && <GalleryView />}
        {view === 'location' && <LocationView />}
        {view === 'contact' && <ContactView />}
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>
            {t('footer.rights', { year: new Date().getFullYear() })}
          </p>
        </div>
      </footer>
    </>
  );
}
