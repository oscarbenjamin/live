"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[35],{50035:(t,e,s)=>{function a(t){let e=new Map;return t.changes.keys.forEach(((t,s)=>{e.set(s,{action:t.action,oldValue:t.oldValue,newValue:this.ymeta.get(s)})})),e}s.r(e),s.d(e,{YBaseCell:()=>b,YCodeCell:()=>v,YDocument:()=>m,YFile:()=>p,YMarkdownCell:()=>w,YNotebook:()=>C,YRawCell:()=>k,convertYMapEventToMapChange:()=>a,createMutex:()=>n,createStandaloneCell:()=>f});const n=()=>{let t=!0;return e=>{if(t){t=!1;try{e()}finally{t=!0}}}};var o=s(21961),i=s(2159),r=s(2431),d=s(11182),h=s(12330),l=s(38828),c=s(98002);class u extends h.y{constructor(t){super(),this.doc=t,this.clientID=t.clientID,this.states=new Map,this.meta=new Map,this._checkInterval=setInterval((()=>{const t=r.ZG();null!==this.getLocalState()&&15e3<=t-this.meta.get(this.clientID).lastUpdated&&this.setLocalState(this.getLocalState());const e=[];this.meta.forEach(((s,a)=>{a!==this.clientID&&3e4<=t-s.lastUpdated&&this.states.has(a)&&e.push(a)})),e.length>0&&g(this,e,"timeout")}),d.GW(3e3)),t.on("destroy",(()=>{this.destroy()})),this.setLocalState({})}destroy(){this.emit("destroy",[this]),this.setLocalState(null),super.destroy(),clearInterval(this._checkInterval)}getLocalState(){return this.states.get(this.clientID)||null}setLocalState(t){const e=this.clientID,s=this.meta.get(e),a=void 0===s?0:s.clock+1,n=this.states.get(e);null===t?this.states.delete(e):this.states.set(e,t),this.meta.set(e,{clock:a,lastUpdated:r.ZG()});const o=[],i=[],d=[],h=[];null===t?h.push(e):null==n?null!=t&&o.push(e):(i.push(e),l.Hi(n,t)||d.push(e)),(o.length>0||d.length>0||h.length>0)&&this.emit("change",[{added:o,updated:d,removed:h},"local"]),this.emit("update",[{added:o,updated:i,removed:h},"local"])}setLocalStateField(t,e){const s=this.getLocalState();null!==s&&this.setLocalState({...s,[t]:e})}getStates(){return this.states}}const g=(t,e,s)=>{const a=[];for(let s=0;s<e.length;s++){const n=e[s];if(t.states.has(n)){if(t.states.delete(n),n===t.clientID){const e=t.meta.get(n);t.meta.set(n,{clock:e.clock+1,lastUpdated:r.ZG()})}a.push(n)}}a.length>0&&(t.emit("change",[{added:[],updated:[],removed:a},s]),t.emit("update",[{added:[],updated:[],removed:a},s]))};class m{constructor(t){var e;this.onStateChanged=t=>{const e=new Array;t.keysChanged.forEach((s=>{const a=t.changes.keys.get(s);a&&e.push({name:s,oldValue:a.oldValue,newValue:this.ystate.get(s)})})),this._changed.emit({stateChange:e})},this._changed=new i.Signal(this),this._isDisposed=!1,this._disposed=new i.Signal(this),this._ydoc=null!==(e=null==t?void 0:t.ydoc)&&void 0!==e?e:new c.Doc,this._ystate=this._ydoc.getMap("state"),this._undoManager=new c.UndoManager([],{trackedOrigins:new Set([this]),doc:this._ydoc}),this._awareness=new u(this._ydoc),this._ystate.observe(this.onStateChanged)}get ydoc(){return this._ydoc}get ystate(){return this._ystate}get undoManager(){return this._undoManager}get awareness(){return this._awareness}get changed(){return this._changed}get disposed(){return this._disposed}get isDisposed(){return this._isDisposed}get state(){return o.JSONExt.deepCopy(this.ystate.toJSON())}canUndo(){return this.undoManager.undoStack.length>0}canRedo(){return this.undoManager.redoStack.length>0}dispose(){this._isDisposed||(this._isDisposed=!0,this.ystate.unobserve(this.onStateChanged),this.awareness.destroy(),this.undoManager.destroy(),this.ydoc.destroy(),this._disposed.emit(),i.Signal.clearData(this))}getState(t){const e=this.ystate.get(t);return void 0===e?e:o.JSONExt.deepCopy(e)}setState(t,e){o.JSONExt.deepEqual(this.ystate.get(t),e)||this.ystate.set(t,e)}undo(){this.undoManager.undo()}redo(){this.undoManager.redo()}clearUndoHistory(){this.undoManager.clear()}transact(t,e=!0){this.ydoc.transact(t,e?this:null)}}class p extends m{constructor(){super(),this.version="1.0.0",this.ysource=this.ydoc.getText("source"),this._modelObserver=t=>{this._changed.emit({sourceChange:t.changes.delta})},this.undoManager.addToScope(this.ysource),this.ysource.observe(this._modelObserver)}static create(){return new p}get source(){return this.getSource()}set source(t){this.setSource(t)}dispose(){this.isDisposed||(this.ysource.unobserve(this._modelObserver),super.dispose())}getSource(){return this.ysource.toString()}setSource(t){this.transact((()=>{const e=this.ysource;e.delete(0,e.length),e.insert(0,t)}))}updateSource(t,e,s=""){this.transact((()=>{const a=this.ysource;a.insert(t,s),a.delete(t+s.length,e-t)}))}}const y=(t,e={})=>{switch(t.get("cell_type")){case"code":return new v(t,t.get("source"),t.get("outputs"),e);case"markdown":return new w(t,t.get("source"),e);case"raw":return new k(t,t.get("source"),e);default:throw new Error("Found unknown cell type")}},_=(t,e)=>{var s,a;const n=new c.Map,i=new c.Text,r=new c.Map;let d;switch(n.set("source",i),n.set("metadata",r),n.set("cell_type",t.cell_type),n.set("id",null!==(s=t.id)&&void 0!==s?s:o.UUID.uuid4()),t.cell_type){case"markdown":d=new w(n,i,{notebook:e},r),null!=t.attachments&&d.setAttachments(t.attachments);break;case"code":{const s=new c.Array;n.set("outputs",s),d=new v(n,i,s,{notebook:e},r);const o=t;d.execution_count=null!==(a=o.execution_count)&&void 0!==a?a:null,o.outputs&&d.setOutputs(o.outputs);break}default:d=new k(n,i,{notebook:e},r),t.attachments&&d.setAttachments(t.attachments)}return null!=t.metadata&&d.setMetadata(t.metadata),null!=t.source&&d.setSource("string"==typeof t.source?t.source:t.source.join("")),d},f=t=>_(t);class b{static create(t){return _({id:t,cell_type:this.prototype.cell_type})}constructor(t,e,s={},a){if(this._modelObserver=t=>{this._changed.emit(this.getChanges(t))},this._metadataChanged=new i.Signal(this),this._notebook=null,this._changed=new i.Signal(this),this._disposed=new i.Signal(this),this._isDisposed=!1,this._undoManager=null,this.ymodel=t,this._ysource=e,this._ymetadata=null!=a?a:this.ymodel.get("metadata"),this._prevSourceLength=e?e.length:0,this._notebook=null,this._awareness=null,this._undoManager=null,s.notebook)this._notebook=s.notebook;else{const t=new c.Doc;t.getArray().insert(0,[this.ymodel]),this._awareness=new u(t),this._undoManager=new c.UndoManager([this.ymodel],{trackedOrigins:new Set([this])})}this.ymodel.observeDeep(this._modelObserver)}get awareness(){var t,e,s;return null!==(s=null!==(t=this._awareness)&&void 0!==t?t:null===(e=this.notebook)||void 0===e?void 0:e.awareness)&&void 0!==s?s:null}get cell_type(){throw new Error("A YBaseCell must not be constructed")}get changed(){return this._changed}get disposed(){return this._disposed}get id(){return this.getId()}get isDisposed(){return this._isDisposed}get isStandalone(){return null!==this._notebook}get metadata(){return this.getMetadata()}set metadata(t){this.setMetadata(t)}get metadataChanged(){return this._metadataChanged}get notebook(){return this._notebook}get source(){return this.getSource()}set source(t){this.setSource(t)}get undoManager(){var t;return this.notebook?(null===(t=this.notebook)||void 0===t?void 0:t.disableDocumentWideUndoRedo)?this._undoManager:this.notebook.undoManager:this._undoManager}setUndoManager(){if(this._undoManager)throw new Error("The cell undo manager is already set.");this._notebook&&this._notebook.disableDocumentWideUndoRedo&&(this._undoManager=new c.UndoManager([this.ymodel],{trackedOrigins:new Set([this])}))}get ysource(){return this._ysource}canUndo(){return!!this.undoManager&&this.undoManager.undoStack.length>0}canRedo(){return!!this.undoManager&&this.undoManager.redoStack.length>0}clearUndoHistory(){var t;null===(t=this.undoManager)||void 0===t||t.clear()}undo(){var t;null===(t=this.undoManager)||void 0===t||t.undo()}redo(){var t;null===(t=this.undoManager)||void 0===t||t.redo()}dispose(){var t;if(!this._isDisposed){if(this._isDisposed=!0,this.ymodel.unobserveDeep(this._modelObserver),this._awareness){const t=this._awareness.doc;this._awareness.destroy(),t.destroy()}this._undoManager&&(this._undoManager===(null===(t=this.notebook)||void 0===t?void 0:t.undoManager)?this._undoManager=null:this._undoManager.destroy()),this._disposed.emit(),i.Signal.clearData(this)}}getId(){return this.ymodel.get("id")}getSource(){return this.ysource.toString()}setSource(t){this.transact((()=>{this.ysource.delete(0,this.ysource.length),this.ysource.insert(0,t)}))}updateSource(t,e,s=""){this.transact((()=>{const a=this.ysource;a.insert(t,s),a.delete(t+s.length,e-t)}))}deleteMetadata(t){void 0!==this.getMetadata(t)&&this.transact((()=>{this._ymetadata.delete(t);const e=this.getMetadata("jupyter");if("collapsed"===t&&e){const{outputs_hidden:t,...s}=e;0===Object.keys(s).length?this._ymetadata.delete("jupyter"):this._ymetadata.set("jupyter",s)}else"jupyter"===t&&this._ymetadata.delete("collapsed")}),!1)}getMetadata(t){const e=this._ymetadata;if(void 0!==e)return"string"==typeof t?void 0===e.get(t)?void 0:o.JSONExt.deepCopy(e.get(t)):o.JSONExt.deepCopy(e.toJSON())}setMetadata(t,e){var s,a;if("string"==typeof t){if(void 0===e)throw new TypeError(`Metadata value for ${t} cannot be 'undefined'; use deleteMetadata.`);const a=t;if(o.JSONExt.deepEqual(null!==(s=this.getMetadata(a))&&void 0!==s?s:null,e))return;this.transact((()=>{var t;if(this._ymetadata.set(a,e),"collapsed"===a){const s=null!==(t=this.getMetadata("jupyter"))&&void 0!==t?t:{};s.outputs_hidden!==e&&this.setMetadata("jupyter",{...s,outputs_hidden:e})}else if("jupyter"===a){const t=e.outputs_hidden;void 0!==t?this.getMetadata("collapsed")!==t&&this.setMetadata("collapsed",t):this.deleteMetadata("collapsed")}}),!1)}else{const e=o.JSONExt.deepCopy(t);null!=e.collapsed?(e.jupyter=e.jupyter||{},e.jupyter.outputs_hidden=e.collapsed):null!=(null===(a=null==e?void 0:e.jupyter)||void 0===a?void 0:a.outputs_hidden)&&(e.collapsed=e.jupyter.outputs_hidden),o.JSONExt.deepEqual(e,this.getMetadata())||this.transact((()=>{for(const[t,s]of Object.entries(e))this._ymetadata.set(t,s)}),!1)}}toJSON(){return{id:this.getId(),cell_type:this.cell_type,source:this.getSource(),metadata:this.getMetadata()}}transact(t,e=!0){!this.notebook||this.notebook.disableDocumentWideUndoRedo?null==this.ymodel.doc?t():this.ymodel.doc.transact(t,e?this:null):this.notebook.transact(t,e)}getChanges(t){const e={},s=t.find((t=>t.target===this.ymodel.get("source")));s&&(e.sourceChange=s.changes.delta);const a=t.find((t=>t.target===this._ymetadata));a&&(e.metadataChange=a.changes.keys,a.changes.keys.forEach(((t,e)=>{switch(t.action){case"add":this._metadataChanged.emit({key:e,newValue:this._ymetadata.get(e),type:"add"});break;case"delete":this._metadataChanged.emit({key:e,oldValue:t.oldValue,type:"remove"});break;case"update":{const s=this._ymetadata.get(e),a=t.oldValue;let n=!0;n="object"==typeof a&&"object"==typeof s?o.JSONExt.deepEqual(a,s):a===s,n||this._metadataChanged.emit({key:e,type:"change",oldValue:a,newValue:s})}}})));const n=t.find((t=>t.target===this.ymodel)),i=this.ymodel.get("source");return n&&n.keysChanged.has("source")&&(e.sourceChange=[{delete:this._prevSourceLength},{insert:i.toString()}]),this._prevSourceLength=i.length,e}}class v extends b{static create(t){return super.create(t)}constructor(t,e,s,a={},n){super(t,e,a,n),this._youtputs=s}get cell_type(){return"code"}get execution_count(){return this.ymodel.get("execution_count")||null}set execution_count(t){this.ymodel.get("execution_count")!==t&&this.transact((()=>{this.ymodel.set("execution_count",t)}),!1)}get outputs(){return this.getOutputs()}set outputs(t){this.setOutputs(t)}getOutputs(){return o.JSONExt.deepCopy(this._youtputs.toArray())}setOutputs(t){this.transact((()=>{this._youtputs.delete(0,this._youtputs.length),this._youtputs.insert(0,t)}),!1)}updateOutputs(t,e,s=[]){const a=e<this._youtputs.length?e-t:this._youtputs.length-t;this.transact((()=>{this._youtputs.delete(t,a),this._youtputs.insert(t,s)}),!1)}toJSON(){return{...super.toJSON(),outputs:this.getOutputs(),execution_count:this.execution_count}}getChanges(t){const e=super.getChanges(t),s=t.find((t=>t.target===this.ymodel.get("outputs")));s&&(e.outputsChange=s.changes.delta);const a=t.find((t=>t.target===this.ymodel));if(a&&a.keysChanged.has("execution_count")){const t=a.changes.keys.get("execution_count");e.executionCountChange={oldValue:t.oldValue,newValue:this.ymodel.get("execution_count")}}return e}}class M extends b{get attachments(){return this.getAttachments()}set attachments(t){this.setAttachments(t)}getAttachments(){return this.ymodel.get("attachments")}setAttachments(t){this.transact((()=>{null==t?this.ymodel.delete("attachments"):this.ymodel.set("attachments",t)}),!1)}getChanges(t){const e=super.getChanges(t),s=t.find((t=>t.target===this.ymodel));if(s&&s.keysChanged.has("attachments")){const t=s.changes.keys.get("attachments");e.executionCountChange={oldValue:t.oldValue,newValue:this.ymodel.get("attachments")}}return e}}class k extends M{static create(t){return super.create(t)}get cell_type(){return"raw"}toJSON(){return{id:this.getId(),cell_type:"raw",source:this.getSource(),metadata:this.getMetadata(),attachments:this.getAttachments()}}}class w extends M{static create(t){return super.create(t)}get cell_type(){return"markdown"}toJSON(){return{id:this.getId(),cell_type:"markdown",source:this.getSource(),metadata:this.getMetadata(),attachments:this.getAttachments()}}}class C extends m{constructor(t={}){var e;super(),this.version="1.0.0",this.ymeta=this.ydoc.getMap("meta"),this._onMetaChanged=t=>{const e=t.find((t=>t.target===this.ymeta.get("metadata")));if(e){const t=e.changes.keys,s=this.ymeta.get("metadata");e.changes.keys.forEach(((t,e)=>{switch(t.action){case"add":this._metadataChanged.emit({key:e,type:"add",newValue:s.get(e)});break;case"delete":this._metadataChanged.emit({key:e,type:"remove",oldValue:t.oldValue});break;case"update":{const a=s.get(e),n=t.oldValue;let i=!0;i="object"==typeof n&&"object"==typeof a?o.JSONExt.deepEqual(n,a):n===a,i||this._metadataChanged.emit({key:e,type:"change",oldValue:n,newValue:a})}}})),this._changed.emit({metadataChange:t})}const s=t.find((t=>t.target===this.ymeta));if(s){if(s.keysChanged.has("metadata")){const t=s.changes.keys.get("metadata");if("add"===(null==t?void 0:t.action)&&!t.oldValue){const t=new Map;for(const e of Object.keys(this.metadata))t.set(e,{action:"add",oldValue:void 0}),this._metadataChanged.emit({key:e,type:"add",newValue:this.getMetadata(e)});this._changed.emit({metadataChange:t})}}if(s.keysChanged.has("nbformat")){const t=s.changes.keys.get("nbformat"),e={key:"nbformat",oldValue:(null==t?void 0:t.oldValue)?t.oldValue:void 0,newValue:this.nbformat};this._changed.emit({nbformatChanged:e})}if(s.keysChanged.has("nbformat_minor")){const t=s.changes.keys.get("nbformat_minor"),e={key:"nbformat_minor",oldValue:(null==t?void 0:t.oldValue)?t.oldValue:void 0,newValue:this.nbformat_minor};this._changed.emit({nbformatChanged:e})}}},this._onYCellsChanged=t=>{t.changes.added.forEach((t=>{const e=t.content.type;if(!this._ycellMapping.has(e)){const t=y(e,{notebook:this});t.setUndoManager(),this._ycellMapping.set(e,t)}})),t.changes.deleted.forEach((t=>{const e=t.content.type,s=this._ycellMapping.get(e);s&&(s.dispose(),this._ycellMapping.delete(e))}));let e=0;const s=[];t.changes.delta.forEach((t=>{if(null!=t.insert){const a=t.insert.map((t=>this._ycellMapping.get(t)));s.push({insert:a}),this.cells.splice(e,0,...a),e+=t.insert.length}else null!=t.delete?(s.push(t),this.cells.splice(e,t.delete)):null!=t.retain&&(s.push(t),e+=t.retain)})),this._changed.emit({cellsChange:s})},this._metadataChanged=new i.Signal(this),this._ycells=this.ydoc.getArray("cells"),this._ycellMapping=new WeakMap,this._disableDocumentWideUndoRedo=null!==(e=t.disableDocumentWideUndoRedo)&&void 0!==e&&e,this.cells=this._ycells.toArray().map((t=>(this._ycellMapping.has(t)||this._ycellMapping.set(t,y(t,{notebook:this})),this._ycellMapping.get(t)))),this.undoManager.addToScope(this._ycells),this._ycells.observe(this._onYCellsChanged),this.ymeta.observeDeep(this._onMetaChanged)}static create(t={}){var e,s,a,n,o,i,r,d,h;const l=new C({disableDocumentWideUndoRedo:null!==(e=t.disableDocumentWideUndoRedo)&&void 0!==e&&e}),c={cells:null!==(a=null===(s=t.data)||void 0===s?void 0:s.cells)&&void 0!==a?a:[],nbformat:null!==(o=null===(n=t.data)||void 0===n?void 0:n.nbformat)&&void 0!==o?o:4,nbformat_minor:null!==(r=null===(i=t.data)||void 0===i?void 0:i.nbformat_minor)&&void 0!==r?r:5,metadata:null!==(h=null===(d=t.data)||void 0===d?void 0:d.metadata)&&void 0!==h?h:{}};return l.fromJSON(c),l}get disableDocumentWideUndoRedo(){return this._disableDocumentWideUndoRedo}get metadata(){return this.getMetadata()}set metadata(t){this.setMetadata(t)}get metadataChanged(){return this._metadataChanged}get nbformat(){return this.ymeta.get("nbformat")}set nbformat(t){this.transact((()=>{this.ymeta.set("nbformat",t)}),!1)}get nbformat_minor(){return this.ymeta.get("nbformat_minor")}set nbformat_minor(t){this.transact((()=>{this.ymeta.set("nbformat_minor",t)}),!1)}dispose(){this.isDisposed||(this._ycells.unobserve(this._onYCellsChanged),this.ymeta.unobserveDeep(this._onMetaChanged),super.dispose())}getCell(t){return this.cells[t]}addCell(t){return this.insertCell(this._ycells.length,t)}insertCell(t,e){return this.insertCells(t,[e])[0]}insertCells(t,e){const s=e.map((t=>{const e=_(t,this);return this._ycellMapping.set(e.ymodel,e),e}));return this.transact((()=>{this._ycells.insert(t,s.map((t=>t.ymodel)))})),s.forEach((t=>{t.setUndoManager()})),s}moveCell(t,e){this.moveCells(t,e)}moveCells(t,e,s=1){const a=new Array(s).fill(!0).map(((e,s)=>this.getCell(t+s).toJSON()));this.transact((()=>{this._ycells.delete(t,s),this._ycells.insert(t>e?e:e-s+1,a.map((t=>_(t,this).ymodel)))}))}deleteCell(t){this.deleteCellRange(t,t+1)}deleteCellRange(t,e){this.transact((()=>{this._ycells.delete(t,e-t)}))}deleteMetadata(t){if(void 0===this.getMetadata(t))return;const e=this.metadata;delete e[t],this.setMetadata(e)}getMetadata(t){const e=this.ymeta.get("metadata");if(void 0!==e){if("string"==typeof t){const s=e.get(t);return void 0===s?void 0:o.JSONExt.deepCopy(s)}return o.JSONExt.deepCopy(e.toJSON())}}setMetadata(t,e){var s;if("string"==typeof t){if(void 0===e)throw new TypeError(`Metadata value for ${t} cannot be 'undefined'; use deleteMetadata.`);if(o.JSONExt.deepEqual(null!==(s=this.getMetadata(t))&&void 0!==s?s:null,e))return;const a={};a[t]=e,this.updateMetadata(a)}else if(!this.metadata||!o.JSONExt.deepEqual(this.metadata,t)){const e=o.JSONExt.deepCopy(t),s=this.ymeta.get("metadata");if(void 0===s)return;this.transact((()=>{s.clear();for(const[t,a]of Object.entries(e))s.set(t,a)}))}}updateMetadata(t){const e=o.JSONExt.deepCopy(t),s=this.ymeta.get("metadata");void 0!==s&&this.transact((()=>{for(const[t,a]of Object.entries(e))s.set(t,a)}))}fromJSON(t){this.transact((()=>{this.nbformat=t.nbformat,this.nbformat_minor=t.nbformat_minor;const e=t.metadata;if(void 0!==e.orig_nbformat&&delete e.orig_nbformat,this.metadata)this.metadata=e;else{const t=new c.Map;for(const[s,a]of Object.entries(e))t.set(s,a);this.ymeta.set("metadata",t)}const s=4===t.nbformat&&t.nbformat_minor>=5,a=t.cells.map((t=>(s||delete t.id,t)));this.insertCells(this.cells.length,a),this.deleteCellRange(0,this.cells.length)}))}toJSON(){const t=4===this.nbformat&&this.nbformat_minor<=4;return{metadata:this.metadata,nbformat_minor:this.nbformat_minor,nbformat:this.nbformat,cells:this.cells.map((e=>{const s=e.toJSON();return t&&delete s.id,s}))}}}},79504:(t,e,s)=>{s.d(e,{Dp:()=>o,G:()=>i,JJ:()=>r,Z$:()=>a,kJ:()=>d,s7:()=>n});const a=t=>t[t.length-1],n=(t,e)=>{for(let s=0;s<e.length;s++)t.push(e[s])},o=Array.from,i=(t,e)=>{for(let s=0;s<t.length;s++)if(e(t[s],s,t))return!0;return!1},r=(t,e)=>{const s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a,s);return s},d=Array.isArray},38828:(t,e,s)=>{s.d(e,{Hi:()=>r,PP:()=>o,gB:()=>d,id:()=>i});var a=s(79504),n=s(36498);const o=(t,e,s=0)=>{try{for(;s<t.length;s++)t[s](...e)}finally{s<t.length&&o(t,e,s+1)}},i=t=>t,r=(t,e)=>{if(null==t||null==e)return((t,e)=>t===e)(t,e);if(t.constructor!==e.constructor)return!1;if(t===e)return!0;switch(t.constructor){case ArrayBuffer:t=new Uint8Array(t),e=new Uint8Array(e);case Uint8Array:if(t.byteLength!==e.byteLength)return!1;for(let s=0;s<t.length;s++)if(t[s]!==e[s])return!1;break;case Set:if(t.size!==e.size)return!1;for(const s of t)if(!e.has(s))return!1;break;case Map:if(t.size!==e.size)return!1;for(const s of t.keys())if(!e.has(s)||!r(t.get(s),e.get(s)))return!1;break;case Object:if(n.kE(t)!==n.kE(e))return!1;for(const s in t)if(!n.l$(t,s)||!r(t[s],e[s]))return!1;break;case Array:if(t.length!==e.length)return!1;for(let s=0;s<t.length;s++)if(!r(t[s],e[s]))return!1;break;default:return!1}return!0},d=(t,e)=>e.includes(t);a.kJ},22592:(t,e,s)=>{s.d(e,{JG:()=>n,UI:()=>i,Ue:()=>a,Yj:()=>r,Yu:()=>o});const a=()=>new Map,n=t=>{const e=a();return t.forEach(((t,s)=>{e.set(s,t)})),e},o=(t,e,s)=>{let a=t.get(e);return void 0===a&&t.set(e,a=s()),a},i=(t,e)=>{const s=[];for(const[a,n]of t)s.push(e(n,a));return s},r=(t,e)=>{for(const[s,a]of t)if(e(a,s))return!0;return!1}},11182:(t,e,s)=>{s.d(e,{Fp:()=>i,GR:()=>r,GW:()=>a,VV:()=>o,Wn:()=>n});const a=Math.floor,n=(Math.ceil,Math.abs),o=(Math.imul,Math.round,Math.log10,Math.log2,Math.log,Math.sqrt,(t,e)=>t<e?t:e),i=(t,e)=>t>e?t:e,r=(Number.isNaN,Math.pow,Math.sign,t=>0!==t?t<0:1/t<0)},36498:(t,e,s)=>{s.d(e,{$m:()=>h,Ed:()=>o,f0:()=>a,kE:()=>i,l$:()=>d,xb:()=>r});const a=Object.assign,n=Object.keys,o=(t,e)=>{for(const s in t)e(t[s],s)},i=t=>n(t).length,r=t=>{for(const e in t)return!1;return!0},d=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),h=(t,e)=>t===e||i(t)===i(e)&&((t,e)=>{for(const s in t)if(!e(t[s],s))return!1;return!0})(t,((t,s)=>(void 0!==t||d(e,s))&&e[s]===t))},12330:(t,e,s)=>{s.d(e,{y:()=>i});var a=s(22592),n=s(79287),o=s(79504);class i{constructor(){this._observers=a.Ue()}on(t,e){a.Yu(this._observers,t,n.Ue).add(e)}once(t,e){const s=(...a)=>{this.off(t,s),e(...a)};this.on(t,s)}off(t,e){const s=this._observers.get(t);void 0!==s&&(s.delete(e),0===s.size&&this._observers.delete(t))}emit(t,e){return o.Dp((this._observers.get(t)||a.Ue()).values()).forEach((t=>t(...e)))}destroy(){this._observers=a.Ue()}}},79287:(t,e,s)=>{s.d(e,{Ue:()=>a});const a=()=>new Set},2431:(t,e,s)=>{s.d(e,{ZG:()=>a});const a=Date.now}}]);
//# sourceMappingURL=35.56a0654.js.map