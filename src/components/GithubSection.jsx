import React from "react";
import { GithubFilled } from "@ant-design/icons";

const GitHubSection = () => {
    return (
      <div className="github-section py-8 bg-gray-900 text-white text-center">
        <div className="container mx-auto flex flex-col items-center">
          <a
            href="https://github.com/Saad1926Q/github-meme-wrapped" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-300 hover:text-white"
          >
            <GithubFilled className="text-4xl" /> 
            <span className="text-xl font-bold">Star the Repo</span>
          </a>
          <p className="mt-4 text-sm text-gray-400">
            Made with ❤️ by{" "}
            <a
              href="https://github.com/saad1926q" 
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              @saad1926q
            </a>
          </p>
        </div>
      </div>
    );
  };
  
  export default GitHubSection;
