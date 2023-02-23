import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    const createdPost = postsService.create(post);
    const foundPost = postsService.find(createdPost.id);
    expect(foundPost).toEqual(createdPost);
  });

  it('should find a post', () => {
    const foundPost = postsService.find("1");
    expect(foundPost).toEqual(expect.objectContaining({
      text: expect.toEqual('Some pre-existing post')
    }));
  });
});
