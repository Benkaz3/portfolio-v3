// src/pages/BlogPost.js
import { useParams } from 'react-router-dom';
import useContentful from '../../hooks/useContentful';
import SEO from '../components/SEO';
import Author from '../components/Author';
import RichImage from '../components/RichImage';
import styled from 'styled-components';

const PostContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const BlogPost = () => {
  const { slug } = useParams();
  const { data: posts, loading, error } = useContentful({
    content_type: 'blogPost',
    'fields.slug': slug,
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading post</div>;

  const post = posts[0].fields;

  return (
    <PostContainer>
      {post.seoFields && <SEO seo={post.seoFields.fields} />}
      <h1>{post.title}</h1>
      {post.subtitle && <h2>{post.subtitle}</h2>}
      {post.featuredImage && <RichImage image={post.featuredImage.fields} />}
      {post.content && <div dangerouslySetInnerHTML={{ __html: post.content }} />}
      {post.author && <Author author={post.author.fields} />}
      {post.relatedBlogPosts && (
        <div>
          <h3>Related Posts</h3>
          <ul>
            {post.relatedBlogPosts.map((relatedPost) => (
              <li key={relatedPost.sys.id}>{relatedPost.fields.title}</li>
            ))}
          </ul>
        </div>
      )}
    </PostContainer>
  );
};

export default BlogPost;
