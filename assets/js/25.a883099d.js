(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{236:function(e,t,v){"use strict";v.r(t);var a=v(2),s=Object(a.a)({},function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"_0-3-x-迁移指南"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_0-3-x-迁移指南","aria-hidden":"true"}},[e._v("#")]),e._v(" 0.3.x 迁移指南")]),e._v(" "),v("h2",{attrs:{id:"what-s-new"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#what-s-new","aria-hidden":"true"}},[e._v("#")]),e._v(" What's new")]),e._v(" "),v("p",[v("code",[e._v("0.3.x")]),e._v(" 版本最主要的更新是去掉运行时中 Vue 渲染和更新过程生成 VNode 和 patch 的过程，使得运行时无需创建 VNode 以及进行 VNode 的 DIFF，从而大幅提升了运行时性能，因为去除了 VNode，也简化了 Vue 的 render 函数，从而减小了包大小。对于 H5 的构建流程和运行时架构也进行了简化和重构，便于扩展新的功能。")]),e._v(" "),v("p",[e._v("其他的更新或 Bug 修复：")]),e._v(" "),v("h3",{attrs:{id:"features"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[e._v("#")]),e._v(" Features")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("core:")]),e._v(" 支持从 "),v("code",[e._v("@marsjs/core")]),e._v(" 导出 "),v("code",[e._v("$platform")]),e._v("/"),v("code",[e._v("config")])]),e._v(" "),v("li",[v("strong",[e._v("core:")]),e._v(" 支持通过运行时 "),v("code",[e._v("config")]),e._v(" 配置 H5 路由 "),v("code",[e._v("mode")]),e._v("/"),v("code",[e._v("base")])]),e._v(" "),v("li",[v("strong",[e._v("core:")]),e._v(" 增加 TypeScript 类型定义")]),e._v(" "),v("li",[v("strong",[e._v("build:")]),e._v(" 组件名支持 PascalCase")]),e._v(" "),v("li",[v("strong",[e._v("build:")]),e._v(" 模版中支持使用模版字符串")]),e._v(" "),v("li",[v("strong",[e._v("build:")]),e._v(" 引入 SFC 组件时，支持 "),v("code",[e._v("*.vue")]),e._v(" 后缀写法")]),e._v(" "),v("li",[v("strong",[e._v("build:")]),e._v(" SFC script 导出支持 "),v("code",[e._v("Vue.extend()")]),e._v(" 写法")]),e._v(" "),v("li",[v("strong",[e._v("cli & cli-template:")]),e._v(" 支持跳过 Mars 编译用直接 serve H5 dest 目录")])]),e._v(" "),v("h3",{attrs:{id:"bug-fixes"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#bug-fixes","aria-hidden":"true"}},[e._v("#")]),e._v(" Bug Fixes")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("build:")]),e._v(" 修复 v-for 中的过滤器和复杂表达式取值错误")]),e._v(" "),v("li",[v("strong",[e._v("build:")]),e._v(" 修复 v-on 中事件参数绑定 scoped 变量错误")]),e._v(" "),v("li",[v("strong",[e._v("build:")]),e._v(" 修复 config 合并策略")]),e._v(" "),v("li",[v("strong",[e._v("cli & cli-template:")]),e._v(" 修复 serve 自定义 H5 dest 目录时 path 错误")])]),e._v(" "),v("h2",{attrs:{id:"是否兼容"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#是否兼容","aria-hidden":"true"}},[e._v("#")]),e._v(" 是否兼容")]),e._v(" "),v("p",[v("code",[e._v("0.3.x")]),e._v(" 版本与 "),v("code",[e._v("0.2.x")]),e._v(" 版本在开发规范层面完全兼容，但是由于 "),v("code",[e._v("0.3.x")]),e._v(" 重构了运行时，在一些功能特性上有较小的差异和注意点需要检查。")]),e._v(" "),v("p",[e._v("1、computed")]),e._v(" "),v("p",[v("code",[e._v("0.2.x")]),e._v(" 版本为了优化小程序初始渲染时能获取到 computed 值，进行了一些变通的处理，因为这些处理方法依赖预先创建完整的 Vue 组件树，以及会有一些性能开销。在 "),v("code",[e._v("0.3.x")]),e._v(" 中，我们移除了对 computed 值的特殊处理，你需要检查是否依赖 computed 值的初始获取。")]),e._v(" "),v("p",[e._v("2、小程序 attached 生命周期")]),e._v(" "),v("p",[v("code",[e._v("0.3.x")]),e._v(" 中组件对应的 vue 实例创建时机统一到小程序的 "),v("code",[e._v("lifetimes.attached")]),e._v(" 生命周期，导致在 swan 的 lifetimes.created 生命周期中将无法通过 this 获取到 vue 实例，"),v("code",[e._v("lifetimes.created")]),e._v(" 中 "),v("code",[e._v("this")]),e._v(" 中仅可以访问 "),v("code",[e._v("$api")]),e._v(" 和 "),v("code",[e._v("$mp.scope")]),e._v(" （指向小程序组件实例）属性。如果有在 "),v("code",[e._v("lifetimes.created")]),e._v(" 生命周期中通过 "),v("code",[e._v("this")]),e._v(" 获取和操作 vue 实例，需要将逻辑迁移至小程序的 "),v("code",[e._v("lifetimes.attached")]),e._v(" 或者 vue 的 "),v("code",[e._v("created")]),e._v(" 生命周期。")]),e._v(" "),v("p",[e._v("3、事件绑定参数传递")]),e._v(" "),v("p",[v("code",[e._v("0.3.x")]),e._v(" 在事件绑定中绑定参数时，"),v("code",[e._v("$event")]),e._v(" 参数只支持作为单独的参数绑定，不支持将 "),v("code",[e._v("$event")]),e._v(" 放在数组或对象字面量中。例如：")]),e._v(" "),v("div",{staticClass:"language-html extra-class"},[v("pre",{pre:!0,attrs:{class:"language-html"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[e._v("\x3c!-- 支持 --\x3e")]),e._v("\n"),v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("Component")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("@change")]),v("span",{pre:!0,attrs:{class:"token attr-value"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("handle($event, otherArg, {otherArg})"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("/>")])]),e._v("\n\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[e._v("\x3c!-- 不支持 将获取不到 $event --\x3e")]),e._v("\n"),v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("Component")]),e._v(" "),v("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("@change")]),v("span",{pre:!0,attrs:{class:"token attr-value"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("handle({$event, otherArg}, otherArg)"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("/>")])]),e._v("\n")])])]),v("p",[e._v("4、npm 引入的 UI 组件库以及组件库作者")]),e._v(" "),v("p",[e._v("如果有使用 npm 引入的 UI 组件库，需要将组件库中的 Mars 框架升级到 "),v("code",[e._v("0.3.x")]),e._v(" 并发布新版本。")]),e._v(" "),v("h2",{attrs:{id:"如何迁移"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何迁移","aria-hidden":"true"}},[e._v("#")]),e._v(" 如何迁移")]),e._v(" "),v("p",[e._v("1、新建项目并转移业务代码")]),e._v(" "),v("p",[e._v("安装 "),v("code",[e._v("0.3.x")]),e._v(" 版本的 "),v("code",[e._v("@marsjs/cli")]),e._v("，创建一个新项目，然后将业务代码和配置文件合并转移到项目中。")]),e._v(" "),v("p",[e._v("2、从现有项目迁移")]),e._v(" "),v("ul",[v("li",[e._v("升级全局和本地安装的 "),v("code",[e._v("@marsjs/cli")]),e._v(" 版本到 "),v("code",[e._v("0.3.x")])]),e._v(" "),v("li",[e._v("升级本地的 "),v("code",[e._v("@marsjs/core")]),e._v(" "),v("code",[e._v("@marsjs/build")]),e._v(" 版本到 "),v("code",[e._v("0.3.x")])]),e._v(" "),v("li",[e._v("升级本地的 "),v("code",[e._v("@marsjs/cli-template")]),e._v(" 版本到 "),v("code",[e._v("0.3.x")]),e._v(" （H5 项目）")])])])},[],!1,null,null,null);t.default=s.exports}}]);