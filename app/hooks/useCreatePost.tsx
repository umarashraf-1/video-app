import { database, storage, ID } from "@/libs/AppWriteClient"

const useCreatePost = async (file: File, userId: string, caption: string) => {
    let videoId = Math.random().toString(36).slice(2, 22)

    try {
        await database.createDocument(
            '67765a9e001b730b0f67', 
            '677662e4001d370a1b23', 
            ID.unique(), 
        {
            user_id: userId,
            text: caption,
            video_url: videoId,
            created_at: new Date().toISOString(),
        });
        await storage.createFile('677664fe001528bae1c5', videoId, file)
    } catch (error) {
        throw error
    }
}

export default useCreatePost