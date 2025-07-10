import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBookOpen, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/DetialContext/CartContext';

const Header = () => {
    const { cart } = useCart();
    const [menuOpen, setMenuOpen] = useState(false);
    const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

    const toggleMenu = () => setMenuOpen(!menuOpen);// dong mở menu trên màn hình di dộng
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
            <div className="container">
                <NavLink className="navbar-brand d-flex align-items-center" to="/" onClick={closeMenu}>
                    <FaBookOpen className="me-2" />
                    AI-Edu Platform
                </NavLink>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleMenu}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav ms-auto align-items-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" onClick={closeMenu}>
                                Trang chủ
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/favorites" onClick={closeMenu}>
                                Yêu thích
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/history" onClick={closeMenu}>
                                Lịch sử
                            </NavLink>
                        </li>
                        <li className="nav-item position-relative ms-lg-2">
                            <NavLink className="nav-link" to="/cart" onClick={closeMenu}>
                                <FaShoppingCart size="1.2rem" />
                                {totalItemsInCart > 0 && (
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger border border-light">
                                        {totalItemsInCart}
                                    </span>
                                )}
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
