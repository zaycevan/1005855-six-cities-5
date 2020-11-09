import {combineReducers} from "redux";
import {citiesData} from "./cities-data/cities-data";
import {offersData} from "./offers-data/offers-data";
import {reviewsData} from "./reviews-data/reviews-data";
import {sortType} from "./sort-type/sort-type";
import {user} from "./user/user";

export const NameSpace = {
  CITIES: `CITIES`,
  OFFERS: `OFFERS`,
  REVIEWS: `REVIEWS`,
  SORT: `SORT`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.CITIES]: citiesData,
  [NameSpace.OFFERS]: offersData,
  [NameSpace.REVIEWS]: reviewsData,
  [NameSpace.SORT]: sortType,
  [NameSpace.USER]: user,
});
