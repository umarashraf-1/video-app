import { database } from "@/libs/AppWriteClient"

const useDeleteLike = async (id: string) => {
    try {
        await database.deleteDocument(
            '67765a9e001b730b0f67', 
           '67766232001f346ea283', 
            id
        );
    } catch (error) {
        throw error
    }
}

export default useDeleteLike