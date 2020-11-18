import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Button, Modal, InputGroup, FormControl } from 'react-bootstrap';
import AuthButton from './AuthButton';
import UserNavigation from './UserNavigation';
import { connect } from 'react-redux';
import { getCategories } from '../redux/actions/category.action';
import slugify from 'slugify';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    };
  }

  // Login between User Dropdown & Login/Register Page
  rightNavigation = () => {
    if (this.props.isLogin) {
      return <UserNavigation fullName={this.props.user.fullName} />;
    } else {
      return <AuthButton />;
    }
  };

  // Get Login from LocalStorage & Set State
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    const { categories, loading, error } = this.props;
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-black">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExampleDefault"
              aria-controls="navbarsExampleDefault"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            {/* <- Left Menu -> */}
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item mr-2">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                {categories.length > 0 && !loading & !error
                  ? categories.map((category) => {
                      return (
                        <li key={category.id} className="nav-item mr-2">
                          <Link
                            to={`/category/${category.id}/${slugify(category.name, {
                              lower: true,
                            })}`}
                            className="nav-link"
                          >
                            {category.name}
                          </Link>
                        </li>
                      );
                    })
                  : 'a'}
              </ul>
              {/* <- Logo Center -> */}
              <div className="mx-auto order-0 d-none d-md-block">
                <Link className="navbar-brand mx-auto" to="/">
                  <img src={`/images/logo.png`} alt="" />
                </Link>
              </div>
              {/* <- Button Register & Log In Right -> */}
              {this.rightNavigation()}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.authReducer.isLogin,
    user: state.authReducer.user,
    categories: state.categoryReducer.categories,
    loading: state.categoryReducer.loading,
    error: state.categoryReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(getCategories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
