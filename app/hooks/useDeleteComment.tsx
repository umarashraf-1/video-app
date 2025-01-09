import { database } from "@/libs/AppWriteClient"

const useDeleteComment = async (id: string) => {
    try {
        await database.deleteDocument(
            '67765a9e001b730b0f67', 
            '677663a1000334c98be3', 
            id
        );
    } catch (error) {
        throw error
    }
}

export default useDeleteComment