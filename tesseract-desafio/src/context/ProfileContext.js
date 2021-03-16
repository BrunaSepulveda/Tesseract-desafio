import { createContext, useEffect, useState } from 'react';
import { getMembers } from '../sevices/gitProfileAPI'

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filterByLogin, setFilterByLogin] = useState("")

  const fetchdata = async () => {
    const results = await getMembers()
    setData([...results]);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const handleInput = ({ target }) => {
      setFilterByLogin(target.value)
  };

  const context = {
    data,
    filterByLogin,
    handleInput
  };

  return (
    <ProfileContext.Provider value={context}>
      { children }
    </ProfileContext.Provider>
  );
};
