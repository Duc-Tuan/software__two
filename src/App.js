// import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

import './App.css';
import Sidebar from '~/layouts/Sidebar';
import { NavBar } from './components';
import {
  Calendar,
  ColorPicked,
  Customer,
  Ecommerce,
  Editor,
  Employees,
  Kanban,
  Orders,
  Area,
  Bar,
  ColorMapping,
  Financial,
  Line,
  Pie,
  Pyramid,
  Stacked,
} from './pages';

import { useStateContext } from '~/contexts';

function App() {
  const content = useStateContext();

  return (
    <div className="App">
      <BrowserRouter>
        <div className="flex relative dark: bg-main-dark">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <Tippy content="Setting" placement="top" appendTo={() => document.body}>
              <button
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{
                  background: 'blue',
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <FontAwesomeIcon icon={faGear} style={{ height: '26px', width: '26px' }} />
              </button>
            </Tippy>
          </div>

          {content.activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}

          <div
            className={`dark:bg-main-bg bg-main-bg main-h-screen w-full ${content.activeMenu ? 'md:ml-72' : 'flex-2'}`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-bg navbar w-full">
              <NavBar />
            </div>
          </div>

          <div>
            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<Ecommerce />} />
              <Route path="/ecommerce" element={<Ecommerce />} />

              {/* Pages */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customer />} />

              {/* App */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicked />} />

              {/* Charts */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
