import {FETCH_BACKGROUND} from "actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_BACKGROUND:
      return ({
        currentImg: action.payload.urls.full,
        currentImgAuthor: action.payload.user.name || "Author Unknown",
        currentImgAuthorLink: action.payload.user.links.html || "",
        currentImgLocation: action.payload.location ? action.payload.location.title : "Unknown",
        lastUpdate: new Date().getUTCDate()
    })
    default:
      return state;
  }
}
