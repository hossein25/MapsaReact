import { AppBar, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import { aboutUsPath } from "./routePath";

const Layout = (props) => {
  return (
    <Box width={1} height="100vh" display="flex" flexDirection="column">
      <AppBar>
        <Link to={aboutUsPath}>About Us</Link>
        <Link to="/">Home</Link>
      </AppBar>
      <Box>{props.children}</Box>
    </Box>
  );
};

export default Layout;
