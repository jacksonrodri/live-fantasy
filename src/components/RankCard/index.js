import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";

import classes from "./index.module.scss";
import SidebarBtnIcon from "../../assets/nhl-sidebar-icon.png";
import RankIcon from "../../icons/Rank";
import { redirectTo, setNumberComma } from "../../utility/shared";
import LiveStandings from "../LiveStandings";

function RankCard(props) {
  const [showModal, setModalState] = useState(false);
  const { showButton = true } = props || {};

  const toggleLiveStandingModal = useCallback(() => {
    setModalState(!showModal);
  }, [showModal]);

  return (
    <div className={classes.sidebar_header}>
      <div className={classes.header_rank}>
        <p>
          <div className={classes.live_dot} /> Live Rank
          <div className={classes.separater} />
          <strong>23</strong>
        </p>
      </div>

      <div className={classes.sidebar_header_content}>
        <div>
          <div className={classes.sidebar_header_left}>
            {props?.currentWin && (
              <div className={classes.sidebar_header_1}>
                <p>Currently Winning:</p>
                <p
                  className={`${classes.sidebar_header_p2} ${classes.sidebar_header_p2_1}`}
                >
                  ${setNumberComma(props?.currentWin)}
                </p>
              </div>
            )}
            <div className={classes.sidebar_header_2}>
              <div className={classes.sidebar_left}>
                <div>
                  <p>My Score:</p>
                  <p className={classes.sidebar_header_p2}>30</p>
                </div>
                <div>
                  <p className={classes.sidebar_header_p1}>Leader:</p>
                  <p
                    className={`${classes.sidebar_header_p1} ${classes.sidebar_header_p1_1}`}
                  >
                    66
                  </p>
                </div>
              </div>
              <RankIcon />
            </div>
          </div>
        </div>
      </div>

      {showButton && (
        <button onClick={toggleLiveStandingModal}>
          <img
            src={SidebarBtnIcon}
            width={19}
            style={{ marginRight: "10px" }}
          />{" "}
          See Full Standings
        </button>
      )}

      <LiveStandings visible={showModal} onClose={toggleLiveStandingModal} />
    </div>
  );
}

RankCard.propTypes = {
  showButton: PropTypes.bool,
  currentWin: PropTypes.number,
};

export default RankCard;
