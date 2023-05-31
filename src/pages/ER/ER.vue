<template>
    <div class="sample">
      <div id="myDiagramDiv" style="width: 100%; height: 600px"></div>
    </div>
</template>

<!-- <script src="./src/assets/js/go.js"></script> -->
<script>
import  go from "gojs";
export default {
    data() {
        return {
            num: null
        }
    },
    mounted() {
        var mySelf = this;
        const $ = go.GraphObject.make;
        mySelf.myDiagram =
            $(go.Diagram, "myDiagramDiv",
            {
                "undoManager.isEnabled": true,
                layout: $(go.TreeLayout,
                { // this only lays out in trees nodes connected by "generalization" links
                    angle: 90,
                    path: go.TreeLayout.PathSource,  // links go from child to parent
                    setsPortSpot: false,  // keep Spot.AllSides for link connection spot
                    setsChildPortSpot: false,  // keep Spot.AllSides
                    // nodes not connected by "generalization" links are laid out horizontally
                    arrangement: go.TreeLayout.ArrangementHorizontal
                })
            });

            function convertVisibility(v){
            switch (v) {
            case "public": return "+";
            case "private": return "-";
            case "protected": return "#";
            case "package": return "~";
            default: return v;
             }
        }

        var propertyTemplate =
        $(go.Panel, "Horizontal",
        // property visibility/access
        $(go.TextBlock,
            { isMultiline: false, editable: false, width: 12 },
            new go.Binding("text", "visibility", convertVisibility)),
        // property name, underlined if scope=="class" to indicate static property
        $(go.TextBlock,
            { isMultiline: false, editable: true },
            new go.Binding("text", "name").makeTwoWay(),
            new go.Binding("isUnderline", "scope", s => s[0] === 'c')),
        // property type, if known
        $(go.TextBlock, "",
            new go.Binding("text", "type", t => t ? ": " : "")),
        $(go.TextBlock,
            { isMultiline: false, editable: true },
            new go.Binding("text", "type").makeTwoWay()),
        // property default value, if any
        $(go.TextBlock,
            { isMultiline: false, editable: false },
            new go.Binding("text", "default", s => s ? " = " + s : ""))
        );

        var methodTemplate =
            $(go.Panel, "Horizontal",
            // method visibility/access
            $(go.TextBlock,
                { isMultiline: false, editable: false, width: 12 },
                new go.Binding("text", "visibility", convertVisibility)),
            // method name, underlined if scope=="class" to indicate static method
            $(go.TextBlock,
                { isMultiline: false, editable: true },
                new go.Binding("text", "name").makeTwoWay(),
                new go.Binding("isUnderline", "scope", s => s[0] === 'c')),
            // method parameters
            $(go.TextBlock, "()",
                // this does not permit adding/editing/removing of parameters via inplace edits
                new go.Binding("text", "parameters", parr => {
                var s = "(";
                for (var i = 0; i < parr.length; i++) {
                    var param = parr[i];
                    if (i > 0) s += ", ";
                    s += param.name + ": " + param.type;
                }
                return s + ")";
                })),
            // method return type, if any
            $(go.TextBlock, "",
                new go.Binding("text", "type", t => t ? ": " : "")),
            $(go.TextBlock,
                { isMultiline: false, editable: true },
                new go.Binding("text", "type").makeTwoWay())
            );

        mySelf.myDiagram.nodeTemplate =
        $(go.Node, "Auto",
        {
            locationSpot: go.Spot.Center,
            fromSpot: go.Spot.AllSides,
            toSpot: go.Spot.AllSides
        },
        $(go.Shape, { fill: "lightyellow" }),
        $(go.Panel, "Table",
            { defaultRowSeparatorStroke: "black" },
            // header
            $(go.TextBlock,
            {
                row: 0, columnSpan: 2, margin: 3, alignment: go.Spot.Center,
                font: "bold 12pt sans-serif",
                isMultiline: false, editable: true
            },
            new go.Binding("text", "name").makeTwoWay()),
            // properties
            $(go.TextBlock, "Properties",
            { row: 1, font: "italic 10pt sans-serif" },
            new go.Binding("visible", "visible", v => !v).ofObject("PROPERTIES")),
            $(go.Panel, "Vertical", { name: "PROPERTIES" },
            new go.Binding("itemArray", "properties"),
            {
                row: 1, margin: 3, stretch: go.GraphObject.Fill,
                defaultAlignment: go.Spot.Left, background: "lightyellow",
                itemTemplate: propertyTemplate
            }
            ),
            $("PanelExpanderButton", "PROPERTIES",
            { row: 1, column: 1, alignment: go.Spot.TopRight, visible: false },
            new go.Binding("visible", "properties", arr => arr.length > 0)),
            // methods
            $(go.TextBlock, "Methods",
            { row: 2, font: "italic 10pt sans-serif" },
            new go.Binding("visible", "visible", v => !v).ofObject("METHODS")),
            $(go.Panel, "Vertical", { name: "METHODS" },
            new go.Binding("itemArray", "methods"),
            {
                row: 2, margin: 3, stretch: go.GraphObject.Fill,
                defaultAlignment: go.Spot.Left, background: "lightyellow",
                itemTemplate: methodTemplate
            }
            ),
            $("PanelExpanderButton", "METHODS",
            { row: 2, column: 1, alignment: go.Spot.TopRight, visible: false },
            new go.Binding("visible", "methods", arr => arr.length > 0))
        )
        );

        // function convertIsTreeLink(r) {
        //     return r === "generalization";
        // }

        // function convertFromArrow(r) {
        //     switch (r) {
        //     case "generalization": return "";
        //     default: return "";
        //     }
        // }

        // function convertToArrow(r) {
        //     switch (r) {
        //     case "generalization": return "Triangle";
        //     case "aggregation": return "StretchedDiamond";
        //     default: return "";
        //     }
        // }

        // mySelf.myDiagram.linkTemplate =
        //     $(go.Link,
        //     { routing: go.Link.Orthogonal },
        //     new go.Binding("isLayoutPositioned", "relationship", convertIsTreeLink),
        //     $(go.Shape),
        //     $(go.Shape, { scale: 1.3, fill: "white" },
        //         new go.Binding("fromArrow", "relationship", convertFromArrow)),
        //     $(go.Shape, { scale: 1.3, fill: "white" },
        //         new go.Binding("toArrow", "relationship", convertToArrow))
        //     );
        /**
         * //strokeWidth: 外面边框的宽度
         * //strokeDashArray: 图形的裁剪,可以设置数值然后做成虚线边框
         */
        mySelf.myDiagram.linkTemplate = $(go.Link,
                { toShortLength: 3, relinkableFrom: true, relinkableTo: true },
                $(go.Shape, {strokeWidth: 2, strokeDashArray: [6, 5]},
                    new go.Binding("stroke", "from", (f) => {
                    //'from'为我从数据中取的参数名，也可以取其他需要的参数
                    //1可以直接判断然后return出颜色就行了
                    //2复杂的话将连线的from参数取到传入自定义的方法colorSet中进行判断
                        return this.colorSet(f);
                }),
                    new go.Binding("name", param => {
                    return mySelf.nameSet(param); // 通过状态对线条名字赋值，为下一步动画筛选正常状态的设备做铺垫
                })),
                $(go.Shape,
                { toArrow: "Standard", stroke: null },
                new go.Binding("stroke", "from", (f) => {
                        return this.colorSet(f);
                }))
            );
        
            var nodedata = [
            {
            key: 11,
            name: "zs_scan_record(扫码记录)",
            properties: [
                { name: "id(序号)", type: "String" },
                { name: "name(用户名)", type: "String"},
                { name: "age(年龄)", type: "Number"}
            ]
            },
            {
            key: 13,
            name: "taji_user(用户表)",
            properties: [
                { name: "id(序号)", type: "String" },
                { name: "name(用户名)", type: "String"},
                { name: "age(年龄)", type: "Number"}
            ]
            },
            {
            key: 15,
            name: "taji_user1111(用户表)",
            properties: [
                { name: "id(序号)", type: "String" },
                { name: "name(用户名)", type: "String"},
                { name: "age(年龄)", type: "Number"}
            ]
            },
            {
            key: 115,
            name: "taji_user1111(用户表)",
            properties: [
                { name: "id(序号)", type: "String" },
                { name: "name(用户名)", type: "String"},
                { name: "age(年龄)", type: "Number"}
            ]
            },
            {
            key: 14,
            name: "zs_order_item(签收统计)",
            properties: [
                { name: "id(序号)", type: "String" },
                { name: "name(用户名)", type: "String"},
                { name: "age(年龄)", type: "Number"},
                { name: "id(序号)", type: "String" },
                { name: "name(用户名)", type: "String"},
                { name: "age(年龄)", type: "Number"},
                { name: "id(序号)", type: "String" },
                { name: "name(用户名)", type: "String"},
                { name: "age(年龄)", type: "Number"},
                { name: "id(序号)", type: "String" },
                { name: "name(用户名)", type: "String"},
                { name: "age(年龄)", type: "Number"},
                { name: "id(序号)", type: "String" },
                { name: "name(用户名)", type: "String"},
                { name: "age(年龄)", type: "Number"}
            ]
            }
        ];

        var linkdata = [
            { from: 13, to: 11, relationship: "generalization" },
            { from: 14, to: 13, relationship: "generalization", color: "red" },
            { from: 15, to: 11, relationship: "generalization", color: "red" },
            { from: 115, to: 11, relationship: "generalization", color: "red" }
        ];
        mySelf.myDiagram.model = new go.GraphLinksModel({
            copiesArrays: true,
            copiesArrayObjects: true,
            nodeDataArray: nodedata,
            linkDataArray: linkdata
        });

        // 定义集合存储实线，虚线模板
        const templmap = new go.Map()
        const color = '#000'

        // 虚线连线模板，关键属性：strokeDashArray: [6, 3]
        const dashedTemplate = $(
            go.Link,
            $(go.Shape, { stroke: color, strokeWidth: 1, strokeDashArray: [6, 3] }),
            $(go.Shape, { toArrow: 'Standard', fill: color, stroke: color, strokeWidth: 1 })
        )
        templmap.add('dashed', dashedTemplate)

        mySelf.myDiagram.linkTemplateMap = templmap

    },
    methods: {
        // 自定义判断线和箭头的颜色
        colorSet(param) {
            switch(param) {
                case 1: return "red";
                case 2: return "black";
            }
        },
        // 自定义虚线
        nameSet(param) {
            switch (param.type) {
                case 0:
                return "dashedLink";
                case 1:
                return "";
                default:
                return "dashedLink";
            }
        },
        // init() {
        //     const $ = go.GraphObject.make;

        //     let myDiagram =
        //         $(go.Diagram, "myDiagramDiv",
        //         {
        //             "undoManager.isEnabled": true,
        //             layout: $(go.TreeLayout,
        //             { // this only lays out in trees nodes connected by "generalization" links
        //                 angle: 90,
        //                 path: go.TreeLayout.PathSource,  // links go from child to parent
        //                 setsPortSpot: false,  // keep Spot.AllSides for link connection spot
        //                 setsChildPortSpot: false,  // keep Spot.AllSides
        //                 // nodes not connected by "generalization" links are laid out horizontally
        //                 arrangement: go.TreeLayout.ArrangementHorizontal
        //             })
        //         });

        // // show visibility or access as a single character at the beginning of each property or method
        // // function convertVisibility(v){
        // //     switch (v) {
        // //     case "public": return "+";
        // //     case "private": return "-";
        // //     case "protected": return "#";
        // //     case "package": return "~";
        // //     default: return v;
        // //      }
        // // }

        // // the item template for properties
        // var propertyTemplate =
        //     $(go.Panel, "Horizontal",
        //     // property visibility/access
        //     $(go.TextBlock,
        //         { isMultiline: false, editable: false, width: 12 },
        //         new go.Binding("text", "visibility")),
        //     // property name, underlined if scope=="class" to indicate static property
        //     $(go.TextBlock,
        //         { isMultiline: false, editable: true },
        //         new go.Binding("text", "name").makeTwoWay(),
        //         new go.Binding("isUnderline", "scope", s => s[0] === 'c')),
        //     // property type, if known
        //     $(go.TextBlock, "",
        //         new go.Binding("text", "type", t => t ? ": " : "")),
        //     $(go.TextBlock,
        //         { isMultiline: false, editable: true },
        //         new go.Binding("text", "type").makeTwoWay()),
        //     // property default value, if any
        //     $(go.TextBlock,
        //         { isMultiline: false, editable: false },
        //         new go.Binding("text", "default", s => s ? " = " + s : ""))
        //     );

        // // the item template for methods
        // var methodTemplate =
        //     $(go.Panel, "Horizontal",
        //     // method visibility/access
        //     $(go.TextBlock,
        //         { isMultiline: false, editable: false, width: 12 },
        //         new go.Binding("text", "visibility")),
        //     // method name, underlined if scope=="class" to indicate static method
        //     $(go.TextBlock,
        //         { isMultiline: false, editable: true },
        //         new go.Binding("text", "name").makeTwoWay(),
        //         new go.Binding("isUnderline", "scope", s => s[0] === 'c')),
        //     // method parameters
        //     $(go.TextBlock, "()",
        //         // this does not permit adding/editing/removing of parameters via inplace edits
        //         new go.Binding("text", "parameters", parr => {
        //         var s = "(";
        //         for (var i = 0; i < parr.length; i++) {
        //             var param = parr[i];
        //             if (i > 0) s += ", ";
        //             s += param.name + ": " + param.type;
        //         }
        //         return s + ")";
        //         })),
        //     // method return type, if any
        //     $(go.TextBlock, "",
        //         new go.Binding("text", "type", t => t ? ": " : "")),
        //     $(go.TextBlock,
        //         { isMultiline: false, editable: true },
        //         new go.Binding("text", "type").makeTwoWay())
        //     );

        // // this simple template does not have any buttons to permit adding or
        // // removing properties or methods, but it could!
        // myDiagram.nodeTemplate =
        //     $(go.Node, "Auto",
        //     {
        //         locationSpot: go.Spot.Center,
        //         fromSpot: go.Spot.AllSides,
        //         toSpot: go.Spot.AllSides
        //     },
        //     $(go.Shape, { fill: "lightyellow" }),
        //     $(go.Panel, "Table",
        //         { defaultRowSeparatorStroke: "black" },
        //         // header
        //         $(go.TextBlock,
        //         {
        //             row: 0, columnSpan: 2, margin: 3, alignment: go.Spot.Center,
        //             font: "bold 12pt sans-serif",
        //             isMultiline: false, editable: true
        //         },
        //         new go.Binding("text", "name").makeTwoWay()),
        //         // properties
        //         $(go.TextBlock, "Properties",
        //         { row: 1, font: "italic 10pt sans-serif" },
        //         new go.Binding("visible", "visible", v => !v).ofObject("PROPERTIES")),
        //         $(go.Panel, "Vertical", { name: "PROPERTIES" },
        //         new go.Binding("itemArray", "properties"),
        //         {
        //             row: 1, margin: 3, stretch: go.GraphObject.Fill,
        //             defaultAlignment: go.Spot.Left, background: "lightyellow",
        //             itemTemplate: propertyTemplate
        //         }
        //         ),
        //         $("PanelExpanderButton", "PROPERTIES",
        //         { row: 1, column: 1, alignment: go.Spot.TopRight, visible: false },
        //         new go.Binding("visible", "properties", arr => arr.length > 0)),
        //         // methods
        //         $(go.TextBlock, "Methods",
        //         { row: 2, font: "italic 10pt sans-serif" },
        //         new go.Binding("visible", "visible", v => !v).ofObject("METHODS")),
        //         $(go.Panel, "Vertical", { name: "METHODS" },
        //         new go.Binding("itemArray", "methods"),
        //         {
        //             row: 2, margin: 3, stretch: go.GraphObject.Fill,
        //             defaultAlignment: go.Spot.Left, background: "lightyellow",
        //             itemTemplate: methodTemplate
        //         }
        //         ),
        //         $("PanelExpanderButton", "METHODS",
        //         { row: 2, column: 1, alignment: go.Spot.TopRight, visible: false },
        //         new go.Binding("visible", "methods", arr => arr.length > 0))
        //     )
        //     );

        // function convertIsTreeLink(r) {
        //     return r === "generalization";
        // }

        // function convertFromArrow(r) {
        //     switch (r) {
        //     case "generalization": return "";
        //     default: return "";
        //     }
        // }

        // function convertToArrow(r) {
        //     switch (r) {
        //     case "generalization": return "Triangle";
        //     case "aggregation": return "StretchedDiamond";
        //     default: return "";
        //     }
        // }

        // myDiagram.linkTemplate =
        //     $(go.Link,
        //     { routing: go.Link.Orthogonal },
        //     new go.Binding("isLayoutPositioned", "relationship", convertIsTreeLink),
        //     $(go.Shape),
        //     $(go.Shape, { scale: 1.3, fill: "white" },
        //         new go.Binding("fromArrow", "relationship", convertFromArrow)),
        //     $(go.Shape, { scale: 1.3, fill: "white" },
        //         new go.Binding("toArrow", "relationship", convertToArrow))
        //     );

        // // setup a few example class nodes and relationships
        // var nodedata = [
        //     {
        //     key: 11,
        //     name: "zs_scan_record(扫码记录)",
        //     properties: [
        //         { name: "id(序号)", type: "String" },
        //         { name: "name(用户名)", type: "String"},
        //         { name: "age(年龄)", type: "Number"}
        //     ]
        //     },
        //     {
        //     key: 13,
        //     name: "taji_user(用户表)",
        //     properties: [
        //         { name: "id(序号)", type: "String" },
        //         { name: "name(用户名)", type: "String"},
        //         { name: "age(年龄)", type: "Number"}
        //     ]
        //     },
        //     {
        //     key: 14,
        //     name: "zs_order_item(签收统计)",
        //     properties: [
        //         { name: "id(序号)", type: "String" },
        //         { name: "name(用户名)", type: "String"},
        //         { name: "age(年龄)", type: "Number"},
        //         { name: "id(序号)", type: "String" },
        //         { name: "name(用户名)", type: "String"},
        //         { name: "age(年龄)", type: "Number"},
        //         { name: "id(序号)", type: "String" },
        //         { name: "name(用户名)", type: "String"},
        //         { name: "age(年龄)", type: "Number"},
        //         { name: "id(序号)", type: "String" },
        //         { name: "name(用户名)", type: "String"},
        //         { name: "age(年龄)", type: "Number"},
        //         { name: "id(序号)", type: "String" },
        //         { name: "name(用户名)", type: "String"},
        //         { name: "age(年龄)", type: "Number"}
        //     ]
        //     }
        // ];
        // var linkdata = [
        //     { from: 13, to: 11, relationship: "generalization" },
        //     { from: 14, to: 13, relationship: "generalization", color: "red" }
        // ];
        // myDiagram.model = new go.GraphLinksModel(
        //     {
        //     copiesArrays: true,
        //     copiesArrayObjects: true,
        //     nodeDataArray: nodedata,
        //     linkDataArray: linkdata
        //     });
        // },
        // domReady() {
        //     window.addEventListener('DOMContentLoaded',this.init())
        // },
        
    }
}
</script>

<style lang="less" scoped></style>
