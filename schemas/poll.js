export default {
  name: 'poll',
  title: 'Poll',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'options',
      title: 'Options',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'votes',
      title: 'Votes',
      type: 'pollCount',
    },
  ],
};
