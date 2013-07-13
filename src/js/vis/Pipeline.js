vde.Vis.Pipeline = (function() {
  var pipeline = function(source) {
    this.name = 'vdePipeline_' + (vg.keys(vde.Vis.pipelines).length+1);
    this.displayName = this.name;

    this.source = source;
    this.transforms = [];

    this.scales = {};

    vde.Vis.pipelines[this.name] = this;

    return this;
  };

  var prototype = pipeline.prototype;

  prototype.spec = function() {
    var spec = {
      name: this.name,
      source: this.source,
      transform: []
    };

    this.transforms.forEach(function(t) {
      spec.transform.push(t.spec());
    });

    return spec;
  };

  prototype.values = function(sliceBeg, sliceEnd) {
    var values = vg.duplicate(vde.Vis._data[this.source].values).map(vg.data.ingest);
    this.transforms.slice(sliceBeg, sliceEnd).forEach(function(t) {
      values = t.transform(values);
    });

    return values;
  };

  // Given a spec, find a pre-existing scale that matches,
  // or if none do, build a new scale. 
  prototype.scale = function(spec, defaultSpec) {
    for(var scaleName in this.scales) {
      if(this.scales[scaleName].equals(spec))
        return this.scales[scaleName];
    }

    for(var k in defaultSpec)
      spec[k] = defaultSpec[k];

    return new vde.Vis.Scale('', this, spec);
  };

  return pipeline;
})();