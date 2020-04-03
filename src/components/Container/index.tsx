import React from "react";

import { Container } from "./styles";
import Search from "../Search";

const Header: React.FC = () => {

  return(
    <Container>
      <Search />
    </Container>
    
  );
}

export default Header;