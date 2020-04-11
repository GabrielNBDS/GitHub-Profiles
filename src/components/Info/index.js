import React, { useState, useEffect } from "react";
import swal from 'sweetalert';

import { Container, InfoContainer, Picture, TextBox, Link } from "./styles";

const Info = ({ username }) => {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [found, setFound] = useState(false); 

  async function getUser(username){
    try {
      setFound(true);
      const data = await fetch(`https://api.github.com/users/${username}`);
      data.json().then( (response) => setUser(response));
      const reposData = await fetch(`https://api.github.com/users/${username}/repos`);
      reposData.json().then( (response) => {
        try {
          response.sort((a, b) => {
            if (a.created_at < b.created_at) {
              return 1;
            }
            if (a.created_at > b.created_at) {
              return -1;
            }
            return 0;
          });
          setRepos(response.slice(0,4))
          
        } catch (error) {
          swal("User not found");
          setFound(false);
        }
      });
    } catch (error) {
      swal("User not found");
    }
    
    
  } 

  const userInfo = (user) => {
    return(<Container>
      <InfoContainer>
        <Picture url={user.avatar_url}/>
        <TextBox>
          Name: {user.name}<br/>Username: {user.login}<br/>Followers: {user.followers}<br/>Repositories count: {user.public_repos}
        </TextBox>
        <TextBox>
        Newest Repositories:<br/>{ repos.map(element => { return ( <div key={element.id}> <Link  target="_blank" href={`https://github.com/${username}/${element.name}`}> {element.name} </Link> <br/> </div>)})}
        </TextBox>
      </InfoContainer>
      
    </Container>
    )
    
  }

  useEffect( () => {
    getUser(username);
  }, [username]);

  return(
    <>
      {(user !== {} & found === true) ? userInfo(user) : null }
    </>
  );
}

export default Info;