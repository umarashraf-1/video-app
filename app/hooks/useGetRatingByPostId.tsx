import { database, Query } from "@/libs/AppWriteClient";

const useGetRatingByPostId = async (postId: string): Promise<number[]> => {
    try {
        const response = await database.listDocuments(
            '678254d20021e0f39655', // Database ID
            '67825b8e003b9bf1b728', // Collection ID
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
