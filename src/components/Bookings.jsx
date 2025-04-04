import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import elephant from "../assets/elephant2.svg";

const Bookings = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // Loading state

  const API_KEY = "reni_prod_Owc6njvOv9WL5U33V1C_34hjbhb_kbkjkwe";
  const API_URL = "https://api.reni.ng/reni-mail/v1/sendSingleMail";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      email: "elephantcompany@gmail.com",
      subject: "New Booking Request",
      body: `
      <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; line-height: 1.6;">
        <h2 style="color: #0056b3;">📌 New Booking Request</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Service:</strong> ${formData.service}</p>
        <p><strong>Message:</strong></p>
        <div style="background: #f4f4f4; padding: 10px; border-radius: 5px;">
          <p>${formData.message}</p>
        </div>
        <br>
        
    `,
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
        toast.success("Booking request sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        toast.error("Failed to send booking request.");
      }
    } catch (error) {
      console.error("Error sending request:", error);
      toast.error("Error sending request.");
    } finally {
      setLoading(false); // Reset loading state after request is completed
    }
  };

  return (
    <div className="bg-gray-200 pt-12 px-4 h-screen relative">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="flex flex-col justify-center items-center m-auto py-20 z-30 relative">
        <h1 className="font-bold font-display text-5xl mb-10">Booking</h1>
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl w-full flex flex-col items-center justify-center gap-6  "
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
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
              className="bg-white py-2 px-6 rounded-full shadow-lg text-xl w-full"
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
            className={`text-white max-w-[200px] py-2 px-6 rounded-full mt-4 transition-all ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Request a Quote"}
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
