import { database, ID } from "@/libs/AppWriteClient"

const useCreateComment = async (userId: string, postId: string, comment: string) => {
    try {
        await database.createDocument(
            '678254d20021e0f39655', 
            '67825a1d000229d88c33', 
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