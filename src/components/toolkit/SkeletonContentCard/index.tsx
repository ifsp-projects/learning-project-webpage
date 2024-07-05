export const SkeletonContentCard: React.FC = () => {
  return (
    <div className="flex aspect-[94/95] w-full animate-pulse flex-col overflow-hidden rounded-sm bg-white">
      <div className="aspect-[16/9] w-full bg-slate-200" />
      <div className="flex w-full flex-col gap-4 p-4">
        <div className="h-4 w-2/3 bg-slate-100" />
        <div className="h-12 w-full bg-slate-200" />
        <div className="flex justify-between">
          <div className="h-4 w-1/3 bg-slate-100" />
          <div className="h-4 w-8 bg-slate-100" />
        </div>
      </div>
    </div>
  )
}
