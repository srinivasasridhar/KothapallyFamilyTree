//JavaScript
  /// <reference path="FamilyTree.d.ts" />

$(document).ready(function(){

    var treeDiv = document.getElementById("treeDiv");

FamilyTree.templates.john_female.field_0 =
  '<text data-width="230" style="font-size: 13px;font-weight:bold;" fill="#ffffff" x="60" y="135" text-anchor="middle" class="field_0">{val}</text>';
FamilyTree.templates.john_female.field_1 =
  '<text data-width="130" style="font-size: 12px;" fill="#ffffff" x="60" y="150" text-anchor="middle" class="field_1">{val}</text>';
FamilyTree.templates.john_male.field_0 =
  '<text data-width="230" style="font-size: 13px;font-weight:bold;" fill="#ffffff" x="60" y="135" text-anchor="middle" class="field_0">{val}</text>';
FamilyTree.templates.john_male.field_1 =
  '<text data-width="130" style="font-size: 12px;" fill="#ffffff" x="60" y="150" text-anchor="middle" class="field_1">{val}</text>';


var family = new FamilyTree(treeDiv, {
    mouseScrool: FamilyTree.none,
    //siblingSeparation: 120,
    mode: 'dark',
    template: 'john',
    nodeBinding: {
        field_0: "name",
        field_1: "title",
        img_0: "photo",
    }
});

family.on('field', function (sender, args) {
    if (args.name == 'born') {
        if(args.value != null){
        var date = new Date(args.value);
        args.value = date.toLocaleDateString();
        }
    }

    if(args.name == 'photo'){
        if(args.value == null)
        { 
            if(args.data.gender == "male")
            args.value = "https://picsum.photos/id/1005/200/200?grayscale&blur=3";
            else
            args.value = "https://picsum.photos/id/1027/200/200?grayscale&blur=3";
            
        }
    }
});

$.getJSON("data.json", function(data){
    family.load(data);
}).fail(function(){
    console.log("An error has occurred.");
});
    
});