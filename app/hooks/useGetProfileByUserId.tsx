import { database, Query } from "@/libs/AppWriteClient"

const useGetProfileByUserId = async (userId: string) => {
    try {
        const response = await database.listDocuments(
            '67765a9e001b730b0f67', 
            '67765fb60025afc539e5', 
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