(function() {
  "use strict";

  /** @jsx React.DOM **/
  var HeaderComponent = React.createClass({
    propTypes: {
      title    : React.PropTypes.string.isRequired,
      subtitle : React.PropTypes.string.isRequired
    },
    render: function() {
      return (
        <div>
          <strong>{this.props.title}</strong>
          <br/>
          <small>{this.props.subtitle}</small>
        </div>);
    }
  });

  angular
    .module('app')
    .directive('sidebarHeader', function(reactDirective) {
      return reactDirective(HeaderComponent);
    });
}());
