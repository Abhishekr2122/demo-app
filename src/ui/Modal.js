import { createContext, useContext, useEffect, useState } from "react";
import Input from "./Input";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { ImCancelCircle } from "react-icons/im";
import { useCountries } from "../hooks/useCountries";

const ModalContext = createContext();

export default function Modal({ children }) {
  const { isLoading, data: remoteData } = useCountries();
  console.log(isLoading, "this is the remotedata", remoteData);
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  console.log(value.length);

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

  const [outputData, setOutputData] = useState(data);

  console.log(outputData);
  return (
    <ModalContext.Provider
      value={{
        isOpen,
        setIsOpen,
        data,
        value,
        setValue,
        outputData,
        setOutputData,
      }}
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
  const { setIsOpen, data, value, setValue, setOutputData } = useModalContext();

  return (
    <Input
      value={value}
      type="text"
      placeholder={placeholder}
      onFocus={function (e) {
        if (type === "country") {
          if (value) {
            setValue("");
            setOutputData(data);
          }
          setIsOpen(true);
        }
      }}
      onChange={function (e) {
        setValue(e.target.value);
      }}
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
  width: 15%;
  overflow: scroll;
  scroll-behavior: smooth;
  background-color: #111827;
  &::-webkit-scrollbar {
    display: none;
    scroll-behavior: smooth;
  }
`;

const StyledLi = styled.li`
  color: white;
  cursor: pointer;
  padding: 4px;
  border-bottom: 2px solid #18212f;
`;
export function OutPutContainer() {
  const { isOpen, data, setValue, setIsOpen, outputData } = useModalContext();

  if (isOpen) {
    return createPortal(
      <StyledDiv>
        <ImCancelCircle
          style={{
            color: "white",
            position: "absolute",
            left: "90%",
            top: "3%",
          }}
          onClick={function () {
            setIsOpen(false);
          }}
        />
        <ul>
          {outputData?.map(function (citem, i) {
            return (
              <StyledLi
                key={i}
                onClick={function () {
                  setValue(citem);
                  setIsOpen(false);
                }}
              >
                {<strong style={{ fontWeight: "lighter" }}>{citem}</strong>}
              </StyledLi>
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
