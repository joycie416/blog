import Image from 'next/image';
import React from 'react'

type ProjectCardProps = {
  name: string;
  description: string;
  image: string;
}

const ProjectCard = ({data:{name, description, image}}: {data: ProjectCardProps}) => {
  return (
    <div className='w-full h-[400px] flex flex-col border rounded-xl overflow-hidden transition hover:scale-[105%] cursor-pointer'>
      <Image src={image} alt={name} className='w-full object-cover'/>
      <div className='flex flex-col p-4 gap-2'>
        <p>{name}</p>
        <p className='break-all line-clamp-3'>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard