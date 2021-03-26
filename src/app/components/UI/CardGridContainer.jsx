import React from "react";

function getCardsList(list, size = 3) {
  let ans = [];
  for(let i=0; i < list.length; i+=size) {
    ans.push(list.slice(i, i + size));
  }
  return ans;
} 

/**
 * 
 * @param {Object} props 
 * @param {Array} props.data
 */
function CardGridContainer(props) {
  const { data } = props;
  return (
    getCardsList(data).map((row, i) => (
      <div key={i} className="row my-3">
        {row.map((value, j) => (
          <div key={j} className="col">
            {value}
          </div>
        ))}
      </div>
    ))
  );
}

export default CardGridContainer;