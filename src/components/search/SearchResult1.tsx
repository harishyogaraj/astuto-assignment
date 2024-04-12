import React from 'react';
import CodeBlock from '../commonComponents/CodeBlock';
import CloudCostChart from '../commonComponents/CloudCostChart';
import TextMessage from '../commonComponents/TextMessage';
import Collapsible from 'react-collapsible';
import Image from 'next/image';
import chevron from './../../../public/images/chevronDown.svg';

const container = {
  padding: "20px"
}

const columnContainer: any = {
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  background: "white",
  borderRadius: "10px",
  padding: "15px 20px"
};

const line = {
  flex: 1,
  borderBottom: "1px solid black"
};

const SearchResult1: React.FC = () => {
  const codeString = `
  1. SELECT
  2. service,
  3. SUM(cost) AS total_cost  
  4. FROM
  5. cloud_costs
  6. WHERE
  7. account_type = 'production (#24542)'
  8. GROUP BY
  9. service
  10. ORDER BY
  11. total_cost DESC
  `;

  return (
    <div style={container}>

      <Collapsible trigger={
        <div style={columnContainer}>
          <TextMessage text={"Query"} />
          <span style={line}></span>
          <Image src={chevron} alt="chevronIcon" width={20} height={20} />
        </div>
      }
        transitionTime={200}>

        <CodeBlock codeString={codeString} language="javascript" />
      </Collapsible>
      <CloudCostChart />
    </div>
  );
};

export default SearchResult1;