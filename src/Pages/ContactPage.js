import React from "react";
import { BasicImage } from "../images";
import { useForm } from "react-hook-form";
import "../scss/index.scss";
export function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  function Redd() {
    return <span style={{ color: "red" }}>*</span>;
  }
  return (
    <div className="about-page">
      <img className="w-100" src={BasicImage} />
      <h3>Provide relevant details. And we will get back to you</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control row">
          <label className="col-8">
            {"Name"}
            <Redd />
          </label>
          <input
            required
            type="text"
            className="form-inputs col-5"
            name="name"
            {...register("name")}
          />
        </div>
        <div className="form-control row">
          <label className="col-8">
            {"Phone"} <Redd />
          </label>
          <input
            type="number"
            name="phone"
            required
            className="form-inputs col-5"
            {...register("phone")}
          />
        </div>
        <div className="form-control row">
          <label className="col-8">
            {"Email"} <Redd />
          </label>
          <input
            type="text"
            required
            name="email"
            className="form-inputs col-5"
            {...register("email")}
          />
        </div>
        <div className="form-control row">
          <label className="col-8">
            {"Password"} <Redd />
          </label>
          <input
            type="password"
            name="password"
            required
            className="form-inputs col-5"
            {...register("password")}
          />
        </div>

        <div className="form-control row">
          <label className="col-5">
            Query <Redd />
          </label>
          <textarea
            type="text"
            name="query"
            required
            className="col-8 query-field form-inputs"
            {...register("query")}
          />
        </div>
        <div className="form-control">
          <label></label>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
