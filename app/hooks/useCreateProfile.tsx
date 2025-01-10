import { database, ID } from "@/libs/AppWriteClient"

const useCreateProfile = async (userId: string, name: string, image: string, bio: string, role: string) => {
    try {
        await database.createDocument(
            '67765a9e001b730b0f67', 
            '67765fb60025afc539e5',
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