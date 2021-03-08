import { Box, Button, Link } from '@material-ui/core';
import { NavLink, BrowserRouter as Router, Route, Switch, Link as RouterLink } from 'react-router-dom';

const Tabs = props => {
    console.log("TAB");
    return <Router>
        Tabs
        <Box display="flex">
        <Box display="flex" flexDirection="column">
                <NavLink to="/tommy">
                Tommy
                </NavLink>
                <NavLink to="/cuker">
                Cuker
                </NavLink>
                <Link component={RouterLink} to="/tommy" >Material Link</Link>
            </Box>
            <Box>
                <Switch>
                    <Route exact path="/tommy/:id" component={Tommy} />
                    <Route exact path="/tommy" >
                        <Tommy />
                    </Route>
                    <Route exact path="/cuker" render={() => <Cuker />} />
                </Switch>
            </Box>
        </Box>
    </Router>
}

export default Tabs;

const Tommy = props => {
    console.log("TOMMY");
    return <div>Tommy</div>
}

const Cuker = props => {
    return <div>Cuker</div>
}