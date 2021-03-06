import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import browserHistory from "@src/browser-history";
import configureStore from "redux-mock-store";
import MainPlaceCard from "./main-place-card";
import {TestMockData, TestMockStore} from "@src/mocks/test-mocks";

const mockStore = configureStore([]);
const store = mockStore(TestMockStore);

const tree = renderer.create(
    <Provider store={store}>
      <Router history={browserHistory}>
        <MainPlaceCard
          offer={TestMockData.offer}
        />
      </Router>
    </Provider>
);

it(`Should MainPlaceCard render correctly`, () => {
  expect(tree.toJSON()).toMatchSnapshot();
});
