import React, { useState, useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import testContext from '../context/testContext';

const useStyles = makeStyles((theme) => ({
  root: {
  }
}));

const Base = () => {
  const classes = useStyles();
  const theContext = useContext(testContext);
  const [testValue, setTestValue] = useState(theContext.testValue)

  return (
    <div className={classes.root} onClick={() => setTestValue(testValue + 1)}>{testValue}</div>
  )
};

export default Base;
