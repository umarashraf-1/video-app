import { database, Query } from "@/libs/AppWriteClient"

const useGetPostsByUser = async (userId: string) => {
    try {
        const response = await database.listDocuments(
            '67765a9e001b730b0f67', 
            '677662e4001d370a1b23', 
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