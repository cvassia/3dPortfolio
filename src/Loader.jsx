import EastIcon from "@mui/icons-material/East";

export const Loader = ({ started, onStarted, progress }) => {
  return (
    <div className={`loadingScreen ${started ? "loadingScreen--started" : ""}`}>
      <div className="loadingScreen__board">
        {/* <h1 className="loadingScreen__title">Welcome to my world!</h1> */}
        <h1 className="loadingScreen__description">
          Meet me on an island a warm summer night...
        </h1>

        <h1 className="loadingScreen__text">Use the arrow to navigate.</h1>
        <h1 className="loadingScreen__text">
          Click on the avatars to reveal the content.
        </h1>

        <h1 className="loadingScreen__text">
          If you want to move instantly to a place click the button on the top
          right of the page.
        </h1>
      </div>
      <div className="loadingScreen__progress">
        {progress < 100 ? (
          <div style={{ padding: "15px 70px" }}>
            <div className="loadingScreen__number">Loading...</div>

            <div
              className="loadingScreen__progress__value"
              style={{
                width: `${progress}%`,
              }}
            ></div>
          </div>
        ) : (
          <>
            <button
              className="loadingScreen__button"
              disabled={progress < 100}
              onClick={onStarted}
            >
              Explore my world
              <EastIcon fontSize="large" className="loadingScreen__eastIcon" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};
