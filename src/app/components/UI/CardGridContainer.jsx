import React from "react";

function getCardsList(list, size = 3) {
  let ans = [];
  for(let i=0; i < list.length; i+=size) {
    ans.push(list.slice(i, i + size));
  }
  return ans;
} 

/**
 * Base of a grid container
 * @param {Array} props.data
 */
function CardGridContainer(props) {
  const { data, size = 3, children } = props;
  return (
    getCardsList(data, size).map((row, i) => (
      <div key={i} className="row my-3">
        {row.map((value, j) => (
          <div key={j} className={`col-${Math.ceil(12 / size)}`}>
            {children(value)}
          </div>
        ))}
      </div>
    ))
  );
}

export default CardGridContainer;