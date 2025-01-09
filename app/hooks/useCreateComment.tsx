import { database, ID } from "@/libs/AppWriteClient"

const useCreateComment = async (userId: string, postId: string, comment: string) => {
    try {
        await database.createDocument(
            '67765a9e001b730b0f67', 
            '677663a1000334c98be3', 
            ID.unique(), 
        {
            user_id: userId,
            post_id: postId,
            text: comment,
            created_at: new Date().toISOString(),
        });
    } catch (error) {
        throw error
    }
}

export default useCreateComment