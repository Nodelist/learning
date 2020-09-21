# HTML

-   ## html5 语义化标签

# JavaScript

-   ## 数据类型
    -   **基本数据类型：** `string, number, Boolean, undefined, null, symbol`
    -   **引用类型:** `object`
-   ## 浅拷贝与深拷贝
-   ## Ajax

# CSS

-   ## 盒子模型

-   ## 选择器

-   ## display

    -   ### display: none 与 visibility: hidden

        -   区别：
        -   重绘与回流

-   ## position

-   ## BFC

# Vue Router

# Vuex

> 每一个 Vuex 应用的核心就是 store（仓库）

### Vuex 与单纯的全局对象有以下两点不同：

1. Vuex 的状态存储是响应式的。当 Vue 组件在 store 中读取状态时，若 store 中的状态发生变化，那么相应的组件也会相应的得到高效更新。
2. 不能直接改变 store 中的状态。改变 store 中状态的唯一路径就是显式地 **提交（commit） `mutation`**, \*\*这样做的目的是我们需要明确地追踪到状态的变化

### 创建简单的 store

```javascript
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
    },
    mutations: {
        increment(state) {
            state.count++;
        },
    },
});

// 通过 store.state 来获取状态对象
console.log(store.state.count); // 0
// 通过 store.commit 方法触发状态变更
store.commit("increment");
console.log(store.state.count); // 1
```

为了在 Vue 组建中访问 `this.$store` prototype, 需要为 Vue 示例创建好的 store。Vuex 提供了一个从根组件向所有子组件，以 `store` 选项的方式“注入”该 store 的机制：

```js
new Vue({
    el: "#app",
    store: store,
    // 使用 ES6
    store,
});
```

由于 store 中的状态是响应式的，在组件中调用 store 中的状态简单到仅需要在计算属性中返回即可。触发变化也仅仅是在组件的 methods 中提交 mutation。

### 1. State

> 单一状态树

### 2. Getter

> 可以认为是 store 的计算属性

### 3. Matation

> 类似于事件

### 4. Action

### 5. Module

# HTTP

### 状态码

-   `**100 (Continue):**` 这个临时响应表明，迄今为止所有的响应都是可行的，客户端应该继续请求，如果已经完成则继续请求。
-   `101 (Switching Protocol):` 此代码是响应客户端的`Upgrade`标头发送的，并且指示服务器也正在切换的协议。
-   `102 (Processing):` 此代码表示服务已收到并正在处理该请求，但没有响应可用。
-   `103 (Early Hints):` 此状态代码主要用于与`Link`链接头一起使用，以允许用户代理在服务器仍在准备响应时预加载资源。
+

#### 信息响应，服务器收到请求，需要请求者继续执行操作

-   `200(OK):` 请求成功。成功的含义取决于 HTTP 方法：
    -   GET： 资源已被提取并在消息正文中传输。
    -   HEAD: 实体标头位于消息正文中。
    -   POST：描述动作结果的资源在消息体中传输。
    -   TRACE：消息正文包含服务器收到的请求信息。
-   `201(Created):` 该请求已成功，并因此创建了一个新资源。这通常是在 POST 请求，或是某些 PUT 请求之后返回的响应。
-   `202(Accepted):` 请求已经接收到，但还未响应，没有结果。意味着不会有一个异步的响应去表明当前请求的结果，预期另外的进程和服务去处理请求，或者批处理。

#### 成功响应，操作被成功接收并处理

#### 重定向，需要进一步的操作以完成请求

#### 客户端响应，请求包含语法错误或无法完成请求

#### 服务端响应，服务器在处理请求的过程中发生了错误
