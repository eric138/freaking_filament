import React from 'react';
import Base from './components/Base';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'green'
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Base></Base>
    </div>
  )
};

export default App;
