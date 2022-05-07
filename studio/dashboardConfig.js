export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6275e7ee78de7a23eae29195',
                  title: 'Sanity Studio',
                  name: 'randrlab-11-ty-blog-studio',
                  apiId: 'fc2916de-1bb4-4725-9383-8ae1d89ef378'
                },
                {
                  buildHookId: '6275e7ee5dcde4262a6bec06',
                  title: 'Blog Website',
                  name: 'randrlab-11-ty-blog',
                  apiId: 'ec307e9f-8c21-41d8-b6c6-283ec7212d03'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/madihy/randrlab_11ty_blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://randrlab-11-ty-blog.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
