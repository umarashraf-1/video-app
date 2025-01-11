import { database } from "@/libs/AppWriteClient"

const useUpdateProfileImage = async (id: string, image: string) => {
    try {
        await database.updateDocument(
            '678254d20021e0f39655', 
            '6782559c00107a30eb18', 
            id, 
        { 
            image: image 
        })
    } catch (error) {
        throw error
    }
}

export default useUpdateProfileImage