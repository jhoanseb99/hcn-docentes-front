import React from "react";

/**
 *
 * @param {Object} props
 * @param {String} props.title
 * @param {Array}  props.toolbar
 */
function BaseSection(props) {
  const { title, toolbar, component, children, className } = props;
  return (
    <div className={`container-fluid ${className ?? ""}`}>
      {/* Header */}
      <div className="row pb-3">
        <div className="col">
          <h3 className="text-dark">{title}</h3>
        </div>
        {toolbar ? (
          <div className="col text-right">
            {toolbar.map(({ title, ...props }, index) => (
              <button {...props} key={index}>
                {title}
              </button>
            ))}
          </div>
        ) : (
          component && (
            <div className="col text-right">
              {React.createElement(component)}
            </div>
          )
        )}
      </div>

      {children}
    </div>
  );
}

export default BaseSection;
