import { axios } from '~/config/api'

export interface NewsEntry {
  title: string
  description: string
}

export const getAllNews = async (): Promise<NewsEntry[]> => axios.get('/news')

export const getNewsEntry = async (id: string): Promise<NewsEntry> =>
  axios.get(`/news/${id}`)

export const createNewsEntry = async (payload: NewsEntry): Promise<NewsEntry> =>
  axios.post('/news', payload)

export const updateNewsEntry = async (
  id: string,
  payload: NewsEntry
): Promise<Partial<NewsEntry>> => axios.put(`/news/${id}`, payload)

export const deleteNewsEntry = async (id: string): Promise<NewsEntry> =>
  axios.delete(`/news/${id}`)
