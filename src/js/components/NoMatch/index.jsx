import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => (
  <section className={ 'no_match' }>
    <div>404</div>
    <h1>Oops no page found</h1>
    <Link to='/'>Go Back</Link>
  </section>
);

export default NoMatch;
