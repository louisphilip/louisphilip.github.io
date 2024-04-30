import Article from '../models/Article';
import fetchMediumArticles from '../utils/fetchMediumArticles';

export async function getStaticProps() {
  const articlesData = await fetchMediumArticles();

  const articles = articlesData.map((articleData) => {
    return new Article(
      articleData.id,
      articleData.title,
      articleData.url,
      articleData.publicationDate,
      articleData.summary,
      articleData.tags
    );
  });

  return {
    props: { articles },
    revalidate: 60, // Revalidate data every 60 seconds (optional)
  };
}

const ArticlesPage = ({ articles }) => {
  // ... (render articles using JSX)
};

export default ArticlesPage;
