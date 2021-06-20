export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'URL',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'colour',
      title: 'Colour',
      type: 'string',
      options: {
        list: [
          'red',
          'orange',
          'yellow',
          'olive',
          'green',
          'teal',
          'blue',
          'violet',
          'purple',
          'pink',
          'brown',
          'grey',
          'black',
        ],
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
};
