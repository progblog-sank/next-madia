import { apiMicroCms } from '../api/useMicroCms'

export const useMedia = () => {
    const getMedia = async () => {
        const url = ''
        const response = await apiMicroCms().get(url)
        return response
    }
    return {
        getMedia,
    }
}