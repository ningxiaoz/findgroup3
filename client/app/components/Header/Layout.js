import React from "react"
import MobileContainer from "./MobileContainer";
import DesktopContainer from "./Navbar";
import PropTypes from "prop-types";

class Layout extends React.Component{
  render(){
    return(
      <div>
        <DesktopContainer>{this.props.children}</DesktopContainer>
        <MobileContainer>{this.props.children}</MobileContainer>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout;
