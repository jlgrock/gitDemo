//	HYPE.documents["git-squashing"]

var hypedoc = (function HYPE_DocumentLoader() {
	var div = document.getElementById("click");
	if (div !== null) {
	    div.parentNode.removeChild(div);
	}

	var resourcesFolderName = "javascript";
	var documentName = "git-squashing";
	var documentLoaderFilename = "gitsquashing_hype_generated_script.js";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_124 == "undefined") {
		if(typeof window.HYPE_124_DocumentsToLoad == "undefined") {
			window.HYPE_124_DocumentsToLoad = new Array();
			window.HYPE_124_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=124';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_124_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// guard against loading multiple times
	if(HYPE.documents[documentName] != null) {
		return;
	}
	
	var hypeDoc = new HYPE_124();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",N:"i",f:"d",aT:"i",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",aW:"f",aI:"i",S:"i",T:"i",l:"d",aX:"i",aJ:"i",m:"c",n:"c",aK:"i",aZ:"i",aL:"i",A:"c",Y:"i",X:"i",B:"c",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};

var scenes = [{timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:1,i:"e",e:"0.000000",r:1,s:"1.000000",o:"12"},{f:"2",t:1,d:2,i:"a",e:194,r:1,s:82,o:"25"},{f:"2",t:2,d:1,i:"e",e:"0.000000",r:1,s:"1.000000",o:"10"},{f:"2",t:2,d:1,i:"a",e:8,r:1,s:8,o:"20"},{f:"2",t:3,d:1,i:"e",e:"0.000000",r:1,s:"1.000000",o:"20"},{f:"2",t:3,d:1,i:"a",e:15,r:1,s:8,o:"27"},{f:"2",t:3,d:1,i:"b",e:8,r:1,s:8,o:"20"},{f:"2",t:3,d:1,i:"a",e:194,s:194,o:"25"},{f:"2",t:3,d:1,i:"e",e:"1.000000",r:1,s:"0.000000",o:"27"},{f:"2",t:3,d:1,i:"a",e:15,s:8,o:"20"},{f:"2",t:3,d:1,i:"g",e:"#FCF133",r:1,s:"#A7E690",o:"5"},{f:"2",t:3,d:1,i:"c",e:114,r:1,s:100,o:"5"},{f:"2",t:4,d:0.16666651,i:"e",e:"0.000000",r:1,s:"1.000000",o:"26"},{f:"2",t:4,d:2,i:"a",e:408,s:194,o:"25"},{f:"2",t:6,d:1,i:"b",e:36,r:1,s:116,o:"25"},{f:"2",t:7,d:1,i:"e",e:"1.000000",r:1,s:"0.000000",o:"14"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:8}},sceneIndex:0,perspective:"600px",oid:"1",initialValues:{"25":{x:"visible",k:"div",c:102,d:49,z:"15",a:82,j:"absolute",b:116},"18":{aV:8,w:"<div>Commit #2</div>",x:"visible",a:4,Z:"break-word",y:"preserve",b:6,r:"inline",z:"2",j:"absolute",aS:8,aT:8,k:"div",bF:"23",t:16,aU:8,G:"#000000"},"10":{c:23,d:3,I:"Solid",e:"1.000000",J:"Solid",K:"Solid",g:"#000000",L:"Solid",M:1,N:1,aI:10,j:"absolute",x:"visible",O:1,A:"#A0A0A0",P:1,aJ:10,C:"#A0A0A0",z:"12",B:"#A0A0A0",aK:10,D:"#A0A0A0",k:"div",a:169,aL:10,b:138},"26":{x:"visible",k:"div",c:102,d:49,z:"1",e:"1.000000",a:194,j:"absolute",b:116},"19":{aV:8,w:"<div>Commit #3</div>",x:"visible",a:4,Z:"break-word",y:"preserve",b:6,r:"inline",z:"2",j:"absolute",aS:8,aT:8,k:"div",bF:"24",t:16,aU:8,G:"#000000"},"11":{c:23,d:3,I:"Solid",e:"1.000000",J:"Solid",K:"Solid",g:"#000000",L:"Solid",M:1,N:1,aI:10,j:"absolute",x:"visible",O:1,A:"#A0A0A0",P:1,aJ:10,C:"#A0A0A0",z:"13",B:"#A0A0A0",aK:10,D:"#A0A0A0",k:"div",a:2,aL:10,b:61},"27":{aV:8,w:"<div>Commit C</div>",x:"visible",a:8,Z:"break-word",y:"preserve",b:8,r:"inline",z:"3",j:"absolute",aS:8,aT:8,k:"div",bF:"25",e:"0.000000",t:16,aU:8,G:"#000000"},"12":{c:135,d:3,I:"Solid",e:"1.000000",J:"Solid",f:"228deg",K:"Solid",g:"#000000",L:"Solid",M:1,aY:"0",w:"",aI:10,j:"absolute",x:"visible",O:1,N:1,aJ:10,P:1,A:"#A0A0A0",z:"14",C:"#A0A0A0",aK:10,D:"#A0A0A0",B:"#A0A0A0",k:"div",a:-21,aL:10,b:111},"20":{aV:8,w:"<div>Commit A</div>",x:"visible",a:8,Z:"break-word",y:"preserve",b:8,r:"inline",z:"2",j:"absolute",aS:8,aT:8,k:"div",bF:"25",e:"1.000000",t:16,aU:8,G:"#000000"},"2":{c:100,d:47,I:"Solid",e:"1.000000",J:"Solid",K:"Solid",g:"#A7E690",L:"Solid",M:1,N:1,aI:10,j:"absolute",x:"visible",O:1,A:"#A0A0A0",P:1,aJ:10,C:"#A0A0A0",z:"1",B:"#A0A0A0",aK:10,D:"#A0A0A0",k:"div",bF:"22",a:0,aL:10,b:0},"3":{c:100,d:47,I:"Solid",e:"1.000000",J:"Solid",K:"Solid",g:"#A7E690",L:"Solid",M:1,N:1,aI:10,j:"absolute",x:"visible",O:1,A:"#A0A0A0",P:1,aJ:10,C:"#A0A0A0",z:"1",B:"#A0A0A0",aK:10,D:"#A0A0A0",k:"div",bF:"23",a:0,aL:10,b:0},"21":{aV:8,w:"<div>Commit B</div>",x:"visible",a:8,Z:"break-word",y:"preserve",b:5,r:"inline",z:"2",j:"absolute",aS:8,aT:8,k:"div",bF:"26",t:16,aU:8,G:"#000000"},"14":{c:23,d:3,I:"Solid",e:"0.000000",J:"Solid",K:"Solid",g:"#000000",L:"Solid",M:1,N:1,aI:10,j:"absolute",x:"visible",O:1,A:"#A0A0A0",P:1,aJ:10,C:"#A0A0A0",z:"17",B:"#A0A0A0",aK:10,D:"#A0A0A0",k:"div",a:383,aL:10,b:61},"4":{c:100,d:47,I:"Solid",e:"1.000000",J:"Solid",K:"Solid",g:"#A7E690",L:"Solid",M:1,N:1,aI:10,j:"absolute",x:"visible",O:1,A:"#A0A0A0",P:1,aJ:10,C:"#A0A0A0",z:"1",B:"#A0A0A0",aK:10,D:"#A0A0A0",k:"div",bF:"24",a:0,aL:10,b:0},"22":{x:"visible",k:"div",c:102,d:49,z:"3",a:27,j:"absolute",b:36},"5":{c:100,d:47,I:"Solid",e:"1.000000",J:"Solid",K:"Solid",g:"#A7E690",L:"Solid",M:1,N:1,aI:10,j:"absolute",x:"visible",O:1,A:"#A0A0A0",P:1,aJ:10,C:"#A0A0A0",z:"1",B:"#A0A0A0",aK:10,D:"#A0A0A0",k:"div",bF:"25",a:0,aL:10,b:0},"6":{c:100,d:47,I:"Solid",e:"1.000000",J:"Solid",K:"Solid",g:"#A7E690",L:"Solid",M:1,N:1,aI:10,j:"absolute",x:"visible",O:1,A:"#A0A0A0",P:1,aJ:10,C:"#A0A0A0",z:"1",B:"#A0A0A0",aK:10,D:"#A0A0A0",k:"div",bF:"26",a:0,aL:10,b:0},"23":{x:"visible",k:"div",c:102,d:49,z:"5",a:154,j:"absolute",b:36},"16":{aV:8,w:"<div>Commit #1</div>",x:"visible",a:4,Z:"break-word",y:"preserve",b:5,r:"inline",z:"2",j:"absolute",aS:8,aT:8,k:"div",bF:"22",t:16,aU:8,G:"#000000"},"8":{c:23,d:3,I:"Solid",e:"1.000000",J:"Solid",K:"Solid",g:"#000000",L:"Solid",M:1,N:1,aI:10,j:"absolute",x:"visible",O:1,A:"#A0A0A0",P:1,aJ:10,C:"#A0A0A0",z:"10",B:"#A0A0A0",aK:10,D:"#A0A0A0",k:"div",a:129,aL:10,b:58},"24":{x:"visible",k:"div",c:102,d:49,z:"7",a:281,j:"absolute",b:36},"9":{c:23,d:3,I:"Solid",e:"1.000000",J:"Solid",K:"Solid",g:"#000000",L:"Solid",M:1,N:1,aI:10,j:"absolute",x:"visible",O:1,A:"#A0A0A0",P:1,aJ:10,C:"#A0A0A0",z:"11",B:"#A0A0A0",aK:10,D:"#A0A0A0",k:"div",a:256,aL:10,b:60}},backgroundColor:"#FFFFFF",name:"Untitled Scene"}];


	
	var javascripts = [];


	
	var Custom = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("Custom." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			Custom[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.Custom = Custom;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID("gitsquashing_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
});

