// src/components/RichImage.js
import styled from 'styled-components';

const ImageContainer = styled.div`
  margin: 20px 0;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  display: flex;
  justify-content: center; // Center image horizontally
`;

const ResponsiveImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block; // Remove extra space below image
`;

const RichImage = ({ image }) => (
  <ImageContainer fullWidth={image.fullWidth}>
    <ResponsiveImage src={image.url} alt={image.title} />
    {image.caption && <figcaption>{image.caption}</figcaption>}
  </ImageContainer>
);

export default RichImage;
