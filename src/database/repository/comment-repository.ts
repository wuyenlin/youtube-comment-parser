import { dataSource } from '../data-source';
import { Comment } from '../../entity';

export const commentRepository = dataSource.getRepository(Comment);

export type CommentRepository = typeof commentRepository;
