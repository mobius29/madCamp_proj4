import client from './client'

interface Post {
  id: number
  title: string
  content: string
  tags: string[]
}

interface Comment {
  postId: number
  comment: string
  parentCommentId: number
}

export const getPosts = (page: number) => client.get(`/posts/${page}`)

export const getPost = (id: number) => client.get(`/posts/post/${id}`)

export const getPostsBySearch = ({
  search,
  page,
}: {
  search: string
  page: number
}) => client.get(`/posts/search/results?search=${search}&pages=${page}`)

export const getPostsByTag = ({ tag, page }: { tag: string; page: number }) =>
  client.get(`/posts/search/results?tag=${tag}&pages=${page}`)

export const writePost = ({ title, content, tags }: Post) =>
  client.post('/posts/create', { title, content, tags })

export const updatePost = ({ id, title, content, tags }: Post) =>
  client.put(`/posts/update/${id}`, { title, content, tags })

export const deletePost = (id: number) => client.delete(`/posts/delete/${id}`)

export const addComment = ({ postId, comment, parentCommentId }: Comment) =>
  client.post('/posts/comment', { postId, comment, parentCommentId })
