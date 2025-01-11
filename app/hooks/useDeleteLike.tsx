import { database } from "@/libs/AppWriteClient"

const useDeleteLike = async (id: string) => {
    try {
        await database.deleteDocument(
            '678254d20021e0f39655', 
           '67825870001533c17ba4', 
            id
        );
    } catch (error) {
        throw error
    }
}

export default useDeleteLike