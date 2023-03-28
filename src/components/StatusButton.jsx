import styled from "styled-components";

const StyledButton = styled.button`
  padding: 8px 16px;
  background: ${(props) =>
    props.isClick ? "var(--brand-color)" : "var(--white)"};
  border: 1px solid var(--brand-color);
  border-radius: 50px;
  font-size: 16px;
  color: ${(props) => (props.isClick ? "var(--white)" : "var(--brand-color)")};
  cursor: pointer;
`;

function StatusButton({
  defaultName,
  clickName,
  onTopUserLike,
  topUser,
  isFollowed,
}) {
  return (
    <StyledButton
      isClick={isFollowed}
      onClick={() => onTopUserLike?.(topUser.id)}
    >
      {onTopUserLike ? clickName : defaultName}
    </StyledButton>
  );
}

export default StatusButton;
