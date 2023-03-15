import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import ProgressBar from "react-animated-progress-bar";

import { BsApple, BsMicrosoft } from "react-icons/bs";
import { SiMercedes, SiBankofamerica } from "react-icons/si";
import { AiTwotoneDatabase } from "react-icons/ai";
import { getAnalyses } from "../api/API";

const Positionen = () => {
  const [analysis, setAnalysis] = useState<IAnalysis[]>([]);

  // ----- Dynamic Data -----

  // Fetch data from API whenever this component is mounted
  useEffect(() => {
    fetchAnalysis();
  }, []);
  const fetchAnalysis = (): void => {
    getAnalyses()
      .then(({ data: { analyses } }: IAnalysis[] | any) => {
        setAnalysis(analyses);
      })
      .catch((err: Error) => console.log(err));
  };
  // Fetch name and value from given data set("analysis") to define "pieData"
  const pieData = analysis.map((obj) => ({
    name: obj.name,
    value: obj.value,
  }));

  // ----- Static Data -----

  const COLORS = ["#00D4EE78", "#00EE00", "#00D4EE78", "#EE3456", "#0022FF"];
  const Icons = [
    "BsApple",
    "SiBankofamerica",
    "SiMercedes",
    "AiTwotoneDatabase",
    "BsMicrosoft",
  ];

  // Chart related function
  // type Props = {
  //   active: boolean;
  //   payload: any;
  //   label: any;
  // };

  // const CustomTooltip: FC<Props> = ({ active, payload, label }) => {
  //   if (active) {
  //     return (
  //       <div
  //         className="custom-tooltip"
  //         style={{
  //           backgroundColor: "#ffff",
  //           padding: "5px",
  //           border: "1px solid #cccc",
  //         }}
  //       >
  //         <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
  //       </div>
  //     );
  //   }
  //   return null;
  // };

  //Styled Components
  const Wrapper = styled.div`
    margin: 2rem 0 0 0;
    display: flex;
  `;
  const Chart = styled.div`
    width: 25%;
    margin: 1rem 4rem 0 0;
  `;
  const List = styled.div`
    width: 75%;
    margin: 2rem 2rem 0 0;
  `;
  const TABLE = styled.table`
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    font-size: 1rem;
  `;
  const TD = styled.td`
    border-bottom: 2px solid #ddd;
    padding: 0.5rem 2rem 0.5rem 2rem;
    text-align: left;
  `;
  const TH = styled.th`
    border-bottom: 2px solid #ddd;
    padding: 0.5rem 2rem 0.5rem 2rem;
    text-align: left;
  `;
  const P = styled.p`
    background-color: #00ff0025;
    color: #009900;
    text-align: center;
  `;
  const Mark = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `;
  const Brand = styled.span`
    padding: 0 1.5rem 0 0;
  `;
  const Name = styled.p`
    text-align: center;
  `;

  return (
    <Wrapper>
      <Chart>
        <PieChart width={400} height={350}>
          <Pie
            data={pieData}
            color="#000000"
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={130}
            innerRadius={55}
            startAngle={52}
            endAngle={412}
            paddingAngle={5}
            fill="#8884d8"
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          {/* <Tooltip content={<CustomTooltip />} /> */}
          <Legend />
        </PieChart>
      </Chart>
      <List>
        <TABLE>
          <tr>
            <TH>TITEL</TH>
            <TH>ALLOKATION</TH>
            <TH>GEWINN</TH>
          </tr>
          {pieData.map(({ name, value }, index) => (
            <tr>
              <TD>
                <Mark>
                  <Brand>
                    {index === 0 && <BsApple color="black" />}
                    {index === 1 && <SiBankofamerica color="red" />}
                    {index === 2 && <SiMercedes />}
                    {index === 3 && <AiTwotoneDatabase color="blue" />}
                    {index === 4 && <BsMicrosoft color="green" />}
                  </Brand>
                  <Name>{name}</Name>
                </Mark>
              </TD>
              <TD>
                <ProgressBar
                  width="35rem"
                  height="0.65rem"
                  rect
                  fontColor="#555"
                  percentage={value}
                  rectPadding="0"
                  rectBorderRadius="1rem"
                  trackPathColor="#E5E5E5"
                  bgColor="green"
                  defColor={{
                    fair: "#00C9EE",
                    good: "#00C9EE",
                    excellent: "#00C9EE",
                    poor: "#00C9EE",
                  }}
                  trackBorderColor="lightgrey"
                />
              </TD>
              <TD>
                <P>
                  {value > 0.7 ? (
                    <span>&#652; 0.70%</span>
                  ) : (
                    <span>&#878; 0.70%</span>
                  )}
                </P>
              </TD>
            </tr>
          ))}
        </TABLE>
      </List>
    </Wrapper>
  );
};

export default Positionen;
