import { ExperienceType } from '@/types/experience'
import React, { PropsWithChildren } from 'react'

const ExperienceSubsection = ({children, title, period, className}: PropsWithChildren<ExperienceType & {className?: string}>) => {
  return (
    <div className="w-full grid sm:grid-cols-[minmax(auto,240px)_auto] gap-5 py-4 mt-4 border-t-[2px] border-black">
      <div className="flex flex-col">
        <p>{title}</p>
        <p>{period}</p>
      </div>
      <div className={className}>
        {children}
      </div>
    </div>
  )
}

export default ExperienceSubsection