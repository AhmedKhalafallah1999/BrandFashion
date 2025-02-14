import styled from "styled-components";
const Wrapper = styled.button`
  width: fit-content;
  text-transform: uppercase;
  font-size: 1rem;
  padding: 0.8rem 2rem;
  font-weight: 600;
  margin-top: 1.2rem;
  /* text-align: center; */
  cursor: pointer;
  border: none;
  transition: 0.2s ease;
  &:hover {
    background-color: ${({ variant }) =>
      variant === "find-more" ? "white" : "black"};
    color: ${({ variant }) => (variant === "find-more" ? "black" : "white")};
  }
  background-color: ${({ variant }) =>
    variant === "find-more" ? "transparent" : "white"};
  border: ${({ variant }) => variant === "find-more" && "1px solid white"};
  color: ${({ variant }) => variant === "find-more" && "white"};
  @media (max-width: 600px) {
    & {
      width: 90%;
    }
  }
  @media (min-width: 600px) and (max-width: 992px) {
    & {
      /* min-width: 90%; */
    }
  }
`;
export default Wrapper;
