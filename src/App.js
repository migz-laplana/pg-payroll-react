import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    Redirect,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Payslip from "./pages/Payslip";
import Signin from "./pages/Signin";
import { FuegoProvider } from "@nandorojo/swr-firestore";
import { fuego } from "./config/firebase";

function App() {
    const [user, setUser] = useState(true);
    const history = useHistory();

    return (
        <FuegoProvider fuego={fuego}>
            <Router>
                <div className="app">
                    {/* {user && <Header />} */}

                    <Switch>
                        {!user ? (
                            <div>
                                <Redirect to="/signin" />
                                <Route exact path="/signin">
                                    <Signin />
                                </Route>
                            </div>
                        ) : (
                            <div>
                                <Redirect from="/" to="/home" />
                                <Route
                                    exact
                                    path="/:pageName?"
                                    render={(props) => <Header {...props} />}
                                />
                            </div>
                        )}
                    </Switch>
                </div>
            </Router>
        </FuegoProvider>
    );
}

export default App;
