import { HeroCard } from './../components/HeroCard';
export const SearchPage = () => {

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
      <div className="col-4">
        <h4>Searching</h4>
        <hr />
        <form action="">
          <input
            type="text"
            placeholder="search a hero"
            name="searchText"
            autoComplete="off"
          />
        </form>

        <button className="btn btn-outline-primary mt-1">Search</button>
      </div>

      <div className="col-7">

        <h4>Results</h4>
        <hr />
        <div className="alert alert-primary">
          Search a Hero
        </div>

        <div className="alert alert-danger">
          No hero with <b>ABC</b>
        </div>

        <HeroCard />

      </div>
      </div>
    </>
  );
};
