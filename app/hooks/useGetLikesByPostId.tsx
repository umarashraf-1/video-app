import { database, Query } from "@/libs/AppWriteClient"

const useGetLikesByPostId = async (postId: string) => {
    try {
        const response = await database.listDocuments(
            '678254d20021e0f39655', 
            '67825870001533c17ba4', 
            [ 
                Query.equal('post_id', postId) 
            ]
        );
        const documents = response.documents;
        const result = documents.map(doc => {
            return { 
                id: doc?.$id, 
                user_id: doc?.user_id,
                post_id: doc?.post_id
            }
        })
        
        return result
    } catch (error) {
        throw error
    }
}

export default useGetLikesByPostId