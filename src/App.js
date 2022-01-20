import "./App.css";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div>
      <Nav />
      <div className="banner " />
      <div className="my-4 heroSection">
        <h1 className="bannerHeight py-3">
          A hit of optimism
        </h1>
        <p>
          Discover the latest styles from Resort 2022, a collection designed for an optimistic new now.
        </p>
        <div className="bannerButton text-center">
          <div class="btn-group  " role="group" aria-label="Basic checkbox toggle button group  ">
            <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" />
            <label class="btn btn-outline-dark" for="btncheck1"> <span className="NFA"> NEW FOR HER</span></label>

            <input type="checkbox" class="btn-check " id="btncheck2" autocomplete="off" />
            <label class="btn btn-outline-dark  " for="btncheck2"> <span className="NFA"> NEW FOR HER</span></label>
          </div></div>

      </div>

    </div>
  );
}

export default App;
