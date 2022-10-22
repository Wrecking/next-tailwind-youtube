import React from "react";
import Image from "next/image";
import videoImage from "../public/videoImage.webp";
import channelImage from "../public/channelImage.jpg";

type Props = {};

function Card({}: Props) {
  return (
    <div>
      <div className="card px-2 pb-10 w-[375px] h-[340px]">
        <div className="card__image">
          <Image
            src={videoImage}
            width={360}
            height={203}
            layout="fixed"
            alt="videoImage"
          />
        </div>
        <div className="card__content grid grid-cols-[50px_310px]">
          <div className="card__channel__image row-span-2 py-3">
            <Image
              src={channelImage}
              width={36}
              height={36}
              layout="fixed"
              alt="videoImage"
              className="rounded-full"
            />
          </div>
          <div className="card__title pt-1 text-white font-bold uppercase tracking-tighter leading-snug break-words">
            <h3>How to make a YouTube clone with Next.js</h3>
          </div>
          <div className="card__sub text-sm text-zinc-300 tracking-tight font-semibold pt-1">
            <div className="card__sub__channel">
              <span>Developer</span>
            </div>
            <div className="card__sub__views">
              <span>666K views</span>
              <span className="ml-1">15 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
