import React, { useState } from "react";
import elephant from "../assets/elephant2.svg";

const Bookings = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const API_KEY = "reni_prod_Owc6njvOv9WL5U33V1C_34hjbhb";
  // const API_URL = "https://api.reni.ng/getLists.php";
  const API_URL =
    "https://cors-anywhere.herokuapp.com/https://api.reni.ng/reni-mail/v1/getLists.php";
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      to: "oyewoleoluwatimilehin2@gmail.com",
      subject: "New Booking Request",
      body: `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`,
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Booking request sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        alert("Failed to send booking request.");
      }
    } catch (error) {
      console.error("Error sending request:", error);
      alert("Error sending request.");
    }
  };

  return (
    <div className="bg-gray-200 pt-12 px-4 h-screen relative">
      <div className="flex flex-col justify-center items-center m-auto py-20 z-30 relative">
        <h1 className="font-bold font-display text-5xl mb-10">Booking</h1>
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl w-full grid grid-cols-1 gap-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-white py-2 px-6 rounded-full shadow-lg text-xl w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className=" bg-white py-2 px-6 rounded-full shadow-lg text-xl w-full"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="bg-white py-2 px-6 rounded-full shadow-lg text-xl w-full"
              required
            />
            <input
              type="text"
              name="service"
              placeholder="Service"
              value={formData.service}
              onChange={handleChange}
              className="bg-white py-2 px-6 rounded-full shadow-lg text-xl w-full"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="bg-white py-2 px-6 rounded-full shadow-lg text-xl w-full h-20"
            required
          ></textarea>
          <button
            type="submit"
            className="text-white bg-blue-500 py-2 px-6 rounded-full mt-4"
          >
            Request a Quote
          </button>
        </form>
      </div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] z-10 hidden sm:flex">
        <img
          src={elephant}
          className="w-full h-full object-cover"
          alt="elephant"
        />
      </div>
    </div>
  );
};

export default Bookings;
