import React from "react";

const withToggleMenu = (Component) => {
  class WithToggleMenu extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isMenuOpen: false
      };

      this.handleToggleClick =
        this.handleToggleClick.bind(this);
    }
    handleToggleClick() {
      this.setState(
          (prevState) => ({isMenuOpen: !prevState.isMenuOpen})
      );
    }

    render() {
      return (
        <Component
          {...this.props}
          isMenuOpen={this.state.isMenuOpen}
          onToggleClick={this.handleToggleClick}
        />
      );
    }
  }
  return WithToggleMenu;
};

export default withToggleMenu;

