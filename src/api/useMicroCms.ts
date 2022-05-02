import axios from 'axios'
const header: any = {
    "x-microcms-api-key": process.env.NEXT_PUBLIC_API_KEY
}

export const apiMicroCms = () => {
    const http = axios.create({
        baseURL: process.env.NEXT_PUBLIC_BASE_URL,
        headers: header,
    })

    // リクエスト前段階の処理
    http.interceptors.request.use(
        (error) => {
            return Promise.reject(error)
        }
    )

    // レスポンス前段階の処理
    http.interceptors.response.use(
        (response) => {
            return response
        },
        (error) => {
            return Promise.reject(error)
        }
    )

    return {
        get: <T>(url: string, obj?: object) => http.get<T>(url, obj),
        post: <T>(url: string, obj?: object) => http.post<T>(url, obj),
        patch: <T>(url: string, obj: object) => http.patch<T>(url, obj),
        put: <T>(url: string, obj: object) => http.put<T>(url, obj),
        delete: <T>(url: string, obj?: object) => http.delete<T>(url, obj),
    }
}