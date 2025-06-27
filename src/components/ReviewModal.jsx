import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";

const ReviewModal = ({ roomId, closeModal }) => {
  const { user } = useContext(AuthContext);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);

  const handleReview = async () => {
    if (!comment || rating < 1 || rating > 5) {
      toast.error("Please provide valid comment and rating");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/reviews", {
        roomId,
        userEmail: user?.email,
        username: user?.displayName || "Anonymous",
        comment,
        rating,
      });

      if (res.data.reviewId) {
        toast.success("Review submitted!");
        closeModal();
        setComment("")
        setRating(5)
      }
    } catch (err) {
      toast.error("Failed to submit review.",err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded w-full max-w-md space-y-4">
        <h2 className="text-xl font-bold">Leave a Review</h2>
        <p className="text-gray-600">Name: {user?.displayName}</p>
        <input
          type="number"
          min={1}
          max={5}
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="w-full p-2 border rounded"
          placeholder="Rating (1-5)"
        />
        <textarea
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Your review..."
        />
        <div className="flex justify-end gap-2">
          <button onClick={closeModal} className="px-4 py-2 bg-gray-400 text-white rounded">Cancel</button>
          <button onClick={handleReview} className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
