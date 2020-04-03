import React, { useState, useEffect } from "react";

interface Props {
  username: string;
}

const Info: React.FC<Props> = ({ username }) => {
  /* const [data, setData] = useState({});
  let aux;

  useEffect( () => {
    async function getData(username: string){
      aux = await fetch(`https://api.github.com/users/${username}`);
      console.log(aux);
    } 

    getData(username);
    
  }, []); */
  return(
    <h1>
      a
    </h1>
  );
}

export default Info;