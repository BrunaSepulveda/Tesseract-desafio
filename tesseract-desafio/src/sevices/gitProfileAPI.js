const PUBLIC_MEMBERS = "https://api.github.com/orgs/grupotesseract/public_members";


export const  getMembers = async () => {
  try {
    const response = await fetch(`${PUBLIC_MEMBERS}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const getOneProfile = async ( user ) => {
  const endpoint = `https://api.github.com/users/${user}`; 
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    const members = {
      nome: data.name,
      qt_repositorios: data.public_repos,
      qt_seguidores: data.followers,
      data_inicio: data.created_at 
    };
    return members;
  } catch (error) {
    return error;
  }
};

/*
    
 */