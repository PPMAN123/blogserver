export default {
  name: 'pollCount',
  title: 'Poll Count',
  type: 'document',
  preview: {
    select: {
      pollName: 'poll.title',
    },
    prepare(selection) {
      return {
        title: selection.pollName,
      };
    },
  },
  fields: [
    {
      name: 'poll',
      title: 'Poll',
      type: 'reference',
      to: [{ type: 'poll' }],
    },
    {
      name: 'votes',
      title: 'Votes',
      type: 'array',
      of: [{ type: 'number' }],
    },
  ],
};
