export default {
  name: 'section',
  title: 'Section',
  type: 'object',
  fields: [
    {
      name: 'leftContent',
      title: 'Left Content',
      type: 'blockContent',
    },
    {
      name: 'rightContent',
      title: 'Right Content',
      type: 'blockContent',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: ['half-half', '7-3', '6-4'],
      },
    },
  ],
};
