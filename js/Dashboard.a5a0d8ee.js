(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Dashboard"],{1846:function(e,t,i){},"2ca0":function(e,t,i){"use strict";var s=i("23e7"),n=i("06cf").f,a=i("50c4"),r=i("5a34"),d=i("1d80"),o=i("ab13"),h=i("c430"),c="".startsWith,l=Math.min,p=o("startsWith"),u=!h&&!p&&!!function(){var e=n(String.prototype,"startsWith");return e&&!e.writable}();s({target:"String",proto:!0,forced:!u&&!p},{startsWith:function(e){var t=String(d(this));r(e);var i=a(l(arguments.length>1?arguments[1]:void 0,t.length)),s=String(e);return c?c.call(t,s,i):t.slice(i,i+s.length)===s}})},"6ca7":function(e,t,i){},7277:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("v-toolbar",{staticClass:"primary",attrs:{flat:"",dense:"",dark:""}},[i("router-link",{attrs:{to:"/"}},[i("v-toolbar-title",{staticClass:"white--text"},[e._v(" AIDA ")])],1),i("v-spacer"),i("v-toolbar-items",[i("v-btn",{attrs:{icon:"",to:"/dashboard"}},[i("v-icon",[e._v(" mdi-apps ")])],1),i("v-btn",{attrs:{icon:"",href:"https://github.com/alanaberdeen/AIDA/wiki"}},[i("v-icon",[e._v(" mdi-book-open-outline ")])],1)],1)],1),i("v-container",{attrs:{fluid:""}},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:"",sm10:"","offset-sm1":""}},[i("Treeview")],1)],1)],1)],1)},n=[],a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",{staticClass:"mx-auto"},[i("v-sheet",{staticClass:"pa-3 primary lighten-2"},[i("v-text-field",{attrs:{label:"Search for an image",dark:"",flat:"","solo-inverted":"","hide-details":"",clearable:"","clear-icon":"mdi-close-circle-outline"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),i("v-checkbox",{attrs:{dark:"","hide-details":"",label:"Case sensitive search"},model:{value:e.caseSensitive,callback:function(t){e.caseSensitive=t},expression:"caseSensitive"}})],1),i("v-card-text",[i("v-treeview",{attrs:{open:e.open,items:e.loadItems,"load-children":e.readDir,search:e.search,filter:e.filter,"item-key":"name"},scopedSlots:e._u([{key:"prepend",fn:function(t){var s=t.item,n=t.open;return[s.children?i("v-icon",[e._v(" "+e._s(n?"mdi-folder-open":"mdi-folder")+" ")]):i("v-icon",[e._v(" "+e._s(e.files[s.ext]||e.filesDefault)+" ")])]}},{key:"label",fn:function(t){var s=t.item;return[e.isLoadable(s)?i("router-link",{attrs:{to:{name:"loading",params:{filePath:s.path}}}},[e._v(" "+e._s(s.name)+" ")]):e.isLoadable(s)||s.children?i("span",[e._v(" "+e._s(s.name)+" ")]):i("span",{staticClass:"grey--text"},[e._v(" "+e._s(s.name)+" ")])]}}]),model:{value:e.tree,callback:function(t){e.tree=t},expression:"tree"}})],1)],1)},r=[],d=(i("caad"),i("c975"),i("d3b7"),i("2532"),i("2ca0"),i("277d"),i("6b75"));function o(e){if(Array.isArray(e))return Object(d["a"])(e)}i("a4d3"),i("e01a"),i("d28b"),i("a630"),i("3ca3"),i("ddb0");function h(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}var c=i("06c5");function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(e){return o(e)||h(e)||Object(c["a"])(e)||l()}i("96cf");var u=i("1da1"),m={data:function(){return{files:{".html":"mdi-language-html5",".js":"mdi-nodejs",".json":"mdi-code-json",".md":"mdi-markdown",".pdf":"mdi-file-pdf",".png":"mdi-file-image",".txt":"mdi-file-document-outline",".xls":"mdi-file-excel",".dzi":"mdi-layers-triple",".tif":"mdi-layers-triple",".tiff":"mdi-layers-triple",".czi":"mdi-layers-triple",".dcm":"mdi-layers-triple",".dicom":"mdi-layers-triple",".ndpi":"mdi-layers-triple",".qptiff":"mdi-layers-triple",".scn":"mdi-layers-triple",".svs":"mdi-layers-triple",".vsi":"mdi-layers-triple",".jp2":"mdi-layers-triple",".j2k":"mdi-layers-triple",".jpg":"mdi-file-image",".JPG":"mdi-file-image",".jpeg":"mdi-file-image"},filesDefault:"mdi-file-document-outline",loadableImageTypes:[".tif",".tiff",".czi",".dcm",".dicom",".ndpi",".qptiff",".scn",".svs",".vsi",".jp2",".j2k",".dzi",".png",".jpg",".jpeg",".json",".JPG"],tree:[],open:["public"],search:null,caseSensitive:!1,items:[]}},created:function(){var e=this;fetch("".concat(location.origin,"/checkForImagesAndProjects"),{method:"post",headers:{Accept:"application/json","Content-Type":"text/plain"},body:""}).then((function(e){return e.json()})).then((function(t){e.items=t}))},computed:{filter:function(){return this.caseSensitive?function(e,t,i){return e[i].indexOf(t)>-1}:void 0},loadItems:function(){return this.items}},methods:{readDir:function(e){return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(location.origin,"/checkForImagesAndProjects"),{method:"post",headers:{Accept:"application/json","Content-Type":"text/plain"},body:e.path}).then((function(e){return e.json()})).then((function(t){var i;return(i=e.children).push.apply(i,p(t))})));case 1:case"end":return t.stop()}}),t)})))()},isLoadable:function(e){return this.loadableImageTypes.includes(e.ext)&&!e.path.startsWith("annotations")}}},v=m,f=(i("9470"),i("2877")),b=i("6544"),g=i.n(b),C=i("b0af"),y=i("99d9"),S=(i("6ca7"),i("ec29"),i("9d26")),O=i("c37a"),I=i("fe09"),w=I["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...O["a"].options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(e){this.$nextTick(()=>this.inputIndeterminate=e)},inputIndeterminate(e){this.$emit("update:indeterminate",e)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(S["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...this.attrs$,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}}),j=i("132d"),x=i("8dd9"),k=i("8654"),A=(i("fa9e"),i("0789")),_=i("3206"),T=i("a9ad"),$=i("58df"),E=i("80d2");const L=Object($["a"])(T["a"],Object(_["a"])("treeview")),P={activatable:Boolean,activeClass:{type:String,default:"v-treeview-node--active"},color:{type:String,default:"primary"},expandIcon:{type:String,default:"$subgroup"},indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},itemChildren:{type:String,default:"children"},itemDisabled:{type:String,default:"disabled"},itemKey:{type:String,default:"id"},itemText:{type:String,default:"name"},loadChildren:Function,loadingIcon:{type:String,default:"$loading"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"},openOnClick:Boolean,rounded:Boolean,selectable:Boolean,selectedColor:{type:String,default:"accent"},shaped:Boolean,transition:Boolean,selectionType:{type:String,default:"leaf",validator:e=>["leaf","independent"].includes(e)}},V=L.extend().extend({name:"v-treeview-node",inject:{treeview:{default:null}},props:{level:Number,item:{type:Object,default:()=>null},parentIsDisabled:Boolean,...P},data:()=>({hasLoaded:!1,isActive:!1,isIndeterminate:!1,isLoading:!1,isOpen:!1,isSelected:!1}),computed:{disabled(){return Object(E["m"])(this.item,this.itemDisabled)||this.parentIsDisabled&&"leaf"===this.selectionType},key(){return Object(E["m"])(this.item,this.itemKey)},children(){const e=Object(E["m"])(this.item,this.itemChildren);return e&&e.filter(e=>!this.treeview.isExcluded(Object(E["m"])(e,this.itemKey)))},text(){return Object(E["m"])(this.item,this.itemText)},scopedProps(){return{item:this.item,leaf:!this.children,selected:this.isSelected,indeterminate:this.isIndeterminate,active:this.isActive,open:this.isOpen}},computedIcon(){return this.isIndeterminate?this.indeterminateIcon:this.isSelected?this.onIcon:this.offIcon},hasChildren(){return!!this.children&&(!!this.children.length||!!this.loadChildren)}},created(){this.treeview.register(this)},beforeDestroy(){this.treeview.unregister(this)},methods:{checkChildren(){return new Promise(e=>{if(!this.children||this.children.length||!this.loadChildren||this.hasLoaded)return e();this.isLoading=!0,e(this.loadChildren(this.item))}).then(()=>{this.isLoading=!1,this.hasLoaded=!0})},open(){this.isOpen=!this.isOpen,this.treeview.updateOpen(this.key,this.isOpen),this.treeview.emitOpen()},genLabel(){const e=[];return this.$scopedSlots.label?e.push(this.$scopedSlots.label(this.scopedProps)):e.push(this.text),this.$createElement("div",{slot:"label",staticClass:"v-treeview-node__label"},e)},genPrependSlot(){return this.$scopedSlots.prepend?this.$createElement("div",{staticClass:"v-treeview-node__prepend"},this.$scopedSlots.prepend(this.scopedProps)):null},genAppendSlot(){return this.$scopedSlots.append?this.$createElement("div",{staticClass:"v-treeview-node__append"},this.$scopedSlots.append(this.scopedProps)):null},genContent(){const e=[this.genPrependSlot(),this.genLabel(),this.genAppendSlot()];return this.$createElement("div",{staticClass:"v-treeview-node__content"},e)},genToggle(){return this.$createElement(j["a"],{staticClass:"v-treeview-node__toggle",class:{"v-treeview-node__toggle--open":this.isOpen,"v-treeview-node__toggle--loading":this.isLoading},slot:"prepend",on:{click:e=>{e.stopPropagation(),this.isLoading||this.checkChildren().then(()=>this.open())}}},[this.isLoading?this.loadingIcon:this.expandIcon])},genCheckbox(){return this.$createElement(j["a"],{staticClass:"v-treeview-node__checkbox",props:{color:this.isSelected||this.isIndeterminate?this.selectedColor:void 0,disabled:this.disabled},on:{click:e=>{e.stopPropagation(),this.isLoading||this.checkChildren().then(()=>{this.$nextTick(()=>{this.isSelected=!this.isSelected,this.isIndeterminate=!1,this.treeview.updateSelected(this.key,this.isSelected),this.treeview.emitSelected()})})}}},[this.computedIcon])},genLevel(e){return Object(E["h"])(e).map(()=>this.$createElement("div",{staticClass:"v-treeview-node__level"}))},genNode(){const e=[this.genContent()];return this.selectable&&e.unshift(this.genCheckbox()),this.hasChildren?e.unshift(this.genToggle()):e.unshift(...this.genLevel(1)),e.unshift(...this.genLevel(this.level)),this.$createElement("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-treeview-node__root",class:{[this.activeClass]:this.isActive},on:{click:()=>{this.openOnClick&&this.hasChildren?this.checkChildren().then(this.open):this.activatable&&!this.disabled&&(this.isActive=!this.isActive,this.treeview.updateActive(this.key,this.isActive),this.treeview.emitActive())}}}),e)},genChild(e,t){return this.$createElement(V,{key:Object(E["m"])(e,this.itemKey),props:{activatable:this.activatable,activeClass:this.activeClass,item:e,selectable:this.selectable,selectedColor:this.selectedColor,color:this.color,expandIcon:this.expandIcon,indeterminateIcon:this.indeterminateIcon,offIcon:this.offIcon,onIcon:this.onIcon,loadingIcon:this.loadingIcon,itemKey:this.itemKey,itemText:this.itemText,itemDisabled:this.itemDisabled,itemChildren:this.itemChildren,loadChildren:this.loadChildren,transition:this.transition,openOnClick:this.openOnClick,rounded:this.rounded,shaped:this.shaped,level:this.level+1,selectionType:this.selectionType,parentIsDisabled:t},scopedSlots:this.$scopedSlots})},genChildrenWrapper(){if(!this.isOpen||!this.children)return null;const e=[this.children.map(e=>this.genChild(e,this.disabled))];return this.$createElement("div",{staticClass:"v-treeview-node__children"},e)},genTransition(){return this.$createElement(A["a"],[this.genChildrenWrapper()])}},render(e){const t=[this.genNode()];return this.transition?t.push(this.genTransition()):t.push(this.genChildrenWrapper()),e("div",{staticClass:"v-treeview-node",class:{"v-treeview-node--leaf":!this.hasChildren,"v-treeview-node--click":this.openOnClick,"v-treeview-node--disabled":this.disabled,"v-treeview-node--rounded":this.rounded,"v-treeview-node--shaped":this.shaped,"v-treeview-node--selected":this.isSelected},attrs:{"aria-expanded":String(this.isOpen)}},t)}});var D=V,K=i("7560"),B=i("d9bd");function W(e,t,i){const s=Object(E["m"])(e,i);return s.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}function N(e,t,i,s,n,a,r){if(e(t,i,n))return!0;const d=Object(E["m"])(t,a);if(d){let t=!1;for(let o=0;o<d.length;o++)N(e,d[o],i,s,n,a,r)&&(t=!0);if(t)return!0}return r.add(Object(E["m"])(t,s)),!1}var F=Object($["a"])(Object(_["b"])("treeview"),K["a"]).extend({name:"v-treeview",provide(){return{treeview:this}},props:{active:{type:Array,default:()=>[]},dense:Boolean,filter:Function,hoverable:Boolean,items:{type:Array,default:()=>[]},multipleActive:Boolean,open:{type:Array,default:()=>[]},openAll:Boolean,returnObject:{type:Boolean,default:!1},search:String,value:{type:Array,default:()=>[]},...P},data:()=>({level:-1,activeCache:new Set,nodes:{},openCache:new Set,selectedCache:new Set}),computed:{excludedItems(){const e=new Set;if(!this.search)return e;for(let t=0;t<this.items.length;t++)N(this.filter||W,this.items[t],this.search,this.itemKey,this.itemText,this.itemChildren,e);return e}},watch:{items:{handler(){const e=Object.keys(this.nodes).map(e=>Object(E["m"])(this.nodes[e].item,this.itemKey)),t=this.getKeys(this.items),i=Object(E["c"])(t,e);if(!i.length&&t.length<e.length)return;i.forEach(e=>delete this.nodes[e]);const s=[...this.selectedCache];this.selectedCache=new Set,this.activeCache=new Set,this.openCache=new Set,this.buildTree(this.items),Object(E["j"])(s,[...this.selectedCache])||this.emitSelected()},deep:!0},active(e){this.handleNodeCacheWatcher(e,this.activeCache,this.updateActive,this.emitActive)},value(e){this.handleNodeCacheWatcher(e,this.selectedCache,this.updateSelected,this.emitSelected)},open(e){this.handleNodeCacheWatcher(e,this.openCache,this.updateOpen,this.emitOpen)}},created(){const e=e=>this.returnObject?Object(E["m"])(e,this.itemKey):e;this.buildTree(this.items);for(const t of this.value.map(e))this.updateSelected(t,!0,!0);for(const t of this.active.map(e))this.updateActive(t,!0)},mounted(){(this.$slots.prepend||this.$slots.append)&&Object(B["c"])("The prepend and append slots require a slot-scope attribute",this),this.openAll?this.updateAll(!0):(this.open.forEach(e=>this.updateOpen(this.returnObject?Object(E["m"])(e,this.itemKey):e,!0)),this.emitOpen())},methods:{updateAll(e){Object.keys(this.nodes).forEach(t=>this.updateOpen(Object(E["m"])(this.nodes[t].item,this.itemKey),e)),this.emitOpen()},getKeys(e,t=[]){for(let i=0;i<e.length;i++){const s=Object(E["m"])(e[i],this.itemKey);t.push(s);const n=Object(E["m"])(e[i],this.itemChildren);n&&t.push(...this.getKeys(n))}return t},buildTree(e,t=null){for(let i=0;i<e.length;i++){const s=e[i],n=Object(E["m"])(s,this.itemKey),a=Object(E["m"])(s,this.itemChildren,[]),r=this.nodes.hasOwnProperty(n)?this.nodes[n]:{isSelected:!1,isIndeterminate:!1,isActive:!1,isOpen:!1,vnode:null},d={vnode:r.vnode,parent:t,children:a.map(e=>Object(E["m"])(e,this.itemKey)),item:s};if(this.buildTree(a,n),!this.nodes.hasOwnProperty(n)&&null!==t&&this.nodes.hasOwnProperty(t)?d.isSelected=this.nodes[t].isSelected:(d.isSelected=r.isSelected,d.isIndeterminate=r.isIndeterminate),d.isActive=r.isActive,d.isOpen=r.isOpen,this.nodes[n]=d,a.length){const{isSelected:e,isIndeterminate:t}=this.calculateState(n,this.nodes);d.isSelected=e,d.isIndeterminate=t}!this.nodes[n].isSelected||"independent"!==this.selectionType&&0!==d.children.length||this.selectedCache.add(n),this.nodes[n].isActive&&this.activeCache.add(n),this.nodes[n].isOpen&&this.openCache.add(n),this.updateVnodeState(n)}},calculateState(e,t){const i=t[e].children,s=i.reduce((e,i)=>(e[0]+=+Boolean(t[i].isSelected),e[1]+=+Boolean(t[i].isIndeterminate),e),[0,0]),n=!!i.length&&s[0]===i.length,a=!n&&(s[0]>0||s[1]>0);return{isSelected:n,isIndeterminate:a}},emitOpen(){this.emitNodeCache("update:open",this.openCache)},emitSelected(){this.emitNodeCache("input",this.selectedCache)},emitActive(){this.emitNodeCache("update:active",this.activeCache)},emitNodeCache(e,t){this.$emit(e,this.returnObject?[...t].map(e=>this.nodes[e].item):[...t])},handleNodeCacheWatcher(e,t,i,s){e=this.returnObject?e.map(e=>Object(E["m"])(e,this.itemKey)):e;const n=[...t];Object(E["j"])(n,e)||(n.forEach(e=>i(e,!1)),e.forEach(e=>i(e,!0)),s())},getDescendants(e,t=[]){const i=this.nodes[e].children;t.push(...i);for(let s=0;s<i.length;s++)t=this.getDescendants(i[s],t);return t},getParents(e){let t=this.nodes[e].parent;const i=[];while(null!==t)i.push(t),t=this.nodes[t].parent;return i},register(e){const t=Object(E["m"])(e.item,this.itemKey);this.nodes[t].vnode=e,this.updateVnodeState(t)},unregister(e){const t=Object(E["m"])(e.item,this.itemKey);this.nodes[t]&&(this.nodes[t].vnode=null)},isParent(e){return this.nodes[e].children&&this.nodes[e].children.length},updateActive(e,t){if(!this.nodes.hasOwnProperty(e))return;this.multipleActive||this.activeCache.forEach(e=>{this.nodes[e].isActive=!1,this.updateVnodeState(e),this.activeCache.delete(e)});const i=this.nodes[e];i&&(t?this.activeCache.add(e):this.activeCache.delete(e),i.isActive=t,this.updateVnodeState(e))},updateSelected(e,t,i=!1){if(!this.nodes.hasOwnProperty(e))return;const s=new Map;if("independent"!==this.selectionType){for(const a of this.getDescendants(e))Object(E["m"])(this.nodes[a].item,this.itemDisabled)&&!i||(this.nodes[a].isSelected=t,this.nodes[a].isIndeterminate=!1,s.set(a,t));const n=this.calculateState(e,this.nodes);this.nodes[e].isSelected=t,this.nodes[e].isIndeterminate=n.isIndeterminate,s.set(e,t);for(const t of this.getParents(e)){const e=this.calculateState(t,this.nodes);this.nodes[t].isSelected=e.isSelected,this.nodes[t].isIndeterminate=e.isIndeterminate,s.set(t,e.isSelected)}}else this.nodes[e].isSelected=t,this.nodes[e].isIndeterminate=!1,s.set(e,t);for(const[n,a]of s.entries())this.updateVnodeState(n),"leaf"===this.selectionType&&this.isParent(n)||(!0===a?this.selectedCache.add(n):this.selectedCache.delete(n))},updateOpen(e,t){if(!this.nodes.hasOwnProperty(e))return;const i=this.nodes[e],s=Object(E["m"])(i.item,this.itemChildren);s&&!s.length&&i.vnode&&!i.vnode.hasLoaded?i.vnode.checkChildren().then(()=>this.updateOpen(e,t)):s&&s.length&&(i.isOpen=t,i.isOpen?this.openCache.add(e):this.openCache.delete(e),this.updateVnodeState(e))},updateVnodeState(e){const t=this.nodes[e];t&&t.vnode&&(t.vnode.isSelected=t.isSelected,t.vnode.isIndeterminate=t.isIndeterminate,t.vnode.isActive=t.isActive,t.vnode.isOpen=t.isOpen)},isExcluded(e){return!!this.search&&this.excludedItems.has(e)}},render(e){const t=this.items.length?this.items.filter(e=>!this.isExcluded(Object(E["m"])(e,this.itemKey))).map(e=>{const t=D.options.methods.genChild.bind(this);return t(e,Object(E["m"])(e,this.itemDisabled))}):this.$slots.default;return e("div",{staticClass:"v-treeview",class:{"v-treeview--hoverable":this.hoverable,"v-treeview--dense":this.dense,...this.themeClasses}},t)}}),z=Object(f["a"])(v,a,r,!1,null,"3227b78b",null),J=z.exports;g()(z,{VCard:C["a"],VCardText:y["a"],VCheckbox:w,VIcon:j["a"],VSheet:x["a"],VTextField:k["a"],VTreeview:F});var R={components:{Treeview:J}},q=R,G=i("8336"),M=i("a523"),H=i("0e8f"),Q=i("a722"),U=i("2fa4"),X=i("71d9"),Y=i("2a7f"),Z=Object(f["a"])(q,s,n,!1,null,null,null);t["default"]=Z.exports;g()(Z,{VBtn:G["a"],VContainer:M["a"],VFlex:H["a"],VIcon:j["a"],VLayout:Q["a"],VSpacer:U["a"],VToolbar:X["a"],VToolbarItems:Y["a"],VToolbarTitle:Y["b"]})},9470:function(e,t,i){"use strict";var s=i("1846"),n=i.n(s);n.a},"99d9":function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));var s=i("b0af"),n=i("80d2");const a=Object(n["i"])("v-card__actions"),r=Object(n["i"])("v-card__subtitle"),d=Object(n["i"])("v-card__text"),o=Object(n["i"])("v-card__title");s["a"]},c975:function(e,t,i){"use strict";var s=i("23e7"),n=i("4d64").indexOf,a=i("a640"),r=i("ae40"),d=[].indexOf,o=!!d&&1/[1].indexOf(1,-0)<0,h=a("indexOf"),c=r("indexOf",{ACCESSORS:!0,1:0});s({target:"Array",proto:!0,forced:o||!h||!c},{indexOf:function(e){return o?d.apply(this,arguments)||0:n(this,e,arguments.length>1?arguments[1]:void 0)}})},fa9e:function(e,t,i){}}]);
//# sourceMappingURL=Dashboard.a5a0d8ee.js.map