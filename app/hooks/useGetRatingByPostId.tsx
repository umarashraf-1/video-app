import { database, Query } from "@/libs/AppWriteClient";

const useGetRatingByPostId = async (postId: string): Promise<number[]> => {
    try {
        const response = await database.listDocuments(
            '67765a9e001b730b0f67', // Database ID
            '67812d3b00330277c2ae', // Collection ID
            [Query.equal("post_id", postId)] // Query condition
        );
        console.log('Response:', response); // Log response for debugging
        const ratings = response.documents.map((doc) => doc.rating);
        return ratings;
    } catch (error) {
        console.error("Error fetching ratings:", error);
        return [];
    }
};


export default useGetRatingByPostId;
