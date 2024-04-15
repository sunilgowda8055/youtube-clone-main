import {
  HouseDoorFill,
  Film,
  CollectionPlay,
  ChevronRight,
  ClockHistory,
  PersonSquare,
  Stopwatch,
  ChevronDown,
  Handbag,
  MusicNote,
  Broadcast,
  Controller,
  Newspaper,
  Trophy,
  Lightbulb,
  BroadcastPin,
  PersonStandingDress,
  Fire,
  HandThumbsUp,
  PlayBtn,
  PlayBtnFill,
  Play,
  Gear,
  Flag,
  QuestionCircle,
  ExclamationCircle,
} from "react-bootstrap-icons";
import Box from "@mui/material/Box";
import VideoSection from "./videoSection/VideoSection";
import ShortsSection from "./shorts/ShortsSection";
import IconSection from "./videoSection/IconSection";

function Sidenavbar({ handleDrawerOpen, open }) {
  console.log("open", open);
  return (
    <>
      {open ? (
        <Box
          sx={{ width: 240, backgroundColor: "#0f0f0f" }}
          role="presentation"
          onClick={() => handleDrawerOpen(false)}
        >
          <div id="side-nav-section">
            <div
              id="side-nav"
              className="text-white d-flex justify-content-start flex-column"
            >
              <div>
                <li className="side-icons home-active d-flex justify-content-start align-items-center">
                  <span className="pe-2">
                    <HouseDoorFill color="#fff" size={20} />
                  </span>
                  <div className="nav-list-text">Home</div>
                </li>
                <li className="side-icons d-flex justify-content-start align-items-center ">
                  <span className="pe-2">
                    <Film color="#fff" size={20} />
                  </span>
                  <div className="nav-list-text">Shorts</div>
                </li>
                <li className="side-icons d-flex justify-content-start align-items-center">
                  <span className="pe-2">
                    <CollectionPlay color="#fff" size={20} />
                  </span>
                  <div className="nav-list-text">Subscriptions</div>
                </li>
                <hr color="#938b8b47" style={{ with: "100%" }} />
                <li className=" d-flex justify-content-start align-items-center">
                  <div className="py-2 pe-2 ">You</div>
                  <span className="pe-2">
                    <ChevronRight color="#fff" size={15} />
                  </span>
                </li>
                <li className="side-icons d-flex justify-content-start align-items-center">
                  <span className="pe-2">
                    <PersonSquare color="#fff" size={20} />
                  </span>
                  <div className="nav-list-text">Your channel</div>
                </li>
                <li className="side-icons d-flex justify-content-start align-items-center">
                  <span className="pe-2">
                    <ClockHistory color="#fff" size={20} />
                  </span>
                  <div className="nav-list-text">History</div>
                </li>
                <li className="side-icons d-flex justify-content-start align-items-center">
                  <span className="pe-2">
                    <Stopwatch color="#fff" size={20} />
                  </span>
                  <div className="nav-list-text">Watch later</div>
                </li>
                <li className="side-icons d-flex justify-content-start align-items-center">
                  <span className="pe-2">
                    <PlayBtn color="#fff" size={20} />
                  </span>
                  <div className="nav-list-text">Your video</div>
                </li>
                <li className="side-icons d-flex justify-content-start align-items-center">
                  <span className="pe-2">
                    <HandThumbsUp color="#fff" size={20} />
                  </span>
                  <div className="nav-list-text">Liked videos</div>
                </li>
                <li className="side-icons d-flex justify-content-start align-items-center">
                  <span className="pe-2">
                    <ChevronDown color="#fff" size={20} />
                  </span>
                  <div className="nav-list-text">Show more</div>
                </li>
                <hr color="#938b8b47" />
                <p className="d-flex justify-content-start ps-4">
                  Subscriptions
                </p>
                <li className="side-icons d-flex justify-content-start align-items-center">
                  <div className="pe-2 sub-icon">
                    <ChevronDown color="#f8f7f7a0" size={20} />
                  </div>
                  <div className="nav-list-text">e2ehiring</div>
                </li>
                <li className="side-icons d-flex justify-content-start align-items-center">
                  <div className="pe-2 sub-icon">
                    <ChevronDown color="#f8f7f7a0" size={20} />
                  </div>
                  <div className="nav-list-text">T series</div>
                </li>
                <li className="side-icons d-flex justify-content-start align-items-center">
                  <div className="pe-2 sub-icon">
                    <ChevronDown color="#f8f7f7a0" size={20} />
                  </div>
                  <div className="nav-list-text">Music</div>
                </li>
                <li className="side-icons d-flex justify-content-start align-items-center">
                  <div className="pe-2 sub-icon">
                    <ChevronDown color="#f8f7f7a0" size={20} />
                  </div>
                  <div className="nav-list-text">Movies</div>
                </li>
                <li className="side-icons d-flex justify-content-start align-items-center">
                  <div className="pe-2 sub-icon">
                    <ChevronDown color="#f8f7f7a0" size={20} />
                  </div>
                  <div className="nav-list-text">Entertainment</div>
                </li>
                <li className="side-icons d-flex justify-content-start align-items-center">
                  <div className="pe-2 sub-icon">
                    <ChevronDown color="#f8f7f7a0" size={20} />
                  </div>
                  <div className="nav-list-text">News</div>
                </li>
                <hr color="#938b8b47" />
                <p className="d-flex justify-content-start ps-4">Explore</p>
                <li className="side-icons d-flex justify-content-start align-items-center">
                  <div className="pe-2">
                    <Fire color="#fff" size={20} />
                  </div>
                  <div className="nav-list-text">Trending</div>
                </li>
                <li className="side-icons d-flex justify-content-start align-items-center">
                  <div className="pe-2">
                    <Handbag color="#fff" size={20} />
                  </div>
                  <div className="nav-list-text">Shopping</div>
                </li>
                <li className="side-icons d-flex justify-content-start align-items-center">
                  <div className="pe-2">
                    <MusicNote color="#fff" size={20} />
                  </div>
                  <div className="nav-list-text">Music</div>
                </li>
                <li className="side-icons d-flex justify-content-start align-items-center">
                  <div className="pe-2 ">
                    <Film color="#fff" size={20} />
                  </div>
                  <div className="nav-list-text">Movies</div>
                </li>
                <li className="side-icons d-flex justify-content-start align-items-center">
                  <div className="pe-2">
                    <Broadcast color="#fff" size={20} />
                  </div>
                  <div className="nav-list-text">Live</div>
                </li>
                <li className="side-icons d-flex justify-content-start align-items-center">
                  <div className="pe-2">
                    <Controller color="#fff" size={20} />
                  </div>
                  <div className="nav-list-text">Gaming</div>
                </li>
                <li className="side-icons d-flex justify-content-start align-items-center">
                  <div className="pe-2">
                    <Newspaper color="#fff" size={20} />
                  </div>
                  <div className="nav-list-text">News</div>
                </li>
                <li className="side-icons d-flex justify-content-start align-items-center">
                  <div className="pe-2">
                    <Trophy color="#fff" size={20} />
                  </div>
                  <div className="nav-list-text">Sports</div>
                </li>
                <li className="side-icons d-flex justify-content-start align-items-center">
                  <div className="pe-2">
                    <Lightbulb color="#fff" size={20} />
                  </div>
                  <div className="nav-list-text">Lerning</div>
                </li>
                <li className="side-icons d-flex justify-content-start align-items-center">
                  <div className="pe-2">
                    <PersonStandingDress color="#fff" size={20} />
                  </div>
                  <div className="nav-list-text">Fashion & Beauty</div>
                </li>
                <li className="side-icons d-flex justify-content-start align-items-center">
                  <div className="pe-2">
                    <BroadcastPin color="#fff" size={20} />
                  </div>
                  <div className="nav-list-text">Podcasts</div>
                </li>
              </div>
              <hr color="#938b8b47" />
              <p className="d-flex justify-content-start ps-4">
                More from YouTube
              </p>
              <li className="side-icons d-flex justify-content-start align-items-center">
                <div className="pe-2 more-icons">
                  <PlayBtnFill color="#fff" size={20} />
                </div>
                <div className="nav-list-text">YouTube studio</div>
              </li>
              <li className="side-icons d-flex justify-content-start align-items-center">
                <div className="pe-2 more-icons">
                  <Play color="#fff" size={20} />
                </div>
                <div className="nav-list-text">YouTube Music</div>
              </li>
              <li className="side-icons d-flex justify-content-start align-items-center">
                <div className="pe-2 more-icons">
                  <PlayBtn color="#fff" size={20} />
                </div>
                <div className="nav-list-text">YouTube Kids</div>
              </li>
              <hr color="#938b8b47" />
              <li className="side-icons d-flex justify-content-start align-items-center">
                <div className="pe-2">
                  <Gear color="#fff" size={20} />
                </div>
                <div className="nav-list-text">Settings</div>
              </li>
              <li className="side-icons d-flex justify-content-start align-items-center">
                <div className="pe-2">
                  <Flag color="#fff" size={20} />
                </div>
                <div className="nav-list-text">Report history</div>
              </li>
              <li className="side-icons d-flex justify-content-start align-items-center">
                <div className="pe-2">
                  <QuestionCircle color="#fff" size={20} />
                </div>
                <div className="nav-list-text">Help</div>
              </li>
              <li className="side-icons d-flex justify-content-start align-items-center">
                <div className="pe-2">
                  <ExclamationCircle color="#fff" size={20} />
                </div>
                <div className="nav-list-text">Send feedback</div>
              </li>
              <hr color="#938b8b47" />
              <div className="footer-nav d-flex justify-content-start align-items-center col-3">
                <div className="nav-paragrap text-wrap">
                  <p>
                    AboutPressCopyrightContact usCreatorsAdvertiseDevelopers
                  </p>
                  <p className="my-2">
                    TermsPrivacyPolicy & SafetyHow YouTube worksTest new
                    features
                  </p>
                  <p>© 2024 Google LLC</p>
                </div>
              </div>
            </div>
          </div>
        </Box>
      ) : (
        <IconSection />
      )}
    </>
  );
}

export default Sidenavbar;
