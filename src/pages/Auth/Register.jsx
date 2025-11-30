import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "./SocialLogin";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Register = () => {
  const { registerUser, updateUserProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegistration = (data) => {
    console.log("after register", data.photo[0]);

    const profileImg = data.photo[0];

    registerUser(data.email, data.password)
      .then(() => {
        // store the image and get the photo url
        const formData = new FormData();
        formData.append("image", profileImg);
        const image_API_URL = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_host_Key
        }`;
        console.log("IMGBB KEY:", import.meta.env.VITE_image_host_Key);

        axios
          .post(image_API_URL, formData)
          .then((res) => {
            const photoURL = res.data.data.url;

            // create user in the database
            const userInfo = {
              email: data.email,
              displayName: data.name,
              photoURL: photoURL,
            };
            axiosSecure.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                console.log("user created in the database");
              }
            });

            // update user profile to firebase here
            const userProfile = {
              displayName: data.name,
              photoURL: photoURL,
            };
            updateUserProfile(userProfile)
              .then(() => {
                console.log("user profile updated done");
                navigate(location?.state || "/");
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((err) => {
            console.log("Image upload error:", err);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl ">
      <h1 className="text-4xl font-extrabold text-secondary text-center">
        Create an Account
      </h1>
      <p className="font-medium text-center">Register with ZapShift</p>
      <form
        className="card-body -mb-5"
        onSubmit={handleSubmit(handleRegistration)}
      >
        <fieldset className="fieldset">
          {/* name */}
          <label className="label">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input"
            placeholder="Your Name"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500">Name is required </p>
          )}
          {/* Photo image  */}
          <label className="label">Photo</label>
          <input
            type="file"
            {...register("photo", { required: true })}
            className="file-input"
            placeholder="Upload your photo"
          />
          {errors.photo?.type === "required" && (
            <p className="text-red-500">Photo is required </p>
          )}

          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required </p>
          )}

          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            })}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password must be 6 characters or longer
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500">
              Invalid password! Please include uppercase, lowercase, number,
              special character, and minimum 6 characters.
            </p>
          )}

          <button className="btn bg-primary mt-4">Register</button>
        </fieldset>
        <p>
          Already have an account?{" "}
          <Link
            state={location?.state}
            to="/login"
            className="text-blue-500 underline hover:text-lime-500"
          >
            Login
          </Link>{" "}
        </p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
