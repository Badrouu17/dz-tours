import React from "react";

const Book = () => {
  return (
    <section id="BOOK" className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form action="#" className="form">
              <div className="u-margin-bottom-medium">
                <h2 className="heading-secondary">Start booking now</h2>
              </div>

              <div className="form__group">
                <a href="/login" className="btn btn--green">
                  Next step &rarr;
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
