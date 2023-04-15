import BlogCard from './BlogCard'

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
  },
]

function BlogListSection() {
  return (
    <>
      {posts.map(post => (
        <BlogCard key={post.id} post={post} />
      ))}
    </>
  )
}

export default BlogListSection
