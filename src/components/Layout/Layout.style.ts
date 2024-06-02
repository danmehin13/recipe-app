import styled from 'styled-components';

const StyledLayout = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;

  @media (max-width: 768px) {
    max-width: 480px;
  }
`;

export default StyledLayout