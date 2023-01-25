import "./App.css";
import { useTranslation } from "react-i18next";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import i18next from "i18next";
import Cookies from "js-cookie";
import { useEffect } from "react";

const language = [
  {
    code: "fr",
    name: "France",
    country_code: "fr",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "ar",
    name: "العربية",
    country_code: "sa",
    dir: "rtl",
  },
];

function App() {
  const [t] = useTranslation();
  const currentLangaugeCode = Cookies.get("i18next") || "en";
  const currentLangauge = language.find(
    (item) => item.code === currentLangaugeCode
  );

  const releaseDate = new Date("2023-01-20");
  const timeDifference = new Date() - releaseDate;
  const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  useEffect(() => {
    document.body.dir = currentLangauge.dir || "ltr";
    document.title = t("app_title") || "en";
  }, [currentLangauge, t]);

  return (
    <div className="container">
      <div className="d-flex justify-content-end mt-2">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fa-solid fa-earth-oceania fa-2x"></i>
          </button>
          {t("how_are_you", "How are you?")}
          {t("hey", "hey")}
          {t("hello", "Hello")}
          <ul
            className="dropdown-menu dropdown-menu-light"
            aria-labelledby="dropdownMenuButton2"
          >
            <li>
              <span className="dropdown-item-text">{t("language")}</span>
            </li>
            {language?.map(({ code, name, country_code }) => {
              return (
                <li key={country_code}>
                  <button
                    className="dropdown-item"
                    onClick={() => i18next.changeLanguage(code)}
                    disabled={code === currentLangaugeCode}
                  >
                    <span
                      className={`fi fi-${country_code} mx-2`}
                      style={{
                        opacity: code === currentLangaugeCode ? 0.5 : 1,
                      }}
                    ></span>
                    {name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="d-flex flex-column align-items-start">
        <h1 className="font-weight-normal mb-3">{t("title")}</h1>
        <p>
          {t("details", {
            number_of_days,
          })}
        </p>
      </div>
    </div>
  );
}

export default App;
