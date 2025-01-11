import { database, Query, storage } from "@/libs/AppWriteClient"
import useDeleteComment from "./useDeleteComment";
import useDeleteLike from "./useDeleteLike";
import useGetCommentsByPostId from "./useGetCommentsByPostId";
import useGetLikesByPostId from "./useGetLikesByPostId";

const useDeletePostById = async (postId: string, currentImage: string) => {
    try {
        const likes = await useGetLikesByPostId(postId)
        likes.forEach(async like => { await useDeleteLike(like?.id) })
        
        const comments = await useGetCommentsByPostId(postId)
        comments.forEach(async comment => { await useDeleteComment(comment?.id) })

        await database.deleteDocument(
            '678254d20021e0f39655', 
            '6782596800053fef2ae8', 
            postId
        );
        await storage.deleteFile('67825af10032d8df32a8', currentImage);
    } catch (error) {
        throw error
    }
}

export default useDeletePostById