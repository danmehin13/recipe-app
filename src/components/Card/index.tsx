import React, { useState } from 'react';
import { 
  CardContainer, 
  CardDetailContainer, 
  CardImage, 
  CardDetails, 
  CardHeading, 
  Tag, 
  ViewButton, 
  ViewDetails, 
  ViewDetailsItems, 
  PrepList 
} from './Card.style';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { RecipeData } from '../../types/datatypes';

interface CardProps {
  data: RecipeData;
}

const Card: React.FC<CardProps> = ({ data }) => {
  const [viewMore, setViewMore] = useState(false);

  const handleClick = () => {
    setViewMore(prevViewMore => !prevViewMore);
  };

  const { thumbnail_url, name, tags, description, instructions } = data;
  const topTags = tags.slice(0, 5);

  return (
    <CardContainer>
      <CardDetailContainer>
        <CardImage src={thumbnail_url} alt={name} />
        <CardDetails>
          <CardHeading>{name}</CardHeading>
          <div>
            {topTags.map(tag => (
              <Tag key={tag.id}>{tag.display_name}</Tag>
            ))}
          </div>
          <p>{description}</p>
          <ViewButton onClick={handleClick}>
            View more {viewMore ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ViewButton>
        </CardDetails>
      </CardDetailContainer>
      <ViewDetails isVisible={viewMore}>
        <ViewDetailsItems>
          <h3>Preparation</h3>
          <PrepList>
            {instructions.map(item => (
              <li key={item.id}>{item.display_text}</li>
            ))}
          </PrepList>
        </ViewDetailsItems>
      </ViewDetails>
    </CardContainer>
  );
};

export default React.memo(Card);
