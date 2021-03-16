import { createContext, useEffect, useState } from 'react';
import { getMembers } from '../sevices/gitProfileAPI'

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    const results = await getMembers()
    setData([...results]);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const handleInput = ({ target }) => {
      //  name: target.value
  };

  const context = {
    data
  };

  return (
    <ProfileContext.Provider value={context}>
      { children }
    </ProfileContext.Provider>
  );
};
