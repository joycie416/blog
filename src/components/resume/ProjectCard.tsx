import Image from "next/image";
import React from "react";

type ProjectCardProps = {
  name: string;
  description: string;
  image: string;
};

const ProjectCard = ({
  data: { name, description, image },
}: {
  data: ProjectCardProps;
}) => {
  return (
    <div className="w-full sm:h-[400px] flex flex-col border rounded-xl overflow-hidden transition hover:scale-[105%] cursor-pointer">
      {image ? (
        <Image
          src={image}
          alt={name}
          className="w-full max-sm:h-[150px] sm:aspect-square object-cover"
        />
      ) : (
        <div className="w-full max-sm:h-[150px] grid sm:aspect-square bg-gray-300"><p className="place-self-center text-white text-center">NO<br/>IMAGE</p></div>
      )}
      <div className="flex flex-col px-4 py-2 sm:py-4 gap-1 sm:gap-2">
        <p>{name}</p>
        <p className="break-all text-sm sm:text-base line-clamp-2 sm:line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
