import { database, Query } from "@/libs/AppWriteClient"

const useGetPostsByUser = async (userId: string) => {
    try {
        const response = await database.listDocuments(
            '678254d20021e0f39655', 
            '6782596800053fef2ae8', 
            [ 
                Query.equal('user_id', userId),
                Query.orderDesc("$id")
            ]
        );
        const documents = response.documents;
        const result = documents.map(doc => {
            return { 
                id: doc?.$id,
                user_id: doc?.user_id,
                video_url: doc?.video_url,
                text: doc?.text,
                created_at: doc?.created_at,
            }
        })
        
        return result
    } catch (error) {
        throw error
    }
}

export default useGetPostsByUser