import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function NavBar(authenticate, setAuthenticate) {
  const navigate = useNavigate();
  const [isMenu, setIsMenu] = useState(false);
  const menuList = [
    "새소식",
    "제품정보",
    "놀이방법",
    "이벤트",
    "카드검색",
    "상세카드",
  ];

  const search = (e) => {
    if (e.key === "Enter") {
      let keyword = e.target.value;
      console.log(keyword);
      navigate(`/?q=name:${keyword}`);
    }
  };

  return (
    <Container>
      <img
        src="https://pokemoncard.co.kr/v3/img/card_main_logo.png"
        alt="pokemon-logo"
        onClick={() => {
          navigate("/");
        }}
      />
      <FontAwesomeIcon
        icon={faXmark}
        size="2x"
        className="exit"
        onClick={() => {
          setIsMenu((prev) => !prev);
        }}
      />
      <MenuBar>
        {menuList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </MenuBar>

      <MenuContainer isMenu={isMenu}>
        <FontAwesomeIcon
          icon={faXmark}
          size="2x"
          onClick={() => {
            setIsMenu((prv) => !prv);
          }}
          className="exit"
        />
        <ul>
          {menuList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </MenuContainer>

      <SearchBar>
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="text"
          placeholder="카드 검색"
          onKeyDown={(e) => {
            search(e);
          }}
        />
      </SearchBar>
      <Login
        onClick={() => {
          navigate("/login");
        }}
      >
        <FontAwesomeIcon icon={faCircleUser} size="2x" />
        {authenticate ? "로그아웃" : "로그인"}
      </Login>
    </Container>
  );
}

export default NavBar;

const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  img {
    cursor: pointer;
    @media screen and (max-width: 991px) {
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const MenuBar = styled.ul`
  display: flex;
  gap: 20px;
  li {
    cursor: pointer;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 60px;
  height: 60px;
  cursor: pointer;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  border-bottom: 1px solid black;
  height: 30px;

  input {
    width: 80px;
    border: 0;
    outline: none;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
  width: 200px;
  height: 100vh;
  background-color: #f1f198;
  transition: transform 0.3s ease;
  z-index: 20;
  transform: ${(props) =>
    props.isMenu ? "translateX(0)" : "translateX(-200px)"};
  ul {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 10px;
  }
  .exit {
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 20px;
  }
`;
