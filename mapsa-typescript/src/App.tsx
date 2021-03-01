import React, { ChangeEvent, useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import StarIcon from '@material-ui/icons/Star';
import { makeStyles, Theme, createStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  icon: {
    color: theme.palette.primary.main
  },
  responsive: {
    color: "blue",
    [theme.breakpoints.down('sm')]: {
      color: 'red'
    }
  }
}))

interface AppProps {
  firstName: string
}

const App = (props: AppProps) => {
  const classes = useStyles();
  const [user, setUser] = useState({ firstName: props.firstName, lastName: "" });
  const [error, setError] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser(pre => ({ ...pre, [e.target.name]: e.target.value }));
  }

  useEffect(() => {
    if (user.firstName.length > 3) {
      setError('Maximum length 4');
    }
    else {
      setError('');
    }
  }, [user.firstName.length])

  const handleSubmit = () => { }
  return (
    <Box m={1}>
      <Typography className={classes.responsive}>Test</Typography>
      <TextField variant="outlined" name="firstName" value={user.firstName} onChange={handleChange} />
      <input name="lastName" value={user.lastName} onChange={handleChange} />
      {error && <span>{error}</span>}
      <button onClick={handleSubmit} disabled={!user.firstName}>submit</button>
      <StarIcon className={classes.icon} />
    </Box>
  );
}

export default App;
