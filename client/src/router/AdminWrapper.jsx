import React, { useEffect, useState } from 'react';

import { Redirect } from 'react-router-dom';

import UserService from '../services/UserService';

const AdminWrapper = ({ children }) => {
  const [isUserAdmin, setIsUserAdmin] = useState(null);

  useEffect(async () => {
    const response = await UserService.ping();
    setIsUserAdmin(!!((response.status === 200 && response.data.isAdmin)));
  }, []);
  if (isUserAdmin) {
    return (
      <div>
        {children}
      </div>
    );
  }

  return <Redirect to='/admin' />;
};

export default AdminWrapper;
