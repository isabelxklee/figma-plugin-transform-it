"use strict";
figma.showUI(__html__);
figma.ui.onmessage = (msg) => {
    let node = figma.currentPage.selection[0];
    if (msg.type === "rotate") {
        if (node) {
            node.rotation = 0;
        }
    }
    else if (msg.type === "flip-horizontal") {
        if (node) {
            const prevX = node.x;
            node.relativeTransform = [
                [-1, 0, 0],
                [0, 1, 0],
            ];
            console.log(node.width);
            node.x = prevX + node.width;
            node.y = node.height * 2;
        }
    }
    figma.closePlugin();
};
