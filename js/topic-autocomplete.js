$(document).ready(function(){
var options = {
    // This is the options that can appear in the autocomplete search list
    data: [
        {"text": "Home", "website-link": "template.html"},
        {"text": "Topic A", "website-link": "template.html"},
        {"text": "Topic B", "website-link": "template.html"},
        {"text": "Topic C", "website-link": "template.html"},
        {"text": "Topic D", "website-link": "template.html"}
      ],


    getValue: "text",
    list: {
      match: {
        enabled: true
       }
    },
    template: {
        type: "links",
        fields: {
            link: "website-link"
        }
    }
};

$("#template-links").easyAutocomplete(options);

});