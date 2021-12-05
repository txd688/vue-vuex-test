let Vue;
class Store {
  constructor(options) {
    // 响应式处理数据
    this._vm = new Vue({
      data: {
        $$state: options.state,
      },
    });
    this._mutations = options.mutations;
    this._actions = options.actions;
    this.commit = this.commit.bind(this);
    this.dispatch = this.dispatch.bind(this);
  }
  get state() {
    return this._vm._data.$$state;
  }
  set state(v) {
    console.error("请重置状态");
  }
  commit(type, payload) {
    const mutation = this._mutations[type];
    if (!mutation) {
      console.error("函数不存在");
      return;
    }
    mutation(this.state, payload);
  }
  dispatch(type, payload) {
    const action = this._actions[type];
    if (!action) {
      console.error("函数不存在");
      return;
    }
    action(this, payload);
  }
}
function install(_Vue) {
  Vue = _Vue;
  // 注册store
  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    },
  });
}
export default { Store, install };
