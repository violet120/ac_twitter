import logo from "../assets/icons/logo.svg";
import styled from "styled-components";

const StyleLogo = styled.img`
  display: block;
  width: ${(props) => props.width};
`;

function Logo({ width }) {
  return <StyleLogo src={logo} alt="logo" width={width} />;
}

export default Logo;
