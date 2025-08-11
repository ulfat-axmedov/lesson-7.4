export class CreateCommentDto {
  readonly text: string;
  readonly postId: number;
  readonly userId?: number;
}
