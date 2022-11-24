import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Contexts/AuthProvider";

const AddaProduct = () => {
  const { user } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const imgbbKey = process.env.REACT_APP_imgbb_key;
  console.log(imgbbKey);

  const handleAddProduct = (data) => {
    console.log(data);
  };

  const productConditions = [
    { condition: "Excellent" },
    { condition: "Good" },
    { condition: "Fair" },
  ];
  // console.log(productConditions);
  return (
    <div className="my-10">
      <h1 className="text-5xl font-serif font-bold">Add A Product</h1>
      <form onSubmit={handleSubmit(handleAddProduct)} className=" mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="label">
              <span className="label-text">Select a Category of Product</span>
            </label>
            <select
              {...register("category", {
                required: "Category is Required",
              })}
              className="select select-bordered w-full"
            >
              {categories.map((cat) => (
                <option value={cat.categories_id} key={cat._id}>
                  {cat.categories_id}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="text-red-500">{errors.category.message}</p>
            )}
          </div>

          <div>
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              required
              {...register("productName", {
                required: "Product Name is Required",
              })}
              type="text"
              placeholder="Product Name"
              className="input w-full input-bordered"
            />
            {errors.productName && (
              <p className="text-red-500">{errors.productName.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Buying Price</span>
            </label>
            <input
              required
              {...register("buyingPrice", {
                required: "Buying Price is Required",
              })}
              type="text"
              placeholder="Buying Price"
              className="input w-full input-bordered"
            />
            {errors.buyingPrice && (
              <p className="text-red-500">{errors.buyingPrice.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Selling Price</span>
            </label>
            <input
              required
              {...register("sellingPrice", {
                required: "Product Name is Required",
              })}
              type="text"
              placeholder="Selling Price"
              className="input w-full input-bordered"
            />
            {errors.sellingPrice && (
              <p className="text-red-500">{errors.sellingPrice.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Duration Of Uses</span>
            </label>
            <input
              required
              {...register("duse", {
                required: "Duration of use is Required",
              })}
              type="text"
              placeholder="Duration Of Uses"
              className="input w-full input-bordered"
            />
            {errors.duse && (
              <p className="text-red-500">{errors.duse.message}</p>
            )}
          </div>

          <div>
            <label className="label">
              <span className="label-text">
                Size, Cause Of Selling and Other Details
              </span>
            </label>
            <input
              required
              {...register("description", {
                required: "Description is Required",
              })}
              type="text"
              placeholder="Size? Why you want to sell? Other Details"
              className="input w-full input-bordered"
            />
            {errors.description && (
              <p className="text-red-500">{errors.description.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">
                Meeting Location or Your Location
              </span>
            </label>
            <input
              required
              {...register("meetingLocation", {
                required: "Meeting Location is Required",
              })}
              type="text"
              placeholder="Where you can able to meet?"
              className="input w-full input-bordered"
            />
            {errors.meetingLocation && (
              <p className="text-red-500">{errors.meetingLocation.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Select your product Condition</span>
            </label>
            <select
              {...register("condition", {
                required: "Condition is Required",
              })}
              className="select select-bordered w-full"
            >
              {productConditions.map((p, idx) => (
                <option value={p.condition} key={idx}>
                  {p.condition}
                </option>
              ))}
            </select>
            {errors.condition && (
              <p className="text-red-500">{errors.condition.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              required
              // {...register("name", {
              //   required: "Name is Required",
              // })}
              type="text"
              placeholder="Your Name"
              defaultValue={user?.displayName}
              disabled
              className="input w-full input-bordered"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              required
              // {...register("email", {
              //   required: "Email is Required",
              // })}
              type="email"
              placeholder="Email Address"
              defaultValue={user?.email}
              disabled
              className="input w-full input-bordered"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text">Your Phone Number</span>
            </label>
            <input
              required
              {...register("phone", {
                required: "Phone number is Required",
              })}
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Upload your product photo</span>
            </label>
            <input
              type="file"
              {...register("productPhoto", {
                required: "Product Photo is Required",
              })}
              className="input input-bordered w-full"
              required
            />
            {errors.productPhoto && (
              <p className="text-red-500">{errors.productPhoto.message}</p>
            )}
          </div>
        </div>
        <br />
        <div className="w-1/2 m-auto">
          <input
            required
            className="btn btn-accent w-full"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default AddaProduct;