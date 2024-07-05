import { traxios } from 'traxios'

const categories = { pt: '1', es: '102' }

export const fetchRoutesPosts = async locale => {
  const postRepository = []
  let currentPage = 1
  let totalPages = 1

  try {
    while (currentPage <= totalPages) {
      const { data, headers } = await traxios.get(
        `https://blog.tractian.com/wp-json/wp/v2/posts?_fields=slug&categories=${categories[locale]}&per_page=100`
      )

      postRepository.push(...data)

      const totalPagesHeader = headers.get('x-wp-totalpages')
      totalPages = parseInt(totalPagesHeader)

      currentPage++
    }
  } catch (error) {
    console.error({ generatePostsPaths: error })
  }

  return postRepository
}
