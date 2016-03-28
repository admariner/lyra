'use strict';
var React = require('react'),
    Property = require('./Property'),
    AreaProperty = require('./AreaProperty'),
    Base = require('../../model/primitives/marks/Area');

var Area = React.createClass({
  render: function() {
    var props = this.props,
        primitive = props.primitive,
        update = primitive.properties.update;

    return (
      <div>
        <h4 className="header4">X Position</h4>

        <AreaProperty type="x" {...props} />

        <h4 className="header4">Y Position</h4>

        <AreaProperty type="y" {...props} />

        <h4 className="header4">Fill</h4>

        <Property
          name="fill"
          label="Color"
          type="color"
          primitive={primitive}
          canDrop={true}
          scale={update.fill.scale}
          field={update.fill.field}
          signal={update.fill.signal} />

        <Property
          name="fillOpacity"
          label="Opacity"
          primitive={primitive}
          type="range"
          canDrop={true}
          min="0" max="1"
          step="0.05"
          scale={update.fillOpacity.scale}
          field={update.fillOpacity.field}
          signal={update.fillOpacity.signal} />

        <h4 className="header4">Stroke</h4>

        <Property
          name="stroke"
          label="Color"
          type="color"
          primitive={primitive}
          canDrop={true}
          scale={update.stroke.scale}
          field={update.stroke.field}
          signal={update.stroke.signal}
        />

        <Property
          name="strokeWidth"
          label="Width"
          primitive={primitive}
          type="range"
          canDrop={true}
          min="0"
          max="10"
          step="0.25"
          scale={update.strokeWidth.scale}
          field={update.strokeWidth.field}
          signal={update.strokeWidth.signal}
        />

        <h4>Line Strength</h4>
        <Property
          name="interpolate"
          label="Interpolate"
          primitive={primitive}
          type="select"
          opts={Base.INTERPOLATE}
          canDrop={true}
          scale={update.interpolate.scale}
          field={update.interpolate.field}
          signal={update.interpolate.signal}
        />

        <Property
          name="tension"
          label="Tension"
          type="number"
          primitive={primitive}
          canDrop={true}
          scale={update.tension.scale}
          field={update.tension.field}
          signal={update.tension.signal}
          />
        <h4 className="header4">Orientation</h4>
        <Property
          name="orient"
          label="Orient"
          primitive={primitive}
          type="select"
          opts={Base.ORIENT}
          canDrop={true}
          scale={update.orient.scale}
          field={update.orient.field}
          signal={update.orient.signal}
        />
      </div>
    );
  }
});

module.exports = Area;
