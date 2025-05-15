import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function DesktopMenu({ menu }) {
  const [isHover, toggleHover] = useState(false);
  const toggleHoverMenu = () => toggleHover(!isHover);

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: { duration: 0.5 },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: { duration: 0.5 },
      transitionEnd: { display: "none" },
    },
  };

  const hasSubMenu = menu?.subMenu?.length;

  const getPathFromName = (name) =>
    "/" + name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  return (
    <motion.li
      className="group/link"
      onHoverStart={toggleHoverMenu}
      onHoverEnd={toggleHoverMenu}
      key={menu.name}
    >
      <Link
        to={getPathFromName(menu.name)}
        className="flex-center gap-1 hover:bg-white/5 cursor-pointer px-3 py-1 rounded-xl"
      >
        {menu.name}
        {hasSubMenu && (
          <ChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />
        )}
      </Link>

      {hasSubMenu && (
        <motion.div
          className="sub-menu absolute z-50 p-5 mt-3 rounded-xl border border-white/10 shadow-xl"
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          <div
            className={`grid gap-7 ${
              menu.gridCols === 3
                ? "grid-cols-3"
                : menu.gridCols === 2
                ? "grid-cols-2"
                : "grid-cols-1"
            }`}
          >
            {menu.subMenu.map((section, i) => (
              <div key={i}>
                <p className="text-sm mb-4 text-gray-500">{section.heading}</p>
                {section.items.map((item, j) => (
                  <Link
                    to={getPathFromName(item.name)}
                    key={j}
                    className="flex-center gap-x-4 group/menubox cursor-pointer mb-4"
                  >
                    <div className="bg-white/5 w-fit p-2 rounded-md group-hover/menubox:bg-white group-hover/menubox:text-gray-900 duration-300">
                      {item.icon && <item.icon />}
                    </div>
                    <div>
                      <h6 className="font-semibold">{item.name}</h6>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
}
