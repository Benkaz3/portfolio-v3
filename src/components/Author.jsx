// src/components/Author.js
import styled from 'styled-components';

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 15px;
`;

const AuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const Author = ({ author }) => (
  <AuthorContainer>
    <ProfilePicture src={author.avatar.fields.file.url} alt={author.name} />
    <AuthorDetails>
      <div>{author.name}</div>
    </AuthorDetails>
  </AuthorContainer>
);

export default Author;
