import { database, Query } from "@/libs/AppWriteClient"

const useSearchProfilesByName = async (name: string) => {
    try {
        const profileResult = await database.listDocuments(
            '678254d20021e0f39655', 
            '6782559c00107a30eb18', 
            [ 
                Query.limit(5),
                Query.search("name", name)
            ]
        );

       const objPromises = profileResult.documents.map(profile => {
            return {
                id: profile?.user_id,  
                name: profile?.name,
                image: profile?.image,
            }
        })

        const result = await Promise.all(objPromises)
        return result
    } catch (error) {
        console.log(error)
    }
}

export default useSearchProfilesByName