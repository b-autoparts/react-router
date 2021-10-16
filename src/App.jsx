import "./App.css";
import { Herders } from "./pages/herder/Herder";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Contact }  from "./pages/contact/Contact";
import { Profile }  from "./pages/profile/Profile";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <Herders />
      </div>
      <div>
        <Router>
          <div className="section-letf">
            <div className="container">
              <Button
                className="buttons"
                variant="outlined"
                startIcon={<HomeIcon />}
              >
                <Link to="/">Home</Link>
              </Button>
              <br />
              <br />
              <Button
                className="buttons"
                color="warning"
                variant="outlined"
                startIcon={<InfoIcon />}
              >
                <Link to="/about">About</Link>
              </Button>
              <br />
              <br />
              <Button
                className="buttons"
                color="success"
                variant="outlined"
                startIcon={<ContactMailIcon />}
              >
               <Link to="/contact"> Contact </Link>
              </Button>
              <br />
              <br />
              <Button
                className="buttons"
                color="success"
                variant="outlined"
                startIcon={<ContactPhoneIcon />}
              >
               <Link to="/profile"> Profile </Link>
              </Button>
            </div>
          </div>
          <div>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/about">
              <About />
            </Route>
              <Route path="/contact" exact >
                <Contact />
              </Route>
              <Route path="/profile" exact >
                <Profile />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
