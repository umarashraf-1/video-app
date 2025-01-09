const useCreateBucketUrl = (fileId: string) => {

    const url = 'https://cloud.appwrite.io/v1'
    const id = '677664fe001528bae1c5'
    const endpoint = '67761c44000116415a75'

    if (!url || !id || !endpoint || !fileId) return ''

    return `${url}/storage/buckets/${id}/files/${fileId}/view?project=${endpoint}`
}

export default useCreateBucketUrl