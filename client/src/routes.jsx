import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/Header';

import Home from './containers/Home';
import Detail from './containers/Detail';
import Profile from './containers/Profile';
import Pay from './containers/Pay';
import Transaction from './containers/Transaction';
import ListFilm from './containers/ListFilm';
import AddFilm from './containers/AddFilm';
import AddEpisode from './containers/AddEpisode';
import P404 from './error-pages/P404';

// const fakeAuth = {
//   isAuthenticated: true,
//   authenticate() {
//     fakeAuth.isAuthenticated = true;
//   },
//   signout() {
//     fakeAuth.isAuthenticated = false;
//   },
// };

// if (login) fakeAuth.authenticate();

// function AuthButton() {
//   let history = useHistory();

//   return fakeAuth.isAuthenticated ? (
//     <p>
//       Welcome!{' '}
//       <button
//         onClick={() => {
//           fakeAuth.signout(() => history.push('/'));
//         }}
//       >
//         Sign out
//       </button>
//     </p>
//   ) : (
//     <p>You are not logged in.</p>
//   );
// }

const PrivateRoute = ({ children, roles, user, isLogin, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogin && roles.includes(user) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const Routes = (props) => {
  const { user, isLogin } = props;

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/category/:id/:categoryName" component={Home} />
          <Route path="/detail/:idFilm/:title/:idEp" component={Detail} />
          <PrivateRoute
            isLogin={isLogin}
            roles={['admin', 'user']}
            user={user.role}
            path="/profile/:user"
          >
            <Profile />
          </PrivateRoute>
          <PrivateRoute
            isLogin={isLogin}
            roles={['admin', 'user']}
            user={user.role}
            path="/pay/:userId"
          >
            <Pay />
          </PrivateRoute>
          <PrivateRoute
            isLogin={isLogin}
            roles={['admin', 'user']}
            user={user.role}
            path="/admin/transactions"
          >
            <Transaction />
          </PrivateRoute>
          <PrivateRoute
            isLogin={isLogin}
            roles={['admin']}
            user={user.role}
            path="/admin/list-film"
          >
            <ListFilm />
          </PrivateRoute>
          <PrivateRoute isLogin={isLogin} roles={['admin']} user={user.role} path="/admin/add-film">
            <AddFilm />
          </PrivateRoute>
          <PrivateRoute
            isLogin={isLogin}
            roles={['admin']}
            user={user.role}
            path="/admin/:idFilm/add-episode"
          >
            <AddEpisode />
          </PrivateRoute>
          <Route path="*" component={P404} />
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    isLogin: state.authReducer.isLogin,
    user: state.authReducer.user,
  };
};

export default connect(mapStateToProps)(Routes);
