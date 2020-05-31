import React from 'react';
import { Router, Switch ,Route , Redirect, Link} from "react-router-dom";
import history from './pages/history';
import Notes from './pages/Notes';
import CreateUser from './pages/CreateUser'
import LogIn from './pages/LogIn'
import Cookies from 'js-cookie'

function App() {


  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      Cookies.get("isLoggedIn") == "true"
        ? <Component {...props} />
        : <Redirect to='/' />
    )} />
  )


  return (
   <Router history={history}>
     <div>
     <Switch>
       <Route path="/create" component={CreateUser}/>
       <PrivateRoute path='/note' component={Notes} />
       <Route exact path ="/" component={LogIn}/>
     </Switch>
     </div>
   </Router>
  );
}

export default App;
