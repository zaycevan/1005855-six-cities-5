import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import browserHistory from "@src/browser-history";
import configureStore from "redux-mock-store";
import FavoritesList from "./favorites-list";
import {TestMockData, TestMockStore} from "@src/mocks/test-mocks";

const mockStore = configureStore([]);
const store = mockStore(TestMockStore);

const tree = renderer.create(
    <Provider store={store}>
      <Router history={browserHistory}>
        <FavoritesList
          cities={TestMockData.cities}
          favoriteOffers={TestMockData.offers}
        />
      </Router>

    </Provider>
);

it(`Should FavoritesList render correctly`, () => {
  expect(tree.toJSON()).toMatchSnapshot();
});
