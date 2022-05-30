import styled from 'styled-components';

interface Props {
  outlined?: boolean;
}

export default styled.button<Props>`
  background: ${(p) => (p.outlined ? 'transpaent' : 'var(--twitter)')};
  color: ${(p) => (p.outlined ? 'var(--twitter)' : 'var(--white)')};
  border: ${(p) => p.outlined && '1px solid var(--twitter)'};

  padding: 16px;
  border-radius: 50px;

  font-weight: bold;
  font-size: 15px;

  cursor: pointer;
  outline: 0;

  &:hover {
    background-color: ${(p) =>
      p.outlined ? 'var(--twitter-dark-hover)' : 'var(--twitter-light-hover)'};
  }
`;
