import { CourseDescriptionProps } from './types'

export const CourseDescription: React.FC<CourseDescriptionProps> = ({
  htmlContent
}) => {
  return (
    <article
      className="max-h-[290px] overflow-hidden"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      data-cid="course-description"
      id="course-description"
    />
  )
}
