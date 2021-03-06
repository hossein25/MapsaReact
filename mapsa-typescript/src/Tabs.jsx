import { Box, Button } from '@material-ui/core';
import { NavLink, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Tabs = props => {
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
            </Box>
            <Box>

                <Switch>
                    <Route exact path="/tommy/:id" component={Tommy} />
                    <Route exact path="/tommy" component={Tommy} />
                    <Route exact path="/cuker" component={Cuker} />
                </Switch>
            </Box>
        </Box>
    </Router>
}

export default Tabs;

const Tommy = props => {
    return <div>Tommy</div>
}

const Cuker = props => {
    return <div>Cuker</div>
}