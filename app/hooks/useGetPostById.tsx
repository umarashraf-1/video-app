import { database } from "@/libs/AppWriteClient"
import useGetProfileByUserId from "./useGetProfileByUserId";

const useGetPostById = async (id: string) => {
    try {
        const post = await database.getDocument(
            '678254d20021e0f39655', 
            '6782596800053fef2ae8', 
            id
        );

        const profile = await useGetProfileByUserId(post?.user_id)

        return {
            id: post?.$id, 
            user_id: post?.user_id,
            video_url: post?.video_url,
            text: post?.text,
            created_at: post?.created_at,
            profile: {
                user_id: profile?.user_id,  
                name: profile?.name,
                image: profile?.image,
            }
        } 
    } catch (error) {
        throw error
    }
}

export default useGetPostById