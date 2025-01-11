import { database, Query } from "@/libs/AppWriteClient"

const useGetProfileByUserId = async (userId: string) => {
    try {
        const response = await database.listDocuments(
            '678254d20021e0f39655', 
            '6782559c00107a30eb18', 
            [ 
                Query.equal('user_id', userId) 
            ]
        );
        const documents = response.documents;
        return {
            id: documents[0]?.$id,
            user_id: documents[0]?.user_id,
            name: documents[0]?.name,
            image: documents[0]?.image,
            bio: documents[0]?.bio,
            role: documents[0]?.role,
        }
      } catch (error) {
          throw error
      }
}

export default useGetProfileByUserId