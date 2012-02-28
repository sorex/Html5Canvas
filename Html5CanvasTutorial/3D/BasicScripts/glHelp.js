/// <reference path="webgl-utils.js"/>
/// <reference path="gl-matrix.js"/>

/*
* Author : Jasper
* Create date : 2012-2-28
* Description : Help to use WebGL easy.
*/

function glHelp(canvasName) {
	this.canvasName = canvasName;
	this.canvas = document.getElementById(this.canvasName);
	this.gl = WebGLUtils.setupWebGL(this.canvas);

	if(this.gl == null)
		throw "不支持WebGL。"
}