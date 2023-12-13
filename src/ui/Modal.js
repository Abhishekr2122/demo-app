import { createContext, useContext, useState } from "react";
import Input from "./Input";
import { getCountries } from "../getCountries";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { ImCancelCircle } from "react-icons/im";

const ModalContext = createContext();

export default function Modal({ children }) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");
  console.log(isFocused);
  // const [data, setData] = useState([]);
  const data = [
    "Portugal",
    "Palau",
    "Paraguay",
    "Qatar",
    "Andorra",
    "United Arab Emirates",
    "Afghanistan",
    "Antigua And Barbuda",
    "Albania",
    "Armenia",
    "Angola",
    "Argentina",
    "Austria",
    "Australia",
    "Aruba",
    "Åland Islands",
    "Azerbaijan",
    "Romania",
    "Bosnia And Herzegovina",
    "Barbados",
    "Serbia",
    "Bangladesh",
    "Russia",
    "Belgium",
    "Burkina Faso",
    "Rwanda",
    "Bulgaria",
    "Bahrain",
    "Burundi",
    "Benin",
    "Brunei",
    "Bolivia",
    "Saudi Arabia",
    "Solomon Islands",
    "Seychelles",
    "Brazil",
    "Sudan",
    "The Bahamas",
    "Bhutan",
    "Sweden",
    "Singapore",
    "Botswana",
    "Slovenia",
    "Belarus",
    "Slovakia",
    "Belize",
    "Sierra Leone",
    "San Marino",
    "Senegal",
    "Somalia",
    "Canada",
    "Suriname",
    "South Sudan",
    "São Tomé And Príncipe",
    "Democratic Republic Of The Congo",
    "Central African Republic",
    "El Salvador",
    "Republic Of The Congo",
    "Switzerland",
    "Sint Maarten",
    "Syria",
    "Ivory Coast",
    "Eswatini",
    "Chile",
    "Cameroon",
    "People's Republic Of China",
    "Colombia",
    "Costa Rica",
    "Chad",
    "Cuba",
    "Togo",
    "Cape Verde",
    "Thailand",
    "Curaçao",
    "Turkish Republic Of Northern Cyprus",
    "Tajikistan",
    "Czech Republic",
    "East Timor",
    "Turkmenistan",
    "Tunisia",
    "Tonga",
    "Turkey",
    "Trinidad And Tobago",
    "Germany",
    "Tuvalu",
    "Taiwan",
    "Tanzania",
    "Djibouti",
    "Denmark",
    "Dominica",
    "Dominican Republic",
    "Ukraine",
    "Uganda",
    "Algeria",
    "United States Of America",
    "Ecuador",
    "Estonia",
    "Egypt",
    "Uruguay",
    "Uzbekistan",
    "Vatican City",
    "Eritrea",
    "Saint Vincent And The Grenadines",
    "Spain",
    "Ethiopia",
    "Venezuela",
    "Vietnam",
    "Vanuatu",
    "Finland",
    "Fiji",
    "Federated States Of Micronesia",
    "France",
    "Gabon",
    "United Kingdom",
    "Samoa",
    "Grenada",
    "Georgia",
    "Guernsey",
    "Ghana",
    "Greenland",
    "The Gambia",
    "Guinea",
    "Equatorial Guinea",
    "Greece",
    "Guatemala",
    "Guinea-Bissau",
    "Guyana",
    "Kosovo",
    "Hong Kong",
    "Honduras",
    "Croatia",
    "Haiti",
    "Yemen",
    "Hungary",
    "Indonesia",
    "Ireland",
    "Israel",
    "Isle Of Man",
    "India",
    "South Africa",
    "Iraq",
    "Iran",
    "Iceland",
    "Italy",
    "Zambia",
    "Jersey",
    "Zimbabwe",
    "Jamaica",
    "Jordan",
    "Japan",
    "Kenya",
    "Kyrgyzstan",
    "Cambodia",
    "Kiribati",
    "Comoros",
    "Saint Kitts And Nevis",
    "North Korea",
    "South Korea",
    "Kuwait",
    "Kazakhstan",
    "Laos",
    "Lebanon",
    "Saint Lucia",
    "Liechtenstein",
    "Sri Lanka",
    "Liberia",
    "Lesotho",
    "Lithuania",
    "Luxembourg",
    "Latvia",
    "Libya",
    "Morocco",
    "Monaco",
    "Moldova",
    "Montenegro",
    "Madagascar",
    "Marshall Islands",
    "Republic Of Macedonia",
    "Mali",
    "Myanmar",
    "Mongolia",
    "Macau",
    "Mauritania",
    "Malta",
    "Mauritius",
    "Maldives",
    "Malawi",
    "Mexico",
    "Malaysia",
    "Mozambique",
    "Namibia",
    "Niger",
    "Nigeria",
    "Nicaragua",
    "Netherlands",
    "Norway",
    "Nepal",
    "Nauru",
    "New Zealand",
    "Oman",
    "Panama",
    "Peru",
    "Papua New Guinea",
    "Philippines",
    "Pakistan",
    "Poland",
  ];
  return (
    <ModalContext.Provider
      value={{ isFocused, setIsFocused, data, value, setValue }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  const data = useContext(ModalContext);
  return data;
}

export function InputElem({ type, placeholder }) {
  const { isFocused, setIsFocused, data, value } = useModalContext();

  return (
    <Input
      value={value}
      type="search"
      placeholder={placeholder}
      onFocus={function () {
        if (type === "country") {
          // const res = getCountries();
          setIsFocused(true);
          // setData(res);
        }
      }}
      onChange={function () {
        if (type === "country") {
          getCountries();
        }
      }}
      // onBlur={function () {
      //   setIsFocused(false);
      // }}
      autoComplete="new-search"
    />
  );
}

const StyledDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 4px;
  height: 250px;
  width: auto;
  overflow: scroll;
  scroll-behavior: smooth;
  background-color: #111827;
  &::-webkit-scrollbar {
    display: none;
    scroll-behavior: smooth;
  }
`;
export function OutPutContainer() {
  const { isFocused, data, setValue, setIsFocused } = useModalContext();

  if (isFocused) {
    return createPortal(
      <StyledDiv>
        <ul>
          <ImCancelCircle
            style={{
              color: "white",
              position: "absolute",
              left: "90%",
              top: "3%",
            }}
            onClick={function () {
              setIsFocused(false);
            }}
          />
          {data?.map(function (citem, i) {
            return (
              <li
                key={i}
                style={{
                  color: "white",
                  cursor: "pointer",
                  padding: "4px",
                  borderBottom: "2px solid #18212f",
                }}
                onClick={function () {
                  console.log(citem);
                }}
              >
                {<strong style={{ fontWeight: "lighter" }}>{citem}</strong>}
              </li>
            );
          })}
        </ul>
      </StyledDiv>,
      document.body
    );
  } else {
    return null;
  }
}
