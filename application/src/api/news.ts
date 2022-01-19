import { axios } from '~/config/api'

export interface NewsEntry {
  _id: string
  title: string
  description: string
}

export interface NewsEntryCreate {
  title: string
  description: string
}

export interface NewsEntryUpdate {
  title?: string
  description?: string
}

export const getAllNews = async () => axios.get<NewsEntry[]>('/news')

export const getNewsEntry = async (id: string) =>
  axios.get<NewsEntry>(`/news/${id}`)

export const createNewsEntry = async (payload: NewsEntryCreate) =>
  axios.post<NewsEntry>('/news', payload)

export const updateNewsEntry = async (id: string, payload: NewsEntryUpdate) =>
  axios.patch<Partial<NewsEntry>>(`/news/${id}`, payload)

export const deleteNewsEntry = async (id: string) =>
  axios.delete<NewsEntry>(`/news/${id}`)
