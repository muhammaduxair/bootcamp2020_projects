import FormComp from "./formComp";

const Header = () => {
  return (
    <div className="row HEADER_BOX">
      <div className="col col-12 col-md-8 col-lg-8 col-xl-8 LEFT">
        <h1>Save Diries Now</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quis
          non, pariatur ipsam excepturi veniam laudantium ex minus eligendi hic
          voluptatem eum, aut ipsum. Atque. ipsam excepturi veniam laudantium ex
          minus eligendi hic voluptatem eum, aut ipsum. Atque.
        </p>
      </div>
      <div className="col col-12 col-md-4 col-lg-4 col-xl-4 RIGHT">
        <FormComp />
      </div>
    </div>
  );
};
export default Header;
