import { database, ID } from "@/libs/AppWriteClient"

const useCreateLike = async (userId: string, postId: string) => {
    try {
        await database.createDocument(
            '678254d20021e0f39655', 
            '67825870001533c17ba4', 
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