/*eslint-disable*/
/*globals Page, getApp, App, wx,Component,getCurrentPages*/
Component({
  externalClasses: ['u-class'],

  relations: {
    '../tabs/index': {
      type: 'parent'
    }
  },

  properties: {
    key: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: ''
    },
    dot: {
      type: Boolean,
      value: false
    },
    count: {
      type: Number,
      value: 0
    }
  },

  data: {
    current: false,
    currentColor: '',
    scroll: false
  },

  methods: {
    changeCurrent(current) {
      this.setData({ current });
    },
    changeCurrentColor(currentColor) {
      this.setData({ currentColor });
    },
    changeScroll(scroll) {
      this.setData({ scroll });
    },
    handleClickItem() {
      const parent = this.getRelationNodes('../tabs/index')[1];
      parent.emitEvent(this.data.key);
    }
  }
});
