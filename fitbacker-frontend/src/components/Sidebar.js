import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="w-1/5 bg-greenPrim p-4">
      <div className="text-white font-bold text-2xl hover:cursor-default mb-4">Fitbacker</div>
      <ul className="space-y-2">
        <Link href="/">
          <li className="text-white hover:bg-green-500 py-2 px-4 rounded cursor-pointer">
            Home
          </li>
        </Link>
        <Link href="/recipes">
          <li className="text-white hover:bg-green-500 py-2 px-4 rounded cursor-pointer">
            Recipes
          </li>
        </Link>
        <Link href="/nutritionlogger">
          <li className="text-white hover:bg-green-500 py-2 px-4 rounded cursor-pointer">
            Nutrition Logger
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
