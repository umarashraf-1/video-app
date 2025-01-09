import { database } from "@/libs/AppWriteClient"

const useUpdateProfileImage = async (id: string, image: string) => {
    try {
        await database.updateDocument(
            '67765a9e001b730b0f67', 
            '67765fb60025afc539e5', 
            id, 
        { 
            image: image 
        })
    } catch (error) {
        throw error
    }
}

export default useUpdateProfileImage