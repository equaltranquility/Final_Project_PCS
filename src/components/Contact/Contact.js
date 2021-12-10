import React from "react";

const Contact = () => {
  return (
    <div className="content">
      <div className="container">
        <div>
          <div className="content__title">
            <h1>Вопросы, отзывы и предложения</h1>
            <hr />
          </div>
        </div>

          <div>
            <form>
              <div>
                <label for="NameForm" className="form-label">
                  ФИО
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="NameForm"
                  placeholder="Иван Иванов"
                  required
                />
              </div>
              <div>
                <label for="FormControlInput1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="FormControlInput1"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div>
                <label for="FormControlTextarea" className="form-label">
                  Напишите ваше мнение
                </label><br/>
                <textarea
                  class="form-control"
                  id="FormControlTextarea"
                  rows="5"
                  required
                ></textarea>
              </div>
              <br/>
              <button type="submit" className="button-submit">
                Отправить сообщение
              </button>
            </form>
          </div>
      </div>
    </div>
  );
};

export default Contact;
