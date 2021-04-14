import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home Page
      <Box m={2}>
        <Link to="/login">Login</Link>
      </Box>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default Home;
