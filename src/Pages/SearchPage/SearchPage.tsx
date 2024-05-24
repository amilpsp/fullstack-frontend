import BreadcrumbsComp from '../../Components/BreadcrumbsComp/BreadcrumbsComp';
import SmTopicButtons from '../../Components/SmTopicButtons/SmTopicButtons';
import './SearchPage.css';

const SearchPage = () => {
  return (
    <div className="flex flex-col text-center w-[50vw]">
      <BreadcrumbsComp />
      <p className="m-1 text-center">/Search</p>
      <p className="m-4 text-txtdark">Search specific topics:</p>
      <SmTopicButtons />
      <p className="m-4 text-txtdark">
        Found X threads containing{' '}
        <span className="text-txtbright">"Placeholder"</span> in games
      </p>
      {/* THREAD TABLE GOES HERE */}
    </div>
  );
};

export default SearchPage;
