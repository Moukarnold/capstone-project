import { useState } from "react";

const levelItems = [
  {
    label: "Basic",
    value: "Basic",
  },
  { label: "Intermediaire", value: "Intermediaire" },
  { label: "Advanced", value: "Advanced" },
];

export default function PageLevel(props) {
  const [selectedLevels, setSelectedLevels] = useState("");

  function handLeLevel(event) {
    const selectedLevels = event.target.value;
    setSelectedLevels(selectedLevels);
    props.handLeLevel(selectedLevels);
    console.log("selectedLevels" + selectedLevels);
  }

  return (
    <select name="Levels" onChange={handLeLevel}>
      {levelItems.map((item) => (
        <option
          //selected={levels === item.value}
          value={item.value}
          key={item.value}
        >
          {item.label}
        </option>
      ))}
    </select>
  );
}

/* (
    <ContainerMain>
      <Box>
        <InnereBox>
          <h1> Level</h1>
          <ContainerMainLabel>
            <select
              name="Levels"
              onChange={(event) => handleCheckLevel(event.target.value)}
            >
              {levelItems.map((item) => (
                <option
                  //selected={levels === item.value}
                  value={item.value}
                  key={item.value}
                >
                  {item.label}
                </option>
              ))}
            </select>
          </ContainerMainLabel>{" "}
        </InnereBox>
        <Link href={"/"}>
          {" "}
          <button> Return</button>
        </Link>
      </Box>
    </ContainerMain>
  ); */
