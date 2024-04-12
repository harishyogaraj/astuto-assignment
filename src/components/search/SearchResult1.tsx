import React from 'react';
import CodeBlock from '../commonComponents/CodeBlock';
import CloudCostChart from '../commonComponents/CloudCostChart';

const SearchResult1: React.FC = () => {
  const codeString = `
  function greet(name) {
    return 'Hello, ' + name + '!';
  }
  console.log(greet('world'));
  `;

  return (
    <div>
      <h1>Code Block Example</h1>
      {/* <CodeBlock codeString={codeString} language="javascript" /> */}
      <CloudCostChart />
    </div>
  );
};

export default SearchResult1;