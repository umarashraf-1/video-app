import { database } from "@/libs/AppWriteClient"

const useDeleteComment = async (id: string) => {
    try {
        await database.deleteDocument(
            '678254d20021e0f39655', 
            '67825a1d000229d88c33', 
            id
        );
    } catch (error) {
        throw error
    }
}

export default useDeleteComment