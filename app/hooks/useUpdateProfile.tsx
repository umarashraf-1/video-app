import { database } from "@/libs/AppWriteClient"

const useUpdateProfile = async (id: string, name: string, bio: string) => {
    try {
        await database.updateDocument(
            '678254d20021e0f39655', 
            '6782559c00107a30eb18', 
            id, 
        {
            name: name,
            bio: bio,
        });
    } catch (error) {
        throw error
    }
}

export default useUpdateProfile