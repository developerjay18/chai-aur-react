import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData();
  return (
    <div className="bg-gray-200 text-center py-4">
      <div className="followers font-semibold text-xl pb-3">
        Github followers : {data.followers}
      </div>
      <div className="github-avatar text-center flex justify-center bg-gray-700">
        <img src={data.avatar_url} alt="github-avatar" width={300} />
      </div>
    </div>
  );
}

export default Github;

export const loadGithubData = async () => {
  let response = await fetch('https://api.github.com/users/developerjay18');
  return response.json();
};
