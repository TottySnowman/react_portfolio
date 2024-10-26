import { useRef, useEffect } from "react";
import { GrReactjs } from "react-icons/gr";
import { FaNodeJs, FaJava, FaPhp } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandNextjs, TbBrandCss3 } from "react-icons/tb";
import {
  SiTypescript,
  SiJavascript,
  SiNeo4J,
  SiHiveBlockchain,
  SiSolidity,
  SiCsharp,
} from "react-icons/si";
import { BsImageFill } from "react-icons/bs";
const PortfolioAbout = ({
  modalOpen,
  about,
  setOpenModal,
  projectTitle,
  tags,
}) => {
  const ModalProjectAbout = useRef(null);
  useEffect(() => {
    const body = document.body;

    if (modalOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
    return () => {
      body.style.overflow = "auto";
    };
  }, [modalOpen]);

  const iconMappings = {
    GrReactjs: GrReactjs,
    TbBrandNextjs: TbBrandNextjs,
    FaNodeJs: FaNodeJs,
    FaJava: FaJava,
    FaPhp: FaPhp,
    SiTypescript: SiTypescript,
    TbBrandCss3: TbBrandCss3,
    SiJavascript: SiJavascript,
    BsImageFill: BsImageFill,
    AiOutlineHtml5: AiOutlineHtml5,
    SiNeo4J: SiNeo4J,
    SiHiveBlockchain: SiHiveBlockchain,
    SiSolidity: SiSolidity,
    SiCsharp: SiCsharp,
  };

  const DynamicIconFromDB = ({ iconName }) => {
    const IconComponent = iconMappings[iconName];

    if (!IconComponent) {
      return <div>Invalid icon name</div>;
    }

    return <IconComponent className="technologyIcon" size={20} />;
  };
  return (
    <>
      {modalOpen && (
        <div className="backdrop">
          <dialog
            ref={ModalProjectAbout}
            open={modalOpen}
            className="dialog_styles"
          >
            <h2 className="headerModal">{projectTitle}</h2>

            <span className="modalBody">{about}</span>

            <h3 className="headerModal">Knowlege gained / Used technology</h3>
            <span>
              <ul id="tagList">
                {tags.map((tag) => {
                  return (
                    <li className="tagItem">
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <DynamicIconFromDB iconName={tag.TagIcon} />
                        {tag.Tag}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </span>

            <div id="modalCloseButton">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                Close
              </button>
            </div>
          </dialog>
        </div>
      )}
    </>
  );
};

export default PortfolioAbout;
