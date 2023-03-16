import React from 'react';

export default class ContactIcon extends React.Component {
  render() {
    const { iconName, link } = this.props;
    return(
      <div>
        <a href={ link } target="_blank" rel="noreferrer">
          <i className={`fa-brands ${ iconName }`}></i>
        </a>
      </div>
    );
  }
}