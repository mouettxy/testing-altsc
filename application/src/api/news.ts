import { axios } from '~/config/api'

export interface NewsEntry {
  title: string
  description: string
}

export const getAllNews = async (): Promise<NewsEntry[]> =>
  axios.value.get('/news')

export const getNewsEntry = async (id: string): Promise<NewsEntry> =>
  axios.value.get(`/news/${id}`)

export const createNewsEntry = async (payload: NewsEntry): Promise<NewsEntry> =>
  axios.value.post('/news', payload)

export const updateNewsEntry = async (
  id: string,
  payload: NewsEntry
): Promise<Partial<NewsEntry>> => axios.value.put(`/news/${id}`, payload)

export const deleteNewsEntry = async (id: string): Promise<NewsEntry> =>
  axios.value.delete(`/news/${id}`)
