import React, { Component } from 'react';
import Header from '../components/Header.js';

const withAppLayout = () => (ComposedComponent) => {
  class AppLayout extends Component {
    render() {
      return (
        <div>
           <Header />
           <ComposedComponent {...this.props} />
         </div>
      );
    }
  }

  return AppLayout;
};

export default withAppLayout;