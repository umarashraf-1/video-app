const useCreateBucketUrl = (fileId: string) => {

    const url = 'http://52.190.3.131/v1'
    const id = '67825af10032d8df32a8'
    const endpoint = '678249c50035144d6cc5'

    if (!url || !id || !endpoint || !fileId) return ''

    return `${url}/storage/buckets/${id}/files/${fileId}/view?project=${endpoint}`
}

export default useCreateBucketUrl