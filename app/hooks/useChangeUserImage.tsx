import { storage } from "@/libs/AppWriteClient"
import Image from "image-js";

const useChangeUserImage = async (file: File, cropper: any, currentImage: string) => {
    let videoId = Math.random().toString(36).slice(2, 22)

    const x = cropper.left;
    const y = cropper.top;
    const width = cropper.width;
    const height = cropper.height;

    try {
        const response = await fetch(URL.createObjectURL(file));
        const imageBuffer = await response.arrayBuffer();

        const image = await Image.load(imageBuffer)
        const croppedImage = image.crop({ x, y, width, height });
        const resizedImage = croppedImage.resize({ width: 200, height: 200 });
        const blob = await resizedImage.toBlob();
        const arrayBuffer = await blob.arrayBuffer();
        const finalFile = new File([arrayBuffer], file.name, { type: blob.type });
        const result = await storage.createFile
        ('67825af10032d8df32a8', 
        videoId, finalFile);

        // if current image is not default image delete
        if (currentImage != '67825b370010af93c501') {
            await storage.deleteFile('67825af10032d8df32a8', currentImage);
        }

        return result?.$id
    } catch (error) {
        throw error
    }
}

export default useChangeUserImage