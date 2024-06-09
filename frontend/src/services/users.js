const URL = 'http://localhost:3000/users' ;

const getUsers = async () => {
  
    const request = await fetch(URL);
    const response = await request.json();
    console.log('respuesta:', response);
    return response;


};

export { getUsers };