import {extend} from "@utils/common";
import {ActionType} from "@store/action";
import {PostStatus} from "@src/const";

const initialState = {
  reviews: [],
  reviewStatus: PostStatus.BEFORE_SENT
};

const reviewsData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
    case ActionType.POST_REVIEW:
      return extend(state, {
        reviewStatus: action.payload,
      });
  }

  return state;
};

export {reviewsData};
