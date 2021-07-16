import NowPlaying from "../views/pages/now-playing";
import UpComing from "../views/pages/upcoming";
import Detail from "../views/pages/detail";
import Like from "../views/pages/like";

const routes = {
  "/": NowPlaying, //default page
  "/now-playing": NowPlaying,
  "/upcoming": UpComing,
  "/detail/:id": Detail,
  "/like": Like,
};

export default routes;
