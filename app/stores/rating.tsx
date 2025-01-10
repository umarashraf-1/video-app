import { create } from "zustand";
import { persist, devtools, createJSONStorage } from "zustand/middleware";
import { Rate } from "../types";
import useGetRatingByPostId from "../hooks/useGetRatingByPostId";

interface RatingStore {
    ratingsByPost: Rate[];
    // ratingsByPost: Record<string, number[]> // Map postId to an array of ratings
    setRatingsByPost: (postId: string, ratings: number[]) => void;
}

export const useRatingStore = create<RatingStore>()(
    devtools(
        persist(
            (set) => ({
                ratingsByPost:[],

                setRatingsByPost: async (postId: string, ratings: number[]) => {
                    const result = await useGetRatingByPostId(postId)
                    set((state) => ({
                        ratingsByPost: {
                            ...state.ratingsByPost,
                            [postId]: ratings,
                        },
                    }));
                },
            }),
            {
                name: "store",
                storage: createJSONStorage(() => localStorage),
            }
        )
    )
);
