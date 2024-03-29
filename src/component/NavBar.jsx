import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function NavBar(authenticate, setAuthenticate) {
  const navigate = useNavigate();
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
      navigate(`/?q=${keyword}`);
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
      <MenuBar>
        {menuList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </MenuBar>

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
  }
`;

const MenuBar = styled.ul`
  display: flex;
  gap: 20px;
  li {
    cursor: pointer;
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
`;
