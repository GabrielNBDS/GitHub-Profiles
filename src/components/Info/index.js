import React, { useState, useEffect } from "react";

import { Container, Picture, TextBox, Link } from "./styles";

const Info = ({ username }) => {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  async function getUser(username){
    const data = await fetch(`https://api.github.com/users/${username}`);
    data.json().then( (response) => setUser(response));
    const reposData = await fetch(`https://api.github.com/users/${username}/repos`);
    reposData.json().then( (response) => {
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
    });
    
  } 

  const userInfo = (user) => {
    return(<Container>
      <div style={{display: "flex"}}>
        <Picture url={user.avatar_url}/>
        <TextBox>
          Name: {user.name}<br/>Username: {user.login}<br/>Followers: {user.followers}<br/>Repositories count: {user.public_repos}
        </TextBox>
        <TextBox>
        Newest Repositories:<br/>{ repos.map(element => { return ( <div> <Link href={`https://github.com/${username}/${element.name}`}> {element.name} </Link> <br/> </div>)})}
        </TextBox>
      </div>
      
    </Container>
    )
    
  }

  useEffect( () => {
    getUser(username);
  }, [username]);

  return(
    <>
      {user !== {} && userInfo(user)}
    </>
  );
}

export default Info;