import styled from 'styled-components';

export const StyledButton = styled.button`
  --font-size: 1em;
  --text: #fff;
  --shadow: ${props => props.disabled ? `none` : `0 2px 8px -1px rgba(39, 94, 254, 0.32);`};
  --shadow-hover: ${props => props.disabled ? `none` : `0 4px 20px -2px rgba(39, 94, 254, 0.5);`};
  --background-color: ${props => props.disabled ? `#cacaca` : `#275efe`};
  margin: 1em;
  padding: 0.25em 1em;
  background-color: var(--background-color);
  padding: 16px 32px;
  font-weight: 500;
  line-height: var(--font-size);
  border-radius: 24px;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: var(--font-size);
  letter-spacing: 0.5px;
  color: var(--text);
  box-shadow: var(--shadow);

  &:hover {
    box-shadow: var(--shadow-hover);
  }
`;