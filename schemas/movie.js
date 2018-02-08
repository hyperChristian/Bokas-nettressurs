export default {
  name: 'movie',
  title: 'Movie',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      required: true
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        auto: true
      }
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'blockContent'
    },
    {
      name: 'releaseDate',
      title: 'Release date',
      type: 'datetime'
    },
    {
      name: 'externalId',
      title: 'External ID',
      type: 'number'
    },
    {
      name: 'popularity',
      title: 'Popularity',
      type: 'number'
    },
    {
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'castMembers',
      title: 'Cast Members',
      type: 'array',
      of: [{type: 'castMember'}]
    },
    {
      name: 'crewMembers',
      title: 'Crew Members',
      type: 'array',
      of: [{type: 'crewMember'}]
    }
  ],

  preview: {
    select: {
      title: 'title',
      date: 'releaseDate',
      imageUrl: 'poster.asset.url',
      castName0: 'castMembers.0.person.name',
      castName1: 'castMembers.1.person.name'
    },
    prepare(selection) {

      const year = selection.date && selection.date.split('-')[0]
      const cast = [selection.castName0, selection.castName1].filter(Boolean).join(', ')

      return {
        title: `${selection.title} ${year ? `(${year})` : ''}`,
        date: selection.date,
        subtitle: cast,
        imageUrl: selection.imageUrl
      }
    }
  }
}