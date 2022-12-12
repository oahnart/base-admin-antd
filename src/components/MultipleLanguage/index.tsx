import { CloseOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { getLocalStorage } from "utils/localStorage";
import { LANG } from "utils/localStorage/type";
import * as S from "./style";

interface Props {
  handleDrawerOpen?: () => void;
  langSelected?: (item: any) => void;
  isOpen?: boolean;
  listOptions?: any;
}

function MultipleLanguage(props: Props) {
  const { listOptions, langSelected } = props;
  const langMultiple = getLocalStorage(LANG, 0);
  const [activeDropdown, setActiveDropdown] = useState(false);
  // const [langActive, setLangActive] = useState(listOptions[0]);

  const onHandleClick = (item: any) => {
    // setLangActive(item);
    langSelected?.(item);
    setActiveDropdown(false);
  };

  return (
    <S.Languages>
      <div className="language">
        <div
          className="language-block"
          onClick={() => setActiveDropdown(!activeDropdown)}
        >
          {/* <span className="language-title">Languages:</span> */}
          <img
            src={
              langMultiple === "en" ? listOptions[1].src : listOptions[0].src
            }
            alt="language"
          />
        </div>
        {activeDropdown ? (
          <ul className="pop-content">
            <li
              className="close-btn"
              onClick={() => setActiveDropdown(!activeDropdown)}
            >
              <CloseOutlined />
            </li>

            {listOptions.map((item: any, index: number) => {
              return (
                <li key={index}>
                  <button onClick={() => onHandleClick(item)}>
                    <img src={item.src} alt={item.name} />
                    <span>{item.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          ""
        )}
      </div>
    </S.Languages>
  );
}

export default MultipleLanguage;
