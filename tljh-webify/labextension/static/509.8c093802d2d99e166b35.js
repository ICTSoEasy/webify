"use strict";(self.webpackChunkwebify=self.webpackChunkwebify||[]).push([[509],{509:(e,n,t)=>{t.r(n),t.d(n,{default:()=>l});var o=t(30),s=t(778),i=t(353);let r=null;const a="webify:webify",c={id:"webify:plugin",description:"A JupyterLab extension to copy files from a jupyter lab user folder to a different folder (to be served on a web)",autoStart:!0,requires:[o.ICommandPalette,i.IFileBrowserFactory],activate:(e,n,t)=>{console.log("JupyterLab extension webify is activated!");const{tracker:o}=t;e.commands.addCommand(a,{label:"Webify",caption:"Webify",execute:async e=>{const n=o.currentWidget;if(!n)return void console.log("No widget");const t=n.selectedItems().next();console.log("We are going to move:"+t.value.path),async function(e){const n=window.location.href;console.log("Current URL:",n);const t=window.location.pathname.split("/"),o=t.indexOf("user"),i=-1!==o?t[o+1]:"Unknown User";console.log("Current Username:",i);const a=await async function(e){return console.log("Running Python code"),console.log(e),console.log(),await async function(){if(r)return;const e=s.ServerConnection.makeSettings(),n=new s.KernelManager({serverSettings:e}),t=new s.SessionManager({kernelManager:n,serverSettings:e});r=await t.startNew({kernel:{name:"python3",id:"python3"},path:"",type:"file",name:"PathCheckerSession"})}(),new Promise(((n,t)=>{var o;const s=null===(o=null==r?void 0:r.kernel)||void 0===o?void 0:o.requestExecute({code:e});s?(s.onIOPub=e=>{if(console.log(e),"stream"===e.header.msg_type&&"name"in e.content&&"stdout"===e.content.name){console.log(">> Stdout: "+e.content.text.trim()+" <<");const t=e.content.text.trim().split("\n");"true"!==t[t.length-1].toLowerCase()&&"false"!==t[t.length-1].toLowerCase()||n("true"===t[t.length-1].toLowerCase())}},s.done.then((()=>{r&&(console.log("Shutting down the session."),r.shutdown().then((()=>{r=null,console.log("Session has been shut down.")})).catch((e=>{console.error("Error during session shutdown:",e)})))})).catch((e=>{console.error("Error during execution:",e),t(e)}))):t("Failed to create kernel session.")}))}(function(e,n,t){return"import os\nimport shutil\npath = '"+e+"'\ndef copy_folder_contents(src, dest):\n    # Ensure the destination directory exists\n    os.makedirs(dest, exist_ok=True)\n\n    # Copy each item within the source directory to the destination\n    for item in os.listdir(src):\n        s = os.path.join(src, item)\n        d = os.path.join(dest, item)\n        if os.path.isdir(s):\n            shutil.copytree(s, d)  # Copy subdirectory and its contents\n        else:\n            shutil.copy2(s, d)     # Copy file\n\nexists = os.path.exists(path)\nif (not exists):\n  print('Web Path does not exist. Exiting');\n  print('false');\nelse:\n  path = '"+e+"/"+n+"'\n  exists = os.path.exists(path)\n  if exists:\n    print('User path alredy exists')\n    shutil.rmtree('"+e+"/"+n+"')\n  print('Creating new path')\n  os.makedirs('"+e+"/"+n+"', exist_ok=True)\n  try:\n    copy_folder_contents('"+t+"', '"+e+"/"+n+"')\n    print('Copied!')\n    print('true')\n  except Exception as e:\n    print('Error occurred while copying:')\n    print(e)\n    print('false')"}("/mnt/tljhweb",i,e)).catch((e=>{console.log("Error running code:",e)}));console.log("Code run:"+a),console.log("All finished"),window.open("https://tljhweb.ictsoeasy.co.uk/"+i,"_blank")}(t.value.path)}}),n.addItem({command:a,category:"WHO",args:{origin:"from palette"}}),e.contextMenu.addItem({command:a,selector:'.jp-DirListing-item[data-isdir="true"]',rank:10})}},l=c}}]);