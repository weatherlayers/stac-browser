"use strict";(self["webpackChunk_radiantearth_stac_browser"]=self["webpackChunk_radiantearth_stac_browser"]||[]).push([[68],{8068:function(t,o,r){r.r(o),r.d(o,{default:function(){return u}});var n=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("b-button",t._b({attrs:{variant:t.copyColor,title:"Copy"},on:{click:t.copy}},"b-button",t.buttonProps,!1),[r(t.copyIcon,{tag:"component"}),t._t("default")],2)},e=[],c=r(8019),i={name:"CopyButton",components:{BIconClipboard:c.O48,BIconClipboardCheck:c.bEK},props:{copyText:{type:String,required:!0},variant:{type:String,default:"primary"},buttonProps:{type:Object,default:()=>({})}},data(){return{copyConfirm:!1}},computed:{copyColor(){return this.copyConfirm?this.variant.startsWith("outline-")?"outline-success":"success":this.variant},copyIcon(){return this.copyConfirm?"b-icon-clipboard-check":"b-icon-clipboard"}},methods:{copy(){this.copyConfirm=!0,this.$clipboard(this.copyText),setTimeout((()=>this.copyConfirm=!1),2500)}}},a=i,p=r(1001),s=(0,p.Z)(a,n,e,!1,null,null,null),u=s.exports}}]);
//# sourceMappingURL=68.4789ea27.js.map