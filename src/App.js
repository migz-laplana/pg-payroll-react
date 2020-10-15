import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import './App.css';
import Attendance from './pages/Attendance';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Header from './components/Header';
import Payslip from './pages/Payslip';
import Signin from './pages/Signin';
import { FuegoProvider } from '@nandorojo/swr-firestore';
import { fuego } from './config/firebase';


function App() {

    const [user, setUser] = useState(true);
    const history = useHistory();

    return (
        <FuegoProvider fuego={fuego}>
            <Router>

                <div className="app">

                    {/* showing header only if logged in */}
                    {user && <Header />}


                    {!user ? <Signin />
                        :

                        <Switch>

                            <Route path="/employees">
                                <Employees />
                            </Route>

                            <Route path="/attendance">
                                <Attendance />
                            </Route>

                            <Route path="/payslip">
                                <Payslip />
                            </Route>

                            <Route path="/">
                                <Dashboard />
                            </Route>

                        </Switch>

                    }

                </div>

            </Router>

        </FuegoProvider>
    );
}

export default App;
