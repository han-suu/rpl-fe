import { Fragment } from "react";

import Image from "next/image";

import styled from "styled-components";

import { Input, Button } from "antd";
import { UserOutlined, HeartOutlined, ShoppingCartOutlined, UploadOutlined } from "@ant-design/icons";

//Styling components
const NavbarBackground = styled.div`
  position: absolute;
  top: 0;
  padding: 2vh 1vw;
  background-color: darkgray;
  color: black;
  width: 100vw;
  height: 9vh;
  box-shadow: 0 8px 8px -4px #0000000f;
`;

const LeftNavbar = styled.div`
  float: left;
`;

const RightNavbar = styled.div`
  float: right;
  font-size: 20px;
`;

const ImageBox = styled.div`
  margin-left: 2vw;
  display: inline-block;
`;

const CategoriesBar = styled.div`
  display: inline-block;
  position: relative;
  top: -2vh;
`;

const CategoryLink = styled.a`
    font-size: 1.15vw;
    color: black;
    margin-left: 1vw;
`;

const SearchGroup = styled(Input.Group)`
  display: inline-block !important;
  width: 50vw;
  position: relative;
  top: -2vh;
`;

const SearchInput = styled(Input.Search)`
  display: inline-block !important;
  width: 40vw;
  margin-left: 2vw;
  height: 5vh;
`;

function PublicNavbar() {
  return (
    <Fragment>
      <NavbarBackground>
        <LeftNavbar>
          <ImageBox>
            <Image
              src="/images/Startup-Campus-Site-Logo.png"
              alt="Startup Campus Logo"
              width={150}
              height={40}
            />
          </ImageBox>
          <CategoriesBar>
            <CategoryLink href="http://www.google.com" target="_blank">Category A</CategoryLink>
            <CategoryLink href="http://www.google.com" target="_blank">Category B</CategoryLink>
            <CategoryLink href="http://www.google.com" target="_blank">Category C</CategoryLink>
            <CategoryLink href="http://www.google.com" target="_blank">Category D</CategoryLink>
          </CategoriesBar>
          <SearchGroup compact>
            <SearchInput
              placeholder="Search / upload your picture"
            />
            <Button icon={<UploadOutlined />} />
          </SearchGroup>
        </LeftNavbar>
        <RightNavbar>
          <UserOutlined style={{ paddingTop: "1vh", marginRight: "1vw" }} />
          <HeartOutlined style={{ paddingTop: "1vh", marginRight: "1vw" }} />
          <ShoppingCartOutlined style={{ paddingTop: "1vh" }} />
        </RightNavbar>
      </NavbarBackground>
    </Fragment>
  );
}

export default PublicNavbar;