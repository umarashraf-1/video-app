import { database, storage, ID } from "@/libs/AppWriteClient"

const useCreatePost = async (file: File, userId: string, caption: string) => {
    let videoId = Math.random().toString(36).slice(2, 22)

    try {
        await database.createDocument(
            '678254d20021e0f39655', 
            '6782596800053fef2ae8', 
            ID.unique(), 
        {
            user_id: userId,
            text: caption,
            video_url: videoId,
            created_at: new Date().toISOString(),
        });
        await storage.createFile('67825af10032d8df32a8', videoId, file)
    } catch (error) {
        throw error
    }
}

export default useCreatePost