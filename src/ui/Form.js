import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: #18212f;
      border: 1px solid #18212f;

      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}
    
   overflow: hidden;
  font-size: 1.4rem;
`;

Form.defaultProps = { type: "regular" };

export default Form;
