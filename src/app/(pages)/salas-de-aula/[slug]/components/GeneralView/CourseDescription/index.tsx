import { CourseDescriptionProps } from './types'

export const CourseDescription: React.FC<CourseDescriptionProps> = ({
  htmlContent
}) => {
  return (
    <article
      className="max-h-[150px] overflow-hidden"
      id="course-description"
      data-cid="course-description"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  )
}
