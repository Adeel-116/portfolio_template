
import BlogCard from './BlogCard'
import TextHeading from '../TextHeading'
import { TransformProvider } from '../ContextAPI/TransformContext'
function Blog() {
  return (
    <div className='w-full flex flex-col items-center gap-y-2 py-30'>
                <TextHeading heading='Blogs' text='Latest Blog Post' />

                <TransformProvider>
                <div className='w-full h-auto flex flex-row gap-7 flex-wrap justify-center items-center py-10'>
                    <BlogCard className='lg:w-[40%]  sm:w-[90%] w-[95%]' id={'card-1'} />
                    <BlogCard className='lg:w-[40%]  sm:w-[90%] w-[95%]' id={'card-2'} />
                    <BlogCard className='lg:w-[40%]  sm:w-[90%] w-[95%]' id={'card-3'} />
                    <BlogCard className='lg:w-[40%]  sm:w-[90%] w-[95%]' id={'card-4'} />
                </div>
                </TransformProvider>

            </div>
  )
}

export default Blog
