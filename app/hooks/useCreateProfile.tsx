import { database, ID } from "@/libs/AppWriteClient"

const useCreateProfile = async (userId: string, name: string, image: string, bio: string, role: string) => {
    try {
        await database.createDocument(
            '678254d20021e0f39655', 
            '6782559c00107a30eb18',
            ID.unique(), 
        {
            user_id: userId,
            name: name,
            image: image,
            bio: bio,
            role: role,
        },
    );
    } catch (error) {
        throw error
    }
}

export default useCreateProfile