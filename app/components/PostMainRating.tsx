"use client";

import { useState, useEffect } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useUser } from "../context/user";
import useGetRatingByPostId from "../hooks/useGetRatingByPostId";
import { database } from "@/libs/AppWriteClient";

interface PostMainRatingProps {
  postId: string;
}

export default function PostMainRating({ postId }: PostMainRatingProps) {
  const [userRating, setUserRating] = useState<number>(0); // User's selected rating
  const [averageRating, setAverageRating] = useState<number>(0); // Post's average rating
  const [totalRatings, setTotalRatings] = useState<number>(0); // Total number of ratings
  const contextUser  = useUser();

  useEffect(() => {
    fetchRatings();
  }, [postId]);

  const fetchRatings = async () => {
    const ratings = await useGetRatingByPostId(postId);
    calculateAverageRating(ratings);
    setTotalRatings(ratings.length);
  };

  const calculateAverageRating = (ratings: number[]) => {
    const avg = ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length || 0;
    setAverageRating(avg);
  };

  const handleRating = async (rating: number) => {
    if (!contextUser?.user?.id) {
      alert("Please log in to rate this post.");
      return;
    }

    setUserRating(rating);

    try {
      await database.createDocument(
        '678254d20021e0f39655',
        '67825b8e003b9bf1b728',
        "unique()",
        {
          post_id: postId,
          user_id: contextUser?.user?.id,
          rating,
        }
      );
      await fetchRatings();
    } catch (error) {
      console.error("Error submitting rating:", error);
    }
  };

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold">Rate this post</h2>
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button key={star} onClick={() => handleRating(star)}>
            {star <= userRating ? (
              <AiFillStar size={25} color="#FFD700" />
            ) : (
              <AiOutlineStar size={25} color="#FFD700" />
            )}
          </button>
        ))}
      </div>
      <p className="text-sm text-gray-600">
        Average Rating: {averageRating.toFixed(1)} / 5 ({totalRatings} ratings)
      </p>
    </div>
  );
}
