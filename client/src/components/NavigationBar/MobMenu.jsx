import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom"; // Importing Link for routing

export default function MobMenu({ Menus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedMenu, setClickedMenu] = useState(null);
  const [clickedSection, setClickedSection] = useState({});

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClickedMenu(null);
    setClickedSection({});
  };

  const drawerAnim = {
    enter: { height: "auto", overflow: "hidden", transition: { duration: 0.3 } },
    exit: { height: 0, overflow: "hidden", transition: { duration: 0.3 } },
  };

  const getPathFromName = (name) =>
    "/" + name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  return (
    <div>
      <button className="lg:hidden z-[999] relative" onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>

      <motion.div
        className="fixed left-0 right-0 top-16 overflow-y-auto h-full bg-[#14532dea] backdrop-blur-2xl text-white p-6 pb-20 z-50"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
      >
        <ul>
          {Menus.map(({ name, subMenu }, i) => {
            const isMenuOpen = clickedMenu === i;
            const hasSubMenu = subMenu?.length;

            return (
              <li key={`${i}-${name}`}>
                <div
                  className="flex justify-between items-center p-4 hover:bg-white/5 rounded-md cursor-pointer"
                  onClick={() => setClickedMenu(isMenuOpen ? null : i)}
                >
                  <Link to={getPathFromName(name)} className="w-full">
                    {name}
                  </Link>
                  {hasSubMenu && (
                    <ChevronDown
                      className={`ml-auto transition-transform duration-200 ${
                        isMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isMenuOpen ? "enter" : "exit"}
                    variants={drawerAnim}
                    className="ml-5 flex flex-col gap-4"
                  >
                    {subMenu.map((section, j) => {
                      const isSectionOpen = clickedSection[i] === j;

                      return (
                        <li key={`section-${i}-${j}`}>
                          <div
                            className="flex justify-between items-center cursor-pointer px-2 py-1 text-sm text-gray-200 hover:bg-white/5 rounded-md"
                            onClick={() =>
                              setClickedSection((prev) => ({
                                ...prev,
                                [i]: prev[i] === j ? null : j,
                              }))
                            }
                          >
                            {section.heading}
                            <ChevronDown
                              className={`transition-transform duration-200 ${
                                isSectionOpen ? "rotate-180" : ""
                              }`}
                              size={16}
                            />
                          </div>

                          <motion.ul
                            initial="exit"
                            animate={isSectionOpen ? "enter" : "exit"}
                            variants={drawerAnim}
                            className="ml-4 mt-2 space-y-2"
                          >
                            {section.items.map(({ name, icon: Icon }, k) => (
                              <li key={`item-${j}-${k}-${name}`}>
                                <Link
                                  to={getPathFromName(name)}
                                  className="flex items-center gap-2 hover:bg-white/5 p-2 rounded-md cursor-pointer"
                                  onClick={toggleDrawer}
                                >
                                  {Icon && <Icon size={17} />}
                                  {name}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        </li>
                      );
                    })}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}
