import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const { userid } = useParams();
  return (
    <div className="bg-gray-200 text-center py-5 text-lg">User : {userid}</div>
  );
}

export default User;
