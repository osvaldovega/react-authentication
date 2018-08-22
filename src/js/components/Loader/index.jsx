import React from 'react';
import { LinearProgress } from '@material-ui/core';

const Loader = (props) => (
  <div className={ 'loader' }>
    <LinearProgress />
  </div>
);

export default Loader;
