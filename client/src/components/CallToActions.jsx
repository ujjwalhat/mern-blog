import { Button } from "flowbite-react";
import React from "react";
import { AiOutlineGithub } from "react-icons/ai";

function CallToActions() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col ">
        <h2 className="text-2xl">Checkout my Github repo</h2>
        <p className="text-gray-500 my-2 ">
          Also Checkout my linkedIn profile from Footer
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://github.com/ujjwalhat/"
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center space-x-2"
          >
            <span>GitHub</span>
            <AiOutlineGithub />
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img
          src="https://camo.githubusercontent.com/f1f2bc6e7ec110b34bab4ec55aa5c93ebae552ae011f5756bd7b7f783d627a6d/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f313136323037372f73637265656e73686f74732f333834383931342f70726f6772616d6d65722e676966"
          alt=""
        />
      </div>
    </div>
  );
}

export default CallToActions;
