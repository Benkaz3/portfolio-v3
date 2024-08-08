// src/pages/Blog.jsx
import { Link } from 'react-router-dom';
import useContentful from '../../hooks/useContentful';
import SEO from '../components/SEO';
import styled from 'styled-components';
import Container from '../components/Container';
import RichImage from '../components/RichImage';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';

const PostList = styled.ul`
  max-width: 1200px;
  margin: 0 auto;
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FullWidthPost = styled.li`
  grid-column: 1 / -1;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const PostItem = styled.li`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const PostImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const PostTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 10px;
`;

const PostDescription = styled.p`
  font-size: 1rem;
  margin: 0 0 15px;
`;

const PostMeta = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: #666;

  & > * {
    margin-right: 10px;
  }
`;

const Blog = () => {
  const { data, loading, error } = useContentful([
    { content_type: 'pageLanding' },
    { content_type: 'pageBlogPost' }
  ]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  console.log('Fetched Data:', data);

  const landingPage = data.pageLanding ? data.pageLanding[0]?.fields : {};
  const blogPosts = data.pageBlogPost || [];
  const featuredPost = landingPage.featuredBlogPost || {};

  return (
    <Container>
      {landingPage.seoFields && <SEO seo={landingPage.seoFields.fields} />}
      <h1>{landingPage.internalName}</h1>
      <PostList>
        {featuredPost.fields ? (
          <FullWidthPost key={featuredPost.sys.id}>
            <PostTitle>{featuredPost.fields.title}</PostTitle>
            {featuredPost.fields.featuredImage && (
              <RichImage
                image={{
                  url: featuredPost.fields.featuredImage.fields.file.url,
                  title: featuredPost.fields.featuredImage.fields.title,
                  caption: featuredPost.fields.featuredImage.fields.description,
                }}
              />
            )}
            <PostDescription>{featuredPost.fields.shortDescription || 'No description available'}</PostDescription>
            <Link to={`/post/${featuredPost.fields.slug}`}>Read More</Link>
          </FullWidthPost>
        ) : (
          <p>No featured blog post found.</p>
        )}

        {blogPosts.map(post => (
          <PostItem key={post.sys.id}>
            <PostTitle>{post.fields.title}</PostTitle>
            {post.fields.featuredImage && (
              <PostImage
                src={post.fields.featuredImage.fields.file.url}
                alt={post.fields.featuredImage.fields.title}
              />
            )}
            <PostDescription>{post.fields.shortDescription || 'No description available'}</PostDescription>
            <PostMeta>
              <FaUser />
              <span>{post.fields.author.fields.name}</span>
              <FaCalendarAlt />
              <span>{new Date(post.fields.publishedDate).toLocaleDateString()}</span>
            </PostMeta>
            <Link to={`/post/${post.fields.slug}`}>Read More</Link>
          </PostItem>
        ))}
      </PostList>
    </Container>
  );
};

export default Blog;
