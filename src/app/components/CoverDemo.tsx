import React from "react";
import { Cover } from "./ui/cover";
 
export function CoverDemo() {
  return (
    <div>
      <h1 className="text-4xl text-yellow-300 md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
       About  <br />  <Cover>Solar Energy</Cover>
      </h1>
      <p className="text-white text-[1vw]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel aut distinctio voluptatem eos doloribus ipsa veritatis omnis nobis, alias autem nemo nihil facere quia fuga, totam a reprehenderit architecto quo cupiditate exercitationem quae mollitia nulla expedita? Dolorum facere cumque dignissimos id! Quas, ea iusto! Modi cumque culpa debitis dignissimos perferendis. Cum dignissimos placeat tempore natus aperiam, nihil possimus. Voluptas recusandae impedit mollitia animi architecto quisquam incidunt saepe corrupti facilis nostrum odio eaque deserunt aspernatur amet quae, exercitationem laboriosam cumque quod, debitis aperiam iste sequi? Quis dolore, commodi tempora necessitatibus laudantium nisi, rem culpa explicabo ducimus iste harum omnis nam laboriosam.z</p>
    </div>
  );
}