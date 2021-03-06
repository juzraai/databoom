/// <reference path="visualization/VisualizationModel.ts" />
/// <reference path="visualization/VisualizationView.ts" />

$(() => {
    
    var model = new VisualizationModel();
    var view = new VisualizationView(model);

    // view.render('.visualization');
    
    // view.showCurrentLevel();
    
    window.model = model;
    window.view = view;

    // typeahead
    $('input.typeahead').typeahead({
        source: model.autocompleteValues
    });

});