import React, { useState } from "react";
import { upload } from "./../../services/account";
import { toast } from "react-toastify";

const UploadPhoto = ({ user }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const changeHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (file) {
      setLoading(true);
      const form = new FormData();
      form.append("image", file);

      const response = await upload(form);

      if (response.isError) {
        return toast.error("error during uploading", {
          className: "toastify",
        });
      }

      user.photo = response.data.data.image;
      localStorage.setItem("user", JSON.parse(user));

      setLoading(false);
      toast.success("changed successfully", {
        className: "toastify",
        onClose: () => window.location.reload(),
      });
    }
  };

  return (
    <div className="user-view__form-container">
      <form onSubmit={(e) => submitHandler(e)} className="form form-user-data">
        <div className="form__group form__photo-upload">
          <img
            className="form__user-photo"
            src={
              user && user.photo
                ? user.photo
                : "https://res.cloudinary.com/batn05000/image/upload/v1588199985/default_xg4502.jpg"
            }
            alt="User ph"
          />
          <input onChange={(e) => changeHandler(e)} id="file" type="file" />
        </div>
        <div className="form__group right">
          <button type="submit" className="btn btn--small btn--green">
            {loading ? "UPLOAD . . ." : "UPLOAD"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadPhoto;
