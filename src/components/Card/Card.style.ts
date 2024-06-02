import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #F1F1F1;
  color: #1E1E1E;
  width: 100%;
  text-align: left;
  margin-bottom: 2rem;
`;

const CardDetailContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const CardImage = styled.img`
  height: 15rem;
  max-width: 100%;
  object-fit: cover;

  @media (min-width: 768px) {
    max-width: 15rem;
    height: auto;
    max-height: auto;
  }
`;

const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: start;
  align-content: flex-start;

  p {
    line-height: 1.5rem;
  }
`;

const CardHeading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin: 0 0 1rem 0;
`;

const Tag = styled.div`
  display: inline-block;
  margin: 0 .5rem 1rem 0;
  font-size: .75rem;
  font-weight: bold;
  background: #1CAC78;
  color: #1E1E1E;
  padding: .5rem .75rem;
  border-radius: 1rem;
`;

const ViewButton = styled.button`
  background: none; 
  padding: 0;
  border: none;
  font-weight: bold;
  margin: 1rem 0 0 0;
  font-size: .875rem;
  cursor: pointer;
`;

const ViewDetails = styled.div<{ isVisible: boolean }>`
  margin: 0 2rem 0;
  padding: ${props => (props.isVisible ? '2rem 0' : '0')};
  max-height: ${props => (props.isVisible ? '1000px' : '0')};
  overflow: hidden;
  display: flex;
  flex-direction: row;
  transition: all 0.5s ease-in-out;
  border-top: ${props => (props.isVisible ? '2px solid #1E1E1E' : 'none')};

  @media (min-width: 768px) {
    margin: 0 2rem 0 17rem;
  }
`;

const ViewDetailsItems = styled.div`
  flex: 1 1 0;

  h3 {
    margin: 0 0 1.5rem 0;
  }
  
  ul {
    list-style: none;

    li {
      margin: 0 0 1rem 0;
    }
  }
`;

const PrepList = styled.ol`
  list-style: none;
  counter-reset: item;

  li {
    position: relative;
    counter-increment: item;
    margin: 0 0 1rem 1.5rem;

    @media (min-width: 768px) {
      margin: 0 0 1rem 2.5rem;
    }
  }

  li:before {
    position: absolute;
    top: 0;
    left: -1.5rem;
    content: counter(item);
    color: #1E1E1E;
    font-size: 1rem;
    font-weight: bold;
    font-style: italic;

    @media (min-width: 768px) {
      top: -.25rem;
      left: -2.25rem;
      font-size: 1.25rem;
    }
  }
`;

export { CardContainer, CardDetailContainer, CardImage, CardDetails, CardHeading, Tag, ViewButton, ViewDetails, ViewDetailsItems, PrepList };
