export const SkeletonHorizontalCourseCard: React.FC = () => {
  return (
    <div className="flex h-[142px] w-full animate-pulse overflow-hidden rounded-sm bg-white">
      <div className="aspect-[16/9] h-full w-full max-w-[250px] bg-slate-200" />
      <div className="flex h-full w-full flex-col justify-between p-4">
        <div className="flex justify-between">
          <div className="h-6 w-36 bg-slate-100" />
          <div className="h-6 w-8 bg-slate-100" />
        </div>
        <div className="flex justify-between">
          <div className="h-6 w-2/3 bg-slate-100" />
          <div className="h-6 w-40 bg-slate-100" />
        </div>
      </div>
    </div>
  )
}
