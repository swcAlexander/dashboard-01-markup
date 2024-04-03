import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
export const Layout = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [focusedItem, setFocusedItem] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleFocus = (index) => {
    setFocusedItem(index);
  };

  const handleBlur = () => {
    setFocusedItem(null);
  };
  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="nav__container">
            <a className="nav__container-link">Dashboard</a>
            <a className="nav__container-version">v.01</a>
          </div>
          <ul className="nav__list">
            <li
              key={1}
              className={
                hoveredItem === 1 || focusedItem === 1
                  ? 'dashboard_accent'
                  : 'dashboard'
              }
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
              onFocus={() => handleFocus(1)}
              onBlur={handleBlur}>
              <Link to="/" className="nav__link">
                Dashboard
              </Link>
            </li>
            <li
              key={2}
              className={
                hoveredItem === 2 || focusedItem === 2
                  ? 'product_accent'
                  : 'product'
              }
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
              onFocus={() => handleFocus(2)}
              onBlur={handleBlur}>
              <Link to="/product" className="nav__link">
                Product
              </Link>
            </li>
            <li
              key={3}
              className={
                hoveredItem === 3 || focusedItem === 3
                  ? 'customers_accent'
                  : 'customers'
              }
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
              onFocus={() => handleFocus(3)}
              onBlur={handleBlur}>
              <Link to="/customers" className="nav__link">
                Customers
              </Link>
            </li>
            <li
              key={4}
              className={
                hoveredItem === 4 || focusedItem === 4
                  ? 'income_accent'
                  : 'income'
              }
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={handleMouseLeave}
              onFocus={() => handleFocus(4)}
              onBlur={handleBlur}>
              <Link to="/income" className="nav__link">
                Income
              </Link>
            </li>
            <li
              key={5}
              className={
                hoveredItem === 5 || focusedItem === 5
                  ? 'promote_accent'
                  : 'promote'
              }
              onMouseEnter={() => handleMouseEnter(5)}
              onMouseLeave={handleMouseLeave}
              onFocus={() => handleFocus(5)}
              onBlur={handleBlur}>
              <Link to="/promote" className="nav__link">
                Promote
              </Link>
            </li>
            <li
              key={6}
              className={
                hoveredItem === 6 || focusedItem === 6 ? 'help_accent' : 'help'
              }
              onMouseEnter={() => handleMouseEnter(6)}
              onMouseLeave={handleMouseLeave}
              onFocus={() => handleFocus(6)}
              onBlur={handleBlur}>
              <Link to="/help" className="nav__link">
                Help
              </Link>
            </li>
          </ul>
        </nav>
        <div className="header-container">
          <picture>
            <source
              srcset="
                    ./src/assets/images/Ellipse@1x.webp 1x,
                    ./src/assets/images/Ellipse@2x.webp 2x
                  "
              type="image/webp"
              media="(min-width: 1200px)"
            />
            <source
              srcset="
                    ./src/assets/images/Ellipse@1x.jpg 1x,
                    ./src/assets/images/Ellipse@1x.jpg 2x
                  "
              type="image/jpeg"
              media="(min-width: 1200px)"
            />
            <source
              srcset="
                    ./src/assets/images/Ellipse@1x.webp 1x,
                    ./src/assets/images/Ellipse@2x.webp 2x
                  "
              type="image/webp"
              media="(min-width: 768px)"
            />
            <source
              srcset="
                    ./src/assets/images/Ellipse@1x.jpg 1x,
                    ./src/assets/images/Ellipse@1x.jpg 2x
                  "
              type="image/jpeg"
              media="(min-width: 768px)"
            />
            <source
              srcset="
                    ./src/assets/images/Ellipse@1x.webp 1x,
                    ./src/assets/images/Ellipse@2x.webp 2x
                  "
              type="image/webp"
              media="(max-width: 767px)"
            />
            <source
              srcset="
                    ./src/assets/images/Ellipse@1x.jpg 1x,
                    ./src/assets/images/Ellipse@1x.jpg 2x
                  "
              type="image/jpeg"
              media="(max-width: 767px)"
            />
            <img
              class="team-section__image"
              src="/src/assets/images/Ellipse@3x.jpg"
              alt="foto Evano"
              width="42"
              sizes="(min-width: 1200px) 25vw, (min-width: 768px) 50vw, 100vw"
            />
          </picture>
          <div className="header-container__user">
            <span className="header-container__user-name">Evano</span>
            <span className="header-container__user-position">
              Project Manager
            </span>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};
