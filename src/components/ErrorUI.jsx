import React from "react";

const ErrorUI = () => {
  return (
    <React.Fragment>
      <main className="main">
        <div className="error">
          <div className="error__title">
            <h2 className="heading-secondary heading-secondary--error">
              SOMETHING WRONG HAPPENED
            </h2>
            <h2 className="error__emoji">😢</h2>
          </div>
          <div className="error__msg"></div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default ErrorUI;
