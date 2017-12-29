import React from "react";
import "./css/header.css";
import Input from "./input";
import Downshift from "downshift";

export default class Header extends React.Component {
  BasicAutocomplete({ items, onChange }) {
    return (
      <Downshift
        onChange={onChange}
        render={({
          getInputProps,
          getItemProps,
          isOpen,
          inputValue,
          selectedItem,
          highlightedIndex
        }) => (
          <div className="Header-searchBoxWrapper">
            <input
              {...getInputProps({ placeholder: "Search here..." })}
              className="Header-searchBox"
            />
            {isOpen ? (
              <div className="Header-searchedBoxItem">
                {items
                  .filter(
                    i =>
                      !inputValue ||
                      i.name.toLowerCase().includes(inputValue.toLowerCase())
                  )
                  .map((item, index) => (
                    <div
                      key={index}
                      onClick={() =>
                        this.props.history.push(`/agents/${item.idNumber}`)}
                      className="Header-searchedItem"
                    >
                      {item.name}
                    </div>
                  ))}
              </div>
            ) : null}
          </div>
        )}
      />
    );
  }
  render() {
    return (
      <div className="Header">
        <div
          className="Header-text"
          onClick={() => this.props.history.push("/")}
        >
          Welcome Buddy
        </div>
        <div className="Header-search">
          {this.BasicAutocomplete({ items: this.props.agents })}
        </div>
      </div>
    );
  }
}
