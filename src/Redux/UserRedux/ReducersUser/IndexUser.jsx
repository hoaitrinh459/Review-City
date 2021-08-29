import { combineReducers } from "redux";
import {CityReducers, AllCityReducers, CityDetailsReducers} from "./CityReducersUser";
import {BlogReducers, AllBlogReducers, BlogDetailsReducers} from "./BlogReducersUser";
import {ObjectReducers, AllObjectReducers, ObjectDetailsReducers, ObjectOfCityReducers, ObjectOfUserReducers} from "./ObjectReducersUser";
import {ReviewReducers, AllReviewReducers, ReviewDetailsReducers, ReviewOfObjectReducers, ReviewOfUserReducers} from "./ReviewReducersUser";
import {CommentOfReviewReducers, PostCommentReducers} from "./CommentReducersUser";
import {CheckLoginReducers, SignupReducers} from "./CheckLoginReducersUser";
import {SearchCityReducers, SearchObjectReducers, SearchBlogReducers} from "./SearchReducersUser";

const reducers = combineReducers({
	city: CityReducers,
	allcity: AllCityReducers,
	citydetails: CityDetailsReducers,
	
	blog: BlogReducers,
	allblog: AllBlogReducers,
	blogdetails: BlogDetailsReducers,

	object: ObjectReducers,
	allobject: AllObjectReducers,
	objectdetails: ObjectDetailsReducers,
	allobjectofcity: ObjectOfCityReducers,
	allobjectofuser: ObjectOfUserReducers,

	review: ReviewReducers,
	allreview: AllReviewReducers,
	reviewdetails: ReviewDetailsReducers,
	allreviewofobject: ReviewOfObjectReducers,
	allreviewofreview: ReviewOfUserReducers,

	allcommentofreview: CommentOfReviewReducers,
	postcomment: PostCommentReducers,

	ckecklogin: CheckLoginReducers,
	signup: SignupReducers,

	searchcity: SearchCityReducers,
	searchobject: SearchObjectReducers,
	searchblog: SearchBlogReducers,
});

export default (state, action) => reducers(state, action);