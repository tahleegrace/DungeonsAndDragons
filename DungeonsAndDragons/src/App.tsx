import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
      <div className="container-fluid p-3 bg-light">
          <header>
              <nav className="navbar navbar-expand-lg navbar-light">
                  <a className="navbar-brand" href="#">Dungeons and Dragons</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mr-auto">
                          <li className="nav-item active">
                              <a className="nav-link" href="#">Home</a>
                          </li>
                          <li className="nav-item">
                              <Link to="/spells" className="nav-link">Spells</Link>
                          </li>
                      </ul>
                  </div>
              </nav>
          </header>
          <div className="container m-0">
              <Outlet />
          </div>
      </div>
  );
}

export default App;
