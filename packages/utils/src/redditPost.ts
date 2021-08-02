import { IPost } from '@zachtball/reddit-types';

export const getPostType = ({ post_hint, domain }: Partial<IPost>): 'text' | 'image' | 'link' | 'video' | 'self' => {
  if (post_hint) {
    switch (post_hint) {
      case 'link':
        return 'link';
      case 'image':
        return 'image';
      case 'hosted:video':
        return 'video';
      case 'rich:video':
        return 'video';
    }
  }
  if (!domain?.startsWith('self.')) return 'link';
  return 'self';
};
