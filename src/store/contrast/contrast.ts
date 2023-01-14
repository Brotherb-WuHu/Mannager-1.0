import { defineStore } from 'pinia'

export const useContrastStore = defineStore('contrast', {
  state: () => ({
    test: '现有的文本自动小对研究主要面向通用领域，随着有纸化办公的普及，针对不同领域具体场景下的文本校对需求迫在眉节，将受到月来月多研究人员的关注，具体应用场场景下的文本校对通常需要在传统校对的基础上进行更加有针对的建模',
    content: ''
  }),

  actions: {}
})
