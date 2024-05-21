import SmTopicButtons from '../../Components/SmTopicButtons/SmTopicButtons';
import './SearchPage.css';

const SearchPage = () => {
  return (
    <div className="text-center w-[34vw] text-txtdark">
      {/* Breadcrumbs here */}
      <p className="m-1">/Search</p>
      <p className="m-4">Search specific topics:</p>
      <SmTopicButtons />
      <p className="m-4">
        Found X threads containing{' '}
        <span className="text-txtbright">"Placeholder"</span> in games
      </p>
      {/* THREAD TABLE GOES HERE */}
    </div>
  );
};

export default SearchPage;
