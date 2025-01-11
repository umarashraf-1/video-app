import { database, Query } from "@/libs/AppWriteClient"
import useGetProfileByUserId from "./useGetProfileByUserId";

const useGetAllPosts = async () => {
    try {
        const response = await database.listDocuments(
            '678254d20021e0f39655', 
            '6782596800053fef2ae8', 
            [ Query.orderDesc("$id") ]
        );
        const documents = response.documents;

        const objPromises = documents.map(async doc => {
            let profile = await useGetProfileByUserId(doc?.user_id)

            return {
                id: doc?.$id,
                user_id: doc?.user_id,
                video_url: doc?.video_url,
                text: doc?.text,
                created_at: doc?.created_at,
                profile: {
                    user_id: profile?.user_id,
                    name: profile?.name,
                    image: profile?.image,
                }
            }
        })

        const result = await Promise.all(objPromises)
        return result
    } catch (error) {
        throw error
    }
}

export default useGetAllPosts