import ErrorBoundary from '@/components/ErrorBoundary';
import ContentAppLayout from '@/layout/ContentAppLayout';
import MeteoResult from '@/pages/home/MeteoResult';
import SearchBar from '@/pages/home/searchbar/SearchBar';

const Home = () => {
  return (
    <ContentAppLayout>
      <ErrorBoundary>
        <SearchBar />
        <MeteoResult />
      </ErrorBoundary>
    </ContentAppLayout>
  );
};

export default Home;
