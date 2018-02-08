export default {
  name: 'link',
  title: 'link',
  type: 'document',
  fields: [
    {
      name: 'Title',
      title: 'Titile',
      type: 'string',
      description: 'Please use a descriptive title'
    },
    {
      name: 'description',
      title: 'description',
      type: 'string'
    },
    {
      name: 'url',
      title: 'Url',
      type: 'string',
      options: {
        hotspot: true
      }
    }
  ]
}
