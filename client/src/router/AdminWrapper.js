import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Auth from '../pages/Admin/Auth';
import UserService from '../services/UserService';

const AdminWrapper = ({ children }) => {
  const [isUserAdmin, setIsUserAdmin] = useState(null)

  useEffect(async () => {
      const response = await UserService.ping();
      setIsUserAdmin((response.status === 200 && response.data.isAdmin) ? true : false  )

  }, [])
    console.log(isUserAdmin)
  // const isUserAdmin = async () => {
  //   const response = await UserService.ping();
  //     console.log(response)
  //
  //   if (response.status === 200) {
  //     return true;
  //   }
  //
  //   return false;
  // };
  //   console.log(isUserAdmin())
  if (isUserAdmin) {
    return (
      <div>
        {children}
      </div>
    );
  }

  return <Redirect to='/signin' />;
};

export default AdminWrapper;
