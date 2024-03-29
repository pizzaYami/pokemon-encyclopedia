import React from "react";
import styled from "styled-components";

function NavBar() {
  return (
    <Container>
      <Login></Login>
    </Container>
  );
}

export default NavBar;

const Container = styled.div`
  width: 100%;
`;

const Login = styled.div``;
