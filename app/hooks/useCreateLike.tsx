import { database, ID } from "@/libs/AppWriteClient"

const useCreateLike = async (userId: string, postId: string) => {
    try {
        await database.createDocument(
            '67765a9e001b730b0f67', 
            '67766232001f346ea283', 
            ID.unique(), 
        {
            user_id: userId,
            post_id: postId,
        });
    } catch (error) {
        throw error
    }
}

export default useCreateLike