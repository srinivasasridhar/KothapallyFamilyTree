window.onload = function () {
FamilyTree.templates.myTemplate = Object.assign({}, FamilyTree.templates.tommy);
FamilyTree.templates.myTemplate.size = [200, 200];
FamilyTree.templates.myTemplate.node =
    '<circle cx="100" cy="100" r="100" fill="#4D4D4D" stroke-width="1" stroke="#aeaeae"></circle>';

FamilyTree.templates.myTemplate.defs = '';

FamilyTree.templates.myTemplate.ripple = {
    radius: 100,
    color: "#e6e6e6",
    rect: null
};
FamilyTree.templates.myTemplate.img_0 =
    '<clipPath id="ulaImg">'
    + '<circle cx="100" cy="150" r="40"></circle>'
    + '</clipPath>'
    + '<image preserveAspectRatio="xMidYMid slice" clip-path="url(#ulaImg)" xlink:href="{val}" x="60" y="110" width="80" height="80">'
    + '</image>';
FamilyTree.templates.myTemplate.field_0 = '<text style="font-size: 24px;" fill="#ffffff" x="100" y="90" text-anchor="middle">{val}</text>';
FamilyTree.templates.myTemplate.field_1 = '<text style="font-size: 16px;" fill="#ffffff" x="100" y="60" text-anchor="middle">{val}</text>';

FamilyTree.templates.myTemplate.link =
    '<path stroke="#686868" stroke-width="1px" fill="none" data-l-id="[{id}][{child-id}]" d="M{xa},{ya} C{xb},{yb} {xc},{yc} {xd},{yd}" />';

FamilyTree.templates.myTemplate.nodeMenuButton =
    '<g style="cursor:pointer;" transform="matrix(1,0,0,1,93,15)" data-ctrl-n-menu-id="{id}">'
    + '<rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22">'
    + '</rect>'
    + '<line x1="0" y1="0" x2="0" y2="10" stroke-width="2" stroke="rgb(255, 202, 40)" />'
    + '<line x1="7" y1="0" x2="7" y2="10" stroke-width="2" stroke="rgb(255, 202, 40)" />'
    + '<line x1="14" y1="0" x2="14" y2="10" stroke-width="2" stroke="rgb(255, 202, 40)" />'
    + '</g>';

FamilyTree.templates.myTemplate.menuButton =
    '<div style="position:absolute;right:{p}px;top:{p}px; width:40px;height:50px;cursor:pointer;" data-ctrl-menu="">'
    + '<hr style="background-color: rgb(255, 202, 40); height: 3px; border: none;">'
    + '<hr style="background-color: rgb(255, 202, 40); height: 3px; border: none;">'
    + '<hr style="background-color: rgb(255, 202, 40); height: 3px; border: none;">'
    + '</div>';

FamilyTree.templates.myTemplate.pointer =
    '<g data-pointer="pointer" transform="matrix(0,0,0,0,100,100)">><g transform="matrix(0.3,0,0,0.3,-17,-17)">'
    + '<polygon fill="rgb(255, 202, 40)" points="53.004,173.004 53.004,66.996 0,120" />'
    + '<polygon fill="rgb(255, 202, 40)" points="186.996,66.996 186.996,173.004 240,120" />'
    + '<polygon fill="rgb(255, 202, 40)" points="66.996,53.004 173.004,53.004 120,0" />'
    + '<polygon fill="rgb(255, 202, 40)" points="120,240 173.004,186.996 66.996,186.996" />'
    + '<circle fill="rgb(255, 202, 40)" cx="120" cy="120" r="30" />'
    + '</g></g>';

FamilyTree.templates.myTemplate_male = Object.assign({}, FamilyTree.templates.myTemplate);
FamilyTree.templates.myTemplate_male.node = '<circle cx="100" cy="100" r="100" fill="#039be5" stroke-width="1" stroke="#aeaeae"></circle>';
FamilyTree.templates.myTemplate_female = Object.assign({}, FamilyTree.templates.myTemplate);
FamilyTree.templates.myTemplate_female.node = '<circle cx="100" cy="100" r="100" fill="#FF46A3" stroke-width="1" stroke="#aeaeae"></circle>';


var treeDiv = document.getElementById("treeDiv");
var family = new FamilyTree(treeDiv, {
    mouseScrool: FamilyTree.action.none,
    template: "myTemplate",
    enableSearch: true,
    mode: 'dark',
    nodeBinding: {
        field_0: "name",
        field_1: "phone",
        img_0: "photo"
    }

});

$.getJSON("data.json", function(data){
    family.load(data);
}).fail(function(){
    console.log("An error has occurred.");
});
}