import { database } from "@/libs/AppWriteClient"

const useUpdateProfile = async (id: string, name: string, bio: string) => {
    try {
        await database.updateDocument(
            '67765a9e001b730b0f67', 
            '67765fb60025afc539e5', 
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