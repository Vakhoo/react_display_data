// import Difficulty from '../../components/form/dificulity';
// import Score from '../../components/form/score';
// import Testing from '../../components/form/testing/testing';
// import Restart from '../../components/form/restart';
// import Category from '../../components/form/category';
import UsersProviderComponent from '../../providers/usersprovider';
function UserHome(props) {
  return (
    <UsersProviderComponent>
      <div className="row">
        {/* <div className="col-md-7 mx-auto mt-5">
          <Difficulty />
        </div>
        <div className="col-md-7 mx-auto mt-5">
          <Category />
        </div>
        <div className="col-md-7 mx-auto mt-5">
          <Testing />
        </div>
        <div className="col-md-7 mx-auto mt-5">
          <Score />
        </div>
        <div className="col-md-7 mx-auto mt-5">
          <Restart />
        </div> */}
      </div>
    </UsersProviderComponent>
  );
}

export default UserHome;
