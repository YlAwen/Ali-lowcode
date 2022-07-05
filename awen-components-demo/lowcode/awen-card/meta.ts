import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const AwenCardMeta: ComponentMetadata = {
  componentName: 'AwenCard',
  title: 'AwenCard',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  group: 'Awen组件',
  category: '卡片',
  description: 'awen自定义组件',
  icon: 'https://www.ylawen.com/docs/assets/img/Logo.png',
  npm: {
    package: 'awen-components-demo',
    version: '0.1.0',
    exportName: 'AwenCard',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'title',
            'zh-CN': '标题',
          },
        },
        name: 'title',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'description',
            'zh-CN': '提示信息',
          },
        },
        name: 'description',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'btnInfo',
            'zh-CN': '按钮文本',
          },
        },
        name: 'btnInfo',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'href',
            'zh-CN': '跳转地址',
          },
        },
        name: 'href',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '',
        },
      },
    ],
    supports: {
      style: true,
    },
    component: {},
  },
};
const snippets: Snippet[] = [
  {
    title: 'AwenCard',
    screenshot: 'https://www.ylawen.com/docs/assets/img/Logo.png',
    schema: {
      componentName: 'AwenCard',
      props: {
        title: 'title',
        description: 'description',
        btnInfo: 'detail',
        href: 'https://www.ylawen.com/',
      },
    },
  },
];

export default {
  ...AwenCardMeta,
  snippets,
};
