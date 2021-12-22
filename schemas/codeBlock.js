export default {
  name: 'codeBlock',
  title: 'Code Block',
  type: 'object',
  fields: [
    {
      name: 'code',
      title: 'Code',
      type: 'text',
    },
    {
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: ['JS', 'Python', 'HTML', 'CSS', 'C++', 'Typescript'],
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    
  ],
};
