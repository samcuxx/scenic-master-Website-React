import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header class="site-navbar mt-3" id="top">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="site-logo col-6">
              <a href="/">Scenic</a>
            </div>

            <nav class="mx-auto site-navigation">
              <ul class="site-menu js-clone-nav d-none d-lg-block">
                <li>
                  <NavLink
                    to="/"
                    exact
                    activeClassName="active"
                    class="nav-link active"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/about">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/portfolio">
                    Portfolio
                  </NavLink>
                </li>
                <li class="has-children">
                  <NavLink activeClassName="active" to="/services">
                    Pages
                  </NavLink>
                  <ul class="dropdown">
                    <li>
                      <NavLink activeClassName="active" to="/services">
                        Services
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active" to="/serviceSingle">
                        Service Single
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active" to="/blogSingle">
                        Blog Single
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active" to="portfolioSingle">
                        Portfolio Single
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active" to="/testimonials">
                        Testimonials
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active" to="/faq">
                        Frequently Ask Questions
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active" to="/gallery">
                        Gallery
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/blog">
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>

            <div class="col-6 site-burger-menu d-block d-lg-none text-right">
              <a href="#" class="site-menu-toggle js-menu-toggle">
                <span class="icon-menu h3"></span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
